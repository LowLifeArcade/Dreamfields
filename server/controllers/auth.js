import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // validation
    if (!name) return res.status(400).send('Name is required.');
    if (!password || password.length < 8)
      return res
        .status(400)
        .send('Password must be at least 8 characters long.');
    let userExist = await User.findOne({ email }).exec();
    if (userExist)
      return res.status(400).send('Email is being used by another artist.');

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send('Error registering. Try again');
  }
};

export const login = async (req, res) => {
  try {
    // console.log(req.body)
    const { email, password } = req.body;
    // check if db has user with that email
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).send('No user found');

    // compare password
    const match = await comparePassword(password, user.password);

    // create signed jwt (3 arguments) // we insert user id into token // jwt secret // expires in 7 days
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    // return user and token to client // exclude hashed password
    user.password = undefined;

    // http only flag
    // send token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      // secure: true, // only works on https
    });

    // send user as json response
    res.json(user)
  } catch (err) {
    console.log(err);
    return await res.status(400).send('Error logging in. Try again.');
  }
};
