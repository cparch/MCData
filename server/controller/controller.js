const model = require('../../db/model/model')

module.exports.getSpecificBrand = (req, res) => {
  model.getSpecificBrand(req.params, (err, success) => {
    if(err) {
      console.log(err);
      res.status(500).end()
    } else {
      console.log('Brand specific data obtained from db')
      res.send(success).status(200).end()
    }
  })
}

module.exports.getAllData = (req, res) => {
  model.getAllData((err, success) => {
    if(err) {
      console.log(err);
      res.status(500).end();
    } else {
      console.log('Obtained all Data from db')
      res.send(success)
    }
  })
}

module.exports.getMultipleBrands = (req, res) => {
  model.getMultipleBrands(req.params, (err, success) => {
    if(err){
      console.log(err);
      res.status(500).end();
    } else {
      res.send(success);
      console.log("obtained Data for multiple brands")
    }
  })
}