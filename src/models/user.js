const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      unique: true
    },
    email:{
      type:String,
      required: true,
      unique: true,
      match:/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ 
    },
    questions : [
      {
        type: String,
        trim: true,
        lowercase: true
      }
    ],
    adgMember: {
      type: Boolean,
      required: true
    },
    bio: {
      type: String,
      trim: true
    },
    points: {
      type: Number,
      //required: true
    },
    githubLink: {
      type: String,
      validate: [
        function(v) {
          var re = /^https?:\/\/github.com\/[^\/]*\/?$/;
          return (v == null) || re.test(v)
      },
        'Please enter a valid GitHub Link',
      ],
    },
    userImage: {
      type: String,
      //required: true
    },
    registrationNumber: {
      type: String,
      trim: true,
      immutable: true
    },
    contestsParticipated : [{
      type: String
    }]
  },{timestamps: true}
);

module.exports = mongoose.model('User', userSchema)



