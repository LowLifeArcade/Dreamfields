import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';
import jwt from 'jsonwebtoken';
import AWS from 'aws-sdk';
import { nanoid } from 'nanoid';

// AWS config
const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const SES = new AWS.SES();

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

    if(!match) {
      return res.status(400).send('Wrong Password')
    }

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
    res.json(user);
  } catch (err) {
    console.log(err);
    return await res.status(400).send('Error logging in. Try again.');
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie('token');
    return res.json({ message: 'Successfully signed out' });
  } catch (err) {
    console.log(err);
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password').exec();
    console.log('CURRENT USER', user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};

export const sendTestEmail = async (req, res) => {
  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: ['famousfigures@gmail.com'],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
          <html>
            <h1>Reset Password</h1>
            <p>Use this link to reset your password.</p>
          </html>
          `,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Password Reset Link',
      },
    },
  };

  const emailSent = SES.sendEmail(params).promise();

  emailSent
    .then((data) => {
      console.log(data);
      res.json({ ok: true });
    })
    .catch((err) => {
      console.log('email send error', err);
    });
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const shortCode = nanoid(6).toUpperCase();
    const user = await User.findOneAndUpdate(
      { email },
      { PasswordResetCode: shortCode }
    );
    if (!user) res.status(400).send('User not found');

    // prepare for email
    const params = {
      Source: process.env.EMAIL_FROM,
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `
              <html> 
                <h1>Reset Password</h1>
                <p>Use this code to reset your password</p>
                <h1>${shortCode}</h1>
                <p>dreamfieldsprojects.com</p>
              </html>
            `,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Reset Password',
        },
      },
    };

    const emailSent = SES.sendEmail(params).promise();
    emailSent
      .then((data) => {
        console.log(data);
        res.json({ ok: true });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, code, newPassword } = await req.body;

    const hashedPassword = await hashPassword(newPassword);

    const user = await User.findOneAndUpdate(
      { email, PasswordResetCode: code },
      { password: hashedPassword, PasswordResetCode: '' }
    ).exec();
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};
