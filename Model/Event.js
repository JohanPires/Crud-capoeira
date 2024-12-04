const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  public: { type: String, required: true },
  city: { type: String, required: true },
  school_id: { type: String, required: true },
  start_date: { type: Number, required: true },
  end_date: { type: Number, required: true },
});

module.exports = mongoose.model("Event", EventSchema);
