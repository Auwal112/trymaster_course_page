const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

// Example GET route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Example POST route using placeholders (?) to prevent SQL injection
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    res.status(201).json({ id: result.insertId, name, email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to insert user' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
