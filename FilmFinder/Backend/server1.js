const http = require('http');
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const hostname = '127.0.0.1';
const port = 3000;
const dbFilePath = 'Filme.db';
let db;

// Server starten und Datenbank vorbereiten
async function startServer() {
  db = await sqlite.open({
    filename: dbFilePath,
    driver: sqlite3.Database,
  });

  // Tabelle anlegen (nur FilmFinder wird verwendet – als Merkliste)
  await db.run(`CREATE TABLE IF NOT EXISTS FilmFinder (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Titel TEXT,
    Poster TEXT,
    Trailer TEXT
  )`);

  console.log('Tabelle FilmFinder (Merkliste) ist bereit.');

  server.listen(port, hostname, () => {
    console.log(`Server läuft unter http://${hostname}:${port}/`);
  });
}

const server = http.createServer(async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Allow-Methods', '*');

  if (request.method === 'OPTIONS') {
    response.statusCode = 200;
    response.end();
    return;
  }

  const url = new URL(request.url || '', `http://${request.headers.host}`);

  if (url.pathname === '/merkliste') {
    switch (request.method) {
      case 'GET': {
        const gemerkteFilme = await db.all('SELECT * FROM FilmFinder');
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(gemerkteFilme));
        break;
      }

      case 'POST': {
        let jsonString = '';
        request.on('data', chunk => jsonString += chunk);
        request.on('end', async () => {
          const film = JSON.parse(jsonString);
          await db.run(
            'INSERT INTO FilmFinder (Titel, Poster, Trailer) VALUES (?, ?, ?)',
            [film.Titel, film.Poster, film.Trailer]
          );
          console.log('Film zur Merkliste hinzugefügt:', film);
          response.end('Film zur Merkliste hinzugefügt');
        });
        break;
      }

      case 'DELETE': {
        await db.run('DELETE FROM FilmFinder');
        response.end('Merkliste gelöscht');
        break;
      }

      default:
        response.statusCode = 405;
        response.end('Methode nicht erlaubt');
    }
  } else {
    response.statusCode = 404;
    response.end('Pfad nicht gefunden');
  }
});

startServer();
