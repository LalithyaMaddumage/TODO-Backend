const todoService = require('../services/todoService');

// Create a new to-do
const createTodo = async (req, res) => {
  const { title, completed } = req.body;
  try {
    const newTodo = await todoService.createTodo(title, completed);
    res.status(201).json(newTodo);
  } catch (err) {
    console.error('Error creating todo:', err);
    res.status(500).json({ error: 'An error occurred while creating a new todo' });
  }
};

// Get all to-dos
const getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (err) {
    console.error('Error getting todos:', err);
    res.status(500).json({ error: 'An error occurred while fetching todos' });
  }
};

// Get one to-do by ID
const getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await todoService.getTodoById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    console.error('Error getting todo by ID:', err);
    res.status(500).json({ error: 'An error occurred while fetching the todo' });
  }
};

// Update a to-do by ID
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedTodo = await todoService.updateTodo(id, title, completed);
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (err) {
    console.error('Error updating todo:', err);
    res.status(500).json({ error: 'An error occurred while updating the todo' });
  }
};

// Delete a to-do by ID
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await todoService.deleteTodo(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(deletedTodo);
  } catch (err) {
    console.error('Error deleting todo:', err);
    res.status(500).json({ error: 'An error occurred while deleting the todo' });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
