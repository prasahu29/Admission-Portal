const mongoose = require('mongoose');

const database_url='mongodb+srv://prasahu29:prasahu29@cluster0.2wkbnvc.mongodb.net/admission?retryWrites=true&w=majority'

const connectdb = ()=>{
    return mongoose.connect(database_url)
    .then(()=>{
        console.log('mongoDB se connect ho gya hai ')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports={
    connectdb
}