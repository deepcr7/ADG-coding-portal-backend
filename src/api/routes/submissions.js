const express= require("express");
const router = express.Router();


const submission= require('../handlers/submission');


//submit
router.post('/submission', submission.submitfunction)




module.exports = router

