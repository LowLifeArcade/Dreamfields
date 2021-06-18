import User from '../models/user';
import stripe from 'stripe';
import queryString from 'query-string';

export const makeCreator = async (req, res) => {
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
    const accountLink = await stripe.accountLinks.create({
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
