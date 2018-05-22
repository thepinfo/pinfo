 const handleEditPin = (req, res, db) => {
 	const {pg,Client} = require('pg'); 	
 	const { name, artist, producer, year, month, day, nsfw, drop, variant, pinno, maxno, glow, uv, soldout, damaged, about, file, userid, imgname, backimgname, glowimgname, uvimgname, categories, submitted, pinid } = req.body;

 	const client = new Client({
	  port: 5432,
	  host : '127.0.0.1',
	  user : 'pinfo',
	  password : 'pinfodb',
	  database : 'pinfo'
	})
	client.connect()

	const text = 'UPDATE pins SET (name, artist, producer, year, month, day, nsfw, drop, variant, pinno, maxno, glow, uv, soldout, damaged, about, file, userid, imgname, backimgname, glowimgname, uvimgname, categories, submitted) = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24) where id = $25';
	const values = [name, artist, producer, year, month, day, nsfw, drop, variant, pinno, maxno, glow, uv, soldout, damaged, about, file, userid, imgname, backimgname, glowimgname, uvimgname, categories, submitted, pinid];

	client.query(text,values, (err, table) => {
      console.log(err, table)
      client.end()
      return res.json(table)
    })
  }


module.exports = {
	handleEditPin
}