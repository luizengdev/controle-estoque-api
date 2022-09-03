const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const create = function () {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('telefone', validatorMessage('Telefone')).exists().bail().isString(),
    ]
}

const update = function () {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('telefone', validatorMessage('Telefone')).exists().bail().isString(),
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

const findById = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

const deleteId = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

module.exports = {
    create: create,
    update: update,
    findById: findById,
    deleteId: deleteId,
}