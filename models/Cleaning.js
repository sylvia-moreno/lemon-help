const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const cleaningSchema = new Schema({
  name: String,
  price: String,
  type: {
    type: String,
    enum: ['rapassage', 'menage', 'vaiselle']
  },
  hasDiscount: String,
  date: String,
  /*area: {
    type: String,
    enum: ['habitation entière', 'salon', 'cuisine', 'chambre', 'salle de bain', 'cuisine', 'wc', 'garage']
  },*/
  duration: {
    type: String,
    enum: ['30 min', '1 heure', '2 heures', '>2 heures']
  },
  numberOfClient: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const cleaning = mongoose.model('cleaning', cleaningSchema);
module.exports = cleaning;