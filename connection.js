const mongoose = require("mongoose")

mongoose.connect("add yours",{
  
});

const studentSchema = new mongoose.Schema({
    name:String,
    department:String,
    startYear:Number,
    endYear:Number,
    enrollment:Number,
    address:String,
});

const Student = mongoose.model("Student",studentSchema)

console.log("mongoDB Connected Successfully")


const student = Student({
    name : "Dilnavaz Sida",
    department:"Computer Science",
    startYear:2024,
    endYear:2026,
    enrollment:240823096,
    address:"juncation Plot Rajkot"
});

student.save().then(()=>{
    console.log("Student Data Saved Successfully");
}).catch((error)=>{
    console.log("Error is : ",error);
});
