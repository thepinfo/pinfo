 const handleSingleArtist = (req, res, pool) => {
 	const {Client,pg} = require('pg');

 	const { artist } = req.body;
 	console.log('artist',artist);

const text = 'SELECT * FROM pins WHERE artist like $1 and mine = $2 and deleted is null';
const values = ['_'+artist+'_','on'];

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
	handleSingleArtist
}