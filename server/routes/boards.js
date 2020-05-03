const express = require('express');
const Boards = require('../models/board');

const router = express.Router();

// gets all boards associated to owner
router.get('/', async (req, res) => {
    const boards = await Boards.find({ ownerId: req.user._id });

    res.status(200);
    res.json(boards);
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