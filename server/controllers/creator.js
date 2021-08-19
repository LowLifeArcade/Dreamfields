// import User from '../models/user';
const User = require('../models/user');
// import stripe from 'stripe';
// import queryString from 'query-string';
const queryString = require('query-string');
// import Field from '../models/field';
const Field = require('../models/field');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

exports.makeCreator = async (req, res) => {
  try {
    // 1 find user from db
    const user = await User.findById(req.user._id).exec();
    // 2 if user doesnt have stripe_account_id yet, create a new id
    if (!user.stripe_account_id) {
      const account = await stripe.accounts.create({ type: 'express' });
      console.log('ACCOUNT ->', account.id);
      user.stripe_account_id = account.id;
      user.save();
    }
    // 3 create account link based on account id (for front end to complete onboarding)
    let accountLink = await stripe.accountLinks.create({
      account: user.stripe_account_id,
      refresh_url: process.env.STRIPE_REDIRECT_URL,
      return_url: process.env.STRIPE_REDIRECT_URL,
      type: 'account_onboarding',
    });
    console.log('accountLink', accountLink);
    // 4 pre-fill any info such as email (optional), then send url response to front end
    accountLink = Object.assign(accountLink, {
      'stripe_user[email]': user.email,
    });
    // 5 send the account link as response to front end
    res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`);
  } catch (err) {
    console.log('MAKE CREATOR ERROR', err);
  }
};

exports.getAccountStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).exec();
    const account = await stripe.accounts.retrieve(user.stripe_account_id);
    console.log('STRIPE ACCOUNT =>', account);

    if (!account.charges_enabled) {
      return res.status(401).send('Unauthorized');
    } else {
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          stripe_seller: account,
          $addToSet: { role: 'Creator' }, // better than push for array as it checks to see if there is anything in their already like this
        },
        { new: true }
      )
        .select('-password')
        .exec();

      res.json(statusUpdated);
    }
  } catch (err) {}
};

exports.currentCreator = async (req, res) => {
  try {
    let user = await User.findById(req.user._id).select('-password').exec();
    if (!user.role.includes('Creator')) {
      res.sendStatus(403);
    } else res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};

exports.creatorFields = async (req, res) => {
  try {
    const fields = await Field.find({ creator: req.user._id })
      .sort({ createdAt: -1 })
      .exec();
    res.json(fields);
  } catch (err) {
    console.log(err);
  }
};
