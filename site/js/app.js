/* ==========================================================================
   KOTI 2.0 — Bootstrap de l'application démo
   ========================================================================== */
(function () {
  'use strict';
  var KOTI = (window.KOTI = window.KOTI || {});

  document.addEventListener('DOMContentLoaded', function () {
    // Bibliothèque de symboles SVG (une seule fois, réutilisée par toutes les pages)
    var spriteWrap = document.createElement('div');
    spriteWrap.innerHTML = KOTI.spriteDefs;
    document.body.insertBefore(spriteWrap.firstChild, document.body.firstChild);

    // Bandeau cookies (démo RGPD)
    var cookieBanner = document.createElement('div');
    cookieBanner.className = 'cookie-banner';
    cookieBanner.id = 'cookieBanner';
    cookieBanner.innerHTML =
      '<div class="cookie-inner">' +
        '<div class="cookie-text">' +
          '<h4 style="font-family:var(--font-serif);font-weight:600;margin-bottom:4px;">Votre vie privée, votre choix</h4>' +
          '<p>Le KOTI utilise des cookies nécessaires au fonctionnement du site, et, avec votre accord, des cookies de mesure d\'audience et de contenus externes.</p>' +
        '</div>' +
        '<div class="cookie-actions">' +
          '<button class="btn btn-ghost btn-sm" id="cookieCustomBtn">Personnaliser</button>' +
          '<button class="btn btn-ghost btn-sm" id="cookieRefuseBtn">Tout refuser</button>' +
          '<button class="btn btn-dark btn-sm" id="cookieAcceptBtn">Tout accepter</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(cookieBanner);

    KOTI.layout.initGlobalHandlers();
    KOTI.layout.initCookieBanner();
    KOTI.editMode.init();

    // TEMPORAIRE — pose les badges "Image N" sur chaque photo après chaque rendu/re-rendu.
    var mainContent = document.getElementById('mainContent');
    if (mainContent) {
      KOTI.labelImages(mainContent);
      new MutationObserver(function () { KOTI.labelImages(mainContent); })
        .observe(mainContent, { childList: true, subtree: true });
    }

    if (!window.location.hash) {
      window.location.hash = '#/'; // déclenche 'hashchange' -> navigate()
    } else {
      KOTI.router.navigate();
    }
  });
})();
