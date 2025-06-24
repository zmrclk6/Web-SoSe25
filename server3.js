const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS erlauben für lokalen Zugriff (Live Server, etc.)
app.use(
  cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
    credentials: true
  })
);

// Benutzer-ID setzen, falls noch kein Cookie vorhanden ist
app.use((req, res, next) => {
  if (!req.cookies.user_id) {
    const id = uuidv4();
    res.cookie("user_id", id, {
      httpOnly: true,
      sameSite: "Lax",
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    req.cookies.user_id = id;
  }
  req.userId = req.cookies.user_id;
  next();
});

// Datenbankverbindung
const db = new sqlite3.Database('./wishlist.db', (err) => {
  if (err) console.error('DB-Fehler:', err.message);
  else console.log('SQLite-DB verbunden.');
});

// Tabellen erstellen
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    skintype TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS wishlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    UNIQUE (user_id, product_id)
  )`);
});

// Produkte abrufen (optional mit Hauttypfilter)
app.get('/api/products', (req, res) => {
  const { skintype } = req.query;
  const sql = skintype
    ? 'SELECT * FROM products WHERE skintype = ?'
    : 'SELECT * FROM products';
  const args = skintype ? [skintype] : [];

  db.all(sql, args, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Merkliste (komplett)
app.get('/api/wishlist', (req, res) => {
  const sql = `
    SELECT p.*
    FROM wishlist w
    JOIN products p ON p.id = w.product_id
    WHERE w.user_id = ?
  `;
  db.all(sql, [req.userId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Merkliste: Nur Produkt-IDs
app.get('/api/wishlist/ids', (req, res) => {
  db.all(
    'SELECT product_id FROM wishlist WHERE user_id = ?',
    [req.userId],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows.map((r) => r.product_id));
    }
  );
});

// Produkt zur Merkliste hinzufügen
app.post('/api/wishlist', (req, res) => {
  const { product_id } = req.body;
  if (!product_id) return res.status(400).json({ error: 'product_id fehlt' });

  db.run(
    'INSERT OR IGNORE INTO wishlist (user_id, product_id) VALUES (?, ?)',
    [req.userId, product_id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ added: product_id });
    }
  );
});

// Produkt aus Merkliste entfernen
app.delete('/api/wishlist/:product_id', (req, res) => {
  const { product_id } = req.params;

  db.run(
    'DELETE FROM wishlist WHERE user_id = ? AND product_id = ?',
    [req.userId, product_id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0)
        return res.status(404).json({ error: 'Nicht gefunden' });
      res.json({ removed: product_id });
    }
  );
});

// Statische Dateien (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Test-Route
app.get('/', (_, res) => {
  res.send('API läuft – verwende z. B. /api/products');
});

// Server starten
app.listen(PORT, () => {
  console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});