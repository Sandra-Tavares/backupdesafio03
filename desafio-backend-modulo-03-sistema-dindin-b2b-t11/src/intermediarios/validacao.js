const pool = require('../conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../controladores/senhaJwt')

const validarlogin = async (req, res, next) => {
    const { authorization } = req.headers


    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    };

    const token = authorization.split(' ')[1];

    try {
        const { id } = jwt.verify(token, senhaJwt);

        const { rows, rowCount } = await pool.query('select * from usuarios where id = $1', [id]);

        if (rowCount < 1) {
            return res.status(401).json({ mensagem: 'Não autorizado1' })
        }

        req.usuario = rows[0]

        next()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Não autorizado2' })

    }
}

module.exports = validarlogin