const express = require('express')
const app = express()
const port = 3444
const controller = require('./controller/controller')

console.log(`${__dirname}/client/dist`)

// app.use(express.static(`${__dirname}/client/dist`))
app.use(express.static(`./client/dist`))



app.get('/brand/:brand', controller.getSpecificBrand )
// http://localhost:3444/brand/BMW

app.get('/allbrands', controller.getAllData )
//http://localhost:3444/allbrands

app.get('/MultipleBrands/:brands', controller.getMultipleBrands )
// http://localhost:3444/MultipleBrands/["BMW","Buell","Victory"]

app.listen(port, () => console.log(`Example app listening on port ${port}!`))