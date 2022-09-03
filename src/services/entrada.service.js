const entradaRepository = require('../repositories/entrada.repository');
const itemRepository = require('../repositories/item.repository');
const createEerror = require('http-errors');

const create = async function(entrada) {
    const entradaCriada = await entradaRepository.create(entrada);
    const item = await itemRepository.findById(entrada.item_id);

    if (!item) {
        return createEerror(404, 'Item não existe, entrada inválida');
    }

    const quantidade = entradaCriada.quantidade + item.quantidade;

    await itemRepository.update({ quantidade }, item.id);
    return entradaCriada;
}

const findAll = async function() {
    const entradas = await entradaRepository.findAll();
    return entradas;
}

const findById = async function(id) {
    const entrada = await entradaRepository.findById(id);
   
    if(!entrada) {
        return createEerror(404, 'Entrada não encontrado');
    }
    return entrada;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
}