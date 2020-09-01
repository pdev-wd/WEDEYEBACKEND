var mongoose = require('mongoose');

var BridalDesignerSchema = new mongoose.Schema({
  youRentFor: {
    brideWear: { type: Boolean },
    groomWear: { type: Boolean }
  },
  brideWearStartingPrice: {
    bridalLehengas: { type: Number },
    lightLehengas: { type: Number },
    gowns: { type: Number },
    trousseauSarees: { type: Number },
    trousseauAnarkalis: { type: Number },
    indoWestern: { type: Number },
    christianWeddingGowns: { type: Number },
  },
  groomWearStartingPrice: {
    sherwani: { type: Number },
    weddingSuitsTuxes: { type: Number },
    kurtaPyjama: { type: Number },
    bandhgala: { type: Number },
    waistCoatsNehruJackets: { type: Number },
    indoWestern: { type: Number },
    pagadi: { type: Number },
  },
  yourOutfits: { type: String },
  storeStudioStart: { type: String },
  descrieEstablishment: { type: String },
  outfitsPickupDropPolicy: { type: String },
  brideWearSelectControl: [{ type: String }],
  groomWearSelectControl: [{ type: String }],
  brideWearCheckControl: { type: Boolean },
  groomWearCheckControl: { type: Boolean }
  // chooseTypeOfStore : {type:String},
  // speciality : {
  //   readyToPurchaseOutfits:{type:Number},
  //   samplePiecesOnOrders:{type:Number},
  //   designedOutfitsFromScratch:{type:Number},
  // },
  // outfitsOffer :{
  //   bridalLehengas:{type:Number},
  //   lightLehengas:{type:Number},
  //   growns:{type:Number},
  //   anarkalisSuits:{type:Number},
  //   sareers:{type:Number},
  //   indoWestern:{type:Number}
  // }
}, { _id: false, toJSON: { getters: true } });
module.exports = BridalDesignerSchema;
