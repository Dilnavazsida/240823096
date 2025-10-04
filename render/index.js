const express = require("express")
const app = express()
const port = 80
app.get("/",(req,res)=>{
    res.send("Hello My Name is Dilnavaz Sida i am Student of MCA 3rd Semaster At Atmiya University")
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on http://localhost:${port}`);
})