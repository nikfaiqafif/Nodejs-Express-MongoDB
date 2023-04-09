const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://faiq:faiqafif123@cluster0.djjyzht.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.error(err)

    console.log('Connected to Database')
    
  })