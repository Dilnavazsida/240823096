const express = require("express")
const app = express();
const port = 80
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("request get successfully")
})

app.post("/show/:id",(req,res)=>{
    res.send(`Hello Mca Students \n ID : ${req.params.id}`);
})

app.put("/update/:id",(req,res)=>{
    res.send(`Student id Successfully Updated \n ID : ${req.params.id}`);
})

app.delete("/delete/:id",(req,res)=>{
    res.send(`Student id Successfully Deleted \n ID : ${req.params.id}`);
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})




