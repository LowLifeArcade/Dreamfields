import express from 'express';

const router = express.Router();

// middlewares
import { isCreator, requireSignin } from '../middlewares';

// controllers
import { uploadImage, removeImage, create, read } from '../controllers/field';

// image
router.post('/field/upload-image', uploadImage);
router.post('/field/remove-image', removeImage);

// fields
router.post('/field', requireSignin, isCreator, create)
router.get('/field/:slug', read)

module.exports = router;
