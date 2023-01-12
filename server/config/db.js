const mongoose = require("mongoose") ;


const connection = mongoose.connect("mongodb://localhost:27017/SaveJob",
	{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>(console.log("connected successfully😊")))
.catch((err)=>(err))

module.exports = connection;
