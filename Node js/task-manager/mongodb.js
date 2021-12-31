// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error){
        return console.log('Unable to connect to database!')
    }
    // console.log('Connected correctly!')
    const db = client.db(databaseName)

//     db.collection('users').insertOne({
//         name: 'Ginikachi',
//         age: 24
//     }, (error, result) => {
//         if (error){
//             return console.log('Unable to insert user')
//         }

//         console.log(result.ops)
//     })
// })
db.collection('users').insertMany([
    {
        name: 'Jane',
        age: 22
    }, {
        name: 'Leo',
        age: 25
    }
    ], (error, result) => {
        if (error){
            return console.log('Unable to insert documents!')
        }
        
    })
})
// Goal: Insert 3 tasks into a new tasks collection
// 1. Use insertMany to insert three documents
//    - description (string), completed (boolean)
// 2. Setup the callback to handle error or print ops.
// 3. Run the script.
// 4. Refresh the database in Robo 3t and view data in tasks collection.