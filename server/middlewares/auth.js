const jwt = require('jsonwebtoken');

function validateJWT(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        try {
            const token = authHeader.split(' ')[1];
            const validToken = jwt.verify(token, process.env.JWT_SECRET);
            req.user = validToken;
            next();
            return;
        } catch (err) {
            res.status(422);
            res.json({ 'message': 'unauthorized' });
            return;
        }
    }
    res.status(401);
    res.json({ message: 'unauthorized' });
    return;
}

module.exports = {
    validateJWT
}