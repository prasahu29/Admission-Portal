const contactModel = require('../models/contact.js')

class contactcontroller{
    static contact= async(req,res)=>{
        const { name, email, message} = req.body
        const doc = new contactModel({

            name: name,
            email: email,
            message:message
    
        })
        await doc.save()
         
        return res.redirect('/website/dashboard')
    }

}
exports.default = contactcontroller;