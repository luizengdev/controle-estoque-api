const { verify } = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = function(req, res, next) {
    const token = req.headers['token'];

    if (!token) return res.status(401).send(['usuário invalido']);

    verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(401).send(['usuário invalido']);

        req.usuario_id = decoded.id;
        next();
    })
}

module.exports = verifyJWT;