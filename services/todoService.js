const db = require('../db');

// Create a new to-do
const createTodo = async (title, completed) => {
  try {
    const result = await db.query(
      'INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *',
      [title, completed]
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

// Get all to-dos
const getAllTodos = async () => {
  try {
    const result = await db.query('SELECT * FROM todos');
    return result.rows;
  } catch (err) {
    throw err;
  }
};

// Get one to-do by ID
const getTodoById = async (id) => {
  try {
    const result = await db.query('SELECT * FROM todos WHERE id = $1', [id]);
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

// Update a to-do by ID
const updateTodo = async (id, title, completed) => {
  try {
    const result = await db.query(
      'UPDATE todos SET title = $2, completed = $3 WHERE id = $1 RETURNING *',
      [id, title, completed]
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

// Delete a to-do by ID
const deleteTodo = async (id) => {
  try {
    const result = await db.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
