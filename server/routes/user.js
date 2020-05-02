const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const _id = req.params.id;
    const user = await User.find({ _id });
    if (!user) {
        res.status(401);
        res.json({ 'message': 'no user with that id' });
        return
    }
    res.json(user);
});

router.post('/', async (req, res) => {
    const { username, password, imageURL } = req.body;
    const userExists = await User.findOne({ username });
    if (userExists) {
        res.status(422);
        res.json({ 'message': 'user exists' });
        return;
    }
    const user = await new User({
        username,
        password: await bcrypt.hash(password, 10),
        imageURL
    }).save();
    
    const payload = {
        _id: user._id,
        username: user.username
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json(token);
});

module.exports = router;