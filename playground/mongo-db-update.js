const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo',(err,client)=>{
    if(err){
        console.log('Unable to connect database',err);
    }else{
        const db = client.db('todo');

        // db.collection('Todos').findOneAndUpdate({
        //     _id: new ObjectID('5ba617d5d4ff8ce64f07665a')
        // },{
        //     $set:{
        //         text:'learn update'
        //     }
        // },{
        //     returnOriginal: false
        // }).then((result)=>{
        //     console.log(result);
        // });

        db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID('5ba617d5d4ff8ce64f07665a')
        },{
            $set:{
                text:'learn update'
            },
            $inc:{
                age:1
            }
        },{
            returnOriginal: false
        }).then((result)=>{
            console.log(result);
        });
    }
});