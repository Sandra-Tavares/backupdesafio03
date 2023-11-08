const pool = require('../conexao')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaJwt = require('./senhaJwt')

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body

    try {

        const usuario = await pool.query('select * from usuarios where email = $1', [email])

        if (usuario.rowCount === 0) {
            return res.status(400).json({ mensagem: 'Email ou senha inválida' })
        }
        const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)

        if (!senhaValida) {
            return res.status(400).json({ mensagem: 'Email ou senha inválida' })
        }

        const token = jwt.sign({ id: usuario.rows[0].id }, senhaJwt, { expiresIn: '12h' })

        const { senha: _, ...usuarioLogado } = usuario.rows[0]

        return res.status(201).json({ usuario: usuarioLogado, token })

    } catch (error) {
        return res.status(404).json({ mensagem: 'Erro interno do Servidor' })
    }
}

module.exports = loginUsuario