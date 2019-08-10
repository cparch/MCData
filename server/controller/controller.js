const model = require('../../db/model/model')

module.exports.getData = (req, res) => {
  model.getData((err, success) => {
    if(err) {
      console.log(err);
      res.status(500).end()
    } else {
      console.log('data obtained from db')
      res.send(success).status(200).end()
    }
  })
}

