const express = require('express')
const app = express()
// const port = 3000

const port= process.env.PORT || 3000;

var session = require('express-session')  
var flash = require('connect-flash'); 
var bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
var session = require('cookie-session');

app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  
}));
app.use(flash());

app.use(cookieParser());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))





//connecting db
const {connectdb} = require('./DB/connectdb.js')



//import routes
const web = require('./routes/web.js');


//ejs setup 
app.set('view engine','ejs')

// static files
 
app.use(express.static('public'))





// connect db here 
connectdb()


//load route
app.use('/',web)


app.listen(port, () => {
    console.log(`server chal  gya hai `)
  });