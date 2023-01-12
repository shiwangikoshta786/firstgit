const mongoose = require("mongoose") ;
var Schema = mongoose.Schema;

var itemSchema = new Schema({
   
    "title" : { type: String },
    "description" : { type: String },
    "location" : { type: String },
    "salary" : { type: Number },
    
   
    
}, { collection: 'jobLogDetails' });
 const Details = mongoose.model('jobLogDetails', itemSchema);

 module.exports = Details