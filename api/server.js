const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const pg = require('pg');
const Client = require('pg');
const corsPrefetch = require('cors-prefetch-middleware')
const imagesUpload = require('images-upload-middleware');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const mysubmissions = require('./controllers/mysubmissions');
const myprofile = require('./controllers/myprofile');
const singlepin = require('./controllers/singlepin');
const allartists = require('./controllers/allartists');
const singleartist = require('./controllers/singleartist');
const search = require('./controllers/search');
const deletepin = require('./controllers/deletepin');
const entries = require('./controllers/entries');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'pinfo',
    password : 'pinfodb',
    database : 'pinfo'
  }
});

const pool = new pg.Pool({
    port: 5432,
    host : '127.0.0.1',
    user : 'pinfo',
    password : 'pinfodb',
    database : 'pinfo'
});



const app = express();



app.use(bodyParser.json());
app.use(cors());

app.use('/static', express.static('public'));


app.post('/signin', (req, res) => { signin.handleSignIn(req, res, db, bcrypt) })

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.put('/image', (req, res) => { image.handleImage(req, res, db) })


app.post('/mysubmissions', (req, res) => { mysubmissions.handleMySubmissions(req, res, pool) })

app.post('/singlepin', (req, res) => { singlepin.handleSinglePin(req, res, pool) })

app.post('/allartists', (req, res) => { allartists.handleAllArtists(req, res, pool) })

app.post('/singleartist', (req, res) => { singleartist.handleSingleArtist(req, res, pool) })

app.post('/search', (req, res) => { search.handleSearch(req, res, pool) })

app.post('/myprofile', (req, res) => { myprofile.handleMyProfile(req, res, pool) })

app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

app.put('/deletepin', (req, res) => { deletepin.handleDeletePin(req, res, pool) })

app.post('/entries', (req, res) => { entries.handleEntries(req, res, pool) })



//const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
//const cors = require('cors');

//const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));


app.post('/upload', (req, res, next) => {
  console.log('req:',req);

  let imageFile = req.files.file;
  console.log('imageFile: ',imageFile);  
  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    console.log('Log res',res)
    console.log('log files',req.files)
    if (err) {
      console.log('Log err',err)      
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

})


app.listen(3000, () => {
  console.log('3000');
});