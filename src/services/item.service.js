const itemRepository = require('../repositories/item.repository');
const createEerror = require('http-errors');


const create = async function(item) {
    const itemCriado = await itemRepository.create(item);
    return itemCriado;
}

const update = async function(item, id) {
    const existeItem = await itemRepository.findById(id);
   
    if(!existeItem) {
        return createEerror(404, 'Item não existe');
    }
    await itemRepository.update(item, id);
    
    return await itemRepository.findById(id);
}

const findAll = async function() {
    const itens = await itemRepository.findAll();
    return itens;
}

const findById = async function(id) {
    const item = await itemRepository.findById(id);
   
    if(!item) {
        return createEerror(404, 'Item não encontrado');
    }
    return item;
}

const deleteId = async function(id) {
    const item = await itemRepository.findById(id);
   
    if(!item) {
        return createEerror(404, 'Item não encontrado');
    }
    await itemRepository.deleteId(id);
    return item;
}

module.exports = {
    create: create,
    update: update,
    findAll: findAll,
    findById: findById,
    deleteId: deleteId,
}