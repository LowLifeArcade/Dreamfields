import express from 'express';

const router = express.Router();

// middlewares
import { requireSignin } from '../middlewares';

// controllers
import { makeCreator, getAccountStatus } from '../controllers/creator';

// endpoints
router.post('/make-creator', requireSignin, makeCreator)
router.post('/get-account-status', requireSignin, getAccountStatus)

module.exports = router;
