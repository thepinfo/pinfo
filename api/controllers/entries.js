const handleEntries = (req, res, pool) => {
 	const pg = require('pg');

 	const { userid } = req.body;
 	console.log('userid',userid);


const text = 'UPDATE users SET entries = entries + $2 WHERE id = $1';
const values = [userid,1];

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
	handleEntries
}