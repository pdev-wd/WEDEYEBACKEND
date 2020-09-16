var mongoose = require('mongoose');
var Filter = mongoose.model('Filter');

//Create Filter for vendors
exports.filter_create = function (req, res) {
    Filter.findOne({ vendor_type: req.body.vendor_type }, function (err, filterData) {
        if (err) {
            console.log("Please insert correct formate");
        } else {
            console.log(filterData, "data")
            if (filterData == null || filterData.length < 0) {
                Filter.create(req.body, (error, data) => {
                    if (error) {
                        return next(error);
                    } else {
                        console.log(data, "Filter record inserted sucessfully");
                        res.json(data);
                    }
                });

            } else {
                console.log(filterData, "Already added this type of vendor");
                res.send("Already added this type of vendor");
            }
        }
    })

};

//Find Vendor type
exports.filter_find = (req, res) => {
    Filter.findOne({ vendor_type: req.body.vendor_type }, (err, data) => {
        if (err) {
            res.send("There is error to find data");
        } else {
            console.log(data, "response");
            res.json(data);
        }
    })
}