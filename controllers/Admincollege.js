const btechModel = require('../models/btech.js')

class Admincollege {

    static dashboard = async (req, res) => {
        try {

            const result = await btechModel.find()
            res.render('admin_college/dashboard', { data1: result });

        } catch (error) {
            console.log(error)
        }

    }
    

    static edit = async (req, res) => {
        const doc = await btechModel.findById(req.params.id)

        res.render('admin_college/edit',{ data1: doc });
        // 
    }

    static update = async (req, res) => {


        const doc = await btechModel.findByIdAndUpdate(req.params.id, {

            name: req.body.na,
            email: req.body.em,
            number: req.body.ph,
            address: req.body.a,
            college: req.body.coll,
            course: req.body.cour


        })
        await doc.save()
        res.redirect('/admin_college/dashboard')

    }






    static delete = async (req, res) => {
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const doc = await btechModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin_college/dashboard')
        } catch (error) {
            console.log(error)
        }
    }


    static logout = async (req, res) => {
        try{
           
          res.clearCookie("jwt");
           
          res.redirect('/')
        }catch(error){
          res.status(500).send(error);
        }
      };
}


module.exports = Admincollege;