const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ba87e23b8287b1face25175';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e)=> console.log(e));


User.findById('5bab8a859f7881b9676b33b3').then((user)=>{
    if(!user){
      return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e)=>{
    console.log(e);
});