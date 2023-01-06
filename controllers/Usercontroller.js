const bcrypt = require('bcryptjs')
const btechModel = require('../models/btech.js')
const userModel = require('../models/user.js')


class usercontroller {
    static signup = async (req, res) => {
        res.render('/signup', { message: req.flash('error') })

    }



    static userinsert = async (req, res) => {
        // console.log(req.body)
        const { username, email, password, passconfirm } = req.body
        const user = await userModel.findOne({ email: email })//first email schemal ka  second form ka hai
        if (user) {
            req.flash('error', ' this email is already exists :(((😃')
            return res.redirect('/form')
        } else {
            if (username && email && password && passconfirm) {
                if (password === passconfirm) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password, salt)

                        const doc = new userModel({
                            username: username,
                            email: email,
                            password: hashPassword
                            
                        })
                        const token = await doc.generateAuthToken();
                        console.log(token)

                       


                    } catch (error) {
                        console.log(error)
                    }

                } else {
                    req.flash('error', 'Password & Confirmed are not matched')
                    return res.redirect('/form')
                }


            } else {
                req.flash('error', 'FILL ALL REQUIREMENTS ')
                return res.redirect('/form')
            }

        }
    }



    static login = async (req, res) => {
        res.render('/login', { message: req.flash('error') })

    }




    static userlogin = async (req, res) => {
        // console.log(req.body)

        try {
            const { email, password } = req.body
            if (email && password) {
                const user = await userModel.findOne({ email: email })
                if (user != null) {
                    const isMatch = await bcrypt.compare(password, user.password)
                    if ((user.email == email) && isMatch) {
                        console.log(user)
                        if (user.role==1){
                            const token = await user.generateAuthToken();
                        res.cookie('jwt',token)
                        res.redirect('/website/dashboard')

                        }


                        if (user.role==0){
                            const token = await user.generateAuthToken();
                        res.cookie('jwt',token)
                        res.redirect('/admin_college/dashboard')

                        }
                        
                        else{
                            req.flash('error', 'email or password not matched 😥🤔')
                            res.redirect('/')

                        }

                        
                        
                    } 
                } else {
                    req.flash('error', 'you are not a registered user 😬')
                    res.redirect('/')

                }
            }

        } catch (error) {
            console.log(error)
        }
    }


     



    static dashboard = async (req, res) => {
        try{
            const {_id, username, email, password } = req.user;
            const data = req.user
            
            var  register= await btechModel.findOne({course:'B.Tech', user_id:_id})
            //console.log(register)
            
            var  register1= await btechModel.findOne({course:'MBA',user_id:_id})
            var  register2= await btechModel.findOne({course:'M.Tech',user_id:_id})
            var  register3= await btechModel.findOne({course:'LAW',user_id:_id})
            const result = await userModel.findOne()
        
        res.render('website/dashboard',{data1:data ,register:register,register1:register1,register2:register2,register3:register3,u:username});
        }catch(error){
            //console.log(error);
        }
    }

    
     
      
    static logout = async (req, res) => {
        try{
           
          res.clearCookie("jwt");
          // console.log("Logout Successfully")
          res.redirect('/')
        }catch(error){
          res.status(500).send(error);
        }
      };
      

}

module.exports = usercontroller;