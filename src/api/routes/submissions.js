const express= require("express");
const router = express.Router();

const submission= require('../handlers/submit');


//submit
router.post('/submission', submission.submitfunction)



module.exports = router

