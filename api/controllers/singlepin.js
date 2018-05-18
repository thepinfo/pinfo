 const handleSinglePin = (req, res) => {
 const {pg, Client} = require('pg');

 	const { pinid } = req.body;
 	console.log('pinid',pinid);

const pool = new pg.Pool({
    port: 5432,
    host : '127.0.0.1',
    user : 'pinfo',
    password : 'pinfodb',
    database : 'pinfo'
});

const client = new Client({
  port: 5432,
  host : '127.0.0.1',
  user : 'pinfo',
  password : 'pinfodb',
  database : 'pinfo'
})
client.connect()

const text = 'SELECT * from pins WHERE id = $1 and mine = $2';
const values = [pinid,'on'];

/*pool.connect((err, db, done) => {
  if(err) {
    return console.log(err);
  } else {*/
    /*client.query(text,values, (err, table) => {
      if(err) {
        return console.log(err)
        client.end()      
      }else{
      	console.log(text,values)
        console.log(table)
        
      }
    })*/
    client.query(text,values, (err, table) => {
      console.log(err, res)
      client.end()
      return res.json(table)
    })
  /*}
})
}*/

module.exports = {
	handleSinglePin
}