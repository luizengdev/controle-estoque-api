const { Item } = require('../database/models/index');

const create = async function(item) {
    const itemCriado = await Item.create(item);
    return itemCriado;
}

const update = async function(item, id) {
    await Item.update(item, {
        where: { id: id }
    });
}

const findAll = async function() {
    const itens = await Item.findAll();
    return itens;
}

const findById = async function(id) {
    const item = await Item.findByPk(id);
    return item;
}

const findWhere = async function(where) {
    const item = await Item.findOne({
        where: where
    });
    return item;
}

const deleteId = async function(id) {
    return await Item.destroy({ 
        where: { id: id }
    })
}

module.exports = {
    create: create,
    update: update,
    findAll: findAll,
    findById: findById,
    findWhere: findWhere,
    deleteId: deleteId,
}