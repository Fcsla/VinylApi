const express = require('express');
const vinylController = require('../controllers/vinylController');
const router = express.Router();

router.post('/create',vinylController.create);
router.get('/get/:id', vinylController.getOne);
router.get('/get', vinylController.getAll);
router.put('/update',vinylController.update);
router.delete('/delete',vinylController.delete);

module.exports = router;