const express = require('express');
const List = require('../models/list');
const Boards = require('../models/board');

const router = express.Router();

router.get('/:id', async (req, res) => {
    const list = await List.find({ _id: req.params.id });

    if(!list) {
        res.status(404);
        return res.json({ 'message': 'board not found' })
    }
});

router.post('/', async (req, res) => {
    const { name, boardId } = req.body;
    
    const list = await new List({
        name,
        boardId
    }).save();

    await Boards.findOneAndUpdate({ _id: boardId }, { $push: { lists: list._id }})

    res.status(200).json(list);
});

module.exports = router;