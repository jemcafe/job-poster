require('dotenv').config();
const app = require('express')(),
      bodyParser = require('body-parser')
      session = require('express-session'),
      massive = require('massive');

// Controllers
const authCtrl = require('./controllers/auth_cntrl');

// Middlewares
const checkForSession = require('./middlewares/checkSession');


app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 86400000 } // 24 hrs
}));
app.use(checkForSession);
massive(process.env.CONNECTION_STRING)
    .then(db => app.set('db', db))
    .catch(err => console.log(err));


// Auth
app.post('/login', authCtrl.login);
app.post('/register', authCtrl.register);
app.post('/logout', authCtrl.logout);
app.get('/user', authCtrl.getUser);


const port = process.env.SERVER_PORT || 3070;
app.listen(port, () => console.log(`Listen on port: ${port}`));