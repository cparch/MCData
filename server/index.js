const express = require('express')
const app = express()
const port = 3444
const controller = require('./controller/controller')

app.get('/brand/:brand', controller.getSpecificBrand )
// http://localhost:3444/brand/BMW

app.get('/allbrands', controller.getAllData )
//http://localhost:3444/allbrands

app.get('/MultipleBrands/:brands', controller.getMultipleBrands )
// http://localhost:3444/MultipleBrands/["BMW","Buell","Victory"]

app.listen(port, () => console.log(`Example app listening on port ${port}!`))