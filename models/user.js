const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
  },
  category: {
    type: String,
  },
  qty: {
    type: Number,
  },
});

module.exports = mongoose.model('User', userSchema);
