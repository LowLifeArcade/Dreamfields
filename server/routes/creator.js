import express from 'express';

const router = express.Router();

// middlewares
import { requireSignin } from '../middlewares';

// controllers
import { makeCreator } from '../controllers/creator';

// endpoints
router.post('/make-creator', requireSignin, makeCreator)

module.exports = router;
