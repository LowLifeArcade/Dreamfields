// import AWS from 'aws-sdk';
const AWS = require('aws-sdk');
// import { nanoid } from 'nanoid';
const { nanoid } = require('nanoid');
// import Field from '../models/field';
const Board = require('../models/board');
// import Scene from '../models/scene';
const Scene = require('../models/scene');
// import slugify from 'slugify';
const slugify = require('slugify');
// import { readFileSync } from 'fs'; // fs.readFileSync
const { readFileSync } = require('fs');
// fs.readFileSync}

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const S3 = new AWS.S3(awsConfig);

exports.uploadImage = async (req, res) => {
  console.log('UPLOAD IMAGE ENDPOINT REACHED: ');
  try {
    // const { smallImage } = req.body;
    const { fullImage } = req.files;
    const { smallImage } = req.fields; // way too big
    // console.log('FULL: ',fullImage)
    // console.log('SMALL: ',smallImage)
    if (!smallImage) return res.status(400).send('No Image');

    // try {
    // prepare image for upload
    const base64DataSmall = new Buffer.from(
      smallImage.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );
    // console.log('BASE64 small conversion: ', base64DataSmall);
    // } catch (error) {
    // console.log('ERROR SMALL BASE 64')
    // }

    // console.log('FULL IMAGE: ', readFileSync(fullImage.path));
    // try {
    //   const base64DataLarge = new Buffer.from(
    //     readFileSync(fullImage.path).replace(/^data:fullImage\/\w+;base64,/, ''),
    //     'base64'
    //   );
    //   console.log('BASE64 large conversion: ',base64DataLarge);
    // } catch (error) {
    //   console.log('ERROR LARGE BASE 64')
    // }

    const smallType = smallImage.split(';')[0].split('/')[1];
    const largeType = fullImage.type.split(';')[0].split('/')[1];

    // image params
    const paramsSmall = {
      Bucket: 'dreamfields-bucket',
      Key: `${nanoid()}.${smallType}`,
      Body: base64DataSmall,
      ACL: 'public-read',
      ContentEncoding: 'base64',
      ContentType: `image/${smallType}`,
    };
    const paramsLarge = {
      Bucket: 'dreamfields-bucket',
      Key: `${nanoid()}.${largeType}`,
      Body: readFileSync(fullImage.path),
      ACL: 'public-read',
      ContentEncoding: 'base64',
      ContentType: `image/${largeType}`,
    };

    // upload to s3
    const smallData = await S3.upload(paramsSmall).promise();
    // await S3.upload(paramsSmall, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     return res.sendStatus(400);
    //   }
    //   console.log('SMALL IMAGE UPLOADED: ',data);
    //   // res.send(data);
    //   smallData = data;
    // });

    const largeData = await S3.upload(paramsLarge).promise();

    // await S3.upload(paramsLarge, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     return res.sendStatus(400);
    //   }
    //   console.log('LARGE IMAGE UPLOADED: ', data);
    //   // res.send(data);
    //   return data;
    // });
    // await console.log('smallData and largeData', smallData, largeData);
    await console.log('S3 BOARD UPLOADS: ', smallData, largeData);
    await res.json({ smallImage: smallData, fullImage: largeData });
  } catch (err) {
    console.log('ERROR UPLOADING: ', err);
  }
};

exports.removeImage = async (req, res) => {
  try {
    const { image } = req.body;
    console.log(image);
    // image params for s3
    const params = {
      Bucket: image.Bucket,
      Key: image.Key,
    };

    // send remove request to s3
    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      res.send({ ok: true });
    });
  } catch (err) {
    console.log(err);
  }
};

exports.create = async (req, res) => {
  console.log('CREATE BOARD', req.body);
  const { newBoard, image } = req.body;
  // return
  try {
    const board = await new Board({
      forScene: newBoard.forScene,
      forShot: newBoard.forShot,
      name: newBoard.name,
      artist: newBoard.artist,
      shotNumber: newBoard.shotNumber,
      slug: slugify(newBoard.name),
      smallImage: image.smallImage,
      fullImage: image.fullImage,
    }).save();

    const scene = await Scene.findByIdAndUpdate(
      board.forScene,
      {
        $push: {
          boards: {
            boardId: board._id,
            boardName: board.name,
            boardLocation: image.smallImage.Location,
          },
        },
      },
      { new: true }
    ).exec();

    await console.log('BOARD CREATED: ', board);
    await console.log('UPDATED SCENE: ', scene);

    res.json(board);
  } catch (err) {
    console.log(err);
    return res.status(400).send('Field creation failed. Try again.');
  }
};

exports.read = async (req, res) => {
  try {
    console.log('GET FIELD');
    const field = await Field.findOne({ slug: req.params.slug })
      // .populate('creator', '_id name')
      .exec();
    res.json(field);
  } catch (err) {}
};

exports.getBoards = async (req, res) => {
  console.log('GET BOARDS REACHED');
  try {
    // const { sceneId } = req.query;
    const boards = await Board.find({ forScene: req.params.sceneId }).exec();
    await console.log('BOARDS: ', boards);
    await res.json(boards);
  } catch (err) {}
};

exports.getScenes = async (req, res) => {
  try {
    const scenes = await Scene.find({ forProject: req.params.fieldSlug })
      .populate('creator', '_id name')
      .exec();
    res.json(scenes);
  } catch (err) {
    console.log(err);
  }
};

exports.removeScript = async () => {
  //
};

exports.uploadScript = async (req, res) => {
  console.log('script', req.files);
  try {
    const { script } = req.files;

    !script && res.status(400).send('No Script');

    const params = {
      Bucket: 'dreamfields-bucket',
      Key: `${nanoid()}.${script.type.split('/')[1]}`,
      Body: readFileSync(script.path),
      ACL: 'public-read',
      ContentType: script.type,
    };
    // upload to s3
    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.uploadVideo = async (req, res) => {
  try {
    const { video } = req.files;
    // console.log(video)
    !video && res.status(400).send('No video');

    const params = {
      Bucket: 'dreamfields-bucket',
      Key: `${nanoid()}.${video.type.split('/')[1]}`, // this code retruns an array by splitting the video file name like file/mov to ['file', 'mov'] then we take the second (which is index 1) and we use it to make the code with a random string from nanoid with mp4
      Body: readFileSync(video.path),
      ACL: 'public-read',
      ContentType: video.type,
    };

    // upload to s3
    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
};

// uploadScript,
//   removeScript,
