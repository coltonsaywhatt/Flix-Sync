const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvSchema = new Schema({
  name: { type: String },
  poster_path: { type: String },
  first_air_date: { type: String },
  episode_run_time: { type: String },
  genres : [{ type: String }],
  overview: { type: String },
  backdrop_path: { type: String },
  apiId: { type: Number },
  watchList: [{ type: Schema.Types.ObjectId, ref: "User" }],
  watchedList: [{ type: Schema.Types.ObjectId, ref: "User" }],
}, {
  timestamps: true,
  });


module.exports = mongoose.model('Tv', tvSchema);