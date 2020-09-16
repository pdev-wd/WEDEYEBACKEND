var mongoose = require("mongoose");

var FilterSchema = new mongoose.Schema(
    {
        vendor_type: { type: String },
        budget: [String],
        services: [String],
    },
    { toJSON: { getters: true } }
);
module.exports = mongoose.model("Filter", FilterSchema);