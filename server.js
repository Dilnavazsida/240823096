const express = require("express");
const app = express();
const studentRoute = require("./routes/studentRoute");
const  port = 80;
app.use(express.json());


app.use("/student",studentRoute)

app.listen(port,()=>{
    console.log(`Server running in http://localhost${port}`)
})
