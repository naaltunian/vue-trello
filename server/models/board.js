const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    ownerId: {
        type: String,
        required: true
    },
    memberId: {
        type: String
        // TODO: add default and set required to true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Board', BoardSchema)