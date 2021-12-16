const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: '38fca8ee95af4a529bd13b09092498a6',
  captureUncaught: true,
  captureUnhandledRejections: true
});

let students = []

app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/js', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/functions.js'))
})

app.get('/css', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/styles.css'))
})

app.post('/api/student', (req,res) => {
    let {name} = req.body
    name = name.trim()

    students.push(name)
    rollbar.log('Student added successfully', {author: 'Connor', type: 'manual'})

    res.status(200).send(students)
})


app.use(rollbar.errorHandler())
const port = process.env.PORT || 9505
app.listen(port, () => console.log(`We are up and running on port ${port}`))