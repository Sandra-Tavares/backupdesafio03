const { loginUsuario } = require("./controladores/controles-usuario");
const { detalharPerfilUsuarioLogado } = require("./controladores/controles-usuario");
const { cadastrarUsuario } = require("./controladores/controles-usuario")

const express = require('express');
const validarlogin = require("./intermediarios/validacao");
const { listarUsuarios } = require("./controladores/controles-usuario");



const rotas = express()

rotas.post('/usuario', cadastrarUsuario);
rotas.post('/login', loginUsuario);
rotas.use(validarlogin);

rotas.get('/usuario', detalharPerfilUsuarioLogado);






module.exports = rotas



