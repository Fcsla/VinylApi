const express = require('express');
const app = express();
const db = require('./src/db/db');

db();

app.use(express.json());

app.get('/', (req,res) => {
    res.json('Olá, bem vindo a coleção de vinis');    
})

app.all('*', require('./src/routes/vinylRoutes'));

app.listen(3000, () => {
    console.log('Servidor Iniciado');
});