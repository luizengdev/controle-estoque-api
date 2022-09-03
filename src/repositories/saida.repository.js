const { Saida, Item, Usuario } = require('../database/models/index');

const create = async function(saida) {
    const saidaCriado = await Saida.create(saida);
    return saidaCriado;
}

const findAll = async function() {
    const itens = await Saida.findAll({
        include: [{
            model: Item,
            as: 'item'
        },{
            model: Usuario,
            as: 'usuario'
        }]
    });
    return itens;
}

const findById = async function(id) {
    const saida = await Saida.findByPk(id);
    return saida;
}

const findWhere = async function(where) {
    const saida = await Saida.findOne({
        where: where,
        include: [{
            model: Item,
            as: 'item'
        },{
            model: Usuario,
            as: 'usuario'
        }]
    });
    return saida;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
    findWhere: findWhere,
}