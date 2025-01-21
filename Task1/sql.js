let sql=require("mysql2")

let connection=sql.createConnection({
    host:"localhost",
    user:"root",
    database:"mahesh",
    password:"123456"
})

connection.connect((err)=>{
    if(err){
        console.log("Error Occured")
    }else{
        console.log("mysql connected")
    }
})

module.exports=connection