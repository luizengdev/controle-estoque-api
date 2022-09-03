const saidaRepository = require('../repositories/saida.repository');
const itemRepository = require('../repositories/item.repository');
const createEerror = require('http-errors');

const create = async function(saida) {
    const item = await itemRepository.findById(saida.item_id);
   
    if (!item) {
        return createEerror(404, 'Item não existe, saida inválida');
    }

    const quantidade = item.quantidade - saida.quantidade;

    if (quantidade < 0) {
        return createEerror(400, 'Quantidade no estoque não pode ficar inferior a 0');
    }
    const saidaCriada = await saidaRepository.create(saida);
    await itemRepository.update({ quantidade }, item.id);
    return saidaCriada;
}

const findAll = async function() {
    const saidas = await saidaRepository.findAll();
    return saidas;
}

const findById = async function(id) {
    const saida = await saidaRepository.findById(id);
   
    if(!saida) {
        return createEerror(404, 'saida não encontrada');
    }
    return saida;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
}