const mongoose = require('mongoose');

 


const btechSchema =new mongoose.Schema({
    name: {type:String, 
        required: true,
    },

	email: {
        type:String, 
        required: true,
         
        },
    number: {
        type:String, 
        required: true
    },
    address: {type:String, 
        required: true,
    },
    college: {type:String, 
        required: true,
    },
    course: {type:String, 
        required: true,
    },
    user_id:{
        type:String,
        
    },
    status:{
        type:String,
        default:"pending"
    }
     
    
    
},{timestamps:true});


var btechModel = mongoose.model('btech', btechSchema);
module.exports=btechModel;
