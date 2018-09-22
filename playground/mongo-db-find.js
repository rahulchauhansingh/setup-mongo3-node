const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/askyama', (err, client)=>{
    if(err){
        console.log("Unable to connect to mongodb server");
    }else{
        console.log('success from mongodb');
        const db = client.db('askyama');

        db.collection('Navigation').find().toArray().then((docs)=>{
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err)=>{
            console.log('Unable to fetch data',err);
        });

        db.collection('Navigation').find({
            _id: new ObjectID('5ba4dfe86c83ab3028e2f28a')
        }).toArray().then((docs)=>{
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err)=>{
            console.log('Unable to fetch data',err);
        });

        db.collection('Navigation').find().count().then((count)=>{
            console.log(`Total Count:${count}`);
        }, (err)=>{
            console.log('Unable to count', err);
        });

        db.collection('Navigation').find({
            menuName:'Contact'
        }).toArray().then((totalData)=>{
            console.log("======== get specific data ========");
            console.log(JSON.stringify(totalData, undefined, 2));
        });
 
        client.close();
    }
});