const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true
    },
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
      required: true
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
      required: true
    },
    registrationNumber: {
      type: String,
      trim: true,
      immutable: true
    }
  }
);

module.exports = mongoose.model('User', userSchema)



