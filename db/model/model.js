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

module.exports.getSpecificBrand = (params,callback) => {

  McDatas.find({ brand: params.brand },(err, success) => {
    callback(err, success)
  })
}

// test getData 
// getData({brand: "BMW"},
//   (err, McDatas) => {
//     if (err) {console.error(err)}
//     else {console.log(McDatas)}
//   } 
// )

module.exports.getMultipleBrands = (params,callback) => {
  McDatas.find({ brand: {$in: JSON.parse(params.brands)}},(err, success) => {
    callback(err, success)
  })
}

// getMultipleBrands(["BMW", "Buell"], (err, success) => {
//     if(err) {console.log(err)}
//     if(success) {console.log(success)} 
//   } 
// )

module.exports.getAllData = (callback) => {

  McDatas.find((err, success) => {
    callback(err, success)
  })
}

// // test getData 
// getAllData((err, McDatas) => {
//     if (err) {console.error(err)}
//     else {console.log(McDatas)}
//   } 
// )





