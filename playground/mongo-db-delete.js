const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo',(err,client)=>{
    if(err){
        console.log('Unable to connect database',err);
    }else{
        const db = client.db('todo');

        // deleteMany
        // db.collection('Todos').deleteMany({text:'learn mongo'}).then((result)=>{
        //     console.log(result);
        // });

        // deleteOne
        // db.collection('Todos').deleteOne({text:'learn angular'}).then((result)=>{
        //     console.log(result);
        // });

        // FindOneAndDelete
        db.collection('Todos').findOneAndDelete({completed:'false'}).then((result)=>{
            console.log(result);
        });

        // 
    }
});