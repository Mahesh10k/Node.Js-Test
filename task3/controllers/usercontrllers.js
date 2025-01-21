let models=require("../models/model.js")


exports.getUsers=async(req,res)=>{
    try{
        let data=await models.getUsers()
        res.send(data)
    }catch(err){
        res.send(err)
    }
}

exports.createUser=async(req,res)=>{
   try{
    let data=await models.createUser(userDetails)
    res.send(data)
   }catch(err){
    res.send(err)
   }
}