import express from 'express';

const router = express.Router();

// middlewares
import { requireSignin } from '../middlewares';

// controllers
import { makeCreator, getAccountStatus, currentCreator, creatorFields } from '../controllers/creator';

// endpoints
router.post('/make-creator', requireSignin, makeCreator)
router.post('/get-account-status', requireSignin, getAccountStatus)
router.get('/current-creator', requireSignin, currentCreator)

router.get('/creator-fields', requireSignin, creatorFields)

module.exports = router;
