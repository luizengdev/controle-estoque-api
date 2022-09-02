const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');
const verifyJWT = require('../middlewares/authorizator');
const itemValidator = require('../validators/item.validator');

router.post('/', verifyJWT, itemValidator.create(), itemController.create);

router.get('/', verifyJWT, itemController.findAll);

router.get('/:id', verifyJWT, itemValidator.findById(), itemController.findById);

router.put('/:id',verifyJWT, itemValidator.update(), itemController.update);

router.delete('/:id',verifyJWT, itemValidator.deleteId(), itemController.deleteId);

module.exports = router;