const mongoose = require("mongoose");

const DesignSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const SDLC_Design = mongoose.model("Design-Phase", DesignSchema);
module.exports = { SDLC_Design };
