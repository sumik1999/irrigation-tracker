const mongoose = require("mongoose");

const PowerEventSchema = new mongoose.Schema({
  motorId: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  event: {
    type: String,
    required: true,
    enum: ["on", "off"],
  },
});

const PowerEvent = mongoose.model("PowerEvent", PowerEventSchema);

module.exports = PowerEvent;
