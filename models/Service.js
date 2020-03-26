const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const serviceSchema = new Schema({
  name: String,
  price: String,
  type: {
    type: String,
    enum: ['rapassage', 'menage', 'vaiselle', 'cuisine', 'garde d\'enfant']
  },
  fourniture: {
    type: String,
    enum : ['fournis', 'non fournis']
  },
  duration: {
    type: String,
    enum: ['30 min', '1 heure', '2 heures', '>2 heures']
  },
  area: {
    type: String,
    enum: ['habitation entière', 'salon', 'cuisine', 'chambre', 'salle de bain', 'cuisine', 'wc', 'garage']
  },
  foodType: {
    type: String,
    enum: ['français', 'indien', 'italien', 'libanais', 'vietnamien']
  },
  mealType: {
    type: String,
    enum: ['petit dejeune', 'dejeune', 'goute', 'diner']
  },
  hasDiscount: String,
  date: String,
  foodPreference: {
    type: String,
    enum: ['végétarien', 'peut importe', 'non végétarien']
  },
  numberOfClient: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Service = mongoose.model('User', serviceSchema);
module.exports = Service;