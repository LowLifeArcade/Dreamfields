const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const mongoose = require('mongoose');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const csrfProtection = csurf({ cookie: true });

// routes
// const authRoutes = require('./routes/auth');
// const creatorRoutes = require('./routes/creator');
// const fieldRoutes = require('./routes/field');
// const sceneRoutes = require('./routes/scene');

// create express app
const app = express();

// // db connection
// mongoose
//   .connect(process.env.DATABASE, {
//     // .connect('mongodb://localhost/dreamtest', {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true, // should be true for mongodb >= 3.4
//     useCreateIndex: true,
//   })
//   .then(() => console.log('##DB CONNECTED##'))
//   .catch((err) => console.log('DB CONNECTION ERROR', err))

// apply middlewares
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

// routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));
// app.use('/api', authRoutes)
// app.use('/api', creatorRoutes)
// app.use('/api', fieldRoutes)
// app.use('/api', sceneRoutes)

// csrf
app.use(csrfProtection);

app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

module.exports = app;
