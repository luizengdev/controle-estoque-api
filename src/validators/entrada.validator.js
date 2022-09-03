const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const create = function() {
    return [
        body('item_id', validatorMessage('Item')).exists().bail().isInt(),
        body('quantidade', validatorMessage('Quantidade')).exists().bail().isInt(),
        body('preco', validatorMessage('Preco')).exists().bail().isFloat(),
        body('fornecedor_id', validatorMessage('Fornecedor')).optional({nullable: true}).isInt(),
    ]
}

const findById = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

module.exports = {
    create: create,
    findById: findById,
};