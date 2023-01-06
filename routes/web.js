const express = require('express');
const router = express.Router();
const {home,form} = require('../controllers/Frontcontroller.js');
const usercontroller = require('../controllers/Usercontroller.js');
const Coursecontroller=require('../controllers/Coursecontroller')
const Admincollege=require('../controllers/Admincollege.js')
const { default: Contactcontroller } = require('../controllers/Contactcontroller.js');
const auth = require('../middleware/auth.js')
//router 
router.get('/',home)
router.get('/form',form)


//usercontroler
router.get('/signup',usercontroller.signup)
router.post('/insert',usercontroller.userinsert)

router.get('/login',usercontroller.login)
router.post('/login12',usercontroller.userlogin)
 
router.get('/logout',usercontroller.logout)

router.get('/website/dashboard',auth,usercontroller.dashboard)

 

router.post('/contact/insert',Contactcontroller.contact)

 


//course route

router.get('/course/btech',auth,Coursecontroller.btech)
router.post('/course/btechinsert',auth,Coursecontroller.btechinsert)
router.get('/course/displaybtech',auth,Coursecontroller.displaybtech)
router.get('/course/view/:id',Coursecontroller.btechview)
router.get('/course/edit/:id',auth,Coursecontroller.btechedit)
router.post('/course/btechupdate/:id',Coursecontroller.btechupdate)
router.get('/course/mtech',auth,Coursecontroller.btech)
router.get('/course/mba',auth,Coursecontroller.mba)
router.get('/course/law',auth,Coursecontroller.law)




//admin college
router.get('/admin_college/dashboard',auth,Admincollege.dashboard);
// router.get('/admin_college/edit',Admincollege.edit);
router.post('/admin_college/update/:id',auth,Admincollege.update);
router.get('/admin_college/edit/:id',auth,Admincollege.edit)
router.get('/admin_college/delete/:id',Admincollege.delete);
router.get('/logout',Admincollege.logout) 

module.exports = router;