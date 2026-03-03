// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());           // Allow frontend (e.g., http://localhost) to access the API
app.use(express.json());   // Parse JSON request bodies

// In-memory storage (replace with a real database later)
let products = [];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// POST a new product (admin only � we'll add authentication later)
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: Date.now(),          // simple unique id
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});
// GET a single product by id
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  product ? res.json(product) : res.status(404).json({ error: 'Not found' });
});

// PUT (update) an existing product
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { id, ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

// DELETE a product
// DELETE a product
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});
// Start the server
app.listen(PORT, () => {
  console.log(`? Server running at http://localhost:${PORT}`);
});