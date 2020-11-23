const Submission=require('../../models/submission');
const request = require('request');


async function submission(req,res){
    const submitData = {
        ...req.body,
      }
      const submission= new Submission({
        ...submitData
      })
    console.log(req.submitData)
    try{

      res.status(200).json({
        submissionDetails: submission
      })
    } catch (err){
      res.status(500).send({
        message:"Error in getting submission!"
      })
    }
  }