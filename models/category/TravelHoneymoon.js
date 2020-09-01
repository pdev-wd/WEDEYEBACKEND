var mongoose = require('mongoose');
// Travel & Honeymoon
var TravelHoneymoonSchema = new mongoose.Schema({
  startingPrice: { type: Number },
  // honeymoonOffered:{
  withinIndia: { type: Number },
  internationalTravel: { type: Number },
  // },
  isInternational: { type: Boolean },
  isIndia: { type: Boolean },
  baseLocationProvidingService: { type: String },
  popularHoneymoonDestination: { type: String },
  holidayCompany: { type: String },
  helpCoubleBook: [{ type: String }],
  mentionOtherService: { type: String },
  howManyYearsAdvanceReach: { type: Number },
  experienceHave: { type: Number },
  awardsRecognitionPublications: { type: String }
}, { _id: false, toJSON: { getters: true } });

module.exports = TravelHoneymoonSchema;