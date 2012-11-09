var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MsgSchema = new Schema({
    msg: String
});

module.exports = mongoose.model('sexymsgs', MsgSchema);