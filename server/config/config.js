//const mongoose = require('mongoose');

///const connectDB = async () => {
  //const url = process.env.MONGO_URI;
  //mongoose.connect(url)
    //.then(() => {
      //console.log("MongoDB connected");
    //})
    //.catch((error) => console.log(error));
//}

//module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async () => {
  const url = process.env.MONGO_URI;
  console.log("Database URL:", url);  // This should log the correct MongoDB URI
  mongoose.connect(url)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((error) => console.log("Error connecting to MongoDB:", error));
}

module.exports = connectDB;
