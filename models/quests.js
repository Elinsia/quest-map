const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questSchema = new Schema({
  title: { type: String, require: true },
  point: {
    latitude: { type: Number, require: true },
    longitude: { type: Number, require: true }
  },
  shortDescription: { type: String, require: true },
  fullDescription: { type: String, require: true },
  score: { type: Number, require: true },
  active: { type: Boolean},
  complete: { type: Boolean},
  city: { type: Schema.Types.ObjectId, ref: 'City' },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Quest', questSchema);