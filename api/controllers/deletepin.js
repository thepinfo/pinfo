 const handleDeletePin = (req, res, pool) => {
 	const {pg,Client} = require('pg');  

 	const { pinid } = req.body;
 	console.log('pinid',pinid);

const client = new Client({
    port: 5432,
    host : '127.0.0.1',
    user : 'pinfo',
    password : 'pinfodb',
    database : 'pinfo'
  })
  client.connect()

const text = 'UPDATE pins SET deleted = $2 WHERE id = $1';
const values = [pinid,'on'];

client.query(text,values, (err, table) => {
      console.log(err, table)
      client.end()
      return res.json(table)
    })
}

module.exports = {
	handleDeletePin
}