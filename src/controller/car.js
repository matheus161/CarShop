const Car = require('../shcemas/car')

module.exports = {
  // List all Users
  index: async (req, res) => {
      try {
        const cars = await Car.find();
        return res.status(200).send(cars);

      } catch (error) {
        console.log(error)
      }
  },

  // List specific User
  show: async (req, res) => {
      const car = await Car.findById(req.params.id);
      return res.status(200).send(car);
  },

  // Create User
  store: async (req, res) => {
    try {
      await Car.create(req.body);
      return res.status(200).send({
        message: 'Created.',
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

  // Update User
  update: async (req, res) => {
    try {
      await Car.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).send({ message: 'Updated.' });
    } catch (err) {
      if (err.name === 'CastError') {
        res.status(400).send({
          message: 'Object Does Not Exist.',
        });
      }
    }
  },

  // Delete User
  destroy: async (req, res) => {
      const car = await Car.findByIdAndRemove(
        req.params.id);
      return res.status(200).send({
        message: 'Deleted.',
      });
  },
};


