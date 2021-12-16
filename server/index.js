const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())


app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/js', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/functions.js'))
})

app.get('/css', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'))
})


const port = process.env.PORT || 9505
app.listen(port, () => console.log(`We are up and running on port ${port}`))