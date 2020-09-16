var filterController = require("../controllers/Filter.controller");

module.exports = (app) => {
    app.post("/vendorfilter", filterController.filter_create);
    app.post("/vendorFind", filterController.filter_find);
}