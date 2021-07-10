import express from 'express';
import formidable from 'express-formidable' // we need this to access req.files for the video file

const router = express.Router();

// middlewares
import { isCreator, requireSignin } from '../middlewares';

// controllers
import { uploadImage, removeImage, create, read, uploadVideo } from '../controllers/field';

// image
router.post('/field/upload-image', uploadImage);
router.post('/field/remove-image', removeImage);

// fields
router.post('/field', requireSignin, isCreator, create)
router.get('/field/:slug', read)
router.post('/field/video-upload', requireSignin, formidable(), uploadVideo)

module.exports = router;
