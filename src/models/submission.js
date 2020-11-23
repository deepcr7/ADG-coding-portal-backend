const mongoose = require('mongoose')



var Submission = new mongoose.Schema({
    qID: Number,
    subID: Number,
    source_code: String,
    language_id: String,
    stdin:String,
    verdict: String,
    memory: Number,
    isVisible: Boolean,
    timeStamp: Date,
    
});
var submission = mongoose.model('submission', Submission);
module.exports = submission;