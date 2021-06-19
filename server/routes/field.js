import express from 'express';

const router = express.Router();

// middlewares
import { requireSignin } from '../middlewares';

// controllers
import { uploadImage , removeImage} from '../controllers/field';

router.post('/field/upload-image', uploadImage);
router.post('/field/remove-image', removeImage)

module.exports = router;
