document.addEventListener("DOMContentLoaded", () => {
  // Collaborations
  const collaborations = [
    { photo: "assets/flexpito.jpg", name: "Flexpito", role: "Player", description: "Division 1 Player (Fortnite) - F/A", twitter: "https://twitter.com/Flexpito", twitch: "https://twitch.tv/Flexpito", tracker: "https://fortnitetracker.com/Flexpito" },
    { photo: "assets/drizz.jpg", name: "Drizz", role: "Analyst", description: "Brawl Stars Analyst - EffortResult28", twitter: "https://twitter.com/Drizz"" }
  ];

  const collabContainer = document.getElementById("collab-cards");
  if (collabContainer) {
    collaborations.forEach(c => {
      const card = document.createElement("div");
      card.classList.add("card","collab-card");
      card.innerHTML = `
        <div class="card-photo" style="background-image:url('${c.photo}');"></div>
        <h3 class="collab-role">${c.name}</h3>
        <p class="collab-performance">${c.description}</p>
        <div class="profile-socials">
          ${c.twitter?`<a href="${c.twitter}" target="_blank"><img src="assets/twitter.svg" alt="Twitter"></a>`:""}
          ${c.twitch?`<a href="${c.twitch}" target="_blank"><img src="assets/twitch.svg" alt="Twitch"></a>`:""}
          ${c.tracker?`<a href="${c.tracker}" target="_blank"><img src="assets/fortnitetracker.svg" alt="Tracker" style="width:26px;height:26px;"></a>`:""}
        </div>
      `;
      collabContainer.appendChild(card);
    });
  }

  // Players
  const players = [
    { photo: "assets/flexpito.jpg", name: "Flexpito", role: "Player", twitter: "https://twitter.com/Flexpito", twitch: "https://twitch.tv/flexpitofnr", tracker: "https://fortnitetracker.com/profile/all/OTF%20Flexpito/events" },
    { photo: "assets/spita.jpg", name: "Spita", role: "Player", twitter: "https://twitter.com/SpitaFN", twitch: "https://twitch.tv/spitafn", tracker: "https://fortnitetracker.com/profile/all/RN%20spituhǃ/events" },
    { photo: "assets/drizz.jpg", name: "Drizz", role: "Analyst", twitter: "https://twitter.com/Drizz_bs", },
    { photo: "assets/ratas.jpg", name: "Ratas", role: "Player", twitter: "https://twitter.com/ratasfn", twitch: "https://twitch.tv/ratasfn", tracker: "https://fortnitetracker.com/profile/all/2024%20ratas/events" },
    { photo: "assets/linky.jpg", name: "Linky", role: "Player", twitter: "https://twitter.com/linkyfis", tracker: "https://fortnitetracker.com/profile/all/linkyǃ/events" }
  ];

  const playersContainer = document.querySelector(".players-cards");
  if (playersContainer) {
    players.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("player-card");
      card.innerHTML = `
        <img src="${p.photo}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.role}</p>
        <div class="socials">
          ${p.twitter ? `<a href="${p.twitter}" target="_blank"><img src="assets/twitter.svg" alt="Twitter"></a>` : ""}
          ${p.twitch ? `<a href="${p.twitch}" target="_blank"><img src="assets/twitch.svg" alt="Twitch"></a>` : ""}
          ${p.tracker ? `<a href="${p.tracker}" target="_blank"><img src="assets/fortnitetracker.svg" alt="Tracker" style="width:26px;height:26px;"></a>` : ""}
        </div>
      `;
      playersContainer.appendChild(card);
    });
  }
});
