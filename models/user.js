const mongoose = require('mongoose');

const userTable = new mongoose.Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: false
    }
})

const User =   mongoose.model('User', userTable);

module.exports = User;