const { validationResult } = require('express-validator');
const createHttpError = require('http-errors');
const itemService = require('../services/item.service');

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createHttpError(422, { errors: errors.array() });
        }
        
        const response = await itemService.create({
            nome: req.body.nome,
            usuario_id: req.usuario_id,
        });

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

        const response = await itemService.update({
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
        const response = await itemService.findAll();

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

        const response = await itemService.findById(req.params.id);

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

        const response = await itemService.deleteId(req.params.id);
        
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
}