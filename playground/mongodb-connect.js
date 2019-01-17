const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', 
        { useNewUrlParser: true },
        (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Another thing to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert todo ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Mario Arturo Serrano Flores',
        age: 39,
        location: 'Mexicali'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert user ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

     client.close();
});