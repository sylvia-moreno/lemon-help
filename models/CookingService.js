const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const cookingServiceSchema = new Schema({
  name: String,
  price: String,
  foodType: String,
  hasDiscount: String,
  date: String,
  mealType: String,
  duration: {
    type: String,
    enum: ['30 min', '1 heure', '2 heures', '>2 heures']
  },
  foodPreference: String,
  numberOfClient: String,
  maid: { type: Schema.Types.ObjectId, ref: "Maid" }, 
  client: { type: Schema.Types.ObjectId, ref: "User" }, 
  status: {
    type: String,
    enum: ['pending', 'start', 'end']
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const cookingService = mongoose.model('cookingService', cookingServiceSchema);
module.exports = cookingService;