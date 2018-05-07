 const handleImage = (req, res) => {
 	const knex = require('knex');
 	const db = knex({
	  client: 'pg',
	  connection: {
	    host : '104.236.62.203',
	    user : 'postgres',
	    password : 'pinfodb',
	    database : 'pinfo',
	    port: 5432
	  }
	});
 	const { name, artist, producer, year, variant, pinno, maxno, glow, uv, about, file, userid, imgname, glowimgname, uvimgname, categories } = req.body;
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
*/	console.log(req);
	db.transaction(trx => {
			trx.insert({
				name: name,				
				artist: artist,
				producer: producer,
				year: year,
				variant: variant,
				pinno: pinno,
				maxno: maxno,
				glow: glow,
				uv: uv,
				categories: categories,
				about: about,
				userid: userid,
				imgname: imgname,
				glowimgname: glowimgname,
				uvimgname: uvimgname
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