
const express = require("express") ;
const app = express();
const  Details = require("../models/saveJobLog") ;

const moment = require("moment") ;
const connection = require("../config/db") 



app.use(express.json())

app.use(express.urlencoded({extended: true}))

 exports. App = async(req,res)=>{
	try {
	const input = req.body


	let{title,description,location,salary } = input

	if(!(title && description && location && salary))
	{
		return res.status(404).send({"data":"title && description && location && salary are required"})
	} 

	const value = await Details.create({title,description,location,salary})
	console.log(value._id)
	
	return res.status(200).send({"status":"done" , "message":"inserted sucessfully!" ,"data": value })
	} catch (error) {
		console.log(error)

		return res.status(500).send({"status":"false", "data":[]})
	}

		
        

}


exports. Api = async(req,res)=>{

	try {
	
	const data = await Details.find({})
		
	return res.status(200).send({"status":true , "data":"found!", "Records": data })
		
		
	   
	} catch (e) {
		

return res.status(500).send({"status":false ,  "data":"something went wrong!!" , "error": e  })
	

	}



}

