//Vai necessitar que o usuário esteja autenticado para fazer modificações
//Consultar o token

const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();



router.use(authMiddleware);

module.exports = { 
    test: async (req, res) => {
        try {          
          return await res.send({ ok: true, user: req.userId });
  
        } catch (error) {
          console.log(error)
        }
    },
}

