const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Create a new to-do

router.post('/add', todoController.createTodo);

// Get all to-dos
router.get('/', todoController.getAllTodos);

// Get one to-do by ID
router.get('/:id', todoController.getTodoById);

// Update a to-do by ID
router.put('/:id', todoController.updateTodo);

// Delete a to-do by ID
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
