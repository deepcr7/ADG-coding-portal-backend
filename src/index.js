const mongoose= require('mongoose')
require("dotenv/config")
const app = require("./api/app")

const uri = process.env.MONGODB_URI;
console.log(uri)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
  .then(() => 
  console.log("Database is connected!"))
  .catch((err) => console.error(err))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is connected to port ${PORT}`)
  });
