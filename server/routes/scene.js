import express from 'express';
import formidable from 'express-formidable' // we need this to access req.files for the video file

const router = express.Router();

// middlewares
import { isCreator, requireSignin } from '../middlewares';

// controllers
import { uploadImage, removeImage, create, read, uploadVideo, removeVideo } from '../controllers/scene';

// image
router.post('/scene/upload-image', uploadImage);
router.post('/scene/remove-image', removeImage);

// scenes
router.post('/create-scene', requireSignin, isCreator, create)
router.get('/scene/:slug', read)
router.post('/scene/video-upload/:sceneId', requireSignin, formidable(), uploadVideo)
router.post('/scene/video-remove/:sceneId', requireSignin, removeVideo)

module.exports = router;
