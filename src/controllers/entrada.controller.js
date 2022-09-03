const { validationResult } = require('express-validator');
const createHttpError = require('http-errors');
const entradaService = require('../services/entrada.service');

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createHttpError(422, { errors: errors.array() });
        }
        
        const response = await entradaService.create({
            quantidade: req.body.quantidade,
            usuario_id: req.usuario_id,
            preco: req.body.preco,
            item_id: req.body.item_id,
        });

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
        const response = await entradaService.findAll();

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

        const response = await entradaService.findById(req.params.id);

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
    findAll: findAll,
    findById: findById,
}