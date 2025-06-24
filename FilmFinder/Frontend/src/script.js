
const params = new URLSearchParams(window.location.search);
const genre = params.get("genre")?.toLowerCase().trim();
const plattform = params.get("plattform")?.toLowerCase().trim();
const ergebnisContainer = document.getElementById("ergebnis");



  const daten = {
    thriller: {
      netflix: [
        {
          titel: "Bird Box",
          poster: "https://de.web.img3.acsta.net/c_310_420/pictures/18/10/25/14/07/5095709.jpg",
          trailer: "https://www.youtube.com/watch?v=o2AsIXSh2xo"
        },

        {
          titel: "The Platform",
          poster: "https://m.media-amazon.com/images/M/MV5BOTUwOGE0ZmUtZWUzYi00ZjdkLWE1YTEtMDFjZjNjZWY1ZjM4XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
          trailer: "https://www.youtube.com/watch?v=RlfooqeZcdY"
        },
        {
          titel: "Parasite",
          poster: "https://cineprog.de/images/Breite_400px_RGB/p_80487.jpg",
          trailer: "https://youtu.be/9qvaE99iMR0?si=DQ-rT60gpt3npy7e"
        },
        {
          titel: "RUN",
          poster: "https://m.media-amazon.com/images/M/MV5BYmNkOWYxMjAtOWM3NC00N2VhLWFmMTQtNmViMTdmYmNmNmZkXkEyXkFqcGc@._V1_QL75_UY281_CR5,0,190,281_.jpg",
          trailer: "https://youtu.be/6n0h54amXFw?si=PPJibsMT8WGNzHkF"
        },
        {
          titel: "Prisoners",
          poster: "https://de.web.img2.acsta.net/c_310_420/pictures/210/419/21041951_20130920111111214.jpg",
          trailer: "https://youtu.be/ILd__arR_DE?si=_o00ggP4q3O-d6gD"
        },
        {
          titel: "Nirgendwo",
          poster: "https://www.film-rezensionen.de/wp-content/uploads/2023/09/Nirgendwo-2023.jpg",
          trailer: "https://youtu.be/dt-hYVimO8M?si=eSMKIdPagm-A8McL"
        }
      ],
      "disney+": [
        {
          titel: "Gone Girl",
          poster: "https://i.pinimg.com/564x/3e/e8/bc/3ee8bcc498f9515a8ef4054891978af7.jpg",
          trailer: "https://www.youtube.com/watch?v=2-_-1nJf8Vg"
        },
        {
          titel: "The Night House",
          poster: "https://m.media-amazon.com/images/I/51ZhIejZs1L._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/2Tshycci2ZA?si=30l_qnj_wOfS1BqL"
        },
        {
          titel: "No Exit",
          poster: "https://m.media-amazon.com/images/I/61p-jhvcqZL.jpg",
          trailer: "https://youtu.be/84YnYDGjxBI?si=h5j2MzURcMK2C-lj"
        },
        {
          titel: "The Menu",
          poster: "https://de.web.img2.acsta.net/pictures/22/09/22/09/26/2379387.jpg",
          trailer: "https://youtu.be/uERvRBYsCws?si=GPpve4Cfk2Er8Icv"
        }
      ],
      "prime video": [
        {
          titel: "Sicario",
          poster: "https://m.media-amazon.com/images/I/61aRj-9T19L._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/ynBcbW4Nagk?si=hLAWv0ChggF-T-_Q"
        },
        {
          titel: "The Gift",
          poster: "https://i.pinimg.com/736x/c6/a3/a0/c6a3a0b6f176465fd7689c1d743ed082.jpg",
          trailer: "https://youtu.be/mWGRbJ2fVuY?si=kalEqfOOpUspqchb"
        },
        {
          titel: "A Simple Favor",
          poster: "https://m.media-amazon.com/images/I/61dLyRRGOEL.jpg",
          trailer: "https://youtu.be/xcghreJ80cs?si=vs-pwX17R0oaskvD"
        },
        {
          titel: "The Lie",
          poster: "https://de.web.img3.acsta.net/pictures/20/09/17/07/54/5609572.jpg",
          trailer: "https://youtu.be/t-eQ3ocr2O4?si=T3hb_Mt9RIeJrXsF"
        }
      ],
      
       },
    action: {
      netflix: [
        {
          titel: "Extraction",
          poster: "https://image.tmdb.org/t/p/original/8yG4uBAqenecPdllvmwg0fV3YN5.jpg",
          trailer: "https://youtu.be/TBLSKAp6ngY?si=PILnJ-Ic3Arw5QVi"
        },
        {
        titel: "The Gray Man",
          poster: "https://i.ebayimg.com/images/g/imYAAOSw3oFjGcYC/s-l1200.jpg",
          trailer: "https://youtu.be/dLdV77HVtHc?si=tvlUciaBMXus6p46"
        },
        {
        titel: "Carter",
          poster: "https://pics.filmaffinity.com/Carter-433069336-large.jpg",
          trailer: "https://youtu.be/nUQ-_0SVw8M?si=oRulkrkpbGo-5ERb"
        },
        {
        titel: "The Old Guard",
          poster: "https://m.media-amazon.com/images/M/MV5BNjcwN2Y0MGEtMjkyYy00YTYxLWFjMWItZTEyZjA1MTJhMjE2XkEyXkFqcGc@._V1_.jpg",
          trailer: "https://youtu.be/MMxqdVacvwk?si=8laSirJd-9RYH2DL"
        },
      ],
      "disney+": [
        {
          titel: "Free Guy",
          poster: "https://i.ebayimg.com/images/g/HyAAAOSwKTNhF-bU/s-l1200.jpg",
          trailer: "https://youtu.be/dzS7hsSfjGM?si=TfLNCECaTLV302i7"
        },
        {
          titel: "Kingsman: The Secret Service",
          poster: "https://i.ebayimg.com/images/g/FrEAAOSwAvJW~CXe/s-l1200.jpg",
          trailer: "https://youtu.be/8rFUWPHwaHs?si=w3TX2_nnt67jwwIC"
        },
        {
          titel: "Avatar: The Way of Water",
          poster: "https://m.media-amazon.com/images/I/91TgRE4J4QL.jpg",
          trailer: "https://youtu.be/HHRRi0Hh6fM?si=GdWQO2BuNs25es3E"
        }
      ],
      "prime video": [
        {
          titel: "Nobody",
          poster: "https://de.web.img2.acsta.net/c_310_420/pictures/20/12/11/10/45/2955427.jpg",
          trailer: "https://youtu.be/P1n6Qp6c0Q8?si=N6KRnnwrvp9vjUP5"
        },
        {
          titel: "Cash Truck",
          poster: "https://de.web.img3.acsta.net/pictures/21/04/27/14/16/4309666.jpg",
          trailer: "https://youtu.be/nLGyDJbnhOg?si=pxKHVtc09s2ChbbJ"
        },
        {
          titel: "The Contractor",
          poster: "https://www.kinoundco.de/image/posters/2TUiAfXUAFdIwTNHJQt5VnAgOFO.jpg",
          trailer: "https://youtu.be/xVZ6MoihsWs?si=hNU1HGN5IoTljBaO"
        }
      ],
    },
    romanze: {
      netflix: [
        {
          titel: "Purple Hearts",
          poster: "https://de.web.img2.acsta.net/pictures/22/07/15/13/39/5566777.jpg",
          trailer: "https://youtu.be/WTLgg8oRSBE?si=bOPHhHjlExDgwzzf"
        },
        {
        titel: "20th Century Girl",
          poster: "https://de.web.img3.acsta.net/c_310_420/pictures/22/09/28/14/18/3173616.jpg",
          trailer: "https://youtu.be/gHE1KQWiimg?si=6I0psGuOle0VyDNb"
        },
        {
        titel: "Kissing Booth",
          poster: "https://de.web.img3.acsta.net/c_310_420/pictures/18/05/04/15/03/2133793.jpg",
          trailer: "https://youtu.be/OqJ5S6G5J5s?si=M69y6M4eGr7SkIVQ"
        },
        {
        titel: "Twilight",
          poster: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/LPoAAOSwX35jclMF/$_57.JPG?set_id=8800005007",
          trailer: "https://youtu.be/2cXukjy6rsc?si=Ej1UAP27TFdMyUw_"
        },
        {
        titel: "Winterbucht",
          poster: "https://de.web.img2.acsta.net/c_310_420/pictures/21/09/03/11/44/1708916.jpg",
          trailer: "https://youtu.be/WRPc5Jf_SvE?si=zcWrh3DRf4Q3PSKu"
        },
        {
        titel: "To All the Boys I’ve Loved Before",
          poster: "https://static1.tribute.ca/poster/660x980/to-all-the-boys-ive-loved-before-netflix-129946.jpg",
          trailer: "https://youtu.be/wCr9pgDdBKY?si=HE9oLkccHGi7fB9Q"
        },
      ],
      "disney+": [
        {
          titel: "The Proposal",
          poster: "https://m.media-amazon.com/images/I/619SDI5Q95L._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/Q3qHa8a_kEg?si=s9j-xDyjtSNQYPDW"
        },
        {
          titel: "10 Things I Hate About You",
          poster: "https://m.media-amazon.com/images/I/7197-0Pa8XS.jpg",
          trailer: "https://youtu.be/9p7O0CN7GNU?si=BSY5JTQ3j_WRWHsv"
        },
        {
          titel: "The Fault in Our Stars",
          poster: "https://m.media-amazon.com/images/I/71hQ371tm4L._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/Lc6p3RM-c4I?si=pwEancED76HenaIe"
        }
      ],
      "prime video": [
        {
          titel: "The Big Sick",
          poster: "https://m.media-amazon.com/images/M/MV5BYWQ4MWVkMTMtOTE4YS00Y2VmLWE5Y2YtMWJkOTMwZjIyZjY4XkEyXkFqcGc@._V1_.jpg",
          trailer: "https://youtu.be/YO-ATv2_U5M?si=er3z0OCvSo3D8Pg0"
        },
        {
          titel: "The Notebook",
          poster: "https://m.media-amazon.com/images/I/71ByV7NU-TL._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/BjJcYdEOI0k?si=CivS8BQ3J1XWMEsl"
        },
        {
          titel: "Love Rosie",
          poster: "https://media-cache.cinematerial.com/p/500x/nmcm1r2q/love-rosie-movie-poster.jpg?v=1456443708",
          trailer: "https://youtu.be/_iUrMBp2VT8?si=egzz2T9Uz4tU70k_"
        }
      ],
    },
    horror: {
      netflix: [
        {
          titel: "TAROT",
          poster: "https://kinomeister.de/wp-content/uploads/2024/01/tarot-plakat.jpg",
          trailer: "https://youtu.be/mf71cHOVCH8?si=X1y10Ae6DeKE5PQ6"
        },
        {
        titel: "Escape Room",
          poster: "https://image.tmdb.org/t/p/original/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
          trailer: "https://youtu.be/fYsHs6FVAQ4?si=B25q1H8K4DuFBbaB"
        },
        {
        titel: "ELI",
          poster: "https://pbs.twimg.com/media/EkoU5xsW0AUD4yY.jpg",
          trailer: "https://youtu.be/eUmzXJSxi0I?si=IoVZMbtfuA2eN9jE"
        },
        {
        titel: "The Ritual",
          poster: "https://images.justwatch.com/poster/249335333/s718/the-ritual.jpg",
          trailer: "https://youtu.be/Vfugwq2uoa0?si=HESbnLC8YPXUNW9h"
        },
      ],
      "disney+": [
        {
          titel: "The Night House",
          poster: "https://m.media-amazon.com/images/I/51ZhIejZs1L._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/2Tshycci2ZA?si=9a9bmsATnj-OkzVI"
        },
        {
          titel: "No Exit",
          poster: "https://m.media-amazon.com/images/M/MV5BMGE3YzAyYjUtMGE5MC00NDc0LThiMmEtNGRhY2Q5MzM0YWI2XkEyXkFqcGc@._V1_.jpg",
          trailer: "https://youtu.be/84YnYDGjxBI?si=3Eur8-1f66c6H1P0"
        },
        {
          titel: "Fresh",
          poster: "https://cdn.kinocheck.com/i/9zq4zx6j3p.jpg",
          trailer: "https://youtu.be/0U7rNU-pml4?si=2pD4pvalj_E51Mx5"
        }
      ],
      "prime video": [
        {
          titel: "Midsommar",
          poster: "https://i.ebayimg.com/images/g/n7MAAOSwOqdmaC6G/s-l1200.jpg",
          trailer: "https://youtu.be/k9nVWv0EW5E?si=n6lgoFya9J35Jw-L"
        },
        {
          titel: "Smile",
          poster: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/S~YAAOSw3Rdj0aIB/$_57.JPG?set_id=8800005007",
          trailer: "https://youtu.be/EFFJI6d-qB0?si=3YgAz3lb71b6c6ZI"
        },
        {
          titel: "The Black Phone",
          poster: "https://m.media-amazon.com/images/I/61YCQVG8VAL._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/azBW0sZwndg?si=yMWOqk6sFppPEHA_"
        }
      ],
    },
    komödie: {
      netflix: [
        {
          titel: "The Nice Guys",
          poster: "https://i.ebayimg.com/00/s/MTM1MFg5MTE=/z/DUYAAOSwQjZXQIrF/$_57.JPG?set_id=8800005007",
          trailer: "https://youtu.be/GQR5zsLHbYw?si=ozNi-Rq-vdHOlQWV"
        },
        {
        titel: "The Wrong Missy",
          poster: "https://de.web.img3.acsta.net/c_310_420/pictures/20/04/21/17/15/0297294.jpg",
          trailer: "https://youtu.be/2Cwaneq2w-4?si=njPZ3cLfDgB6Gpi3"
        },
        {
        titel: "Game Over, Man!",
          poster: "https://de.web.img3.acsta.net/pictures/18/01/05/10/16/1469637.jpg",
          trailer: "https://youtu.be/u7ZHi_dDSnQ?si=JN0jnEVdpuIlEoFa"
        },
        {
        titel: "Senior Year",
          poster: "https://de.web.img2.acsta.net/c_310_420/pictures/22/04/12/03/57/1996078.jpg",
          trailer: "https://youtu.be/HCtDkpe89aY?si=peHipXPG6M4APPd1"
        },
      ],
      "disney+": [
        {
          titel: "Free Guy",
          poster: "https://i.ebayimg.com/images/g/HyAAAOSwKTNhF-bU/s-l1200.jpg",
          trailer: "https://youtu.be/dzS7hsSfjGM?si=TfLNCECaTLV302i7"
        },
        {
          titel: "Jungle Cruise",
          poster: "https://m.media-amazon.com/images/I/91sBA5ojHpL._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/CbRzZXjyq44?si=0rRy6NYecJJotZ22"
        },
        {
          titel: "Night at the Museum",
          poster: "https://m.media-amazon.com/images/I/710LbBSzz1L._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/Ltba1_-tRT4?si=hzz1CL1P1vh7IK6s"
        }
      ],
      "prime video": [
        {
          titel: "Shotgun Wedding",
          poster: "https://i.ebayimg.com/images/g/mhsAAOSwIw9kcJFK/s-l400.jpg",
          trailer: "https://youtu.be/BabufDG4w5k?si=e_jZd95kMfLy7bRN"
        },
        {
          titel: "Little Miss Sunshine",
          poster: "https://i.ebayimg.com/images/g/QdQAAOSwMttjGsvZ/s-l1200.jpg",
          trailer: "https://youtu.be/pLBaT-4sVfk?si=KM6tj3_hAiiyBMqq"
        },
        {
          titel: "My Spy",
          poster: "https://myhotposters.com/cdn/shop/products/mL3440_large.jpg?v=1745710898",
          trailer: "https://youtu.be/pfAhQSz-j_o?si=NmdviTsjYBq3dWc6"
        }
      ],
    },
    drama: {
      netflix: [
        {
          titel: "Marriage Story",
          poster: "https://de.web.img2.acsta.net/c_310_420/pictures/19/10/17/16/58/1689390.jpg",
          trailer: "https://youtu.be/BHi-a1n8t7M?si=6tb1u8p5qLvyLm4S"
        },
        {
        titel: "The King",
          poster: "https://m.media-amazon.com/images/I/61PRx0xMtmL._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/svVykTznk9Q?si=_U-cqPc4MMWFE4X0"
        },
        {
        titel: "Pieces of a Woman",
          poster: "https://de.web.img2.acsta.net/pictures/20/12/14/16/14/2168814.jpg",
          trailer: "https://youtu.be/1zLKbMAZNGI?si=4JIAACedWxUdaA6f"
        },
        {
        titel: "The Power of the Dog",
          poster: "https://de.web.img3.acsta.net/pictures/21/11/16/08/37/1393026.jpg",
          trailer: "https://youtu.be/LRDPo0CHrko?si=4rDbfq4MdipQbcWY"
        },
        {
        titel: "Roma",
          poster: "https://i.ebayimg.com/images/g/CCoAAOSwYwZcR1HZ/s-l1200.jpg",
          trailer: "https://youtu.be/6BS27ngZtxg?si=7PMDAD9jurMdbvU5"
        },
      ],
      "disney+": [
        {
          titel: "Hidden Figures",
          poster: "https://i.ebayimg.com/images/g/d5wAAOSw~8xj3mR4/s-l1200.jpg",
          trailer: "https://youtu.be/5wfrDhgUMGI?si=YxZ6sSmxLvDnIgJ7"
        },
        {
          titel: "Queen of Katwe",
          poster: "https://de.web.img2.acsta.net/pictures/16/08/16/15/29/530242.jpg",
          trailer: "https://youtu.be/eEsz6o50wrY?si=gbIgPnVNEZOVQ7bp"
        },
        {
          titel: "Life of Pi",
          poster: "https://m.media-amazon.com/images/I/71KiXhv0fGL._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/3mMN693-F3U?si=t3POkZE43k2yp5ox"
        }
      ],
      "prime video": [
        {
          titel: "One Night in Miami",
          poster: "https://de.web.img2.acsta.net/c_310_420/pictures/20/11/19/07/25/4540853.jpg",
          trailer: "https://youtu.be/K8vf_Cmh9nY?si=l2cxqRSrOKmakjh1"
        },
        {
          titel: "Honey Boy",
          poster: "https://i.ebayimg.com/00/s/MTYwMFgxMDgw/z/8AYAAOSwGYZdxYDI/$_57.JPG?set_id=8800005007",
          trailer: "https://youtu.be/RG9a4xO0Inc?si=we1fUoXzzp3IHCZL"
        },
        {
          titel: "The Mauritanian",
          poster: "https://m.media-amazon.com/images/I/71OVhGWd0aL._AC_UF894,1000_QL80_.jpg",
          trailer: "https://youtu.be/7tmxxzZXLEM?si=HMcTgRd_mZT3rtun"
        }
      ],
    },
  };
  const ergebnisDiv = document.getElementById("ergebnis");
  ergebnisDiv.innerHTML = "";
  
  // Nur ausführen, wenn genre und plattform gültig sind
  if (genre && plattform && daten[genre] && daten[genre][plattform]) {
    const filme = daten[genre][plattform];
    const genreName = genre.charAt(0).toUpperCase() + genre.slice(1);
    const plattformName = plattform.charAt(0).toUpperCase() + plattform.slice(1);
  
    ergebnisDiv.innerHTML = `
      <h2>${genreName} auf ${plattformName}</h2>
      <div class="film-grid"></div>
    `;
  
    const grid = ergebnisDiv.querySelector(".film-grid");
  
    filme.forEach(film => {
      const filmElement = document.createElement("div");
      filmElement.className = "filmkarte";
      filmElement.innerHTML = `
        <img src="${film.poster}" alt="${film.titel}" class="poster">
        <h3>${film.titel}</h3>
        <a href="${film.trailer}" target="_blank">▶ Trailer ansehen</a>
        <button class="merken-btn">📌 Zur Merkliste</button>
      `;
      const button = filmElement.querySelector(".merken-btn");
      button.addEventListener("click", () => zurMerklisteHinzufuegen(film));
      grid.appendChild(filmElement);
    });
  } else if (genre && plattform) {
    // Nur anzeigen, wenn genre und plattform **gesetzt**, aber keine Daten gefunden wurden
    ergebnisDiv.innerHTML = `
      <h2>Keine Empfehlungen gefunden</h2>
      <p>Für die Kombination <strong>${genre}</strong> und <strong>${plattform}</strong> liegen aktuell keine Filme vor.</p>
      <p><a href="index.html" style="color:#fff; text-decoration:underline;">Zurück zur Auswahl</a></p>
    `;
  }
  
function zurMerklisteHinzufuegen(film) {
  const gespeicherte = JSON.parse(localStorage.getItem("merkliste")) || [];

  if (!gespeicherte.some(f => f.titel === film.titel)) {
    gespeicherte.push(film);
    localStorage.setItem("merkliste", JSON.stringify(gespeicherte));
    alert(`"${film.titel}" wurde zur Merkliste hinzugefügt!`);
  } else {
    alert(`"${film.titel}" ist bereits in deiner Merkliste.`);
  }
};
async function requestTextWithGET(url) {
  const response = await fetch(url);
  console.log('Response:', response); // vollständiges Response-Objekt
  const text = await response.text();
  console.log('Response-Text:', text); // Text aus dem Response-Body
}

requestTextWithGET('https://heintz-s.github.io/GIS-WS24/test.txt');
console.log('Zwischenzeitlich weiterarbeiten...');