const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  imageProfil: String,
  phoneNumber: String,
  address: String,
  cityName: String,
  cityCode: String,
  country: String,
  gender: {
      type: String,
      enum: ['Homme', 'Femme']
  },
  homeSize: {
    type: String,
    enum: ['<2 pièces', '>2 pièces']
  },
  requirements: String,
  services: Array,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;