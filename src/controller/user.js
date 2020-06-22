const User = require('../shcemas/user');
const bcrypt = require('bcryptjs');


module.exports = {
    // List all Users
    index: async (req, res) => {
        try {
          const users = await User.find();
          return res.status(200).send(users);
  
        } catch (error) {
          console.log(error)
        }
    },
  
    // List specific User
    show: async (req, res) => {
        const user = await User.findById(req.params.id);
        return res.status(200).send(user);
    },
  
    // Create User
    store: async (req, res) => {
      const { email }  = req.body;
      try {
        if (await User.findOne({ email })) return badRequest('User already exists')    
    
        await User.create(req.body);
        
        return res.status(200).send({
          message: 'Created.',
          token: generateToken({ id: user.id }),
        });
      } catch (err) {
          if (err.name === 'MongoError') {
          res.status(400).send({
            message: 'Duplicated Key.',
            details: err.message,
            name: err.name,
          });
        }
      }
    },   
    
  };

  function badRequest(message) {
    return res.status(400).send({ error: `$message`});
  }
  