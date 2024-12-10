const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir el acceso CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Endpoints para operaciones matemáticas
app.get('/sumar', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) + parseFloat(b);
    res.json({ result });
});

app.get('/restar', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) - parseFloat(b);
    res.json({ result });
});

app.get('/multiplicar', (req, res) => {
    const { a, b } = req.query;
    const result = parseFloat(a) * parseFloat(b);
    res.json({ result });
});

app.get('/dividir', (req, res) => {
    const { a, b } = req.query;
    if (b === '0') return res.status(400).json({ error: "No se puede dividir por cero" });
    const result = parseFloat(a) / parseFloat(b);
    res.json({ result });
});

// Endpoint para All Clear (resetear todo)
app.get('/ac', (req, res) => {
    const result = "";
    res.json({ result}); // Retorna un objeto vacío para no mostrar nada en el display
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
