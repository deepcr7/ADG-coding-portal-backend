const mongoose = require('mongoose')

const contestSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      immutable: true,
      trim: true
    },
    startDate: {
      type: Date,
      required: true,
      validate: [
        function () {
          console.log(this.startDate);
          console.log(this.startDate > Date.now());
          return this.startDate > Date.now();
        },
        'Start date should not be in the past',
      ],
    },
    endDate: {
      type: Date,
      required: true,
      validate: [
        function () {
          return this.endDate > this.startDate;
        },
        'End time should be after start time',
      ],
    },
    description: {
      type: String,
      required: true,
    },
    nameOfContest: {
      type: String,
      required: true,
      unique: true,
    },
    creatorId: {
      type: String,
      required: true,
      immutable: true,
    }

  })

module.exports = mongoose.model('Contest', contestSchema);
