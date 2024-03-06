const mongoose = require('mongoose');
const validator = require('validator');

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: [3, 'Should not less than 3.'],
    max: [30, 'Should not more than 30.']
  },
  lastName: {
    type: String,
    required: true,
    min: [3, 'Should not less than 3.'],
    max: [30, 'Should not more than 30.']
  },
  email: {
    type: String,
    required: true,
    validator: [validator.isEmail, "Provide a valid email."]
  },
  phone: {
    type: String,
    required: true,
    min: [10, 'Should not less than 10.'],
    max: [10, 'Should not more than 10.']
  },
  time: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model("Reservation", reservationSchema);