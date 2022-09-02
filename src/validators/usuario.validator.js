const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const create = function() {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('senha', validatorMessage('Senha')).exists().bail().isString(),
    ]
}

const update = function() {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        param('id', validatorMessage('ID')).exists().bail().isInt(),
    ]
}

const findById = function() {
    return [
        param('id', validatorMessage('ID')).exists().bail().isInt(),
    ]
}

const deleteId = function() {
    return [
        param('id', validatorMessage('ID')).exists().bail().isInt(),
    ]
}

const login = function() {
    return [
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('senha', validatorMessage('Senha')).exists().bail().isString(),
    ]
}

module.exports = {
    create: create,
    update: update,
    findById: findById,
    deleteId: deleteId,
    login: login,
};