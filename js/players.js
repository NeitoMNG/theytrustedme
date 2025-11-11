document.addEventListener("DOMContentLoaded", () => {
  // Récupère le script qui a inclus ce fichier
  const currentScript = document.querySelector('script[src$="players.js"]');
  const page = currentScript.getAttribute("data-page") || "index";

  const playersData = {
    index: [
      { 
        photo: "assets/flexpito.jpg", 
        name: "Flexpito", 
        role: "Player", 
        description: "Division 1 Player (Fortnite) - F/A", 
        twitter: "https://twitter.com/Flexpito", 
        twitch: "https://twitch.tv/flexpitofnr", 
        tracker: "https://fortnitetracker.com/profile/all/Vitinhashter%2017/events", 
        profile: "profile/flexpito.html" 
      },
      { 
        photo: "assets/drizz.jpg", 
        name: "Drizz", 
        role: "Analyst", 
        description: "Brawl Stars Analyst", 
        twitter: "https://twitter.com/Drizz_bs", 
        profile: "profile/drizz.html" 
      }
    ],
    actual: [
      { 
        photo: "assets/flexpito.jpg", 
        name: "Flexpito", 
        role: "Player", 
        description: "Division 1 Player (Fortnite) - F/A", 
        twitter: "https://twitter.com/Flexpito", 
        twitch: "https://twitch.tv/flexpitofnr", 
        tracker: "https://fortnitetracker.com/profile/all/Vitinhashter%2017/events", 
        profile: "profile/flexpito.html" 
      },
      { 
        photo: "assets/spita.jpg", 
        name: "Spita", 
        role: "Player", 
        description: "Player", 
        twitter: "https://twitter.com/SpitaFN", 
        twitch: "https://twitch.tv/spitafn", 
        tracker: "https://fortnitetracker.com/profile/all/1up%20spitävskiǃ/events", 
        profile: "profile/spita.html" 
      },
      { 
        photo: "assets/drizz.jpg", 
        name: "Drizz", 
        role: "Analyst", 
        description: "Brawl Stars Analyst", 
        twitter: "https://twitter.com/Drizz_bs", 
        profile: "profile/drizz.html" 
      }
    ],
    old: [
      { 
        photo: "assets/ratas.jpg", 
        name: "Ratas", 
        role: "Player", 
        description: "Former Player", 
        twitter: "https://twitter.com/RatasFN", 
        twitch: "https://twitch.tv/ratasfn", 
        tracker: "https://fortnitetracker.com/profile/all/2024%20ratas/events", 
        profile: "profile/ratas.html" 
      },
      { 
        photo: "assets/linky.jpg", 
        name: "Linky", 
        role: "Player", 
        description: "Former Player", 
        twitter: "https://twitter.com/linkyfis", 
        tracker: "https://fortnitetracker.com/profile/all/linkyǃ/events", 
        profile: "profile/linky.html" 
      }
    ]
  };

  const containerId = page === "index" ? "collab-cards" : "players-cards";
  const container = document.getElementById(containerId);
  if (!container) return;

  playersData[page].forEach(p => {
    // Créer la carte entière comme un lien vers la page profil
    const cardLink = document.createElement("a");
    cardLink.href = p.profile; // Chemin relatif vers la page profil
    cardLink.classList.add(page === "index" ? "collab-card" : "player-card");

    cardLink.innerHTML = `
      <img src="${p.photo}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.role}</p>
      <div class="socials">
        ${p.twitter ? `<a href="${p.twitter}" target="_blank"><img src="assets/twitter.svg" alt="Twitter"></a>` : ""}
        ${p.twitch ? `<a href="${p.twitch}" target="_blank"><img src="assets/twitch.svg" alt="Twitch"></a>` : ""}
        ${p.tracker ? `<a href="${p.tracker}" target="_blank"><img class="social-icon" src="assets/fortnitetracker.svg" alt="Tracker"></a>` : ""}
      </div>
    `;
    container.appendChild(cardLink);
  });
});
