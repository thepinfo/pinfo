 const handleMyProfile = (req, res, pool) => {
 	const {Client,pg} = require('pg');

 	const { userid } = req.body;
 	console.log('userid',userid);


const text = 'SELECT * from users WHERE id = $1 and entries >= $2';
const values = [userid, 0];


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
	handleMyProfile
}