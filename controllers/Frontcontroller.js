const home = (req,res)=>{
    res.render('home', { message: req.flash('error') })
}


const form = (req,res)=>{
    res.render('form', { message: req.flash('error') })
}

 


module.exports = {
    home,form
}