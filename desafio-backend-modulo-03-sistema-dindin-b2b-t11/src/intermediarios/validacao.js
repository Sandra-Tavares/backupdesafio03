const pool = require('./../conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../controladores/senhaJwt')

const validarlogin = async (req, res, next) => {
    const { authorization } = req.headers
    console.log(authorization)

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }

    const token = authorization.split(' ')[1]

    try {
        const { id } = jwt.verify(token, senhaJwt)

        const { rows, rowCount } = await pool.query('select * from usuarios where id = $1', [id])

        if (rowCount === 0) {
            console.log(rowCount)
            return res.status(401).json({ mensagem: 'Não autorizado1' })
        }
        const { senha, ...usuario } = rows[0]
        console.log(rowCount)
        req.usuario = usuario
        console.log(usuario)
        next()

    } catch (error) {

        return res.status(500).json({ mensagem: 'Não autorizado2' })

    }
}

module.exports = validarlogin