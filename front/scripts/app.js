const express = require("express");
const tempData = require("./tempData");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/movies", (req,res)=>{
    res.json(tempData);
});

app.listen(PORT, () =>{
    console.log(`Server listening on http://localhost: $(PORT)`)
});