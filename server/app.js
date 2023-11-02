const express = require('express')
const app = express()
const port = 5000;
const data = require('./data')
const cors = require('cors')

// if you don't want to show cros error then use cors-express
app.use(cors())

//Availabe Routes
app.get('/', (req, res) => {
    res.json(data);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port} : http://localhost:${port}`)

})
