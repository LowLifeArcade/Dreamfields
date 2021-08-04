import AWS from 'aws-sdk';
import { nanoid } from 'nanoid';
import Field from '../models/field';
import Scene from '../models/scene';
import slugify from 'slugify';
import {readFileSync} from 'fs' // fs.readFileSync

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const S3 = new AWS.S3(awsConfig);

export const uploadImage = async (req, res) => {
  // console.log(req.body)
  try {
    const { image } = req.body;
    if (!image) return res.status(400).send('No Image');

    // prepare image for upload
    const base64Data = new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );

    const type = image.split(';')[0].split('/')[1];

    // image params
    const params = {
      Bucket: 'dreamfields-bucket',
      Key: `${nanoid()}.${type}`,
      Body: base64Data,
      ACL: 'public-read',
      ContentEncoding: 'base64',
      ContentType: `image/${type}`,
    };
    // upload to s3
    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        return res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {}
};

export const removeImage = async (req, res) => {
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

export const create = async (req, res) => {
  console.log('CREATE FIELD', req.body)
  // return
  try {
    const alreadyExists = await Field.findOne({
      slug: slugify(req.body.name.toLowerCase()),
    });
    if (alreadyExists) return res.status(400).send('Field is taken');

    const field = await new Field({
      slug: slugify(req.body.name),
      creator: req.user._id,
      ...req.body,
    }).save();
    res.json(field);
  } catch (err) {
    console.log(err);
    return res.status(400).send('Field creation failed. Try again.');
  }
};

export const read = async (req, res) => {
  try {
    const field = await Field.findOne({ slug: req.params.slug })
      .populate('creator', '_id name')
      .exec();
    res.json(field);
  } catch (err) {}
};

export const getScenes = async (req, res) => {
  console.log('REQ PARAMS',req.params)
  // return
  try {
    const scenes = await Scene.find({ forProject: req.params.fieldSlug })
      .populate('creator', '_id name')
      .exec();
      console.log('SCENES', scenes)
    res.json(scenes);
  } catch (err) {
    console.log(err);
  }
}

export const removeScript = async () => {
  // 
}

export const uploadScript = async (req, res) => {
  console.log('script', req.files)
  try {
    const { script } = req.files 

    !script && res.status(400).send('No Script')

    const params = {
      Bucket: 'dreamfields-bucket',
      Key: `${nanoid()}.${script.type.split('/')[1]}`,
      Body: readFileSync(script.path),
      ACL: 'public-read',
      ContentType: script.type
    }
    // upload to s3
    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err)
        res.sendStatus(400)
      }
      console.log(data)
      res.send(data)
    })
  } catch (err) {
    console.log(err)
  }
}

export const uploadVideo = async (req, res) => {

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
    }

    // upload to s3
    S3.upload(params, (err, data) => {
      if(err) {
        console.log(err)
        res.sendStatus(400)
      }
      console.log(data)
      res.send(data)
    })
  } catch (error) {
    console.log(error);
  }
};

// uploadScript,
//   removeScript,
