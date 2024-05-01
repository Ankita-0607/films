const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema(
  {
    title: { type: String, required: isMyFieldRequired },
    director: { type: String, required: isMyFieldRequired },
    releaseDate: { type: Date, require: true },
  },
  {
    strict: 'throw', // Throw validation error for unknown fields
  }
);
function isMyFieldRequired() {
  return typeof this.title === 'String' ? false : true;
}
const FilmModel = mongoose.model('Film', filmSchema);

module.exports = FilmModel;
