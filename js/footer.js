// footer.js - Composant footer avec mentions légales uniquement (corrigé)
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  
  footer.innerHTML = `
    <div class="footer-legal">
      <h4>Mentions Légales</h4>
      <div class="legal-grid">
        <div class="legal-item">
          <strong>Éditeur :</strong> Neito (Particulier) - Manager Esport<br>
          <strong>Contact :</strong> <a href="mailto:neito.inquiries@gmail.com">neito.inquiries@gmail.com</a>
        </div>
        <div class="legal-item">
          <strong>Hébergement :</strong> GitHub Pages (GitHub, Inc. - San Francisco, CA, USA)<br>
          <strong>Site :</strong> <a href="https://github.com" target="_blank">github.com</a>
        </div>
        <div class="legal-item">
          <strong>Données personnelles :</strong> Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Les informations collectées via le formulaire de contact sont uniquement utilisées pour répondre à vos demandes.
        </div>
        <div class="legal-item">
          <strong>Propriété intellectuelle :</strong> L'ensemble du contenu de ce site est la propriété de Noah "Neito" Lefevre. Les logos et noms des joueurs/autres appartiennent à leurs ayants droits respectifs.
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Noah "Neito" Lefevre. All rights reserved.</p>
    </div>
  `;
  
  document.body.appendChild(footer);
});