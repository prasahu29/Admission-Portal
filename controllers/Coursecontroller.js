 
 
const btechModel = require('../models/btech.js');
const userModel = require('../models/user.js');
 
class Coursecontroller {

   
    static btech = async (req, res) => {
        try{
            const data = req.user
            const result = await userModel.findOne()
        
        res.render('course/btech',{data1:data});
        }catch(error){
            //console.log(error);
        }
    }


    static btechinsert = async (req, res) => {
        //console.log(req.body);
    
        try {
            const { name, email, number, address , college, course,  user_id} = req.body
            
            
    
            const result = new btechModel({
                name: name,
                email: email,
                number: number,
                address: address,
                 
                college: college,
                course: course,
                 
                user_id: user_id
            })
            //save data
            await result.save()
            req.flash('error' , 'sign up successfully')
            res.redirect('/course/displaybtech')
        
    
        } catch (err) {
            console.log(err);
        }
    }
    
    static displaybtech = async (req, res) => {
        try{
            const {_id,username} = req.user;
            const result = await btechModel.find({user_id:_id})
        //console.log(result);
        res.render('course/displaybtech', { data1: result ,data:username })
    }catch(error){
        console.log(err);
    }
    
    }
    
    static btechview = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await btechModel.findById(req.params.id)
            res.render('course/view', { data1: result });
        } catch (err) {
            console.log(err);
        }
    }
    static btechedit = async(req,res)=>{
        // console.log(req.params.id)
        try{
            const {_id} = req.user
            const result = await btechModel.findOne({user_id:_id})
            console.log();
            res.render('course/edit',{data1:result});
        
        }catch(error){
            //console.log(error);
        }
        
        
    }
    static btechupdate = async(req , res)=>{
        //console.log(req.params.id);
        console.log(req.body);
        try{
            const result = await btechModel.findByIdAndUpdate(req.params.id, req.body)
            
            res.redirect('/course/displaybtech')
        }catch(error){
            console.log(error);
        
    }
    }
    //M.Tech 
    static mtech = async (req, res) => {
        try{
            const data = req.user
            const result = await userModel.findOne()
        
        res.render('course/mtech',{data1:data});
        }catch(error){
            //console.log(error);
        }
    
    }
    
    //mba
    static mba = async (req, res) => {
        try{
            const data = req.user
            const result = await userModel.findOne()
        
        res.render('course/mba',{data1:data});
        }catch(error){
            //console.log(error);
        }
    //law

    
    }


    static law = async (req, res) => {
        try{
            const data = req.user
            const result = await userModel.findOne()
        
        res.render('course/law',{data1:data});
        }catch(error){
            //console.log(error);
        }}
    
    }
    module.exports = Coursecontroller
    