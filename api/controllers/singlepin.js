 const handleSinglePin = (req, res) => {
 const {pg, Client} = require('pg')

 	const { pinid } = req.body
 	console.log('pinid',pinid)

/*const pool = new pg.Pool({
    port: 5432,
    host : '127.0.0.1',
    user : 'pinfo',
    password : 'pinfodb',
    database : 'pinfo'
});*/


const text = 'SELECT * from pins WHERE id = $1 and mine = $2';
const values = [pinid,'on'];

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
	handleSinglePin
}