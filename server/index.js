const express = require('express')
const app = express()
const port = 5000;
const data = require('./data')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
require('./models/model')
// if you don't want to show cros error then use cors-express
app.use(cors())
// const corsConfig = {
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE']
// }
// app.use(cors(corsConfig))
// app.options("", cors(corsConfig))

//middleware:Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
app.use(express.json());

//Availabe Routes
app.use(require("./routes/auth"));

app.get('/', (req, res) => {
    res.json(data);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port} : http://localhost:${port}`)
    // console.log(process.env.DB_URL)
    mongoose.connect(process.env.DB_URL);
    mongoose.connection.on("connected", () => {
        console.log("successfully connected to mongo")
    })
    mongoose.connection.on("error", () => {
        console.log("not connected to mongo")
    })

})
