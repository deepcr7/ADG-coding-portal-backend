const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const checkAuth = require('./middleware/checkAuth');


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//error handling
app.use((err, req, res, next) => {
  console.log(err);
  if (typeof err == 'string') {
    return res.status(400).send({
      message: err,
    });
  }
  return res.status(400).send({
    message: err.message,
  });
});