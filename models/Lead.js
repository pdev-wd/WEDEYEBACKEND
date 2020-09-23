var mongoose = require("mongoose");

var LeadSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    clientEmail: { type: String },
    phoneNumber: { type: String, required: true },
    phoneOPT: { type: String },
    eventDate: { type: Date },
    eventCity: { type: Number },
    eventLocation: { type: Number },
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    leadStatus: { type: Number }, //0 pending, 1 accepted, 2 declined
    contactViewDate: { type: Date },
    //called today, later, booked, archievd/cancelled leads
  },
  { toJSON: { getters: true } }
);

var LeadModel = mongoose.model("Lead", LeadSchema);

module.exports = LeadModel;
