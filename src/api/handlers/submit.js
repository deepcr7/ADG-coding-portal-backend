const e = require('express');
const request = require('request');
const Submission=require('../../models/submission');


async function submitfunction(req,res){
    const submitData = {
        ...req.body,
      }
      const submission= new Submission({
        ...submitData
      })
    console.log(submitData)
    try{
        

const options = {
  method: 'POST',
  url: 'https://judge0.p.rapidapi.com/submissions',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-key': 'a6334b4fcbmsh938796e4ccc6889p17a742jsn2cce6d6a38b2',
    'x-rapidapi-host': 'judge0.p.rapidapi.com',
    useQueryString: true
  },
  body: {
    language_id: submission.language_id,
    source_code: submission.source_code,
    stdin: submission.language_id
  },
  json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    else
    res.status(200).json({
        token:response.body.token
      })

	console.log(body);
});

      
    } catch (err){
      res.status(500).send({
        message:"Error in getting submission!"
      })
    }
  }
  module.exports ={
  submitfunction
  };