exports.index = (req,res)=>{
    res.send("Hello Mca Student")
}

exports.show = (req,res) =>{
    res.send(`showing data for id : ${req.params.id}`)
}

exports.store = (req,res)=>{
    res.send(`data received : ${req.body.name}, ${req.body.city}`)
}