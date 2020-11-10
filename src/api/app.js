const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
require("../index")
require("dotenv/config")
const userRoutes = require("./routes/user")


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//User Routs
app.use('/user',userRoutes)

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



module.exports = app;