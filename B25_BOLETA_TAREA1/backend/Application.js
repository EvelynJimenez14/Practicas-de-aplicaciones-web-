const express = require('express');
const app = express();
const PORT = 8080;

// Deshabilitar caché
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

// Servir carpeta public
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
