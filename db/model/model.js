const mongoose = require('mongoose');
const db = require('../index');

const mcdDataSchema = new mongoose.Schema({
  brand: String,
  model: String,
  horsepower: String,
  torque: String,
  quartermile: String,
  weight: String
});

const McDatas = mongoose.model('McDatas', mcdDataSchema);

module.exports.getData = (callback) => {

  McDatas.find((err, success) => {
    callback(err, success)
  })
}

// // test getData 
// getData(
//   (err, McDatas) => {
//     if (err) {console.error(err)}
//     else {console.log(McDatas)}
//   } 
// )




