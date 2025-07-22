require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./Config/corsOption")
const mongoose = require("mongoose")
const condb = require("./Config/connectDB")
const app = express()
condb()

const PORT = process.env.PORT || 7000
//middelwares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

//routes
app.use("/auth", require("./route/authRoute"))
app.use("/clients", require("./route/clientsRoute"))
//mongoose 
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})
app.listen(PORT, () => { console.log(`Server run on ${PORT}`) })