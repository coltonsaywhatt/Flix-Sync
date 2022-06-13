const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String },
  poster_path: { type: String },
  release_date: { type: String },
  runtime: { type: String },
  genres : [{ type: String }],
  overview: { type: String },
  backdrop_path: { type: String },
  vote_average: {type: String},
  apiId: { type: Number },
  watchList: [{ type: Schema.Types.ObjectId, ref: "User" }],
  watchedList: [{ type: Schema.Types.ObjectId, ref: "User" }],
}, {
  timestamps: true,
  });


module.exports = mongoose.model('Movie', movieSchema);

