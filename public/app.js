const express = require('express');
const cors = require('cors');
const { verificarToken, loginRoute } = require('./auth.js');

const app = express();

app.use(express.json());
app.use(cors());


app.post('/login', loginRoute);

app.get('/mis-suscripciones', verificarToken, async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM suscripciones WHERE id_usuario = $1', [req.user.id]);
        res.json(result.rows);
    } catch (error) {
        console.log('Error suscripciones:', error.message);
        res.status(500).send('Error al obtener datos');
    }
});


module.exports = app;
