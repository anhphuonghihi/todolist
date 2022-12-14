const mongoose = require("mongoose");
var todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    completed :{
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
