 const handleSinglePin = (req, res) => {
 	const pg = require('pg');

 	const { pinid } = req.body;
 	console.log('pinid',pinid);

const pool = new pg.Pool({
    port: 5432,
    host : '127.0.0.1',
    user : 'pinfo',
    password : 'pinfodb',
    database : 'pinfo'
});

const text = 'SELECT * from pins WHERE id = $1 and mine = $2';
const values = [pinid,'on'];

pool.connect((err, db, done) => {
  if(err) {
    return console.log(err);
  } else {
    db.query(text,values, (err, table) => {
      if(err) {
        return console.log(err)      
      }else{
      	console.log(text,values)
        console.log(table)
        return res.json(table)
      }
    })
  }
})
}

module.exports = {
	handleSinglePin
}