var mongoose = require('mongoose');

var CatererSchema = new mongoose.Schema({
  startingPrice: { type: Number },
  costPer: { type: Boolean },
  perDayPrice: { type: Number },
  perVegPrice: { type: Number },
  perNonVegPrice: { type: Number },
  minNumberCater: { type: Number },
  standardVegInclude: { type: String },
  speciality: { type: String },
  cuisinesOffered: [{ type: String }],
  catererType: { type: String },
  catererContent: { type: String }
}, { _id: false, toJSON: { getters: true } });

module.exports = CatererSchema;
