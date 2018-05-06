const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const pg = require('pg');
const corsPrefetch = require('cors-prefetch-middleware')
const imagesUpload = require('images-upload-middleware');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const mysubmissions = require('./controllers/mysubmissions');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'pinfodb',
    database : 'pinfo'
  }
});




const app = express();


/*let multiparty = require('multiparty');
let fs = require('fs');

function saveImage(req, res) {
  let form = new multiparty.Form();

  form.parse(req, (err, fields, files) => {

    let {path: tempPath, originalFilename} = files.imageFile[0];
    let copyToPath = "./images/" + originalFilename;
  
    fs.readFile(tempPath, (err, data) => {
      // make copy of image to new location
      fs.writeFile(newPath, data, (err) => {
        // delete temp image
        fs.unlink(tmpPath, () => {
          res.send("File uploaded to: " + newPath);
        });
      }); 
    }); 
  })
}*/

app.use(bodyParser.json());
app.use(cors());

app.use('/static', express.static('public'));
//app.use('/static', express.static(path.join(__dirname, 'public')))
 
/*app.use(corsPrefetch);
 
app.post('/multiple', imagesUpload(
    './server/static/multipleFiles',
    'http://localhost:9090/static/multipleFiles',
    true
));
 
app.post('/notmultiple', imagesUpload(
    './server/static/files',
    'http://localhost:9090/static/files'
));
 
app.listen(9090, () => {
    console.log('Listen: 9090');
});*/

/*app.get('/', (req,res)=> {
	res.send(database.users);
})*/

app.post('/signin', (req, res) => { signin.handleSignIn(req, res, db, bcrypt) })

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.post('/mysubmissions', (req, res) => { mysubmissions.handleMySubmissions(req, res, db) })

app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

app.put('/image', (req, res) => { image.handleImage(req, res, db) })

/*app.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

})*/

/*app.listen(3000, ()=> {
	console.log('app is running');
})*/

/*//var upload = require('./controllers/fileroutes');
var multer = require('multer');
var multerupload = multer({ dest: 'fileprint/' })
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

//route to handle file printing and listing
router.post('/fileupload',multerupload.any(),upload.fileupload);
app.use('/api', router);
app.listen(4000, ()=>{console.log('listening on 4000')});
*/
//

/*var multer = require('multer');
var axios = require('axios');

const storage = multer.diskStorage({
  destination: './images',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ storage });*/

// express route where we receive files from the client
// passing multer middleware
/*app.post('/files', upload.single('file'), (req, res) => {
 const file = req.file; // file passed from client
 const meta = req.body; // all other values passed from the client, like name, etc..
// send the data to our REST API
 axios({
    url: `localhost:3000/uploads`,
    method: 'post',
    data: {
      file,
      name: meta.name,      
    },
  })
   .then(response => res.status(200).json(response.data.data))
   .catch((error) => res.status(500).json(error.response.data));
});*/

/*app.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

})*/

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
  //console.log('req:',req);
  let imageFile = req.files.file;
  //console.log('imageFile: ',imageFile);
  now = Date.now();
  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

})

/*// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

app.listen(3000, () => {
  console.log('3000');
});