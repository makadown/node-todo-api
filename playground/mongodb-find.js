const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    db.collection('Todos').find().toArray().then((docs)=>{
        console.log('Todos Found');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find({
        _id: new ObjectID('5c3fe3f21384e12d70a321eb')
    })
    .toArray().then((docs)=>{
        console.log('One Todo');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

   //  client.close();
});