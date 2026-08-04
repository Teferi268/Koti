/* ==========================================================================
   KOTI 2.0 — Layout partagé : 3 headers (général / patient / professionnel),
   footer, menu mobile, panier, bandeau cookies, pages légales placeholder.
   ========================================================================== */
(function () {
  'use strict';
  var KOTI = (window.KOTI = window.KOTI || {});
  var icon = KOTI.icon;

  var NAV = {
    general: {
      universeLabel: 'Votre bulle du mieux-être',
      home: '#/',
      links: [
        ['#/', 'Découvrir le KOTI'],
        ['#/vision', 'Notre vision'],
        ['#/histoire', 'Notre histoire'],
        ['#/valeurs', 'Nos valeurs'],
        ['#/equipe', 'Notre équipe'],
        ['#/actualites', 'Nos actualités']
      ],
      cta: ['#/rendez-vous', 'Prendre rendez-vous'],
      ctaClass: 'btn-gold',
      ring: 'var(--gold-deep)',
      cart: false
    },
    patient: {
      universeLabel: 'Parcours patient',
      home: '#/patient',
      links: [
        ['#/patient', 'Trouver mon accompagnement'],
        ['#/patient/therapeutes', 'Nos thérapeutes'],
        ['#/patient/programmes', 'Nos programmes'],
        ['#/patient/mon-koti', 'Mon KOTI'],
        ['#/patient/acteurs-sante', 'Acteurs de la santé'],
        ['#/patient/boutique', 'Boutique'],
        ['#/patient/vlog', 'Vlog']
      ],
      cta: ['#/rendez-vous', 'Prendre rendez-vous'],
      ctaClass: 'btn-sage',
      ring: 'var(--sage-ink)',
      cart: true
    },
    professionnel: {
      universeLabel: 'Parcours professionnel',
      home: '#/professionnel',
      links: [
        ['#/professionnel', 'Installer mon activité au KOTI'],
        ['#/patient/therapeutes', 'Nos thérapeutes'],
        ['#/professionnel/mon-koti', 'Mon KOTI'],
        ['#/professionnel/espaces', 'Nos espaces'],
        ['#/professionnel/tarifs', 'Tarifs'],
        ['#/contact', 'Contact']
      ],
      cta: ['#/rendez-vous', 'Prendre rendez-vous'],
      ctaClass: 'btn-gold',
      ring: 'var(--gold-deep)',
      cart: false
    }
  };
  KOTI.NAV = NAV;

  var UNIVERSE_SWITCH = [
    ['#/', 'general', 'Général'],
    ['#/patient', 'patient', 'Patient'],
    ['#/professionnel', 'professionnel', 'Professionnel']
  ];

  function brandMark(ring) {
    return '<span class="brand-mark" style="border-color:' + ring + '" aria-hidden="true">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="8"/><path d="M12 6c2.2 1.6 2.2 10.4 0 12M12 6c-2.2 1.6-2.2 10.4 0 12M6.2 9.5h11.6M6.2 14.5h11.6"/></svg></span>';
  }

  function normalize(hash) {
    var h = (hash || '#/').split('?')[0];
    if (h.length > 2 && h.endsWith('/')) h = h.slice(0, -1);
    return h || '#/';
  }

  KOTI.layout = {
    renderHeader: function (universe, currentHash) {
      var cfg = NAV[universe] || NAV.general;
      var cur = normalize(currentHash);
      var cartCount = KOTI.cart ? KOTI.cart.count() : 0;

      var linksHtml = cfg.links.map(function (l) {
        var active = normalize(l[0]) === cur ? ' active' : '';
        return '<li><a href="' + l[0] + '" class="' + active.trim() + '">' + l[1] + '</a></li>';
      }).join('');

      var mobileLinksHtml = cfg.links.map(function (l) {
        return '<li><a href="' + l[0] + '" data-close-panel>' + l[1] + '</a></li>';
      }).join('');

      var cartBtn = cfg.cart
        ? '<button class="cart-btn" id="cartBtn" aria-label="Voir mon panier" aria-haspopup="dialog">' + icon('cart') +
          '<span class="cart-count" id="cartCount">' + cartCount + '</span></button>'
        : '';

      var switchHtml = UNIVERSE_SWITCH.map(function (u) {
        var active = u[1] === universe ? ' style="background:var(--dark);color:var(--white);border-color:var(--dark)"' : '';
        return '<a href="' + u[0] + '"' + active + ' data-close-panel>' + u[2] + '</a>';
      }).join('');

      return (
        '<header class="site-header" id="siteHeader">' +
          '<div class="container header-inner">' +
            '<a class="brand" href="' + cfg.home + '" aria-label="KOTI — accueil ' + cfg.universeLabel + '">' +
              brandMark(cfg.ring) +
              '<span class="brand-text">' +
                '<span class="brand-name">KOTI</span>' +
                (universe === 'general'
                  ? '<span class="brand-tagline">' + cfg.universeLabel + '</span>'
                  : '<span class="brand-universe">' + cfg.universeLabel + '</span>') +
              '</span>' +
            '</a>' +
            '<nav class="main-nav" aria-label="Navigation principale"><ul>' + linksHtml + '</ul></nav>' +
            '<div class="header-actions">' +
              '<a href="' + cfg.cta[0] + '" class="btn ' + cfg.ctaClass + ' btn-sm">' + cfg.cta[1] + '</a>' +
              cartBtn +
              '<a href="#/patient/mon-koti" class="account-btn" aria-label="Mon compte">' + icon('user') + '</a>' +
              '<button class="burger" id="burgerBtn" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobilePanel">' +
                '<svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
                '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</header>' +
        '<div class="mobile-panel" id="mobilePanel">' +
          '<div class="backdrop" data-close-panel></div>' +
          '<div class="sheet" role="dialog" aria-modal="true" aria-label="Menu de navigation">' +
            '<div class="mobile-panel-top">' +
              '<button class="mobile-panel-close" id="mobileCloseBtn" aria-label="Fermer le menu">' + icon('close') + '</button>' +
            '</div>' +
            '<div class="mobile-universe-switch">' + switchHtml + '</div>' +
            '<ul class="mobile-nav-list">' + mobileLinksHtml + '</ul>' +
            '<div class="mobile-panel-cta">' +
              '<a href="' + cfg.cta[0] + '" class="btn ' + cfg.ctaClass + '" data-close-panel>' + cfg.cta[1] + '</a>' +
              '<a href="#/patient/mon-koti" class="btn btn-ghost" data-close-panel>' + icon('user') + ' Mon KOTI</a>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    },

    renderFooter: function () {
      return (
        '<footer class="site-footer">' +
          '<div class="container footer-top">' +
            '<div class="footer-brand">' +
              '<a class="brand" href="#/" aria-label="KOTI — accueil">' + brandMark('var(--gold-deep)') +
                '<span class="brand-text"><span class="brand-name">KOTI</span><span class="brand-tagline">Votre bulle du mieux-être</span></span>' +
              '</a>' +
              '<p>Le KOTI, un lieu de santé intégrative où chacun trouve des solutions et s\'épanouit dans un environnement bienveillant.</p>' +
              '<ul class="footer-contact">' +
                '<li>' + icon('phone') + '<a href="tel:0614979608">06 14 97 96 08</a></li>' +
                '<li>' + icon('mail') + '<a href="mailto:contact@monkoti.fr">contact@monkoti.fr</a></li>' +
                '<li>' + icon('pin') + '<span>188 Grande Rue Charles de Gaulle, 94130 Nogent-sur-Marne — 7j/7, 8h–21h</span></li>' +
              '</ul>' +
              '<div class="footer-social">' +
                '<a href="#" aria-label="KOTI sur Facebook">' + icon('facebook') + '</a>' +
                '<a href="#" aria-label="KOTI sur Instagram">' + icon('instagram') + '</a>' +
                '<a href="#" aria-label="KOTI sur LinkedIn">' + icon('linkedin') + '</a>' +
              '</div>' +
            '</div>' +
            '<div class="footer-cols">' +
              '<div class="footer-col"><h4>Découvrir le KOTI</h4><ul>' +
                '<li><a href="#/vision">Notre vision</a></li><li><a href="#/histoire">Notre histoire</a></li>' +
                '<li><a href="#/valeurs">Nos valeurs</a></li><li><a href="#/equipe">Notre équipe</a></li>' +
                '<li><a href="#/actualites">Nos actualités</a></li></ul></div>' +
              '<div class="footer-col"><h4>Informations</h4><ul>' +
                '<li><a href="#/faq">FAQ</a></li><li><a href="#/patient/vlog">Blog &amp; Vlog</a></li>' +
                '<li><a href="#/patient/programmes">Guides bien-être</a></li>' +
                '<li><button class="link-reset" data-legal="Presse">Presse</button></li>' +
                '<li><button class="link-reset" data-legal="Recrutement">Recrutement</button></li></ul></div>' +
              '<div class="footer-col"><h4>Pratique</h4><ul>' +
                '<li><a href="#/rendez-vous">Prendre rendez-vous</a></li>' +
                '<li><a href="#/professionnel">Espace thérapeutes</a></li>' +
                '<li><a href="#/contact">Accès &amp; horaires</a></li>' +
                '<li><a href="#/contact">Contact</a></li></ul></div>' +
            '</div>' +
            '<div class="footer-col" style="min-width:0;">' +
              '<h4>Newsletter</h4>' +
              '<p style="font-size:var(--fs-small); color:#4b544c; margin-bottom:4px;">Recevez nos conseils bien-être et nos actualités.</p>' +
              '<form class="newsletter-form" id="newsletterForm">' +
                '<label for="newsletterEmail" class="visually-hidden">Adresse e-mail</label>' +
                '<input type="email" id="newsletterEmail" placeholder="Votre e-mail" required>' +
                '<button type="submit" class="newsletter-submit" aria-label="S\'inscrire à la newsletter">' + icon('arrow') + '</button>' +
              '</form>' +
              '<p class="newsletter-msg" id="newsletterMsg" role="status" aria-live="polite"></p>' +
            '</div>' +
          '</div>' +
          '<div class="legal-band"><div class="container legal-inner">' +
            '<span>© 2026 KOTI — Tous droits réservés.</span>' +
            '<nav class="legal-links" aria-label="Mentions légales">' +
              '<button class="link-reset" data-legal="Mentions légales">Mentions légales</button>' +
              '<button class="link-reset" data-legal="CGV">CGV</button>' +
              '<button class="link-reset" data-legal="Politique de confidentialité">Politique de confidentialité</button>' +
              '<button class="link-reset" data-legal="Cookies">Cookies</button>' +
              '<button class="link-reset" data-cookie-prefs>Gestion des cookies</button>' +
            '</nav>' +
          '</div></div>' +
        '</footer>'
      );
    },

    /* ---------------- Modale légale placeholder (page #23) ---------------- */
    openLegalModal: function (title) {
      KOTI.modal.open(
        '<h3>' + KOTI.escapeHtml(title) + '</h3><span class="gold-sep"></span>' +
        '<p class="lead" style="margin-top:8px;">Cette page fait partie des contenus juridiques du KOTI (' + KOTI.escapeHtml(title) + ').</p>' +
        '<p style="margin-top:12px; color:#4b544c; font-size:.9rem;">Contenu à intégrer par l\'équipe juridique / l\'expert-comptable du KOTI avant mise en ligne — non inclus dans cette démo pour rester concentré sur les parcours fonctionnels.</p>' +
        '<div style="margin-top:20px;"><button class="btn btn-dark" data-modal-close>J\'ai compris</button></div>',
        { label: title }
      );
    },

    /* ---------------- Bandeau + préférences cookies ---------------- */
    cookiePrefs: KOTI.storage ? KOTI.storage.get('koti-cookie-consent', null) : null,

    initCookieBanner: function () {
      var consent = KOTI.storage.get('koti-cookie-consent', null);
      var banner = document.getElementById('cookieBanner');
      if (!consent && banner) {
        setTimeout(function () { banner.classList.add('show'); }, 500);
      }
    },

    saveCookieConsent: function (prefs) {
      KOTI.storage.set('koti-cookie-consent', prefs);
      var banner = document.getElementById('cookieBanner');
      if (banner) banner.classList.remove('show');
    },

    openCookiePrefs: function () {
      var consent = KOTI.storage.get('koti-cookie-consent', { audience: false, contenus: false, publicite: false });
      KOTI.modal.open(
        '<h3>Personnalisez vos choix</h3><span class="gold-sep"></span>' +
        '<p style="color:#4b544c;font-size:.88rem;margin:10px 0 4px;">Les cookies strictement nécessaires sont toujours actifs. Les autres catégories restent désactivées tant que vous ne les avez pas acceptées.</p>' +
        '<div style="margin-top:10px;">' +
          cookieCatRow('Cookies strictement nécessaires', 'Sécurité, session, mémorisation de vos choix.', 'necessaires', true, true) +
          cookieCatRow('Mesure d\'audience', 'Nous aide à comprendre l\'usage du site pour l\'améliorer.', 'audience', consent.audience) +
          cookieCatRow('Contenus externes', 'Vidéos, cartes et visites virtuelles intégrées.', 'contenus', consent.contenus) +
          cookieCatRow('Publicité', 'Mesure et personnalisation de nos communications.', 'publicite', consent.publicite) +
        '</div>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px;">' +
          '<button class="btn btn-dark" id="cookieSaveBtn">Enregistrer mes choix</button>' +
          '<button class="btn btn-ghost" id="cookieAcceptAllBtn2">Tout accepter</button>' +
        '</div>',
        { label: 'Gestion des cookies' }
      );
      document.getElementById('cookieSaveBtn').addEventListener('click', function () {
        var root = document.getElementById('modal-root');
        KOTI.layout.saveCookieConsent({
          necessaires: true,
          audience: root.querySelector('[name="audience"]').checked,
          contenus: root.querySelector('[name="contenus"]').checked,
          publicite: root.querySelector('[name="publicite"]').checked
        });
        KOTI.modal.close();
        KOTI.toast('Vos préférences ont bien été enregistrées.');
      });
      document.getElementById('cookieAcceptAllBtn2').addEventListener('click', function () {
        KOTI.layout.saveCookieConsent({ necessaires: true, audience: true, contenus: true, publicite: true });
        KOTI.modal.close();
        KOTI.toast('Merci, vos préférences ont bien été enregistrées.');
      });
    },

    /* ---------------- Modales de détail (thérapeute / programme / article / blog) ---------------- */
    openTherapeuteModal: function (id) {
      var t = KOTI.data.therapeutes.find(function (x) { return x.id === id; });
      if (!t) return;
      KOTI.modal.open(
        '<div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">' +
          '<span class="profile-avatar" style="width:64px;height:64px;background:linear-gradient(135deg,var(--sage),var(--gold));">' + t.nom.split(' ').map(function (p) { return p[0]; }).join('').slice(0, 2) + '</span>' +
          '<div><h3>' + t.nom + '</h3><span class="profile-role">' + t.discipline + '</span></div>' +
        '</div>' +
        '<p style="margin-top:14px;color:#4b544c;">' + t.bio + '</p>' +
        '<p style="margin-top:10px;font-size:.85rem;color:#6c746c;">Au KOTI depuis ' + t.depuis + ' · Disponible ' + t.dispo.join(', ') + '</p>' +
        '<div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;">' +
          '<a href="#/rendez-vous" class="btn btn-sage" data-modal-close>Prendre rendez-vous</a>' +
          '<a href="#/patient/therapeutes" class="btn btn-ghost" data-modal-close>Voir tout l\'annuaire</a>' +
        '</div>',
        { label: t.nom }
      );
    },

    openProgrammeModal: function (id) {
      var p = KOTI.data.programmes.find(function (x) { return x.id === id; });
      if (!p) return;
      KOTI.modal.open(
        '<span class="tag' + (p.tone === 'gold' ? ' gold' : '') + '">' + p.categorie + '</span>' +
        '<h3 style="margin-top:8px;">' + p.titre + '</h3>' +
        '<p style="margin-top:10px;color:#4b544c;">' + p.description + '</p>' +
        '<p style="margin-top:10px;font-size:.85rem;color:#6c746c;">Durée : ' + p.duree + ' · Format : ' + p.format + '</p>' +
        '<div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;">' +
          '<a href="#/rendez-vous" class="btn btn-sage" data-modal-close>Prendre rendez-vous</a>' +
          '<a href="#/patient" class="btn btn-ghost" data-modal-close>Faire le questionnaire d\'orientation</a>' +
        '</div>',
        { label: p.titre }
      );
    },

    openActualiteModal: function (id) {
      var a = KOTI.data.actualites.find(function (x) { return x.id === id; });
      if (!a) return;
      KOTI.modal.open(
        '<span class="tag">' + a.categorie + '</span>' +
        '<h3 style="margin-top:8px;">' + a.titre + '</h3>' +
        '<div style="display:flex;align-items:center;gap:6px;font-size:.82rem;color:var(--sage-ink);font-weight:600;margin-top:4px;">' + KOTI.icon('calendar') + KOTI.formatDateLong(a.date) + '</div>' +
        '<p style="margin-top:12px;color:#4b544c;">' + (a.content || a.excerpt) + '</p>' +
        '<div style="margin-top:18px;"><a href="#/actualites" class="btn btn-ghost" data-modal-close>Voir toutes les actualités</a></div>',
        { label: a.titre }
      );
    },

    openBlogModal: function (id) {
      var b = KOTI.data.articlesBlog.find(function (x) { return x.id === id; });
      if (!b) return;
      var isVideo = b.type === 'Vidéo';
      KOTI.modal.open(
        '<span class="tag' + (b.tone === 'gold' ? ' gold' : '') + '">' + b.categorie + '</span>' +
        '<h3 style="margin-top:8px;">' + b.titre + '</h3>' +
        (isVideo ? '<div class="modal-frame">' + KOTI.icon('play') + '</div>' : '') +
        '<p style="margin-top:12px;color:#4b544c;">' + b.excerpt + ' Cet article complet est un contenu de démonstration : le texte définitif sera fourni par l\'équipe éditoriale du KOTI.</p>',
        { label: b.titre }
      );
    },

    openProductModal: function (id) {
      var p = KOTI.data.produits.find(function (x) { return x.id === id; });
      if (!p) return;
      KOTI.modal.open(
        '<div class="art art-tone-' + p.tone + '" style="height:180px;">' + KOTI.artScene('bag') + '</div>' +
        '<span class="tag" style="margin-top:12px;">' + p.categorie + '</span>' +
        '<h3 style="margin-top:6px;">' + p.nom + '</h3>' +
        '<p style="margin-top:8px;color:#4b544c;">' + p.desc + ' Un produit sélectionné par l\'équipe du KOTI pour prolonger votre rituel bien-être à la maison.</p>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-top:14px;">' +
          '<span class="product-price" style="font-size:1.3rem;">' + p.prix + '</span>' +
          '<button class="btn btn-sage" data-add-product="' + p.id + '">Ajouter au panier</button>' +
        '</div>',
        { label: p.nom }
      );
    },

    openGenericVideoModal: function () {
      KOTI.modal.open(
        '<h3>Visite du KOTI en vidéo</h3>' +
        '<div class="modal-frame">' + KOTI.icon('play') + '</div>' +
        '<p style="margin-top:10px;font-size:.88rem;color:#6c746c;">Emplacement réservé à la vidéo de présentation du KOTI (à intégrer par le développeur).</p>',
        { label: 'Visite du KOTI' }
      );
    }
  };

  function cookieCatRow(title, desc, name, checked, disabled) {
    return '<div class="cookie-cat"><div><h4>' + title + '</h4><p>' + desc + '</p></div>' +
      '<label class="switch"><input type="checkbox" name="' + name + '" ' + (checked ? 'checked' : '') + ' ' + (disabled ? 'disabled' : '') + '>' +
      '<span class="switch-track"></span><span class="switch-thumb"></span></label></div>';
  }

  /* ---------------------------------------------------------------------
     Panier (démo boutique patient)
     --------------------------------------------------------------------- */
  var cartState = KOTI.storage.get('koti-cart', []);
  KOTI.cart = {
    items: cartState,
    count: function () { return cartState.reduce(function (n, i) { return n + i.qty; }, 0); },
    find: function (id) { return cartState.find(function (i) { return i.id === id; }); },
    add: function (id) {
      var it = KOTI.cart.find(id);
      if (it) it.qty += 1; else cartState.push({ id: id, qty: 1 });
      KOTI.cart.persist();
    },
    setQty: function (id, qty) {
      var it = KOTI.cart.find(id);
      if (!it) return;
      it.qty = Math.max(0, qty);
      if (it.qty === 0) cartState = cartState.filter(function (i) { return i.id !== id; });
      KOTI.cart.items = cartState;
      KOTI.cart.persist();
    },
    remove: function (id) {
      cartState = cartState.filter(function (i) { return i.id !== id; });
      KOTI.cart.items = cartState;
      KOTI.cart.persist();
    },
    total: function () {
      var produits = KOTI.data.produits;
      return cartState.reduce(function (sum, i) {
        var p = produits.find(function (p) { return p.id === i.id; });
        if (!p) return sum;
        var val = parseFloat(String(p.prix).replace(/[^\d,]/g, '').replace(',', '.')) || 0;
        return sum + val * i.qty;
      }, 0);
    },
    persist: function () {
      KOTI.storage.set('koti-cart', cartState);
      KOTI.layout.updateCartBadge();
    }
  };

  KOTI.layout.updateCartBadge = function () {
    var badge = document.getElementById('cartCount');
    if (badge) badge.textContent = String(KOTI.cart.count());
  };

  KOTI.layout.openCartDrawer = function () {
    var produits = KOTI.data.produits;
    var rows = KOTI.cart.items.map(function (i) {
      var p = produits.find(function (p) { return p.id === i.id; });
      if (!p) return '';
      return '<div class="cart-item">' +
        '<div class="cart-item-thumb art art-tone-' + p.tone + '" aria-hidden="true"></div>' +
        '<div style="flex:1;"><strong style="font-size:.88rem;">' + p.nom + '</strong><div style="font-size:.8rem;color:#6c746c;">' + p.prix + '</div></div>' +
        '<div class="qty-stepper">' +
          '<button data-cart-qty="' + i.id + '" data-delta="-1" aria-label="Diminuer la quantité">' + icon('minus') + '</button>' +
          '<span>' + i.qty + '</span>' +
          '<button data-cart-qty="' + i.id + '" data-delta="1" aria-label="Augmenter la quantité">' + icon('plus') + '</button>' +
        '</div></div>';
    }).join('') || '<p class="empty-state">' + icon('cart') + '<br>Votre panier est vide pour le moment.</p>';

    var total = KOTI.cart.total().toFixed(2).replace('.', ',');

    KOTI.modal.open(
      '<h3>Mon panier</h3><span class="gold-sep"></span>' +
      '<div id="cartItemsWrap" style="margin-top:12px;max-height:300px;overflow-y:auto;">' + rows + '</div>' +
      '<div style="margin-top:14px;">' +
        '<div class="cart-summary-row cart-total"><span>Total</span><span>' + total + ' €</span></div>' +
      '</div>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;">' +
        '<button class="btn btn-dark" id="cartCheckoutBtn"' + (KOTI.cart.items.length ? '' : ' disabled') + '>Passer au paiement</button>' +
        '<a href="#/patient/boutique" class="btn btn-ghost" data-modal-close>Continuer mes achats</a>' +
      '</div>' +
      '<p style="margin-top:10px;font-size:.78rem;color:#8a8f88;">Démo — le paiement n\'est pas activé sur ce prototype.</p>',
      { label: 'Panier' }
    );

    var checkoutBtn = document.getElementById('cartCheckoutBtn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', function () {
      KOTI.toast('Paiement non activé en démo — commande simulée avec succès.');
      KOTI.modal.close();
    });
  };

  /* ---------------------------------------------------------------------
     Handlers globaux (délégation — survit aux re-rendus du header)
     --------------------------------------------------------------------- */
  KOTI.layout.initGlobalHandlers = function () {
    // Header : fond au scroll
    window.addEventListener('scroll', function () {
      var h = document.getElementById('siteHeader');
      if (!h) return;
      h.classList.toggle('is-scrolled', window.scrollY > 8);
    }, { passive: true });

    document.body.addEventListener('click', function (e) {
      var burger = e.target.closest('#burgerBtn');
      var panel = document.getElementById('mobilePanel');
      if (burger && panel) {
        var open = panel.classList.toggle('open');
        burger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
        return;
      }
      if (e.target.closest('[data-close-panel]') && panel) {
        panel.classList.remove('open');
        var b = document.getElementById('burgerBtn');
        if (b) b.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
      var cartBtn = e.target.closest('#cartBtn');
      if (cartBtn) { KOTI.layout.openCartDrawer(); }

      var qtyBtn = e.target.closest('[data-cart-qty]');
      if (qtyBtn) {
        var id = qtyBtn.getAttribute('data-cart-qty');
        var delta = parseInt(qtyBtn.getAttribute('data-delta'), 10);
        var it = KOTI.cart.find(id);
        KOTI.cart.setQty(id, (it ? it.qty : 0) + delta);
        KOTI.layout.openCartDrawer();
      }

      var legalBtn = e.target.closest('[data-legal]');
      if (legalBtn) KOTI.layout.openLegalModal(legalBtn.getAttribute('data-legal'));

      var cookiePrefsBtn = e.target.closest('[data-cookie-prefs]');
      if (cookiePrefsBtn) KOTI.layout.openCookiePrefs();

      var cookieAccept = e.target.closest('#cookieAcceptBtn');
      if (cookieAccept) { KOTI.layout.saveCookieConsent({ necessaires: true, audience: true, contenus: true, publicite: true }); }
      var cookieRefuse = e.target.closest('#cookieRefuseBtn');
      if (cookieRefuse) { KOTI.layout.saveCookieConsent({ necessaires: true, audience: false, contenus: false, publicite: false }); }
      var cookieCustom = e.target.closest('#cookieCustomBtn');
      if (cookieCustom) { KOTI.layout.openCookiePrefs(); }

      var theraBtn = e.target.closest('[data-therapeute]');
      if (theraBtn) KOTI.layout.openTherapeuteModal(theraBtn.getAttribute('data-therapeute'));

      var progBtn = e.target.closest('[data-programme]');
      if (progBtn) KOTI.layout.openProgrammeModal(progBtn.getAttribute('data-programme'));

      var newsBtn = e.target.closest('[data-actualite]');
      if (newsBtn) KOTI.layout.openActualiteModal(newsBtn.getAttribute('data-actualite'));

      var blogBtn = e.target.closest('[data-blog]');
      if (blogBtn) KOTI.layout.openBlogModal(blogBtn.getAttribute('data-blog'));

      var addProductBtn = e.target.closest('[data-add-product]');
      if (addProductBtn) {
        var pid = addProductBtn.getAttribute('data-add-product');
        var prod = KOTI.data.produits.find(function (p) { return p.id === pid; });
        KOTI.cart.add(pid);
        KOTI.toast((prod ? prod.nom : 'Produit') + ' ajouté au panier.');
      }

      var prodDetailBtn = e.target.closest('[data-product-detail]');
      if (prodDetailBtn) KOTI.layout.openProductModal(prodDetailBtn.getAttribute('data-product-detail'));

      var downloadBtn = e.target.closest('[data-fake-download]');
      if (downloadBtn) KOTI.toast('Téléchargement simulé — démo sans fichier réel.');

      var openVideoBtn = e.target.closest('#openVideoModal');
      if (openVideoBtn) KOTI.layout.openGenericVideoModal();
    });

    document.body.addEventListener('submit', function (e) {
      if (e.target && e.target.id === 'newsletterForm') {
        e.preventDefault();
        var msg = document.getElementById('newsletterMsg');
        if (msg) msg.textContent = 'Merci ! Vous recevrez bientôt nos actualités.';
        e.target.reset();
      }
    });
  };
})();
