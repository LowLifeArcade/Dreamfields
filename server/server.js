// import app from './app';
const mongoose = require('mongoose');
const app = require('./app');

// db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true, // should be true for mongodb >= 3.4
    useCreateIndex: true,
  })
  .then(() => console.log('##DB CONNECTED##'))
  .catch((err) => console.log('DB CONNECTION ERROR', err));

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`SERVER is running on port: ${port}`));