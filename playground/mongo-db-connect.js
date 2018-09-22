const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todo', (err, client)=>{
    if(err){
        console.log("Unable to connect to mongodb server");
    }else{
        console.log('success from mongodb');
        const db = client.db('todo');

        // db.collection('Registration').insertOne({
        //     name:'rahul',
        //     email_id:'rahul@gmail.com'
        // },(err, result)=>{
        //     if(err){
        //         return console.log('Unable to insert', err);
        //     }else{
        //         console.log(JSON.stringify(result.ops, undefined, 2));
        //     }
        // });

        db.collection('Todos').insertOne({
            text:'learn mongo',
            completed:'false'
        },(err, result)=>{
            if(err){
                return console.log('Unable to insert', err);
            }else{
                // get add time result.ops[0]._id.getTimestamp()
                // get data result.ops[0]._id
                console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2));
            }
        });

        db.collection('Users').insertOne({
            name:'rahul',
            email_id:'rahul@gmail.com'
        },(err, result)=>{
            if(err){
                return console.log('Unable to insert', err);
            }else{
                // get add time result.ops[0]._id.getTimestamp()
                // get data result.ops[0]._id
                console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2));
            }
        });

        client.close();
    }
});