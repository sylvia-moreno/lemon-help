const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const dishSchema = new Schema({
  name: String,
  type: Array,
  price: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Dish = mongoose.model('Dish', dishSchema);
module.exports = Dish;