const express = require("express")
const cors = require("cors")
require("dotenv").config() // process.env.ENV_VAR_
const app = express()
const PORT = 8080
app.use(cors())

app.get('/', (req, res) =>{
    return res.status(200).json({status: "running"})
})


// ## RUNNER ##
app.listen(PORT, (error) =>{
    if (error) {
        console.warn(error);
    }
    else{
        console.log("Backend server is running on port --> ", PORT);
    }
})