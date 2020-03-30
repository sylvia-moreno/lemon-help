const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const cookingSchema = new Schema({
  name: String,
  price: String,
  foodType: {
    type: String,
    enum: ['français', 'indien', 'italien', 'libanais', 'américain']
  },
  hasDiscount: String,
  date: String,
  mealType: {
    type: String,
    enum: ['petit déjeune', 'déjeune', 'goûté', 'dîner']
  },
  duration: {
    type: String,
    enum: ['30 min', '1 heure', '2 heures', '>2 heures']
  },
  foodPreference: String,
  numberOfClient: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const cooking = mongoose.model('cooking', cookingSchema);
module.exports = cooking;