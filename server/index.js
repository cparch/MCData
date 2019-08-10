const express = require('express')
const app = express()
const port = 3444
const controller = require('./controller/controller')

app.get('/', controller.getData )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))