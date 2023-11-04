const express = require('express');

const { detalharPerfilUsuarioLogado } = require("./controladores/controles-usuario");
const { cadastrarUsuario } = require("./controladores/controles-usuario")
const validarlogin = require("./intermediarios/validacao");
const loginUsuario = require("./controladores/login");
const { atualizarUsuario } = require('./controladores/controles-usuario');




const rotas = express()

rotas.post('/usuario', cadastrarUsuario);
rotas.post('/login', loginUsuario);

// rotas.use(validarlogin);

rotas.get('/usuario', detalharPerfilUsuarioLogado);
rotas.get('usuario', atualizarUsuario)





module.exports = rotas



