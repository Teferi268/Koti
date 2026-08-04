/* ==========================================================================
   KOTI 2.0 — Routeur (hash-based, sans framework)
   ========================================================================== */
(function () {
  'use strict';
  var KOTI = (window.KOTI = window.KOTI || {});

  function monKotiRender(universe) {
    return function (container) { KOTI.pages.monKoti(container, { universe: universe }); };
  }

  var ROUTES = {
    '#/': { universe: 'general', render: KOTI_lazy('home'), title: 'KOTI — Votre bulle du mieux-être' },
    '#/vision': { universe: 'general', render: KOTI_lazy('vision'), title: 'Notre vision' },
    '#/histoire': { universe: 'general', render: KOTI_lazy('histoire'), title: 'Notre histoire' },
    '#/valeurs': { universe: 'general', render: KOTI_lazy('valeurs'), title: 'Nos valeurs' },
    '#/equipe': { universe: 'general', render: KOTI_lazy('equipe'), title: 'Notre équipe' },
    '#/actualites': { universe: 'general', render: KOTI_lazy('actualites'), title: 'Nos actualités' },
    '#/contact': { universe: 'general', render: KOTI_lazy('contact'), title: 'Nous contacter' },
    '#/rendez-vous': { universe: 'general', render: KOTI_lazy('rendezvous'), title: 'Prendre rendez-vous' },
    '#/faq': { universe: 'general', render: KOTI_lazy('faq'), title: 'FAQ' },

    '#/patient': { universe: 'patient', render: KOTI_lazy('patientHome'), title: 'Trouver mon accompagnement' },
    '#/patient/questionnaire': { universe: 'patient', render: KOTI_lazy('questionnaire'), title: 'Questionnaire d’orientation' },
    '#/patient/therapeutes': { universe: 'patient', render: KOTI_lazy('therapeutes'), title: 'Nos thérapeutes' },
    '#/patient/programmes': { universe: 'patient', render: KOTI_lazy('programmes'), title: 'Nos programmes' },
    '#/patient/mon-koti': { universe: 'patient', render: monKotiRender('patient'), title: 'Mon KOTI' },
    '#/patient/acteurs-sante': { universe: 'patient', render: KOTI_lazy('acteursSante'), title: 'Acteurs de la santé' },
    '#/patient/boutique': { universe: 'patient', render: KOTI_lazy('boutique'), title: 'Boutique' },
    '#/patient/vlog': { universe: 'patient', render: KOTI_lazy('vlog'), title: 'Vlog & blog bien-être' },

    '#/professionnel': { universe: 'professionnel', render: KOTI_lazy('proHome'), title: 'Installer mon activité au KOTI' },
    '#/professionnel/espaces': { universe: 'professionnel', render: KOTI_lazy('espaces'), title: 'Nos espaces' },
    '#/professionnel/tarifs': { universe: 'professionnel', render: KOTI_lazy('tarifs'), title: 'Tarifs professionnels' },
    '#/professionnel/guide-installation': { universe: 'professionnel', render: KOTI_lazy('guideInstallation'), title: 'Guide d’installation' },
    '#/professionnel/communaute': { universe: 'professionnel', render: KOTI_lazy('communaute'), title: 'Communauté professionnelle' },
    '#/professionnel/mon-koti': { universe: 'professionnel', render: monKotiRender('professionnel'), title: 'Mon KOTI' }
  };

  // Indirection : au moment où ROUTES est construit, KOTI.pages.* n'est pas encore
  // toutes peuplé selon l'ordre de chargement — on résout donc le rendu à l'appel.
  function KOTI_lazy(name) {
    return function (container) { KOTI.pages[name](container); };
  }

  function normalize(hash) {
    var h = (hash || '#/').split('?')[0];
    if (h.length > 2 && h.charAt(h.length - 1) === '/') h = h.slice(0, -1);
    return h || '#/';
  }

  function navigate() {
    var path = normalize(window.location.hash);
    var route = ROUTES[path];
    var headerMount = document.getElementById('headerMount');
    var main = document.getElementById('mainContent');
    var footerMount = document.getElementById('footerMount');

    var universe = route ? route.universe : 'general';
    KOTI.currentUniverse = universe;
    headerMount.innerHTML = KOTI.layout.renderHeader(universe, path);
    footerMount.innerHTML = KOTI.layout.renderFooter();

    main.innerHTML = '';
    if (route) {
      route.render(main);
      document.title = route.title + ' — KOTI';
    } else {
      KOTI.pages.notFound(main);
      document.title = 'Page introuvable — KOTI';
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    KOTI.layout.updateCartBadge();
    var h = document.getElementById('siteHeader');
    if (h) h.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  KOTI.router = { navigate: navigate, ROUTES: ROUTES };

  window.addEventListener('hashchange', navigate);
})();
