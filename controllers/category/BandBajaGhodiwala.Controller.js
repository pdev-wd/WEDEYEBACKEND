var mongoose = require('mongoose'),
    passport = require('passport');
const BandBajaGhodiwala = mongoose.model('BandBajaGhodiwala');

exports.create = (req, res) => {
    // var role = req.type;
    // const car = new Car(req.body);
    BandBajaGhodiwala.findOne({ email: req.body.email }).then(bridal => {
        if (bridal) {
            return res.status(400).json({ email: 'BandBajaGhodiwala already exists' });
        } else {
            const bridal = new BandBajaGhodiwala(req.body);
            if (!req.body.createDate)
                //  bridal.createDate = Date.now().toString().slice(0,10);
                bridal.createDate = new Date().toString().slice(0, 10);
            bridal.setPassword(req.body.hash);
            bridal.status = 'false';
            bridal.save((err) => {
                if (err) {
                    console.log(err)
                    // res.status(401).json(err);
                } else {
                    res.status(200).json({ result: 'successfully created!' });
                }
            });
        }
    })
};
exports.update = (req, res) => {
    // role = req.type;
    userId = req.body._id;
    BandBajaGhodiwala.findById(userId, function (err, car) {
        Object.assign(car, req.body);
        if (!req.body.modifyDate)
            car.modifyDate = new Date().toString().slice(0, 10);
        // if (req.body.basicDetailsStatus)
        car.basicStatus.basicDetailsStatus = req.body.basicDetailsStatus;
        if (req.body.contactInfoStatus)
            car.basicStatus.contactInfoStatus = req.body.contactInfoStatus;
        if (req.body.servicePricingStatus)
            car.basicStatus.servicePricingStatus = req.body.servicePricingStatus;
        if (req.body.noHours)
            car.packageIncluded.noHours = req.body.noHours;
        if (req.body.packageInfo)
            car.packageIncluded.packageInfo = req.body.packageInfo;
        car.packageIncluded.transportationChargesIncluded = req.body.transportationChargesIncluded == '' ? false : true;
        car.packageIncluded.brassBand = req.body.brassBand == '' ? false : true;
        car.wilingToTravel = req.body.wilingToTravel == '' ? false : true;
        car.travelCost = req.body.travelCost == '' ? 'Not to be paid by client' : 'To be paid by client';
        car.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json({ result: "successfully Updated!" });
            }
        });
    });
};

exports.delete = (req, res) => {
    // var role = req.type;
    // var userId = req.userId;
    // if(role == 0){
    //     Car.findByIdAndRemove({_id: req.params.id}, function(err, business){
    //         if(err) res.json(err);
    //         else res.json('Successfully removed');
    //     });
    // }
    // else if(role == 2){
    //     Car.findById(req.params.id, function(err, car) {
    //         if (userId == car.owner){
    //             Car.findByIdAndRemove({_id: req.params.id}, function(err, business){
    //                 if(err) res.json(err);
    //                 else res.json('Successfully removed');
    //             });
    //         }
    //         else{
    //             res.json('this model is not yours , so you cannot delete it')
    //         }
    //     });  
    // }
    // else{
    //     res.json('you are not admin, u are not allowed to delete it');
    // }

};