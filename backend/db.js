const mongoose = require("mongoose");

const url =
  "mongodb://saiadithya:sri2928@cluster0-shard-00-00.dov8s.mongodb.net:27017,cluster0-shard-00-01.dov8s.mongodb.net:27017,cluster0-shard-00-02.dov8s.mongodb.net:27017/quora-clone?ssl=true&replicaSet=atlas-4vv6bs-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};