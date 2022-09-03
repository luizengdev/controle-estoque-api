const { validationResult } = require('express-validator');
const createHttpError = require('http-errors');
const fornecedorService = require('../services/fornecedor.service');

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createHttpError(422, { errors: errors.array() });
        }

        const response = await fornecedorService.create({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
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

        const response = await fornecedorService.update({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
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
        const response = await fornecedorService.findAll();

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

        const response = await fornecedorService.findById(req.params.id);
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

        const response = await fornecedorService.deleteId(req.params.id);
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