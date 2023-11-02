const { loginUsuario } = require("./controladores/controles-usuario");
const { cadastrarUsuario } = require("./controladores/controles-usuario")

const express = require('express')



const rotas = express()

rotas.post('/usuario', cadastrarUsuario);
rotas.post('/login', loginUsuario)





module.exports = rotas



