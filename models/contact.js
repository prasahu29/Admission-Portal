const mongoose = require('mongoose');

 


const contactSchema =new mongoose.Schema({
    name: {type:String, 
        required: true,
    },

	email: {
        type:String, 
        required: true,
        unique: true, 
        },
    message: {
        type:String, 
        required: true
    },
     
    
    
},{timestamps:true});


 

  



var contactModel = mongoose.model('Messages', contactSchema);
module.exports=contactModel;
