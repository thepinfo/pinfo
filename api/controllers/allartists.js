 const handleAllArtists = (req, res, pool) => {
 	const {Client,pg} = require('pg');

 	//const { userid } = req.body;
 	//console.log('userid',userid);

/*const pool = new pg.Pool({
    port: 5432,
    host : '127.0.0.1',
    user : 'pinfo',
    password : 'pinfodb',
    database : 'pinfo'
});*/

const text = 'SELECT DISTINCT artist from pins WHERE userid = $1 and mine = $2 and deleted is null';
const values = [1,'on'];

const client = new Client({
  port: 5432,
  host : '127.0.0.1',
  user : 'pinfo',
  password : 'pinfodb',
  database : 'pinfo'
})
client.connect()

client.query(text,values, (err, table) => {
  console.log(err, table)
  client.end()
  return res.json(table)
})
}  

module.exports = {
	handleAllArtists
}