let express=require("express")
let app=express()
// let connection=require("./sql.js")
let sql=require("mysql2")

let connection=sql.createConnection({
    host:"localhost",
    user:"root",
    database:"mahesh",
    password:"123456"
})


app.get("/database",(req,res)=>{
    connection.connect((err)=>{
        if(err){
            res.send(err.message)
        }else{
            res.send("mysql connected")
        }
    })
})

app.listen(3005,()=>{
    console.log("server started")
})