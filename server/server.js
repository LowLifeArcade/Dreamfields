import express from 'express';
import cors from 'cors';
import { readdirSync } from 'fs';
import mongoose from 'mongoose';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
const morgan = require('morgan');
require('dotenv').config();

const csrfProtection = csurf({ cookie: true });

// create express app
const app = express();

// db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('##DB CONNECTED##'))
  .catch((err) => console.log('DB CONNECTION ERROR', err));

// apply middlewares
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

// routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

// csrf
app.use(csrfProtection);

app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`SERVER is running on port: ${port}`));
