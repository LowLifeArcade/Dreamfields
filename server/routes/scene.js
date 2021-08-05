import express from 'express';
import formidable from 'express-formidable' // we need this to access req.files for the video file

const router = express.Router();

// middlewares
import { isCreator, requireSignin } from '../middlewares';

// controllers
import { uploadImage, removeImage, create, read, uploadVideo, removeVideo, update, updateArrayItem } from '../controllers/scene';

// image
router.post('/scene/upload-image', uploadImage);
router.post('/scene/remove-image', removeImage);

// scenes
router.post('/create-scene', requireSignin, isCreator, create)
router.get('/scene/:sceneId', read)
router.post('/scene/video-upload/:sceneId', requireSignin, formidable(), uploadVideo)
router.post('/scene/video-remove/:sceneId', requireSignin, removeVideo)
// router.post('/scene/viewer-scene/:sceneId', requireSignin, removeVideo)

// scene 
router.post(`/scene/overview/:sceneId`, requireSignin, isCreator, update)
router.post(`/scene/overview-array/:sceneId`, requireSignin, isCreator, updateArrayItem)

module.exports = router;
