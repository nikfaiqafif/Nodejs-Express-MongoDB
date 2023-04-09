const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongoDB URI', (err, client) => {
    if (err) return console.error(err)

    console.log('Connected to Database')
    
  })
