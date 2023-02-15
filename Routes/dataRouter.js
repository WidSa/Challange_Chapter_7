const router = require('express').Router();
const dataController = require('../Controllers/dataController')


router.get('/Dashboard', dataController.index);
router.post('/Dashboard', dataController.create);
router.put('/Dashboard/:id', dataController.update);
router.delete('/Dashboard/:id', dataController.delete);

module.exports =  router