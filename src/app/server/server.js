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
    user : 'root',
    password : '1234',
    database : 'aau',
    multipleStatements : true
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
        {id: "Yes" , Antibiotics: 'Yes'},
        {id: "NO" , Antibiotics: 'NO'},
      ]);
  

})

app.get('/Dropdown/SurgeryType', function(req , res){
    pool.query("CALL aau.sp_GetSurgeryType();", (error , rows)=>{
        
        if(error){
        console.log(error);

        }
        else{
            result = rows[0];
            res.status(200).send(result);
        }
        
    });
  

})



app.post('/Surgery' ,function(req,res){
              
		var success = 0;
        var surgeryId = 0;
        var SurgeryDate = req.body.SurgeryDate;
        //SurgeryDate = formatDate(SurgeryDate);
        var DiedDate = req.body.Died;
        //DiedDate = formatDate(DiedDate);
		var query = "CALL AAU.sp_InsertSurgery (?,?,?,?,?,?,?,?,?,?,?,?,@surgeryId, @success); SELECT @surgeryId, @success;";
		var params =[
                        req.body.TagNumber,
                        req.body.EmergencyNumber,
                        req.body.AnimalType,
                        SurgeryDate.substr(0,19)||null,
                        req.body.SurgeonId,
                        req.body.SurgerySiteId,
                        req.body.AnesthesiaMinutes,
                        req.body.SurgeryTypeId,
                        DiedDate.substr(0,19)||null,
                        req.body.DeathComment,
                        req.body.AntibioticsGiven,
                        req.body.Comment,
                        surgeryId,
                        success
                    ];

        pool.query(query, params ,(error , rows)=>{
            if(error){
                console.log(error);
            }            
            else{
                console.log("data stored successfully.");
                
            }
        });
        
        
})


app.put('/Surgery' ,function(req,res){
    console.log("hello");          
    var success = 0;
    var SurgeryDate = req.body.SurgeryDate;
    //SurgeryDate = formatDate(SurgeryDate);
    var DiedDate = req.body.Died;
    //DiedDate = formatDate(DiedDate);
    var query = "CALL AAU.sp_UpdateSurgery (?,?,?,?,?,?,?,?,?,?,?,?,?, @success); SELECT @success;";
    var params =[
                    req.body.SurgeryId,
                    req.body.TagNumber,
                    req.body.EmergencyNumber,
                    req.body.AnimalType,
                    SurgeryDate.substr(0,19)||null,
                    req.body.SurgeonId,
                    req.body.SurgerySiteId,
                    req.body.AnesthesiaMinutes,
                    req.body.SurgeryTypeId,
                    DiedDate.substr(0,19)||null,
                    req.body.DeathComment,
                    req.body.AntibioticsGiven,
                    req.body.Comment,
                    success
                ];

    pool.query(query, params ,(error)=>{
        if(error){
            console.log(error);
        }            
        else{
            console.log("data stored successfully.");
            
        }
    });
    
    
})

function formatDate(date){
	var vDate = date.split("/");

	try
	{

		vDate = new Date(vDate[2], vDate[1] - 1, vDate[0]);
	}
	catch(err)
	{
		logger.log({level: "error", message: "CaseModel: Insert Case: " + err});
	}

   return vDate;
}

app.get('/Surgery', function(req , res){
    var query = "CALL AAU.sp_getSurgeryById(?)";
    var params = [
        req.query.surgeryId
    ];
     pool.query(query,params, (error , rows)=>{
            
        if(error){
             console.log(error);
         }

        else{
            res.send(rows[0]);
        }
        
            
     });
      
    // res.send(req.query.surgeryId);
    
})
    




app.listen(PORT , function(){
    console.log("Server running on the localhost:"+PORT);

});





