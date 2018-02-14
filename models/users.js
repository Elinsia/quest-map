const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: { type: String, require: true },
  password: { type: String, require: true },
  firstName: { type: String, require: true },
  questsActive: [{ type: Schema.Types.ObjectId, ref: 'Quest'}],
  questsComplete: [{ type: Schema.Types.ObjectId, ref: 'Quest'}]
});

module.exports = mongoose.model('User',userSchema);