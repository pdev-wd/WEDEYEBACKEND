var mongoose = require("mongoose"),
  passport = require("passport");
const Client = mongoose.model("Client");
var nodemailer = require("nodemailer");
const Nexmo = require("nexmo");

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth: {
    user: "superpunch727@gmail.com",
    pass: "rams1998727",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
exports.register = (req, res) => {
  console.log("aaaa");
  if (!req.body.fullname || !req.body.hash) {
    return res.status(400).json({ message: "All fields required" });
  }
  Client.findOne({ fullname: req.body.fullname }).then((client) => {
    if (client) {
      return res.status(400).json({ fullname: "client already exists" });
    } else {
      console.log("cccc");
      const client = new Client(req.body);
      client.setPassword(req.body.hash);
      client.save((err) => {
        if (err) {
          res.status(500).json(err);
        } else {
          console.log(client);
          const token = client.generateJwt();
          res.status(200).json("Registered successfully");
        }
      });
    }
  });
};
// exports.google = (req,res) =>{
//     console.log('1');
//     passport.authenticate('google', { scope:
//         [ 'https://www.googleapis.com/auth/plus.login',
//         , 'https://www.googleapis.com/auth/plus.profile.emails.read' ] })
// };
// exports.google_callback = (req, res)=>{
//     console.log('2');
//   passport.authenticate('google', { failureRedirect: '/' }),
//   function(req, res) {
//     // res.redirect('/account');
//     res.status(500).json('ssss');
//   };
// }
exports.google_auth = (req, res) => {
  console.log("save-0");
  console.log(req.body.providerId);
  Client.findOne({ providerUserID: req.body.providerId, logtype: 1 }, function (
    err,
    client
  ) {
    if (err) {
      return res.status(400).json("400 error");
    }
    //No user was found... so create a new user with values from Facebook (all the profile. stuff)
    if (!client) {
      console.log("save-1");
      client = new Client({
        fullname: req.body.fullname,
        email: req.body.email,
        providerUserID: req.body.providerId,
        logtype: 1,
        //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
        // facebook: profile._json
      });
      console.log("save-2");
      client.save(function (err) {
        if (err) console.log(err);
        res.status(200).json({ token: req.body.providerId }); // return done(err, client);
        // res.status(200).json("Google Registered successfully");
      });
    } else {
      // const token = client.generateJwt();
      console.log("save-3");
      res.status(200).json({ token: req.body.providerId }); // return done(err, client);
      // res.status(200).json({token});
    }
  });
};
exports.facebook_auth = (req, res) => {
  console.log("save-0");
  console.log(req.body.providerId);
  Client.findOne({ providerUserID: req.body.providerId, logtype: 2 }, function (
    err,
    client
  ) {
    if (err) {
      return res.status(400).json("400 error");
    }
    //No user was found... so create a new user with values from Facebook (all the profile. stuff)
    if (!client) {
      console.log("save-1");
      client = new Client({
        fullname: req.body.fullname,
        email: req.body.email,
        providerUserID: req.body.providerId,
        logtype: 2,
        //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
        // facebook: profile._json
      });
      console.log("save-2");
      client.save(function (err) {
        if (err) console.log(err);
        res.status(200).json({ token: req.body.providerId }); // return done(err, client);
        // res.status(200).json("Google Registered successfully");
      });
    } else {
      // const token = client.generateJwt();
      console.log("save-3");
      res.status(200).json({ token: req.body.providerId }); // return done(err, client);
      // res.status(200).json({token});
    }
  });
};
exports.login = (req, res) => {
  console.log("login1");
  if (!req.body.email || !req.body.hash) {
    return res.status(400).json(req.body.email);
  }
  console.log("login2");
  passport.authenticate("client", (err, client, info) => {
    console.log(client);
    let token;
    if (err) {
      console.log("err");
      return res.status(500).json(err);
    }
    if (client) {
      console.log("client");
      token = client.generateJwt();
      res.status(200).json({ token });
    } else {
      console.log("login3");
      res.status(401).json(info);
    }
  })(req, res);
};
exports.addMulti = (req, res) => {
  var jsonArr = [];
  jsonArr = JSON.parse(req.body.json);
  var infoArr = [];
  jsonArr.forEach((element, index) => {
    Client.findOne({ email: element[" email "] }).then((user) => {
      if (user) {
        infoArr.push("Failed : " + index + "th is existed email");
      } else {
        const user = new Client();
        if (element[" fullname "]) user.fullname = element[" fullname "];
        if (element[" email "]) user.email = element[" email "];
        if (element[" phone "]) user.phone = element[" phone "];
        if (element[" clientLocation "])
          user.clientLocation = element[" clientLocation "];
        if (element[" weddingDate "])
          user.weddingDate = element[" weddingDate "];
        if (element[" weddingCity "])
          user.weddingCity = element[" weddingCity "];
        if (element[" brideName "]) user.brideName = element[" brideName "];
        if (element[" groomName "]) user.groomName = element[" groomName "];
        if (element[" position "]) user.position = element[" position "];
        user.setPassword("123456");
        user.save((err) => {
          if (err) {
            // res.status(500).json(err);
            infoArr.push("Error 500: " + err);
          } else {
            // const token = user.generateJwt();
            // res.status(200).json("Registered successfully");
            infoArr.push("Success 200: " + index);
          }
        });
      }
    });
  });
  res.status(200).json(infoArr);
};
exports.update = (req, res) => {
  var role = req.type;
  var clientId = req.clientId;
  if (role == 0) {
    Client.findById(req.params.id, function (err, client) {
      if (!client) res.status(404).send("data is not found");
      else Object.assign(client, req.body);
      console.log(client);
      console.log(req.body);
      client.setPassword(req.body.hash);
      client
        .save()
        .then((client) => {
          res.json("client updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    });
  } else {
    if (clientId == req.params.id) {
      Client.findById(req.params.id, function (err, client) {
        if (!client) res.status(404).send("data is not found");
        else Object.assign(client, req.body);
        client.setPassword(req.body.hash);
        client
          .save()
          .then((client) => {
            res.json("client updated!");
          })
          .catch((err) => {
            res.status(400).send("Update not possible");
          });
      });
    } else {
      res.json("You are not owner of this profile. So you cannot update");
    }
  }
};
exports.updateProfile = (req, res) => {
  // var role = req.type;
  // var clientId = req.clientId;
  // if (role == 0){
  console.log(req.body, "body");
  Client.findById(req.body._id, function (err, client) {
    if (!client) res.status(404).send("data is not found");
    else Object.assign(client, req.body);
    // client.setPassword(req.body.hash);
    client
      .save()
      .then((client) => {
        res.json("client updated!");
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
};
exports.delete = (req, res) => {
  var clientId = req.clientId;
  var role = req.type;
  if (role == 0) {
    Client.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
      if (err) res.json(err);
      else res.json("Successfully removed");
    });
  } else if (role == 2) {
    if (clientId == req.params.id) {
      Client.findByIdAndRemove({ _id: req.params.id }, function (
        err,
        business
      ) {
        if (err) res.json(err);
        else res.json("Successfully removed");
      });
    } else {
      res.json("You are not owner of this profile. You are not permited");
    }
  } else {
    res.json("you are not permited , cannot delete !");
  }
};
exports.findById = (req, res) => {
  var role = req.logtype;
  // console.log(req.userId)
  if (role == 0) {
    Client.findById(req.userId, function (err, client) {
      if (!client) res.status(500).send("data is not found");
      else res.status(200).json(client);
    });
  } else {
    // res.json('you are not admin , cannot access !');
    console.log("abc");
    // console.log(req.headers.token)
    Client.findOne({ providerUserID: req.providerId }, function (err, client) {
      if (!client) res.status(500).send("data is not found");
      else res.status(200).json(client);
    });
  }
};
exports.getAll = (req, res) => {
  Client.find({}, function (err, client) {
    if (err) {
      console.log(err);
    } else {
      console.log(client, "clients List");
      res.json(client);
    }
  });
};
exports.updateClientVendor = (req, res) => {
  console.log(req.body, "body");
  // var role = req.type;
  // var clientId = req.clientId;
  // if (role == 0){
  Client.findOne({ email: req.body.tempEmail }, function (err, client) {
    if (!client) res.status(404).send("data is not found");
    else Object.assign(client, req.body);
    // client.setPassword(req.body.hash);
    client
      .save()
      .then((client) => {
        res.json("client updated!");
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
};
exports.delClient = (req, res) => {
  Client.findOneAndRemove({ email: req.body.email }, function (err, client) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
};

// verify
exports.emailverify = (req, res) => {
  console.log("  sdjklfsjdklfjsadl;fjsda;fjsa;lfj;sf;js");
  let HelperOptions = {
    from: "Verify Notification",
    to: req.body.email,
    subject: "Verify Notification",
    text: "Verfiy Code :" + req.body.code,
  };
  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(401).json(error);
    } else {
      return res.status(200).json(info);
    }
    // console.log('bbb');
  });
};
exports.phoneverify = (req, res) => {
  const nexmo = new Nexmo({
    apiKey: "23fe25b0",
    apiSecret: "OV2v0WxOO13iLtQL",
  });

  const from = 8613322166930;
  // const to = (Number)(req.body.phone);
  const to = 8613322166930;
  const text = req.body.code;
  nexmo.message.sendSms(
    from,
    to,
    text,
    { type: "unicode" },
    (err, responseData) => {
      if (err) {
        console.log(err);
        return res.status(401).json(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          console.log("Message sent successfully.");
          return res.status(200).json("Message sent successfully.");
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`
          );
          return res
            .status(200)
            .json(
              `Message failed with error: ${responseData.messages[0]["error-text"]}`
            );
        }
      }
    }
  );
};
exports.setPhone = (req, res) => {
  Client.findById(req.body.id, function (err, client) {
    if (!client) res.status(500).send("data is not found");
    else {
      client.verifyStatus.phoneVerify = true;
      client
        .save()
        .then((user) => {
          res.json("user updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
};
exports.setPhoneEmail = (req, res) => {
  Client.findOne({ email: req.email }, function (err, client) {
    if (!client) res.status(500).send("data is not found");
    else {
      client.verifyStatus.phoneVerify = true;
      client
        .save()
        .then((user) => {
          res.json("user updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
};
exports.setEmail = (req, res) => {
  Client.findById(req.body.id, function (err, client) {
    if (!client) res.status(500).send("data is not found");
    else {
      client.verifyStatus.emailVerify = true;
      client
        .save()
        .then((user) => {
          res.json("user updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
};
