const { validationResult } = require('express-validator');
const createHttpError = require('http-errors');
const usuarioService = require('../services/usuario.service');

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createHttpError(422, { errors: errors.array() });
        }

        const response = await usuarioService.create(req.body);  
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const login = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createHttpError(422, { errors: errors.array() });
        }

        const response = await usuarioService.login(req.body);  
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const update = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createHttpError(422, { errors: errors.array() });
        }

        const response = await usuarioService.update({
            nome: req.body.nome
        }, req.params.id);

        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const findAll = async function (req, res, next) {
    try {
        const response = await usuarioService.findAll();

        res.send(response);
        
    } catch (error) {
        return next(error);
    }
}

const findById = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createHttpError(422, { errors: errors.array() });
        }

        const response = await usuarioService.findById(req.params.id);
        if (response && response.message) {
            throw response;
        }
        res.send(response);     
    } catch (error) {
        return next(error);
    }
}

const deleteId = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createHttpError(422, { errors: errors.array() });
        }

        const response = await usuarioService.deleteId(req.params.id);
        if (response && response.message) {
            throw response;
        }
        res.send(response);     
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    create: create,
    update: update,
    findAll: findAll,
    findById: findById,
    deleteId: deleteId,
    login: login,
}