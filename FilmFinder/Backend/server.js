const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;

const datenPfad = path.join(__dirname, "merkliste.json");

app.use(cors());
app.use(express.json());

// Merkliste lesen
function leseMerkliste() {
  if (!fs.existsSync(datenPfad)) return [];
  const daten = fs.readFileSync(datenPfad);
  return JSON.parse(daten);
}

// Merkliste speichern
function speichereMerkliste(liste) {
  fs.writeFileSync(datenPfad, JSON.stringify(liste, null, 2));
}

// GET: Alle Filme
app.get("/merkliste", (req, res) => {
  const liste = leseMerkliste();
  res.json(liste);
});

// POST: Film hinzufügen
app.post("/merkliste", (req, res) => {
  const liste = leseMerkliste();
  const neuerFilm = {
    id: Date.now().toString(), // ID als String
    Titel: req.body.Titel,
    Poster: req.body.Poster,
    Trailer: req.body.Trailer,
  };
  liste.push(neuerFilm);
  speichereMerkliste(liste);
  res.status(201).json(neuerFilm);
});

// DELETE: Film entfernen
app.delete("/merkliste/:id", (req, res) => {
  let liste = leseMerkliste();
  const id = req.params.id;
  const neueListe = liste.filter((film) => film.id !== id);

  if (liste.length === neueListe.length) {
    return res.status(404).send("Film nicht gefunden");
  }

  speichereMerkliste(neueListe);
  res.status(204).send(); // Kein Inhalt
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
