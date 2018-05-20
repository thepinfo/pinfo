const handleEntries = (req, res, pool) => {
 	const {pg,Client} = require('pg');  

 	const { userid } = req.body;
 	console.log('userid',userid);

const client = new Client({
    port: 5432,
    host : '127.0.0.1',
    user : 'pinfo',
    password : 'pinfodb',
    database : 'pinfo'
  })
  client.connect()

const text = 'UPDATE users SET entries = entries + $2 WHERE id = $1';
const values = [userid,1];

client.query(text,values, (err, table) => {
      console.log(err, table)
      client.end()
      return res.json(table)
    })
}

module.exports = {
	handleEntries
}