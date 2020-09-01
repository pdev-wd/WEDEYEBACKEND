var mongoose = require("mongoose");
var ID = function () {
  return (
    "_" +
    Math.random().toString(36).substr(2, 9) +
    Math.random().toString(36).substr(2, 9)
  );
};
var AreaSchema = new mongoose.Schema(
  {
    value: { type: String, required: true, default: ID },
    name: { type: String },
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
  },
  { collection: "locations" }
);
module.exports = mongoose.model("Area", AreaSchema);
