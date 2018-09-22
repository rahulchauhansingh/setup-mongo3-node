const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo', (err, client)=>{
    if(err){
        console.log("Unable to connect to mongodb server");
    }else{
        console.log('success from mongodb');
        const db = client.db('todo');

        db.collection('Todos').find().toArray().then((docs)=>{
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err)=>{
            console.log('Unable to fetch data',err);
        });

        db.collection('Todos').find({
            _id: new ObjectID('5ba5f9315b9e0d2ac036d278')
        }).toArray().then((docs)=>{
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err)=>{
            console.log('Unable to fetch data',err);
        });

        db.collection('Todos').find().count().then((count)=>{
            console.log(`Total Count:${count}`);
        }, (err)=>{
            console.log('Unable to count', err);
        });

        db.collection('Users').find({
            name:'rahul1'
        }).toArray().then((totalData)=>{
            console.log("======== get specific data ========");
            console.log(JSON.stringify(totalData, undefined, 2));
        });
 
        client.close();
    }
});