var express = require('express');
var router = express.Router();
const goalsController = require('../controllers/goalsController');

router.get('/goals', goalsController.getAll);
router.post('/goals', goalsController.create);
router.put('/goals', goalsController.update);

module.exports = router;
