import AWS from 'aws-sdk';
import { nanoid } from 'nanoid';
import Scene from '../models/scene';
import slugify from 'slugify';
import { readFileSync } from 'fs'; // fs.readFileSync
import Field from '../models/field';

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
  // console.log('CREATE SCENE', req.body);

  // return;
  try {
    // const alreadyExists = await Scene.findOne({
    //   slug: slugify(req.body.name.toLowerCase()),
    // });

    // if (alreadyExists) return res.status(400).send('Scene aleady exists');

    const scene = await new Scene({
      slug: slugify(req.body.sceneName),
      creator: req.user._id,
      ...req.body,
    }).save();

    // { $push: { friends: friend } }
    // find field and update with new scene
    const field = await Field.findOneAndUpdate(
      { _id: scene.forProject },
      { $push: { scenes: [scene._id] } },
      { new: true }
    ).exec(
      // error handler
      (err) => {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .send('Error while updating field with new scene');
        }
      }
    );

    console.log('field updated', field);

    // Link.findOneAndUpdate({ _id: id }, updatedLink, { new: true }).exec(
    //   (err, updated) => {
    //     if (err) {
    //       return res.status(400).json({
    //         error: 'Error updating link',
    //       });
    //     }
    //     res.json(updated);
    //   }
    // );

    // console.log('SCENE SAVED', scene)
    res.json(scene);
    console.log('RESPONSE SENT');
  } catch (err) {
    console.log(err);
    return res.status(400).send('Error creating scene. Check log.');
  }
};

export const read = async (req, res) => {
  // console.log('REQ PARAMS',req.params.sceneId)
  // return
  try {
    const scene = await Scene.findOne({ _id: req.params.sceneId }).exec();
    // .populate('creator', '_id name')
    res.json(scene);
  } catch (err) {
    console.log('ERROR reading scene', err);
  }
};

export const uploadVideo = async (req, res) => {
  // console.log('UPLOAD VIDEO REQ USER ID', req.user._id);
  // console.log('UPLOAD VIDEO PARAMS', req.params.creatorId);
  // match user id with contributor id or creator id
  // if (req.user._id != req.params.creatorId) {
  //   return res.status(400).send('Unauthorized');
  // }

  // find scene from schema
  const scene = await Scene.findOne({
    _id: req.params.sceneId,
  });

  // TODO: make isContributor work 
  // const isContributor = JSON.parse(contributors).some((contributor) => {
  //   return req.user._id != contributor ? false : true;
  // });

  // if (!isCreator && !isContributor) {
  //   return res.status(400).send('Unauthorized');
  // }

  // if (!isContributor) return res.status(400).send('Unauthorized');
  const isCreator = req.user._id == req.params.creatorId; // add this in if statement after testing

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

    const scene = await Scene.findOne({ _id: req._id });
  } catch (error) {
    console.log(error);
  }
};

export const removeVideo = async (req, res) => {
  if (req.user._id != req.params.creatorId) {
    return res.status(400).send('Unauthorized');
  }
  try {
    const video = req.body;
    !video && res.status(400).send('No video');

    const params = {
      Bucket: video.Bucket,
      Key: video.Key,
    };

    // delete to s3
    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      console.log(data);
      res.json({ ok: true });
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  // console.log('UPDATE SCENE', req.body);
  const itemUpdate = req.body;
  // return;
  try {
    const scene = await Scene.findOneAndUpdate(
      { _id: req.params.sceneId },
      itemUpdate,
      { new: true }
    ).exec();

    res.json(scene);
  } catch (error) {
    console.log(error);
  }
};

export const updateVideo = async (req, res) => {
  console.log('UPDATE VIDEO', req.body);
  // return
  let itemUpdate = req.body;
  itemUpdate.sceneId = req.params.sceneId;
  // return;
  try {
    const scene = await Scene.findOneAndUpdate(
      { _id: req.params.sceneId },
      { $push: {videos:[itemUpdate]}},
      { new: true }
    ).exec();
      console.log('PUSHED VIDEO', scene)
    res.json(scene);
  } catch (error) {
    console.log(error);
  }
};


export const updateArray = async (req, res) => {
  // { arrayName: [ 'characters' ], itemName: 'boob' }
  // console.log('UPDATE SCENE', req.body);
  // return
  const { arrayName, itemName } = req.body;
  // return;
  try {
    const scene = await Scene.findOneAndUpdate(
      { _id: req.params.sceneId },
      { [arrayName]: itemName },
      { new: true }
    ).exec();

    res.json(scene);
  } catch (error) {
    console.log(error);
  }
};
export const updatePushArrayItem = async (req, res) => {
  // { arrayName: [ 'characters' ], itemName: 'boob' }
  // console.log('UPDATE SCENE', req.body);
  // return
  const { arrayName, itemName } = req.body;
  // return;
  try {
    const scene = await Scene.findOneAndUpdate(
      { _id: req.params.sceneId },
      { $push: { [arrayName]: [itemName] } },
      { new: true }
    ).exec();

    res.json(scene);
  } catch (error) {
    console.log(error);
  }
};
