const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "Restaurant",
  }).then(() => {
    console.log(`Connected to database successfully`);
  }).catch(err => {
    console.log(`Some error occured ${err}`)
  })
}

module.exports = dbConnection;