 const handleMyProfile = (req, res, pool) => {
 	const pg = require('pg');

 	const { userid } = req.body;
 	console.log('userid',userid);


const text = 'SELECT * from users WHERE id = $1 and entries >= $2';
const values = [userid, 0];
console.log(text,values);
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
	handleMyProfile
}