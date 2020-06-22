const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

//Vou chamar o next quando ele estiver pronto para ir para o controller

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    //verificar se o token foi informado
    if (!authHeader)
        return res.status(401).send({ error: 'No token provided' });
    
    // Bearer ashcs13123jhg1vfe712ev17e91sv81268s1 (formato Token)

    const parts = authHeader.split( ' ' );

    if(!parts.lenght === 2)
        return res.status(401).send({ error: 'Token error' })
    
    const [ scheme, token ] = parts;

    //verificar se possuir a palavra Bearer antes de tudo
    if (!/^Bearer$/i.test(scheme)) 
        return res.status(401).send({ error: 'Token malformatted' });

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalid' });

        req.userId = decoded.id;
        return next();
    });
};