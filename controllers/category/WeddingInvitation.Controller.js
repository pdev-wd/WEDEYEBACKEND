var mongoose = require('mongoose'),
    passport = require('passport');
const WeddingInvitation = mongoose.model('WeddingInvitation');

exports.create = (req, res) => {
    // var role = req.type;
    // const car = new Car(req.body);
    WeddingInvitation.findOne({ email: req.body.email }).then(bridal => {
        if (bridal) {
            return res.status(400).json({ email: 'WeddingInvitation already exists' });
        } else {
            const bridal = new WeddingInvitation(req.body);
            if (!req.body.createDate)
                bridal.createDate = new Date().toString().slice(0, 10);
            bridal.setPassword(req.body.hash);
            bridal.status = 'false';
            bridal.save((err) => {
                if (err) {
                    res.status(401).json(err);
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
    WeddingInvitation.findById(userId, function (err, car) {
        Object.assign(car, req.body);
        if (!req.body.modifyDate)
            car.modifyDate = new Date().toString().slice(0, 10);
        if (req.body.basicDetailsStatus)
            car.basicStatus.basicDetailsStatus = req.body.basicDetailsStatus;
        if (req.body.contactInfoStatus)
            car.basicStatus.contactInfoStatus = req.body.contactInfoStatus;
        if (req.body.servicePricingStatus)
            car.basicStatus.servicePricingStatus = req.body.servicePricingStatus;

        if (req.body.boxedInvites)
            car.boxedInvites = req.body.boxedInvites
        if (req.body.unboxedInvites)
            car.unboxedInvites = req.body.unboxedInvites
        if (req.body.digitalECards)
            car.digitalECards = req.body.digitalECards
        if (req.body.onlyCardDesign)
            car.onlyCardDesign = req.body.onlyCardDesign
        if (req.body.other)
            car.other = req.body.other

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