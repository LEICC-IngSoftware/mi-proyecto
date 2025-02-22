//Crear servidor con express
const express = require('express'); 
const app = express(); 
const PORT = 3005; 

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`); 
});


//Cargar variables de entorno
require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');
//Establecer conexión con Supabase
const supabase = createClient( process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY );

//APIs

app.get('/', (req, res) => {
    res.send('Mi Proyecto con Express');
});

app.get('/hola', (req, res) => {
    res.send('Hola Mundo');
});

app.get('/tareas', (req, res) => {
  supabase
  .from('tareas')
  .select('*')
  .then(({ data, error }) => {
    if (error) console.error(error);
    else res.send(data);
  });
})
