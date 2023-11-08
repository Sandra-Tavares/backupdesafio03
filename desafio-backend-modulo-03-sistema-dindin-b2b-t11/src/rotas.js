const express = require('express');

const { detalharPerfilUsuarioLogado } = require("./controladores/controles-usuario");
const { cadastrarUsuario } = require("./controladores/controles-usuario")
const validarlogin = require("./intermediarios/validacao");
const loginUsuario = require("./controladores/login");
const { atualizarUsuario } = require('./controladores/controles-usuario');
const { listarCategorias } = require('./controladores/controles-usuario');
const { listarTrancacoesDoUsuarioLogado } = require('./controladores/controles-usuario');
const { detalharTrancacaoDoUsuarioLogado } = require('./controladores/controles-usuario');
const { cadastrarTransacaoDoUsuarioLogado } = require('./controladores/controles-usuario');
const { excluirTransacaoDoUsuarioLogado } = require('./controladores/controles-usuario');
const { atualizarTransacaoDoUsuarioLogado } = require('./controladores/controles-usuario');
const { obterExtratoDeTransacoes } = require('./controladores/controles-usuario');


const rotas = express()

rotas.post('/usuario', cadastrarUsuario);
rotas.post('/login', loginUsuario);

rotas.use(validarlogin);
rotas.get('/usuario', detalharPerfilUsuarioLogado);
rotas.put('/usuario', atualizarUsuario);
rotas.get('/categorias', listarCategorias);
rotas.get('/transacao', listarTrancacoesDoUsuarioLogado);
rotas.get('/transacao/:id', detalharTrancacaoDoUsuarioLogado);
rotas.post('/transacao', cadastrarTransacaoDoUsuarioLogado);
rotas.put('/transacao/:id', atualizarTransacaoDoUsuarioLogado);
rotas.delete('/transacao/:id', excluirTransacaoDoUsuarioLogado);
rotas.get('/usuario/extrato', obterExtratoDeTransacoes);

module.exports = rotas



