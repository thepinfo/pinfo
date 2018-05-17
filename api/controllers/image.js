 const handleImage = (req, res) => {
 	const knex = require('knex');
 	const db = knex({
	  client: 'pg',
	  connection: {
	    host : '127.0.0.1',
	    user : 'pinfo',
	    password : 'pinfodb',
	    database : 'pinfo'
	  }
	});
 	const { name, artist, producer, year, month, day, nsfw, drop, variant, pinno, maxno, glow, uv, soldout, damaged, about, file, userid, imgname, backimgname, glowimgname, uvimgname, categories, submitted } = req.body;
 	
 	/*const { email, name, password } = req.body;
	if (!email || !name || !password) {
		return res.status(400).json('Invalid form submission');
	}*/

	/*const { id } = req.body;
	db('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json('unable to get entries'))
*/	//console.log(req);
	db.transaction(trx => {
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
		
			.catch(err => res.status(400).json(err))
}

module.exports = {
	handleImage
}