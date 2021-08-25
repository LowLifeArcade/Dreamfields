const express = require('express');
const formidable = require('express-formidable');

const router = express.Router();

// middlewares
// import { isCreator, requireSignin } from '../middlewares';
const { isCreator, requireSignin } = require('../middlewares');

// controllers
// import { uploadImage, removeImage, create, read, deleteScene, uploadVideo, removeVideo, update, updateArray, saveVideo, updateVideo } from '../controllers/scene';

const {
  uploadImage,
  removeImage,
  create,
  read,
  // deleteScene,
  // uploadVideo,
  // removeVideo,
  // update,
  // updateArray,
  // saveVideo,
  // updateVideo,
  // createShot,
  // readShots,
  // deleteShot,
  // creatorUpdateShot,
  // creatorUpdateShotArray
} = require('../controllers/board');

// image
router.post('/board/upload-image', formidable(), uploadImage);
router.post('/board/remove-image', removeImage);

// Boards
router.post('/create-board', requireSignin, isCreator, create);
router.get('/board/:boardId', requireSignin, read);
router.get('/scene-boards', requireSignin, read);
// router.delete('/board/:shotId/:fieldId', deleteScene);
// router.post(
//   '/scene/video-upload/:sceneId',
//   requireSignin,
//   formidable(),
//   uploadVideo
// );
// router.post('/scene/video-remove/:creatorId', requireSignin, removeVideo);
// router.post('/scene/viewer-scene/:sceneId', requireSignin, removeVideo)

// scene
// router.post(`/scene/overview/:sceneId`, requireSignin, isCreator, update);
// router.post(
//   `/scene/overview-array/:sceneId`,
//   requireSignin,
//   isCreator,
//   updateArray
// );
// router.post(`/scene/video-add/:sceneId`, requireSignin, isCreator, saveVideo);
// router.post(
//   `/scene/video-update/:sceneId`,
//   requireSignin,
//   isCreator,
//   updateVideo
// );

// // shot
// router.post('/create-shot', requireSignin, isCreator, createShot);
// router.get('/shots/:sceneId', readShots);
// router.post('/shot/:shotId/:sceneId', requireSignin, isCreator, creatorUpdateShot);
// router.post('/shot-array/:shotId/:sceneId', requireSignin, isCreator, creatorUpdateShotArray);
// // router.get('/shot/:shotId', read);
// router.delete('/shot/:sceneId/:shotId', deleteShot);
// router.post(
//   '/scene/video-upload/:sceneId',
//   requireSignin,
//   formidable(),
//   uploadVideo
// );

module.exports = router;
