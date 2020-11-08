const mongoose = require('mongoose')

const questionSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true
    },
    Questions : [
      {
        type: String,
        trim: true,
        lowercase: true
      }
    ],
    TestCases : [
      {
        type: String,
        trim: true,
        lowercase: true
      }
    ],
    Solution : [
      {
        type: String,
        trim: true,
        lowercase: true
      }
    ],
    languagesUsed: [{
      type: String,
      required: true,
      trim: true
    }],
    languagesAllowed: [{
      type: String,
      required: true,
      trim: true
    }],
    submissionTime: {
      type: Date,
      required: true
    }
  }
);

module.exports = mongoose.model('Question', questionSchema)



