var mongoose = require("mongoose");
const City = mongoose.model("City");
exports.create = (req, res) => {
  console.log(req.body, "city body");
  City.findOne({ name: req.body.name }).then((location) => {
    if (location) {
      return res.status(400).json({ reviewName: "location already exists" });
    } else {
      const location = new City(req.body);
      City.countDocuments({}, function (err, c) {
        console.log("location count document");
        location.value = c;
        location.save((err) => {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json("Registered successfully");
          }
        });
      });
    }
  });
};

exports.update = (req, res) => {
  console.log("update", req.body);
  City.findByIdAndUpdate(req.params.id, { name: req.body.tempname }, function (
    err,
    client
  ) {
    if (!client) res.status(500).send("data is not found");
    else {
      client.name = req.body.name;
      client
        .save()
        .then((user) => {
          res.json("city updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
};
exports.list = (req, res) => {
  // console.log('type');
  console.log("findall");
  // console.log(req.body.id)
  City.find({}, function (err, vendor) {
    if (err) {
      console.log(err);
    } else {
      res.json(vendor);
    }
  });
};
exports.delete = (req, res) => {
  console.log("delete city", req.params);
  try {
    City.findByIdAndDelete(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log("City Deleted successfully");
        res.status(200).json({
          msg: data,
        });
      }
    });
  } catch (e) {
    throw e;
  }
};
exports.remove = (req, res) => {
  console.log("remove");
  City.findOneAndRemove({ name: req.body.name }, function (err, city) {
    if (err) res.json(err);
    else {
      City.countDocuments({}, function (err1, c) {
        console.log("c");
        console.log("location count document");
        City.findOne({ value: c }, function (err, client) {
          if (!client) res.status(500).send("data is not found");
          else {
            client.value = city.value;
            client
              .save()
              .then((user) => {
                res.json("city updated!");
              })
              .catch((err) => {
                res.status(400).send("Update not possible");
              });
          }
        });
      });
    }
  });
};
