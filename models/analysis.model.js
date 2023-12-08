const mongoose = require("mongoose");

const AnalysisSchema = new mongoose.Schema({
  introduction: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  audience: {
    type: String,
    required: true,
  },
  sw_description: {
    type: String,
    required: true,
  },
  sys_fr: {
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

const SDLC_Analysis = mongoose.model("Analysis-Phase", AnalysisSchema);
module.exports = { SDLC_Analysis };
