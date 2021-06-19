import express from 'express';

const router = express.Router();

// middlewares
import { requireSignin } from '../middlewares';

// controllers
import { uploadImage } from '../controllers/field';

router.post('/field/upload-image', uploadImage);

module.exports = router;
