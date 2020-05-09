const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    boardId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Board'
    },
    archived: {
        type: Boolean
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('List', ListSchema)