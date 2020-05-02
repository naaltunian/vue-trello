const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    imageURL: {
        type: String
        // TODO: add default and set required to true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema)