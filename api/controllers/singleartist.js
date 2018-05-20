 const handleSingleArtist = (req, res, pool) => {
 	const {Client,pg} = require('pg');

 	const { artist } = req.body;
 	console.log('artist',artist);

const text = 'SELECT * FROM pins WHERE artist like $1 and name != $3 and mine = $2 and deleted is null';
const values = ['%'+artist+'%','on','test'];

const client = new Client({
  port: 5432,
  host : '127.0.0.1',
  user : 'pinfo',
  password : 'pinfodb',
  database : 'pinfo'
})
client.connect()

client.query(text,values, (err, table) => {
  
        console.log('this.sql', this.sql); //command/query
        console.log(text);
        console.log("ERROR");
        console.log(err);
       
  client.end()
  return res.json(table)
})
} 

module.exports = {
	handleSingleArtist
}