const express = require('express'); 
const app = express(); 
const PORT = 3005; 
app.listen(PORT, () => { 
    console.log(`Servidor escuchando en http://localhost:${PORT}`); 
});

app.get('/', (req, res) => {
    res.send('Mi Proyecto con Express');
});

app.get('/hola', (req, res) => {
    res.send('Hola Mundo');
});

app.get('/api', (req, res) => {
    res.json({mensaje: "Bienvenido al API"});
});
