const express = require('express');
const cors = require('cors');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();
const PORT = 3000;

// Setup lowdb with default structure
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({
  products: [],
  lifestyleGallery: [],
  lifestyleCollections: [],
  businessStats: [],
  businessVentures: [],
  careerTimeline: [],
  careerAchievements: [],
  brands: []
}).write();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ==================== Helper: get new ID ====================
const newId = () => Date.now();

// ==================== ROOT ====================
app.get('/', (req, res) => {
  res.send('kHp100 API is running');
});

// ==================== PRODUCTS ====================
app.get('/api/products', (req, res) => {
  res.json(db.get('products').value());
});

app.post('/api/products', (req, res) => {
  const newProduct = { id: newId(), ...req.body };
  db.get('products').push(newProduct).write();
  res.status(201).json(newProduct);
});

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = db.get('products').find({ id }).value();
  product ? res.json(product) : res.status(404).json({ error: 'Not found' });
});

app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = db.get('products').find({ id });
  if (product.value()) {
    product.assign(req.body).write();
    res.json(product.value());
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = db.get('products').remove({ id }).write();
  result.length ? res.status(204).send() : res.status(404).json({ error: 'Not found' });
});

// ==================== LIFESTYLE GALLERY ====================
app.get('/api/lifestyle/gallery', (req, res) => {
  res.json(db.get('lifestyleGallery').value());
});

app.post('/api/lifestyle/gallery', (req, res) => {
  const newItem = { id: newId(), ...req.body };
  db.get('lifestyleGallery').push(newItem).write();
  res.status(201).json(newItem);
});

app.put('/api/lifestyle/gallery/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.get('lifestyleGallery').find({ id });
  if (item.value()) {
    item.assign(req.body).write();
    res.json(item.value());
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/lifestyle/gallery/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = db.get('lifestyleGallery').remove({ id }).write();
  result.length ? res.status(204).send() : res.status(404).json({ error: 'Not found' });
});

// ==================== LIFESTYLE COLLECTIONS ====================
app.get('/api/lifestyle/collections', (req, res) => {
  res.json(db.get('lifestyleCollections').value());
});

app.post('/api/lifestyle/collections', (req, res) => {
  const newItem = { id: newId(), ...req.body };
  db.get('lifestyleCollections').push(newItem).write();
  res.status(201).json(newItem);
});

app.put('/api/lifestyle/collections/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.get('lifestyleCollections').find({ id });
  if (item.value()) {
    item.assign(req.body).write();
    res.json(item.value());
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/lifestyle/collections/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = db.get('lifestyleCollections').remove({ id }).write();
  result.length ? res.status(204).send() : res.status(404).json({ error: 'Not found' });
});

// ==================== BUSINESS STATS ====================
app.get('/api/business/stats', (req, res) => {
  res.json(db.get('businessStats').value());
});

app.post('/api/business/stats', (req, res) => {
  const newItem = { id: newId(), ...req.body };
  db.get('businessStats').push(newItem).write();
  res.status(201).json(newItem);
});

app.put('/api/business/stats/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.get('businessStats').find({ id });
  if (item.value()) {
    item.assign(req.body).write();
    res.json(item.value());
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/business/stats/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = db.get('businessStats').remove({ id }).write();
  result.length ? res.status(204).send() : res.status(404).json({ error: 'Not found' });
});

// ==================== BUSINESS VENTURES ====================
app.get('/api/business/ventures', (req, res) => {
  res.json(db.get('businessVentures').value());
});

app.post('/api/business/ventures', (req, res) => {
  const newItem = { id: newId(), ...req.body };
  db.get('businessVentures').push(newItem).write();
  res.status(201).json(newItem);
});

app.put('/api/business/ventures/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.get('businessVentures').find({ id });
  if (item.value()) {
    item.assign(req.body).write();
    res.json(item.value());
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/business/ventures/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = db.get('businessVentures').remove({ id }).write();
  result.length ? res.status(204).send() : res.status(404).json({ error: 'Not found' });
});

// ==================== CAREER TIMELINE ====================
app.get('/api/career/timeline', (req, res) => {
  res.json(db.get('careerTimeline').value());
});

app.post('/api/career/timeline', (req, res) => {
  const newItem = { id: newId(), ...req.body };
  db.get('careerTimeline').push(newItem).write();
  res.status(201).json(newItem);
});

app.put('/api/career/timeline/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.get('careerTimeline').find({ id });
  if (item.value()) {
    item.assign(req.body).write();
    res.json(item.value());
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/career/timeline/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = db.get('careerTimeline').remove({ id }).write();
  result.length ? res.status(204).send() : res.status(404).json({ error: 'Not found' });
});

// ==================== CAREER ACHIEVEMENTS ====================
app.get('/api/career/achievements', (req, res) => {
  res.json(db.get('careerAchievements').value());
});

app.post('/api/career/achievements', (req, res) => {
  const newItem = { id: newId(), ...req.body };
  db.get('careerAchievements').push(newItem).write();
  res.status(201).json(newItem);
});

app.put('/api/career/achievements/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.get('careerAchievements').find({ id });
  if (item.value()) {
    item.assign(req.body).write();
    res.json(item.value());
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/career/achievements/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = db.get('careerAchievements').remove({ id }).write();
  result.length ? res.status(204).send() : res.status(404).json({ error: 'Not found' });
});

// ==================== BRANDS ====================
app.get('/api/brands', (req, res) => {
  res.json(db.get('brands').value());
});

app.post('/api/brands', (req, res) => {
  const newItem = { id: newId(), ...req.body };
  db.get('brands').push(newItem).write();
  res.status(201).json(newItem);
});

app.put('/api/brands/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = db.get('brands').find({ id });
  if (item.value()) {
    item.assign(req.body).write();
    res.json(item.value());
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/brands/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = db.get('brands').remove({ id }).write();
  result.length ? res.status(204).send() : res.status(404).json({ error: 'Not found' });
});

// ==================== START SERVER ====================
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});