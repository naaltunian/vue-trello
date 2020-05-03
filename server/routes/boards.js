const express = require('express');
const Boards = require('../models/board');

const router = express.Router();

router.get('/', async (req, res) => {
    const boards = await Boards.find();
    res.json(boards);
})

module.exports = router;