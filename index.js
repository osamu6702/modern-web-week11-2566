const express = require ('express')
const app = express()

//http://localhost:3000/
app.get('/',(req,res) => {
    res.send('Home Page')
})
app.get('/about',function (req,res) {
    res.send('About Page')
})

const port = 3000
app.listen(3000,function () {
    console.log (`Server running ate http://localhost:3000:${port}`) ;
} ) 