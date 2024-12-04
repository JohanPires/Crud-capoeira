const mongoose = require("mongoose");

const RessourceSchema = mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model("Ressource", RessourceSchema);
