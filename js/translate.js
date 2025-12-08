const translations = {
  fr: {
    navHome: "Accueil",
    navActual: "Joueurs et Staffs Actuels",
    navOld: "Anciens Joueurs et Staffs",
    navContact: "Contact",
    aboutTitle: "À propos de moi",
    aboutRole: "Manager Esport & Agent Personnel",
    aboutDescription: "Présent dans l'esport depuis juin 2024, je suis un jeune manager français principalement concentré sur la gestion de Fortnite, mais capable de gérer des divisions esports et la carrière de joueurs/staff dans d'autres jeux. Ma vision idéale du management est humaine avant tout, où les relations sont saines et amicales — sans oublier les objectifs professionnels de chaque collaboration.",
    collaborationsTitle: "Quelques-unes de mes collaborations",
    contactTitle: "Contactez-moi",
    contactName: "Nom :",
    contactEmail: "Email :",
    contactMessage: "Message :",
    contactSend: "Envoyer",
    actualTitle: "Joueurs et Staffs Actuels",
    oldTitle: "Anciens Joueurs et Staffs",
    flexpitoRole: "Joueur",
    flexpitoDesc: "Joueur Division 1 (Fortnite) - F/A.",
    spitaRole: "Joueur",
    spitaDesc: "Joueur Division 1 (Fortnite)",
    drizzRole: "Analyste",
    drizzDesc: "Brawl Stars Analyst - @EffortResult28",
    ratasRole: "Joueur",
    ratasDesc: "Joueur Division 1 (Fortnite).",
    linkyRole: "Joueur",
    linkyDesc: "Joueur Division 1 (Fortnite) - 5x Grandes Finales.",
    otherProfiles: "Autres Profils",
    cardPlayer: "Joueur",
    cardAnalyst: "Analyste",
    cardCoach: "Coach",
    cardManager: "Manager"
  },
  en: {
    navHome: "Home",
    navActual: "Actual Players and Staffs",
    navOld: "Old Players and Staffs",
    navContact: "Contact",
    aboutTitle: "About Me",
    aboutRole: "Esports Manager & Personal Agent",
    aboutDescription: "Present in esports since June 2024, I’m a young French manager mainly focused on Fortnite management, but also able to handle esports divisions and player/staff careers in other games. My ideal vision of management is a human-first approach where relationships are healthy and friendly — without forgetting the professional goals of each collaboration.",
    collaborationsTitle: "Some of my collaborations",
    contactTitle: "Contact Me",
    contactName: "Name:",
    contactEmail: "Email:",
    contactMessage: "Message:",
    contactSend: "Send",
    actualTitle: "Actual Players and Staffs",
    oldTitle: "Old Players and Staffs",
    flexpitoRole: "Player",
    flexpitoDesc: "Division 1 Player (Fortnite) - F/A.",
    spitaRole: "Player",
    spitaDesc: "Division 1 Player (Fortnite)",
    drizzRole: "Analyst",
    drizzDesc: "Brawl Stars Analyst - @EffortResult28",
    ratasRole: "Player",
    ratasDesc: "Division 1 Player (Fortnite).",
    linkyRole: "Player",
    linkyDesc: "Division 1 Player (Fortnite) - 5x Grand Finalist.",
    otherProfiles: "Other Profiles",
    cardPlayer: "Player",
    cardAnalyst: "Analyst",
    cardCoach: "Coach",
    cardManager: "Manager"
  },
  };

function changeLanguage(lang) {
  // sauvegarde de la langue
  localStorage.setItem("selectedLang", lang);

  // Header
  document.querySelector("#nav-home").textContent = translations[lang].navHome;
  document.querySelector("#nav-actual").textContent = translations[lang].navActual;
  document.querySelector("#nav-old").textContent = translations[lang].navOld;
  document.querySelector("#nav-contact").textContent = translations[lang].navContact;

  // About section
  const aboutTitle = document.querySelector(".about-me h2");
  if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle;
  const managerRole = document.querySelector(".manager-role");
  if (managerRole) managerRole.textContent = translations[lang].aboutRole;
  const managerDescription = document.querySelector(".manager-description");
  if (managerDescription) managerDescription.textContent = translations[lang].aboutDescription;

  // Collaborations
  const collaborationsTitle = document.querySelector(".collaborations h2");
  if (collaborationsTitle) collaborationsTitle.textContent = translations[lang].collaborationsTitle;

  // Actual / Old section titles
  const actualSectionTitle = document.querySelector(".players-section h2.actual-title");
  if (actualSectionTitle) actualSectionTitle.textContent = translations[lang].actualTitle;
  const oldSectionTitle = document.querySelector(".players-section h2.old-title");
  if (oldSectionTitle) oldSectionTitle.textContent = translations[lang].oldTitle;

  // Contact section
  const contactTitle = document.querySelector(".contact-section h2");
  if (contactTitle) contactTitle.textContent = translations[lang].contactTitle;
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.querySelector("label[for='name']").textContent = translations[lang].contactName;
    contactForm.querySelector("label[for='email']").textContent = translations[lang].contactEmail;
    contactForm.querySelector("label[for='message']").textContent = translations[lang].contactMessage;
    contactForm.querySelector("button").textContent = translations[lang].contactSend;
  }

  // Profiles individuels
  const profileName = document.querySelector(".profile-name");
  if (profileName) {
    const name = profileName.textContent.trim().toLowerCase();
    const role = document.querySelector(".profile-role");
    const desc = document.querySelector(".profile-description");
    const otherTitle = document.querySelector(".other-profiles h2");

    switch (name) {
      case "flexpito": role.textContent = translations[lang].flexpitoRole; desc.textContent = translations[lang].flexpitoDesc; break;
      case "spita": role.textContent = translations[lang].spitaRole; desc.textContent = translations[lang].spitaDesc; break;
      case "drizz": role.textContent = translations[lang].drizzRole; desc.textContent = translations[lang].drizzDesc; break;
      case "ratas": role.textContent = translations[lang].ratasRole; desc.textContent = translations[lang].ratasDesc; break;
      case "linky": role.textContent = translations[lang].linkyRole; desc.textContent = translations[lang].linkyDesc; break;
    }

    if (otherTitle) otherTitle.textContent = translations[lang].otherProfiles;
  }

  // Traduction des cartes sur les pages principales (index.html)
  document.querySelectorAll(".player-card p").forEach(cardRole => {
    const roleText = cardRole.textContent.trim().toLowerCase();
    if (roleText.includes("player") || roleText.includes("joueur") || roleText.includes("jugador"))
      cardRole.textContent = translations[lang].cardPlayer;
    else if (roleText.includes("analyst") || roleText.includes("analyste") || roleText.includes("analista"))
      cardRole.textContent = translations[lang].cardAnalyst;
    else if (roleText.includes("coach") || roleText.includes("entraineur") || roleText.includes("entrenador"))
      cardRole.textContent = translations[lang].cardCoach;
    else if (roleText.includes("manager"))
      cardRole.textContent = translations[lang].cardManager;
  });

  // Active button
  document.querySelectorAll(".lang-selector button").forEach(btn => btn.classList.remove("active"));
  const btn = document.querySelector(`.lang-selector button[onclick="changeLanguage('${lang}')"]`);
  if (btn) btn.classList.add("active");
}

// au chargement de la page, on restaure la langue sélectionnée
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "en";
  changeLanguage(savedLang);
});
