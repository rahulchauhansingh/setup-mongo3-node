var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
});

module.exports = {User};