const express = require('express');
const axios = require('axios');

const app = express();

// Ruta para obtener el precio de la tarjeta
app.get('/api/dolar', async (req, res) => {
    try {
        // Hacer una solicitud a la API externa
        const response = await axios.get('https://criptoya.com/api/dolar');
        
        // Extraer el precio de la tarjeta del objeto de respuesta
        const dolarTarjeta = response.data.tarjeta.price;
        
        // Enviar solo el precio de la tarjeta como respuesta
        res.json({ dolarTarjeta });
    } catch (error) {
        // Manejar errores
        console.error('Error al obtener el precio de la tarjeta:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express funcionando en el puerto ${PORT}`);
});
