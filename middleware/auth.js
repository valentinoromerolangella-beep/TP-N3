const jwt = require('jsonwebtoken');
const pool = require('./db.js');

const secretKey = 'mi_llave_super_secreta';

const verificarToken = (req, res, next) => {
    const header = req.header('Authorization');
    if (!header) return res.status(401).send('Acceso denegado, falta token');

    const token = header.split(" ")[1];
    try {
        const verificado = jwt.verify(token, secretKey);
        req.user = verificado;
        next(); 
    } catch (error) {
        res.status(400).send('Token no válido');
    }
};

const loginRoute = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        const user = result.rows[0];

        if (user && user.password === password) {
            const token = jwt.sign({ id: user.id_usuario, nombre: user.nombre }, secretKey, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).send('Credenciales incorrectas');
        }
    } catch (error) {
        console.log('Error login:', error.message);
        res.status(500).send('Error en el login');
    }
};

module.exports = { verificarToken, loginRoute, secretKey };
