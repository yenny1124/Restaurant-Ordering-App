const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()

const routes = require("./routes/routes")
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
    res.send('Jamies Project')
})

mongoose.connect("mongodb+srv://yenny1124:4237@cluster0.mtzjf.mongodb.net/Products?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

app.use("/api", routes)

app.listen(3004, () => {
    console.log("Server is Running")
})