// CRUD create read update delete
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'mongodb'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) =>{
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection ('users').findOne({ _id: "61af35a4f2b5339adf170629" }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch ')
        }
        console.log(user)
    })
    // db.collection('users').insertMany([
    //     {
    //         _id: id,
    //         name: 'mike',
    //         age: 24
    //     }, {
    //         name: 'Tsonne',
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, results) => {
    //     if(error){
    //         return console.log('unable to insert tasks!')
    //     }
    // })
})

