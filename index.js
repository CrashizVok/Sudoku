const express = require("express")
const cors = require("cors")
require("dotenv").config() // process.env.ENV_VAR_
const app = express()
const PORT = 8080
app.use(cors())



// GET "/"
app.get('/', (req, res) =>{
    return res.status(200).json({status: "running"})
})

// GET "/sudoku" 
app.get("/sudoku",async (req, res) =>{
    const apikey = process?.env.NINJA_API_KEY;
    //TODO re.body, difficulty, width, height
    const difficulty = "medium"
    const width = 3
    const height = 3

    const json = await fetch(`https://api.api-ninjas.com/v1/sudokugenerate?difficulty=${difficulty}&width=${width}&height=${height}`,{
        method: "GET",
        headers:{
            "X-Api-Key" : apikey
        }
    })
    if (json.ok) {
        const data = await json.json()
        console.log("data", data);
        return res.status(200).json(data)
    }
    else{
        warn(json)
        return res.status(400).json(json)
    }    
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