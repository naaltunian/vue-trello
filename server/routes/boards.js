const express = require('express');
const Boards = require('../models/board');
const List = require('../models/list');

const router = express.Router();

// gets all boards associated to owner
router.get('/', async (req, res) => {
    const boards = await Boards.find({ ownerId: req.user._id });
    // console.log(boards)
    res.status(200);
    res.json(boards);
});

// gets a all boards associated with a user
router.get('/:id', async (req, res) => {
    const board = await Boards.find({ _id: req.params.id }).populate('lists');
    
    if (!board) {
        res.status(404);
        return res.json({ 'message': 'board not found' });
    }

    res.status(200);
    res.json(board);
});

// creates a board
router.post('/', async (req, res) => {
    const { name } = req.body;

    const board = await new Boards({
        name,
        ownerId: req.user._id,
        memberId: req.user._id
    }).save();

    res.status(200);
    res.json(board);
});

module.exports = router;