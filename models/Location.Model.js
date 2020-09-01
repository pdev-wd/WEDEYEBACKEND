var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
var ID = function () {
  return (
    "_" +
    Math.random().toString(36).substr(2, 9) +
    Math.random().toString(36).substr(2, 9)
  );
};
var LocationSchema = new mongoose.Schema(
  {
    value: { type: String, required: true, default: ID },
    name: { type: String },
    preference: { type: String },
    summary: { type: String },
  },
  { collection: "Cities" }
);
module.exports = mongoose.model("City", LocationSchema);
