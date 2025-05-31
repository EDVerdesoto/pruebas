// user.controller.js
// Array en memoria para almacenar usuarios
let users = [];

// Devuelve todos los usuarios almacenados
function getAllUsers(req, res) {
  res.json(users);
}

// Crea o agrega un nuevo usuario
function createUser(req, res) {
  const { name, email } = req.body;

  // Validación básica de datos
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
  };

  users.push(newUser);
  return res.status(201).json(newUser);
}

// Función auxiliar para resetear el array
function resetUsers() {
  users = [];
}

module.exports = {getAllUsers, createUser,resetUsers, };
