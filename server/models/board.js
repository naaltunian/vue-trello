const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }],
    memberId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    status: {
        type: String,
        enum: ['backlog', 'in-progress', 'done', 'archived'],
        default: 'backlog'
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Board', BoardSchema)