const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        first: {        
            type: String,
            required: true
        },
        last: {        
            type: String,
            required: true
        }
    },
    email: {        
        type: String,
        required: true,
        unique: true
    },
}, {
        collection: 'Users'
    })

const User = mongoose.model('Users', UserSchema)
module.exports = User;