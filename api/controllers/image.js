 const handleImage = (req, res, db) => {
 	const {pg,Client} = require('pg'); 	
 	const { name, artist, producer, year, month, day, nsfw, drop, variant, pinno, maxno, glow, uv, soldout, damaged, about, file, userid, imgname, backimgname, glowimgname, uvimgname, categories, submitted } = req.body;

 	const client = new Client({
	  port: 5432,
	  host : '127.0.0.1',
	  user : 'pinfo',
	  password : 'pinfodb',
	  database : 'pinfo'
	})
	client.connect()

	const text = 'INSERT INTO pins (name, artist, producer, year, month, day, nsfw, drop, variant, pinno, maxno, glow, uv, soldout, damaged, about, file, userid, imgname, backimgname, glowimgname, uvimgname, categories, submitted) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24';
	const values = [name, artist, producer, year, month, day, nsfw, drop, variant, pinno, maxno, glow, uv, soldout, damaged, about, file, userid, imgname, backimgname, glowimgname, uvimgname, categories, submitted];

	client.query(text,values, (err, table) => {
      console.log(err, table)
      client.end()
      return res.json(table)
    })
    }
}

module.exports = {
	handleImage
}

/*db.transaction(trx => {
			trx.insert({
				name: name,				
				artist: artist,
				producer: producer,
				year: year,
				month: month,
				day: day,
				nsfw: nsfw,
				drop: drop,
				variant: variant,
				pinno: pinno,
				maxno: maxno,
				glow: glow,
				uv: uv,
				soldout: soldout,
				damaged: damaged,
				categories: categories,
				about: about,
				userid: userid,
				imgname: imgname,
				backimgname: backimgname,
				glowimgname: glowimgname,
				uvimgname: uvimgname,
				submitted: submitted
				//loc: file,
			})
			.into('pins')
			.then(trx.commit)
			.catch(trx.rollback)
			//.then(res.json('success'))
		})
		.catch(function(error) {
		  console.error(error);
		})
		
			.catch(err => res.status(400).json(err))*/