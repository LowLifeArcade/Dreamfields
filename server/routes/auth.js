// import express from 'express';
const express = require('express');

const router = express.Router();

// middlewares
// import authControllers from '../middlewares/index.js';
const { requireSignin, isCreator} = require('../middlewares');

// controllers
// import {
//   register,
//   login,
//   logout,
// currentUser,
//   sendTestEmail,
//   forgotPassword,
//   resetPassword,
// } from '../controllers/auth.js';
const {
  register,
  login,
  logout,
  currentUser,
  sendTestEmail,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/current-user', requireSignin, currentUser);
router.get('/send-email', sendTestEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

// export default router;
module.exports = router;
