const mongoose = require('mongoose')

const questionSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true
    },
    Question: 
      {
        type: String,
        lowercase: true
      }
    ,
    TestCases : [
      {
        type: String,
        trim: true,
        lowercase: true
      }
    ],
    constraints: String,
    Solution : [
      {
        type: String,
        trim: true,
        lowercase: true
      }
    ],
    languageUsed: {
      type: String,
      required: true,
      trim: true
    },
    languagesAllowed: [{
      type: String,
      required: true,
      trim: true
    }],
    // submissionTime: {
    //   type: Date,
    //   required: true
    // },
    timeLimit: Double,
    memoryLimit: Number,
    sampleInput: String,
    sampleOutput: String
  }
);

module.exports = mongoose.model('Question', questionSchema)



