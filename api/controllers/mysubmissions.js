 const handleMySubmissions = (req, res, pool) => {
 	const {pg,Client} = require('pg');

 	const { userid } = req.body;
 	console.log('userid',userid);


/*const pool = new pg.Pool({
    port: 5432,
    host : '127.0.0.1',
    user : 'pinfo',
    password : 'pinfodb',
    database : 'pinfo'
});*/

const client = new Client({
  port: 5432,
  host : '127.0.0.1',
  user : 'pinfo',
  password : 'pinfodb',
  database : 'pinfo'
})
client.connect()

const text = 'SELECT * FROM pins WHERE userid = $1 and mine = $2 and deleted IS NULL';
const values = [userid,'on'];

/*pool.connect((err, db, done) => {
  if(err) {
    return console.log(err);
  } else {*/
    client.query(text,values, (err, table) => {
      console.log(err, table)
      client.end()
      return res.json(table)
    })
    }  


module.exports = {
	handleMySubmissions
}