const { string } = require("joi");
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Dilnavazsida:DILnavaz12@mca.2alnppp.mongodb.net/?retryWrites=true&w=majority&appName=mca",{
    
});

const songSchema = new mongoose.Schema({
    title:String,
    artist:String,
    category:String,
    album:String,
    url:String,
    photo:String,
    year:Number
});


const Song = mongoose.model("song",songSchema);
console.log("Song model created Successfully ")


// enter data 

// const newSong = new Song({
//     title:"sayaara",
//     artist:"Arigit singh",
//     category:"patrotic",
//     album:"petrotic",
//     url:"https://youtu.be/WfqMmypbACg?si=X3k8lLOtijUwRjHy",
//     photo:"https:pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
//     year:2024,
// });


// newSong.save().then(()=>{
//     console.log("new song added Successfully ");
// }).catch((error)=>{
//     console.log("error is ",error);
// });


Song.find()
.then((allSong)=>{
    console.log("All Song Retrieved Successfully : ",allSong);
}).catch((error)=>{
    console.log("error retrieving Song ",error)
});