const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
  title: { type: String, require: true },
  quests: [{ type: Schema.Types.ObjectId, ref: 'Quest'}]
});

module.exports = mongoose.model('City', citySchema);