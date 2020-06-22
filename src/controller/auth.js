const User = require('../shcemas/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

//vou gerar um hash único
function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

module.exports = {

authenticate: async (req, res) => {
    const { email, password } = req.body;
    
        const user = await User.findOne({ email }).select('+password');

        if(!user)
        return res.status(400).send({ error: 'User not found' });

        //compara senha do login com a senha baseado no usuário
        if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Invalid password' });

        user.password = undefined; 

        res.send({
            user,
            token: generateToken({ id: user.id }),
        });    
    }
};