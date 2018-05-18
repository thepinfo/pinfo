 const handleSingleArtist = (req, res, pool) => {
 	const pg = require('pg');

 	const { artist } = req.body;
 	console.log('artist',artist);

const text = 'SELECT * FROM pins WHERE artist = $1 and mine = $2 and deleted is null';
const values = [artist,'on'];

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
	handleSingleArtist
}