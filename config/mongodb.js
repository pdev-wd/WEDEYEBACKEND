var mongoose = require("mongoose");

module.exports = async () => {
  // const url = process.env.MONGO_URI;
  // const uri = 'mongodb+srv://super:super@cluster0-qjx5y.mongodb.net/test?retryWrites=true&w=majority';
  // const uri = "mongodb+srv://superpanda:superpanda@cluster0-qjx5y.mongodb.net/test?retryWrites=true&w=majority";
  // var uri = ",cluster0-shard-00-01-qjx5y.mongodb.net:27017,cluster0-shard-00-02-qjx5y.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
  // const mongoURI = "mongodb+srv://superpanda:rams1998727@cluster0-qjx5y.mongodb.net/test?retryWrites=true&w=majority";
  // mongoose.Promise = global.Promise

  // return mongoose.connect('mongodb+srv://SuperPunch:rams1998727@cluster0-tkxxn.mongodb.net/WedDB', { useNewUrlParser: true, useUnifiedTopology: true })
  // return mongoose.connect('mongodb+srv://WedDB:lrLzmwzcoXfSoemN@cluster0-67jpz.mongodb.net/WedDB', { useNewUrlParser: true, useUnifiedTopology: true })
  return await mongoose
    .connect("mongodb://127.0.0.1:27017/tree_fort", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    // return await mongoose.connect('mongodb+srv://super:super@cluster0-qjx5y.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology:true})
    // return await mongoose.connect( mongoURI,mongo)
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));
};
