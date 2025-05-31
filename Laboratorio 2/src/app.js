// app.js
const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());

// Ruta base para gestión de usuarios
app.use('/api/users', userRoutes);

// Manejador de rutas no encontradas (404)
app.use((req, res) => {res.status(404).json({ message: 'Route not found' });});

module.exports = app;
