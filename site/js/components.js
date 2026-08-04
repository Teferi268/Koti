/* ==========================================================================
   KOTI 2.0 — Composants de rendu réutilisés par plusieurs pages
   ========================================================================== */
(function () {
  'use strict';
  var KOTI = (window.KOTI = window.KOTI || {});
  var icon = KOTI.icon;
  var C = {};

  var sceneCycle = ['salon', 'plants', 'reception', 'vase', 'corridor', 'storefront', 'books', 'bag', 'mirror'];
  C.sceneFor = function (index) { return sceneCycle[index % sceneCycle.length]; };

  var ambiancePhotoCycle = [
    'gen_general__espace_soin_lumineux_hd.jpg',
    'accueil__carte_notre_histoire_bouquet.jpg',
    'page_actualites__photo_table_basse_fleurs.jpg',
    'accueil__carte_notre_vision_salon.jpg',
    'accueil__carte_nos_valeurs_espace_lumineux.jpg'
  ];
  C.ambiancePhotoFor = function (index) { return ambiancePhotoCycle[index % ambiancePhotoCycle.length]; };

  C.breadcrumb = function (items) {
    return '<nav class="breadcrumb" aria-label="Fil d\'Ariane">' + items.map(function (it, i) {
      var last = i === items.length - 1;
      if (last) return '<span aria-current="page">' + it[1] + '</span>';
      return '<a href="' + it[0] + '">' + it[1] + '</a>' + icon('chevronRight');
    }).join('') + '</nav>';
  };

  C.sectionHead = function (eyebrow, title, opts) {
    opts = opts || {};
    return '<div class="section-head' + (opts.center ? ' center' : '') + '">' +
      (eyebrow ? '<span class="eyebrow">' + eyebrow + '</span>' : '') +
      '<h2>' + title + '</h2>' +
      '<span class="gold-sep' + (opts.center ? ' center' : '') + '" aria-hidden="true"></span>' +
      (opts.lead ? '<p class="lead">' + opts.lead + '</p>' : '') +
      '</div>';
  };

  /* Icônes des chiffres clés : tracés dédiés (identiques à la maquette de
     référence), volontairement distincts de la bibliothèque d'icônes
     générique — toutes au trait (fill="none") pour rester uniformes entre
     elles, y compris l'étoile qui est pleine partout ailleurs sur le site. */
  var STAT_ICON_PATHS = {
    leaf: '<path d="M5 19c8 0 14-6 14-14C11 5 5 11 5 19Z"/><path d="M5 19c4-4 7-7 14-14"/>',
    meditation2: '<circle cx="12" cy="7.5" r="3.5"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/>',
    heart: '<path d="M12 20s-7.5-4.8-9-10.1C1.9 6 4.3 3.5 7.2 3.5c1.8 0 3.3 1 4.1 2.4.8-1.4 2.3-2.4 4.1-2.4 2.9 0 5.3 2.5 4.2 6.4C18 15.2 12 20 12 20Z"/>',
    calendar: '<rect x="4" y="5.5" width="16" height="15" rx="2.5"/><path d="M8 3.5v4M16 3.5v4M4 10h16"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" stroke-width="2.2"/>',
    starOutline: '<path d="m12 3 2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6-4.4-4.3 6-.9L12 3Z"/>'
  };
  C.statsBlock = function () {
    var stats = [
      ['leaf', '50+', 'thérapeutes passionnés'],
      ['meditation2', '70+', 'disciplines complémentaires'],
      ['heart', '5000+', 'accompagnements chaque année'],
      ['calendar', '7j/7', 'un lieu ouvert à tous les jours'],
      ['starOutline', '95%', 'de satisfaction de nos clients']
    ];
    return '<div class="container" style="margin-top:calc(-1 * var(--sp-6) + var(--sp-3)); position:relative; z-index:2;">' +
      '<div class="stats-card">' + stats.map(function (s) {
        return '<div class="stat" style="text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px;">' +
          '<svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' + STAT_ICON_PATHS[s[0]] + '</svg>' +
          '<span class="stat-value">' + s[1] + '</span><span class="stat-label">' + s[2] + '</span></div>';
      }).join('') + '</div></div>';
  };

  C.whyDifferentBlock = function () {
    var items = [
      ['globe', 'Une approche globale', 'Nous considérons la personne dans sa globalité : corps, esprit et émotions.'],
      ['house', 'Un lieu d\'exception', 'Des espaces chaleureux, apaisants et inspirants au cœur de Nogent-sur-Marne.'],
      ['people', 'Une communauté bienveillante', 'Des thérapeutes engagés et une équipe à votre écoute chaque jour.'],
      ['lotus', 'Des solutions sur-mesure', 'Des accompagnements et des approches adaptés à vos besoins et à vos évolutions.'],
      ['shield', 'Sécurité &amp; confidentialité', 'Vos données et votre parcours personnalisés sont protégés comme un précieux trésor.']
    ];
    return '<section><div class="container">' +
      C.sectionHead(null, 'Pourquoi le KOTI est différent ?', { center: true }) +
      '<div class="why-grid">' +
      items.map(function (it) {
        return '<div class="why-item" style="text-align:center;display:flex;flex-direction:column;align-items:center;gap:8px;">' +
          '<span class="why-icon" style="width:64px;height:64px;border-radius:50%;background:var(--sand);display:flex;align-items:center;justify-content:center;color:var(--sage-ink);">' + icon(it[0]) + '</span>' +
          '<h3 style="font-size:1.05rem;">' + it[1] + '</h3><p style="color:#4b544c;font-size:.9rem;max-width:30ch;">' + it[2] + '</p></div>';
      }).join('') + '</div></div></section>';
  };

  C.editorialTrio = function () {
    var cards = [
      ['accueil__carte_notre_vision_salon.jpg', '#/vision', 'Notre vision', 'Une vision d\'avenir : rendre la santé de demain plus humaine, plus globale et accessible à chacun.'],
      ['accueil__carte_notre_histoire_bouquet.jpg', '#/histoire', 'Notre histoire', 'Une histoire de famille, portée par une même conviction : prendre soin de l\'humain avec sincérité et bienveillance.'],
      ['accueil__carte_nos_valeurs_espace_lumineux.jpg', '#/valeurs', 'Nos valeurs', 'L\'humain, l\'écoute, la bienveillance et l\'exigence professionnelle : des principes qui guident chaque accompagnement.']
    ];
    return '<section><div class="container"><div class="grid-cards cols-3">' +
      cards.map(function (c) {
        return '<a class="card" href="' + c[1] + '" style="display:block;">' +
          '<div class="card-media" style="height:190px;border-radius:0;">' +
            '<img class="image-cover" src="' + KOTI.IMG + c[0] + '" alt="' + c[2] + '" loading="lazy">' +
          '</div>' +
          '<div class="card-body"><h3>' + c[2] + '</h3><p>' + c[3] + '</p>' +
          '<span class="link-arrow">En savoir plus ' + icon('arrow') + '</span></div></a>';
      }).join('') + '</div></div></section>';
  };

  C.testimonialsBlock = function () {
    var clients = KOTI.data.temoignagesClients;
    var theras = KOTI.data.temoignagesTherapeutes;
    function quote(t) {
      return '<div class="stars" aria-hidden="true">' +
        [0, 1, 2, 3, 4].map(function () { return icon('star'); }).join('') + '</div>' +
        '<p class="quote" style="font-family:var(--font-serif);font-style:italic;">« ' + t.texte + ' »</p>' +
        '<div class="quote-author" style="display:flex;align-items:center;gap:10px;margin-top:6px;">' +
        '<span class="avatar" style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--sage),var(--gold));display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--font-serif);font-size:.8rem;">' + t.initiales + '</span>' +
        '<span><span style="display:block;font-weight:600;font-size:.88rem;">' + t.nom + '</span><span style="font-size:.75rem;color:#7a8079;">' + t.role + '</span></span></div>';
    }
    return '<div class="lower-card" data-tabs-group>' +
      '<h3>Ils en parlent mieux que nous</h3>' +
      '<div class="tabs" role="tablist"><button class="tab-btn active" role="tab" aria-selected="true" data-tab="clients">Côté clients</button>' +
      '<button class="tab-btn" role="tab" aria-selected="false" data-tab="therapeutes">Côté thérapeutes</button></div>' +
      '<div class="tab-panel active" data-panel="clients">' + quote(clients[0]) + '</div>' +
      '<div class="tab-panel" data-panel="therapeutes">' + quote(theras[0]) + '</div>' +
      '<a href="#/actualites" class="link-arrow" style="margin-top:auto;">Voir tous les témoignages ' + icon('arrow') + '</a></div>';
  };

  C.ctaBand = function (opts) {
    return '<section class="tight"><div class="container">' +
      '<div class="cta-band' + (opts.tone === 'gold' ? ' gold' : '') + '">' +
        '<h2 style="color:inherit;">' + opts.title + '</h2>' +
        '<p style="max-width:56ch;">' + opts.text + '</p>' +
        '<div class="cta-band-actions">' +
          opts.buttons.map(function (b) { return '<a href="' + b[0] + '" class="btn ' + (b[2] || 'btn-white') + '">' + b[1] + ' ' + icon('arrow') + '</a>'; }).join('') +
        '</div></div></div></section>';
  };

  /* ---------------- Cartes métier ---------------- */
  C.therapeuteCard = function (t, idx) {
    return '<div class="profile-card">' +
      '<span class="profile-avatar" style="background:linear-gradient(135deg,var(--' + t.tone + (t.tone === 'sage' ? '-ink' : t.tone === 'gold' ? '-deep' : '') + '),var(--' + t.tone + '));">' + initials(t.nom) + '</span>' +
      '<h3 style="font-size:1.02rem;">' + t.nom + '</h3>' +
      '<span class="profile-role">' + t.discipline + '</span>' +
      '<p>' + t.bio + '</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:6px;">' +
        '<button class="btn btn-ghost btn-sm" data-therapeute="' + t.id + '">Voir le profil</button>' +
        '<a href="#/rendez-vous" class="btn btn-sage btn-sm">Prendre rendez-vous</a>' +
      '</div></div>';
  };

  function initials(name) {
    return name.split(' ').map(function (p) { return p[0]; }).join('').slice(0, 2).toUpperCase();
  }

  C.programCard = function (p, idx) {
    return '<div class="card">' +
      '<div class="card-media" style="height:170px;border-radius:0;">' +
        '<img class="image-cover" src="' + KOTI.IMG + C.ambiancePhotoFor(idx) + '" alt="' + p.titre + '" loading="lazy">' +
      '</div>' +
      '<div class="card-body">' +
        '<span class="tag' + (p.tone === 'gold' ? ' gold' : '') + '">' + p.categorie + '</span>' +
        '<h3 style="font-size:1.08rem;">' + p.titre + '</h3>' +
        '<p>' + p.accroche + '</p>' +
        '<div style="display:flex;gap:12px;font-size:.78rem;color:#7a8079;margin-top:4px;">' +
          '<span>' + icon('clock') + ' ' + p.duree + '</span><span>' + icon('people') + ' ' + p.format + '</span></div>' +
        '<button class="btn btn-sage btn-sm" style="margin-top:8px;align-self:flex-start;" data-programme="' + p.id + '">Découvrir</button>' +
      '</div></div>';
  };

  C.actualiteCard = function (a, idx) {
    return '<div class="card">' +
      '<div class="art art-tone-' + a.tone + '" style="height:150px;border-radius:0;">' + KOTI.artScene(C.sceneFor(idx + 3)) + '</div>' +
      '<div class="card-body">' +
        '<span class="tag">' + a.categorie + '</span>' +
        '<h3 style="font-size:1.02rem;">' + a.titre + '</h3>' +
        '<div style="display:flex;align-items:center;gap:6px;font-size:.78rem;color:var(--sage-ink);font-weight:600;">' + icon('calendar') + KOTI.formatDateShort(a.date) + '</div>' +
        '<p>' + a.excerpt + '</p>' +
        '<button class="link-arrow" style="margin-top:auto;align-self:flex-start;" data-actualite="' + a.id + '">Lire l\'article ' + icon('arrow') + '</button>' +
      '</div></div>';
  };

  C.roomCard = function (s, idx) {
    return '<div class="card room-card">' +
      '<div class="art art-tone-' + s.tone + '">' + KOTI.artScene(C.sceneFor(idx + 1)) + '</div>' +
      '<div class="card-body">' +
        '<span class="tag gold">' + s.usage + '</span>' +
        '<h3 style="font-size:1.05rem;">' + s.nom + '</h3>' +
        '<p>' + s.description + '</p>' +
        '<div class="room-meta"><span>' + icon('people') + s.capacite + '</span></div>' +
        '<div class="room-meta">' + s.equipements.map(function (e) { return '<span>' + icon('check') + e + '</span>'; }).join('') + '</div>' +
        '<a href="#/professionnel/tarifs" class="btn btn-gold btn-sm" style="margin-top:8px;align-self:flex-start;">Demander une visite</a>' +
      '</div></div>';
  };

  C.productCard = function (p) {
    return '<div class="product-card">' +
      '<button data-product-detail="' + p.id + '" style="all:unset;cursor:pointer;display:block;">' +
      '<div class="art art-tone-' + p.tone + '">' + KOTI.artScene('bag') + '</div></button>' +
      '<div class="product-body">' +
        '<span class="tag">' + p.categorie + '</span>' +
        '<button data-product-detail="' + p.id + '" style="all:unset;cursor:pointer;">' +
        '<h3 style="font-size:1rem;">' + p.nom + '</h3></button>' +
        '<p>' + p.desc + '</p>' +
        '<span class="product-price">' + p.prix + '</span>' +
        '<button class="btn btn-sage btn-sm" data-add-product="' + p.id + '">Ajouter au panier</button>' +
      '</div></div>';
  };

  C.blogCard = function (b, idx) {
    return '<div class="card">' +
      '<div class="art art-tone-' + b.tone + '" style="height:160px;border-radius:0;">' + KOTI.artScene(C.sceneFor(idx + 5)) +
      (b.type === 'Vidéo' ? '<button class="play-btn" data-blog="' + b.id + '" aria-label="Lire la vidéo" style="width:48px;height:48px;">' + icon('play') + '</button>' : '') +
      '</div>' +
      '<div class="card-body">' +
        '<span class="tag' + (b.tone === 'gold' ? ' gold' : '') + '">' + b.categorie + '</span>' +
        '<h3 style="font-size:1.02rem;">' + b.titre + '</h3><p>' + b.excerpt + '</p>' +
        '<button class="link-arrow" style="align-self:flex-start;" data-blog="' + b.id + '">' + (b.type === 'Vidéo' ? 'Regarder' : 'Lire l\'article') + ' ' + icon('arrow') + '</button>' +
      '</div></div>';
  };

  KOTI.components = C;
})();
