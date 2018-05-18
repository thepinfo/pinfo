 const handleSinglePin = (req, res, pool) => {
 	const pg = require('pg');

 	const { pinid } = req.body;
 	console.log('pinid',pinid);


const text = 'SELECT * from pins WHERE id = $1 and mine = $2';
const values = [pinid,'on'];

pool.connect((err, db, done) => {
  if(err) {
    return console.log(err);
  } else {
    db.query(text,values, (err, table) => {
      if(err) {
        return console.log(err)
        pool.end()      
      }else{
      	console.log(text,values)
        console.log(table)
        pool.end()
        return res.json(table)
      }
    })
  }
})
}

module.exports = {
	handleSinglePin
}