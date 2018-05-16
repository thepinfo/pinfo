 const handleMySubmissions = (req, res) => {
 	const pg = require('pg');

 	const { userid } = req.body;
 	console.log('userid',userid);



 	/*const knex = require('knex');
 	const db = knex({
	  client: 'pg',
	  connection: {
	    host : '127.0.0.1',
	    user : 'postgres',
	    password : '209145',
	    database : 'pinfo'
	  }
	});
 	
 	
 	res.json('success 2');*/

 	/*knex('pins').where({
	  userid: {id}
	}).select('*')*/
 	//res.json(result.rows);

 	/*knex.select('*')
	.from('pins')
	.where(userid = {id})*/


	/*knex('pins').where({ userid: id }).select('*')
	.then(function(rows) {
	  return _.pluck(rows, '*');
	})
	.then(function(rows) {
	  console.log(rows);
	})
	.catch(function(error) {
	  console.error(error)
	});*/
 	
 	//.then(console.log('Res:',res))
	/*db.transaction(trx => {
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
		
			.catch(err => res.status(400).json(err))*/

const pool = new pg.Pool({
    port: 5432,
    host : '127.0.0.1',
    user : 'pinfo',
    password : 'pinfodb',
    database : 'pinfo'
});

const text = 'SELECT * from pins WHERE userid = $1 and deleted is null';
const values = [userid,''];

pool.connect((err, db, done) => {
  if(err) {
    return console.log(err);
  } else {
    db.query(text,values, (err, table) => {
      if(err) {
        return console.log(err)      
      }else{
      	console.log(text,values)
        console.log(table)
        return res.json(table)
      }
    })
  }
})
}

module.exports = {
	handleMySubmissions
}