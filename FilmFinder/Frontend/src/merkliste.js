
// Merkliste laden und anzeigen
async function ladeMerkliste() {
  const response = await fetch("http://localhost:3000/merkliste");
  const gespeicherte = await response.json();

  const merklisteDiv = document.getElementById("merkliste");
  merklisteDiv.innerHTML = "";

  if (gespeicherte.length === 0) {
    merklisteDiv.innerHTML = "<p>Du hast noch keine Filme in deiner Merkliste.</p>";
    return;
  }

  gespeicherte.forEach((film) => {
    const filmEl = document.createElement("div");
    filmEl.className = "filmkarte";
    filmEl.innerHTML = `
      <img src="${film.Poster}" alt="${film.Titel}" class="poster">
      <h3>${film.Titel}</h3>
      <a href="${film.Trailer}" target="_blank">▶️ Trailer ansehen</a><br>
      <button class="entfernen-btn" data-id="${film.id}">❌ Entfernen</button>
    `;
    merklisteDiv.appendChild(filmEl);
  });

  // Eventlistener für Entfernen-Buttons hinzufügen:
  document.querySelectorAll(".entfernen-btn").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const id = event.target.getAttribute("data-id");
      console.log("Entferne Film mit ID:", id); // Debug

      if (!id) {
        alert("Fehler: Keine ID gefunden.");
        return;
      }

      const res = await fetch(`http://localhost:3000/merkliste/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        ladeMerkliste();
      } else {
        const err = await res.text();
        alert("Fehler beim Entfernen: " + err);
      }
    });
  }); // <-- fehlende Klammer war hier!
}

// Film hinzufügen
async function filmHinzufügen(titel, poster, trailer) {
  if (!titel || !poster || !trailer) {
    alert("Bitte alle Felder ausfüllen!");
    return;
  }

  const response = await fetch("http://localhost:3000/merkliste", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Titel: titel,
      Poster: poster,
      Trailer: trailer,
    }),
  });

  if (response.ok) {
    alert("Film hinzugefügt!");
    ladeMerkliste();
  } else {
    alert("Fehler beim Hinzufügen.");
  }
}

// Beim Laden der Seite: Merkliste abrufen
document.addEventListener("DOMContentLoaded", () => {
  ladeMerkliste();

  const addBtn = document.getElementById("filmHinzufuegenBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const titel = document.getElementById("titel").value;
      const poster = document.getElementById("poster").value;
      const trailer = document.getElementById("trailer").value;
      filmHinzufügen(titel, poster, trailer);
    });
  }
});
