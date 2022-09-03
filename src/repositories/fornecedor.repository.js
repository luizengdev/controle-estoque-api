const { Fornecedor } = require('../database/models/index')

const create = async function(fornecedor) {
    const fornecedorCriado = await Fornecedor.create(fornecedor);
    return fornecedorCriado;
}

const update = async function(fornecedor, id) {
    await Fornecedor.update(fornecedor, {
        where: { id: id }
    });
}

const findAll = async function() {
    const fornecedores = await Fornecedor.findAll();
    return fornecedores;
}

const findById = async function(id) {
    const fornecedor = await Fornecedor.findByPk(id);
    return fornecedor;
}

const findWhere = async function(where) {
    const fornecedor = await Fornecedor.findOne({
        where: where
    });
    return fornecedor;
}

const deleteId = async function(id) {
    return await Fornecedor.destroy({ 
        where: { id: id }});
}

module.exports = {
    create: create,
    update: update,
    findAll: findAll,
    findById: findById,
    findWhere: findWhere,
    deleteId: deleteId,
}