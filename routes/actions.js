var express = require('express');
var router = express.Router();
const actionsController = require('../controllers/actionsController');

router.get('/actions', actionsController.getAll);
router.post('/actions', actionsController.create);

module.exports = router;
