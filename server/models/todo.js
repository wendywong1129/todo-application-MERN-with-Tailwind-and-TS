const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  _id: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

module.exports = model("Todo", todoSchema);
