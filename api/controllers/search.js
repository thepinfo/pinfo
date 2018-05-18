 const handleSearch = (req, res, pool) => {
 	const pg = require('pg');

 	/*const { userid } = req.body;
 	console.log('userid',userid);*/



/*const text = 'SELECT * from pins WHERE userid <> $1 and mine = $2';
const values = [1,'on'];*/

pool.connect((err, db, done) => {
  if(err) {
    return console.log(err);
  } else {
    db.query('SELECT * from pins', (err, table) => {
      if(err) {
        return console.log(err)      
      }else{
      	//console.log(text)
        console.log(table)
        return res.json(table)
      }
    })
  }
})
}

module.exports = {
	handleSearch
}