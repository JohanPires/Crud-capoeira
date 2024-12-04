const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: String, required: true },
});

const locationSchema = new mongoose.Schema({
  address: { type: addressSchema, required: true },
  geo: {
    type: Object,
    required: false,
  },
});

const SchoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: locationSchema, required: true },
});

module.exports = mongoose.model("School", SchoolSchema);
