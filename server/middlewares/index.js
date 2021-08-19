// import expressJwt from 'express-jwt';
const expressJwt = require('express-jwt');
// import User from '../models/user.js';
const User = require('../models/user.js');

exports.requireSignin = expressJwt({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
}); 

// req.user._id

exports.isCreator = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).exec();
    if (!user.role.includes('Creator')) {
      return res.sendStatus(403);
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
