import express from 'express';
import cors from 'cors';
import { readdirSync } from 'fs';
import mongoose from 'mongoose';
const morgan = require('morgan');
require('dotenv').config();

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
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`SERVER is running on port: ${port}`));
