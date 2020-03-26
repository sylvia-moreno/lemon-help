const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const maidSchema = new Schema({
  username: String,
  password: String,
  email: String,
  imageProfil: String,
  phoneNumber: String,
  address: String,
  cityName: String,
  cityCode: String,
  country: String,
  experience: String,
  rating: String,
  badge: String,
  gender: String,  
  profession: String,

  services: Array,
  requirements :String,
  curriculumvitae: String,
  //ajout des documents de casier judiciaires, pièces d'identité
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Maid = mongoose.model('Maid', maidSchema);
module.exports = Maid;