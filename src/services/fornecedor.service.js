const fornecedorRepository = require('../repositories/fornecedor.repository');
const createEerror = require('http-errors');

const create = async function(fornecedor) {
    const fornecedorCriado = await fornecedorRepository.create(fornecedor);
    return fornecedorCriado;
}

const update = async function(fornecedor, id) {
    const existeFornecedor = await fornecedorRepository.findById(id);

    if(!existeFornecedor) {
        return createEerror(404, 'Fornecedor não existe');
    }

    await fornecedorRepository.update(fornecedor, id);
    
    return await fornecedorRepository.findById(id);
}

const findAll = async function() {
    const fornecedors = await fornecedorRepository.findAll();
    return fornecedors;
}

const findById = async function(id) {
    const fornecedor = await fornecedorRepository.findById(id);

    if(!fornecedor) {
        return createEerror(404, 'UFornecedor não encontrado');
    }
    return fornecedor;
}

const deleteId = async function(id) {
    const fornecedor = await fornecedorRepository.findById(id);

    if(!fornecedor) {
        return createEerror(404, 'Fornecedor não encontrado');
    }
    await fornecedorRepository.deleteId(id);
    return fornecedor;
}

module.exports = {
    create: create,
    update: update,
    findAll: findAll,
    findById: findById,
    deleteId: deleteId,
}