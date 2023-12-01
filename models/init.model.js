const mongoose = require("mongoose");

const InitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  finishDate: {
    type: String,
    required: true,
  },
  objectives: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  budgetInfo: {
    type: String,
    required: true,
  },
  scopeStatements: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const SDLC_Init = mongoose.model("Init-Phase", InitSchema);
module.exports = { SDLC_Init };
