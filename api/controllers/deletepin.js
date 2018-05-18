 const handleDeletePin = (req, res, pool) => {
 	const pg = require('pg');

 	const { pinid } = req.body;
 	console.log('pinid',pinid);



const text = 'UPDATE pins SET deleted = $2 WHERE id = $1';
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
	handleDeletePin
}