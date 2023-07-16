const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT


app.get('/',(req,res) => {
    res.send('hello world! again')
})

app.listen(PORT , () => {
    console.log('http://localhost:3000')
})

module.exports = app