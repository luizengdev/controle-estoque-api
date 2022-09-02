const usuarioRepository = require('../repositories/usuario.repository');
const createEerror = require('http-errors');
require('dotenv').config();
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

const create = async function(usuario) {
    const existeUsuario = await usuarioRepository.findWhere({ email: usuario.email });
    if (existeUsuario) {
        return createEerror(409, 'Usuário já existe');
    }
    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT);
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
}

const login = async function (usuario) {
    const usuarioLogin = await usuarioRepository.findWhere({ email: usuario.email });

    if(!usuarioLogin) {
        return createEerror(401, 'Usuário invalido');
    }

    const compareSenha = await bcrypt.compare(usuario.senha, usuarioLogin.senha); 

    if (!compareSenha) {
        return createEerror(401, 'Usuário invalido');
    }

    const token = sign({
        id: usuarioLogin.id
    }, process.env.SECRET, {});
    delete usuarioLogin.senha

    return {
        auth: true,
        usuario: usuarioLogin,
        token: token,
    }
}

const update = async function(usuario, id) {
    const existeUsuario = await usuarioRepository.findById(id);
    if(!existeUsuario) {
        return createEerror(404, 'Usuário não existe');
    }
    await usuarioRepository.update(usuario, id);
    
    return await usuarioRepository.findById(id);
}

const findAll = async function() {
    const usuarios = await usuarioRepository.findAll();
    return usuarios;
}

const findById = async function(id) {
    const usuario = await usuarioRepository.findById(id);
    if(!usuario) {
        return createEerror(404, 'Usuário não encontrado');
    }
    return usuario;
}

const deleteId = async function(id) {
    const usuario = await usuarioRepository.findById(id);
    if(!usuario) {
        return createEerror(404, 'Usuário não encontrado');
    }
    await usuarioRepository.deleteId(id);
    return usuario;
}

module.exports = {
    create: create,
    update: update,
    findAll: findAll,
    findById: findById,
    deleteId: deleteId,
    login: login,
}