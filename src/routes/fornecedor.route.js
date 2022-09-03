const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedor.controller');
const verifyJWT = require('../middlewares/authorizator');
const fornecedorValidator = require('../validators/fornecedor.validator');

router.post('/', verifyJWT, fornecedorValidator.create(), fornecedorController.create);

router.get('/', verifyJWT, fornecedorController.findAll);

router.get('/:id', verifyJWT, fornecedorValidator.findById(), fornecedorController.findById);

router.put('/:id',verifyJWT, fornecedorValidator.update(), fornecedorController.update);

router.delete('/:id',verifyJWT, fornecedorValidator.deleteId(), fornecedorController.deleteId);

module.exports = router;