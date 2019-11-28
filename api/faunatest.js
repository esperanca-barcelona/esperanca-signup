var faunadb = require('faunadb'),
    q = faunadb.query;

var faunaArgs = { secret: process.env.FAUNADB_SECRET_KEY };
var host = process.env.FAUNADB_HOST;

if (host) {
  faunaArgs.domain = host;
  if (host.indexOf("localhost")>=0) {
    faunaArgs.scheme = 'http'
  }
}

module.exports = async (req, res) => {
  try{    
    var client = new faunadb.Client(faunaArgs)
    var data = await client.query(
      q.Paginate(
        q.Match(
          q.Index("all_temp")
        )
      )
    );
        
    if (data && data.data) {
      res.status(200).send(`Found ${data.data.length} items!`);
    } else {
      res.status(404).send(`Query didn't work`)
    }
    
  } catch(e) {
    res.status(500).send(`Error: ${e}`);
  }

  // const { name = 'World' } = req.query
  // res.status(200).send(`Hello ${name}!`)
}