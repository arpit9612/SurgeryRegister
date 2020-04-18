const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'username',
    password : 'password',
    database : 'aau'

})

pool.getConnection((err)=>{
    if (err)
        console.log('connection faild'+JSON.stringify(err , undefined ,2));
    else
        console.log("connected successfuly");
    

})





app.get('/', function(req , res){
    res.send("Hello From Server.");

})

app.get('/Dropdown/SurgerySite', function(req , res){
    pool.query("CALL aau.sp_GetSurgerySite();", (error , rows)=>{
        if(error) {
            console.log(error);
        }
        else{
            result = rows[0];
            res.status(200).send(result);
        }
        
    });
})   
    
  





app.get('/Dropdown/Surgeon', function(req , res){
    pool.query("CALL aau.sp_GetSurgeon();", (error , rows)=>{
        
        if(error){
        console.log(error);

        }
        else{
            result = rows[0];
            res.status(200).send(result);
        }
        
    });
  

})




app.get('/Dropdown/Antibiotic', function(req , res){
    res.send( [
        {id: 1 , viewValue: 'Yes'},
        {id: 2 , viewValue: 'NO'},
      ]);
  

})



app.post('/Surgery/SurgeryRegisterSubmit' , function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"Data Recieved"});
})





app.listen(PORT , function(){
    console.log("Server running on the localhost:"+PORT);

});




