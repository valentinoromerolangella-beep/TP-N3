const pool = require('./db.js');

const obtenerGimnasios = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM gimnasios');
        res.json(result.rows);
    } catch (error) {
        console.log('Error obtener gimnasios:', error.message);
        res.status(500).json({ error: 'Error al obtener gimnasios' });
    }
};

const crearGimnasio = async (req, res) => {
    const { nombre, ubicacion, telefono, email } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO gimnasios (nombre, ubicacion, telefono, email) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, ubicacion, telefono, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log('Error crear gimnasio:', error.message);
        res.status(500).json({ error: 'Error al crear gimnasio' });
    }
};

const actualizarGimnasio = async (req, res) => {
    const { id } = req.params;
    const { nombre, ubicacion, telefono, email } = req.body;
    try {
        const result = await pool.query(
            'UPDATE gimnasios SET nombre = $1, ubicacion = $2, telefono = $3, email = $4 WHERE id = $5 RETURNING *',
            [nombre, ubicacion, telefono, email, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Gimnasio no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.log('Error actualizar gimnasio:', error.message);
        res.status(500).json({ error: 'Error al actualizar gimnasio' });
    }
};

const eliminarGimnasio = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM gimnasios WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Gimnasio no encontrado' });
        }
        res.json({ mensaje: 'Gimnasio eliminado', gimnasio: result.rows[0] });
    } catch (error) {
        console.log('Error eliminar gimnasio:', error.message);
        res.status(500).json({ error: 'Error al eliminar gimnasio' });
    }
};

module.exports = { obtenerGimnasios, crearGimnasio, actualizarGimnasio, eliminarGimnasio };
