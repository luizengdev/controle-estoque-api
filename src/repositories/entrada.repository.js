const { Entrada, Item, Usuario } = require('../database/models/index');

const create = async function(entrada) {
    const entradaCriado = await Entrada.create(entrada);
    return entradaCriado;
}

const findAll = async function() {
    const itens = await Entrada.findAll({
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
    const entrada = await Entrada.findByPk(id);
    return entrada;
}

const findWhere = async function(where) {
    const entrada = await Entrada.findOne({
        where: where,
        include: [{
            model: Item,
            as: 'item'
        },{
            model: Usuario,
            as: 'usuario'
        }]
    });
    return entrada;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
    findWhere: findWhere,
}