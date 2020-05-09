const express = require('express');
const router = express.Router();

const List = require('../models/list');

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

    res.status(200).json(list);
});

module.exports = router;