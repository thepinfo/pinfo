 const handleSearch = (req, res, pool) => {
 	const {pg,Client} = require('pg');

 	/*const { userid } = req.body;
 	console.log('userid',userid);*/



const client = new Client({
  port: 5432,
  host : '127.0.0.1',
  user : 'pinfo',
  password : 'pinfodb',
  database : 'pinfo'
})
client.connect()

const text = 'SELECT * FROM pins WHERE deleted IS NULL';
const values = [userid,'on'];

client.query(text, (err, table) => {
      //console.log(err, table)
      client.end()
      return res.json(table)
    })
}

module.exports = {
	handleSearch
}