const router = require('express').Router()
const carController = require('./controller/car')
const userController = require('./controller/user')
const authController = require('./controller/auth')
const projectController = require('./controller/project')

// Car routes
router.get('/car', carController.index);
router.get('/car/:id', carController.show);
router.post('/car', carController.store);
router.put('/car/:id', carController.update);
router.delete('/car/:id', carController.destroy);

// User routes
router.get('/user', userController.index );
router.get('/user/:id', userController.show);
router.post('/user', userController.store);

// Auth routes
router.post('/auth', authController.authenticate);

// Projects routes
router.get('/projects', projectController.test);

module.exports = router