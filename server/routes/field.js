// import express from 'express';
const express = require('express');
// import formidable from 'express-formidable'; // we need this to access req.files for the video file
const formidable = require('express-formidable');

const router = express.Router();

// middlewares
// import { isCreator, requireSignin } from '../middlewares';
const {requireSignin, isCreator} = require('../middlewares');

// controllers
// import {
//   uploadImage,
//   removeImage,
//   create,
//   read,
//   getScenes,
//   uploadVideo,
//   uploadScript,
//   removeScript,
// } from '../controllers/field';

const {
  uploadImage,
  removeImage,
  create,
  read,
  getScenes,
  uploadVideo,
  uploadScript,
  removeScript,
} = require('../controllers/field');

// image
router.post('/field/upload-image', uploadImage);
router.post('/field/remove-image', removeImage);

// script
router.post('/field/upload-script', formidable(), uploadScript);
router.post('/field/remove-script', removeScript);

// fields
router.post('/field', requireSignin, isCreator, create);
router.get('/field/:slug', read);
// router.post('/field/video-upload', requireSignin, formidable(), uploadVideo);

// field scenes
router.get('/field/:fieldSlug/scenes', requireSignin, isCreator, getScenes);
// TODO: create isContributor

module.exports = router;
