/* ==========================================================================
   KOTI 2.0 — Pages du parcours professionnel
   ========================================================================== */
(function () {
  'use strict';
  var KOTI = (window.KOTI = window.KOTI || {});
  var icon = KOTI.icon;
  var C = KOTI.components;
  var D = KOTI.data;
  var H = KOTI.pageHelpers;
  KOTI.pages = KOTI.pages || {};

  /* ================= 17. Accueil parcours professionnel ================= */
  KOTI.pages.proHome = function (container) {
    container.innerHTML =
      '<section class="hero"><div class="container page-hero-grid" style="align-items:center;">' +
        '<div>' +
          '<span class="eyebrow">Installer mon activité au KOTI</span>' +
          '<h1 style="margin-top:8px;">Développez votre activité dans un lieu qui a du sens</h1>' +
          '<p class="lead" style="margin-top:12px;">Un cadre chaleureux, une communauté de praticiens engagés et une structure pensée pour vous laisser vous concentrer sur votre pratique.</p>' +
          '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:var(--sp-3);">' +
            '<a href="#/professionnel/tarifs" class="btn btn-gold">Demander une visite ' + icon('arrow') + '</a>' +
            '<a href="#/professionnel/guide-installation" class="btn btn-ghost">Recevoir le guide d\'installation</a>' +
          '</div>' +
        '</div>' +
        KOTI.photoPanel('gen_accueil__carte_professionnel_bureau_consultation_hd.jpg', 'Espace de soin du KOTI pour les professionnels', null, null, '85% center') +
      '</div></section>' +

      '<section class="tight"><div class="container">' +
        C.sectionHead('Pourquoi installer votre activité ici ?', 'Un lieu, une communauté, une exigence commune', { center: true }) +
        '<div class="grid-cards cols-4">' +
          proInfo('house', 'Des espaces soignés', 'Des salles pensées pour la consultation, l\'atelier ou l\'événement, entretenues et lumineuses.') +
          proInfo('people', 'Une communauté active', 'Des praticiens qui s\'entraident, se recommandent et font grandir le lieu ensemble.') +
          proInfo('shield', 'Un cadre structuré', 'Annuaire, prise de rendez-vous, communication mutualisée : l\'administratif est simplifié.') +
          proInfo('star', 'Une exigence partagée', 'Une sélection rigoureuse des praticiens pour préserver la qualité de l\'accompagnement.') +
        '</div>' +
      '</div></section>' +

      '<section class="tight"><div class="container">' +
        C.sectionHead('Espaces', 'Nos espaces disponibles') +
        '<div class="grid-cards cols-4">' + D.salles.map(function (s, i) { return C.roomCard(s, i); }).join('') + '</div>' +
        '<div style="margin-top:var(--sp-3);"><a href="#/professionnel/espaces" class="link-arrow">Voir tous les espaces ' + icon('arrow') + '</a></div>' +
      '</div></section>' +

      '<section class="tight"><div class="container">' +
        C.sectionHead('Tarifs', 'Des formules simples et transparentes') +
        '<div class="pricing-grid">' + D.tarifsPro.map(pricingCard).join('') + '</div>' +
        '<div style="margin-top:var(--sp-3);"><a href="#/professionnel/tarifs" class="link-arrow">Voir le comparatif complet ' + icon('arrow') + '</a></div>' +
      '</div></section>' +

      '<section><div class="container"><div class="grid-cards" style="max-width:600px;margin-inline:auto;">' +
        (function () {
          var t = D.temoignagesTherapeutes[1];
          return '<div class="card"><div class="card-body">' +
            '<div class="stars" aria-hidden="true">' + [0, 1, 2, 3, 4].map(function () { return icon('star'); }).join('') + '</div>' +
            '<p style="font-family:var(--font-serif);font-style:italic;">« ' + t.texte + ' »</p>' +
            '<div style="display:flex;align-items:center;gap:10px;margin-top:6px;">' +
              '<span style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--sage));display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--font-serif);font-size:.8rem;">' + t.initiales + '</span>' +
              '<span><span style="display:block;font-weight:600;font-size:.88rem;">' + t.nom + '</span><span style="font-size:.75rem;color:#7a8079;">' + t.role + '</span></span></div></div></div>';
        })() +
      '</div></div></section>' +

      KOTI.components.ctaBand({
        title: 'Prêt(e) à nous rejoindre ?', tone: 'gold',
        text: 'Demandez votre visite personnalisée ou recevez le guide complet d\'installation.',
        buttons: [['#/professionnel/guide-installation', 'Recevoir le guide', 'btn-dark'], ['#/professionnel/tarifs', 'Voir les tarifs', 'btn-white']]
      });
  };

  function proInfo(iconName, title, text) {
    return '<div class="card"><div class="card-body" style="align-items:center;text-align:center;">' +
      '<span class="why-icon" style="width:52px;height:52px;border-radius:50%;background:var(--sand);display:flex;align-items:center;justify-content:center;color:var(--sage-ink);">' + icon(iconName) + '</span>' +
      '<h3 style="font-size:1rem;">' + title + '</h3><p>' + text + '</p></div></div>';
  }

  function pricingCard(t) {
    return '<div class="pricing-card' + (t.featured ? ' featured' : '') + '">' +
      (t.featured ? '<span class="pricing-badge">Le plus choisi</span>' : '') +
      '<h3>' + t.titre + '</h3>' +
      '<div class="pricing-value">' + t.prix + ' <span>' + t.unite + '</span></div>' +
      '<p style="color:#4b544c;font-size:.88rem;">' + t.desc + '</p>' +
      '<ul class="pricing-list">' + t.inclus.map(function (i) { return '<li>' + icon('check') + i + '</li>'; }).join('') + '</ul>' +
      '<a href="#/professionnel/guide-installation" class="btn ' + (t.featured ? 'btn-gold' : 'btn-ghost') + ' btn-block" style="margin-top:auto;">Être recontacté(e)</a>' +
      '</div>';
  }

  /* ================= 18. Nos espaces ================= */
  KOTI.pages.espaces = function (container) {
    renderEspaces(container, 'Tous');
  };

  function renderEspaces(container, usage) {
    var usages = Array.from(new Set(D.salles.map(function (s) { return s.usage; })));
    var list = usage === 'Tous' ? D.salles : D.salles.filter(function (s) { return s.usage === usage; });
    container.innerHTML =
      H.pageHero({
        crumb: [['#/', 'Accueil'], ['#/professionnel', 'Parcours professionnel'], ['#/professionnel/espaces', 'Nos espaces']],
        eyebrow: 'Espaces', title: 'Nos espaces',
        lead: 'Des salles pensées pour chaque usage : consultation individuelle, atelier collectif ou événement.',
        photo: 'gen_general__espace_soin_lumineux_hd.jpg', photoAlt: 'Espace de soin lumineux du KOTI'
      }) +
      '<section><div class="container">' +
        '<div class="filter-bar">' + H.chip('Tous', usage === 'Tous') + usages.map(function (u) { return H.chip(u, u === usage); }).join('') + '</div>' +
        '<div class="grid-cards cols-4">' + list.map(function (s, i) { return C.roomCard(s, i); }).join('') + '</div>' +
      '</div></section>';
    container.querySelectorAll('.filter-chip').forEach(function (btn) {
      btn.addEventListener('click', function () { renderEspaces(container, btn.dataset.value); });
    });
  }

  /* ================= 19. Tarifs professionnels ================= */
  KOTI.pages.tarifs = function (container) {
    var faqItems = [
      ['Puis-je changer de formule en cours de route ?', 'Oui, vous pouvez passer d\'une formule à l\'autre à la fin de chaque mois, sans frais.'],
      ['Les salles sont-elles garanties ?', 'Votre créneau est réservé à l\'avance depuis votre espace professionnel, selon les disponibilités.'],
      ['Existe-t-il un engagement minimum ?', 'Aucun engagement de durée n\'est requis sur la location ponctuelle ou l\'abonnement mensuel.']
    ];
    container.innerHTML =
      H.pageHero({
        crumb: [['#/', 'Accueil'], ['#/professionnel', 'Parcours professionnel'], ['#/professionnel/tarifs', 'Tarifs']],
        eyebrow: 'Tarifs', title: 'Tarifs professionnels',
        lead: 'Des formules simples pensées pour tous les rythmes d\'activité, sans surprise.',
        scene: 'desk', tone: 'gold'
      }) +
      '<section><div class="container">' +
        '<div class="pricing-grid">' + D.tarifsPro.map(pricingCard).join('') + '</div>' +
        '<div class="table-wrap" style="margin-top:var(--sp-5);"><table class="compare">' +
          '<thead><tr><th>Ce qui est inclus</th><th>Ponctuel</th><th>Abonnement</th><th>Pack lancement</th></tr></thead>' +
          '<tbody>' + D.comparatifRows.map(function (r) {
            return '<tr><td>' + r.label + '</td>' + ['ponctuel', 'abonnement', 'pack'].map(function (k) {
              return '<td class="' + (r[k] ? 'yes' : 'no') + '">' + (r[k] ? icon('check') : '—') + '</td>';
            }).join('') + '</tr>';
          }).join('') + '</tbody>' +
        '</table></div>' +
        '<div style="margin-top:var(--sp-5);max-width:720px;">' +
          '<h3 style="margin-bottom:var(--sp-2);">Questions fréquentes</h3>' +
          '<div class="accordion" data-accordion>' + faqItems.map(function (f, i) {
            return '<div class="accordion-item' + (i === 0 ? ' open' : '') + '"><button class="accordion-trigger" aria-expanded="' + (i === 0 ? 'true' : 'false') + '">' + f[0] + icon('plus') + '</button>' +
              '<div class="accordion-panel"><div class="accordion-panel-inner"><p>' + f[1] + '</p></div></div></div>';
          }).join('') + '</div>' +
        '</div>' +
      '</div></section>' +
      KOTI.components.ctaBand({
        title: 'Une question sur nos tarifs ?', tone: 'sage', text: 'Laissez-nous vos coordonnées, un membre de l\'équipe vous recontacte sous 48h.',
        buttons: [['#/professionnel/guide-installation', 'Être recontacté(e)', 'btn-white']]
      });
    container.querySelectorAll('[data-accordion]').forEach(KOTI.initAccordion);
  };

  /* ================= 20. Guide d'installation ================= */
  KOTI.pages.guideInstallation = function (container) {
    container.innerHTML =
      H.pageHero({
        crumb: [['#/', 'Accueil'], ['#/professionnel', 'Parcours professionnel'], ['#/professionnel/guide-installation', 'Guide d\'installation']],
        eyebrow: 'Guide gratuit', title: 'Recevoir le guide d\'installation',
        lead: 'Toutes les informations pour comprendre comment rejoindre le KOTI : espaces, tarifs, étapes d\'intégration.',
        scene: 'reception', tone: 'gold'
      }) +
      '<section><div class="container">' +
        '<div class="rdv-grid">' +
          '<div class="calendar-card">' +
            '<h3>Ce que contient le guide</h3><span class="gold-sep"></span>' +
            '<ul style="margin-top:10px;display:flex;flex-direction:column;gap:10px;font-size:.9rem;color:#4b544c;">' +
              ['Présentation des espaces et équipements', 'Le détail des formules et tarifs', 'Les étapes pour rejoindre la communauté', 'Les valeurs et l\'exigence attendue des praticiens'].map(function (l) {
                return '<li style="display:flex;gap:8px;">' + icon('check') + l + '</li>';
              }).join('') +
            '</ul>' +
          '</div>' +
          '<div class="slots-card">' +
            '<h3>Vos coordonnées</h3><span class="gold-sep"></span>' +
            '<form id="guideForm" novalidate style="margin-top:10px;">' +
              '<div class="form-grid cols-2">' + H.field('text', 'guideNom', 'Nom &amp; prénom *', true) + H.field('email', 'guideEmail', 'E-mail *', true) + '</div>' +
              '<div class="form-grid cols-2" style="margin-top:var(--sp-2);">' + H.field('tel', 'guideTel', 'Téléphone', false) + H.selectField('guideDiscipline', 'Discipline *', D.disciplines) + '</div>' +
              '<div class="field" style="margin-top:var(--sp-2);"><label for="guideMessage">Message (facultatif)</label><textarea id="guideMessage" placeholder="Parlez-nous de votre projet…"></textarea></div>' +
              '<label class="checkbox-row" style="margin-top:var(--sp-2);"><input type="checkbox" id="guideConsent">J\'accepte d\'être recontacté(e) par l\'équipe KOTI au sujet de mon projet d\'installation.</label>' +
              '<button type="submit" class="btn btn-gold" style="margin-top:var(--sp-3);">Recevoir le guide</button>' +
            '</form>' +
            '<div id="guideSuccess" class="form-success" style="display:none;margin-top:var(--sp-2);">' + icon('check') +
              '<div><strong>Merci !</strong><p style="font-size:.85rem;margin-top:4px;">Le guide vous sera envoyé par e-mail sous quelques minutes (démo).</p></div></div>' +
            '<button class="btn btn-ghost btn-sm" id="guideDownloadBtn" style="margin-top:10px;display:none;">' + icon('download') + ' Télécharger le guide (démo)</button>' +
          '</div>' +
        '</div>' +
      '</div></section>';

    var form = KOTI.qs('#guideForm', container);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = KOTI.validateForm(form, {
        '#guideNom': { required: true, label: 'Ce champ' },
        '#guideEmail': { required: true, email: true },
        '#guideTel': { phone: true },
        '#guideDiscipline': { required: true, label: 'La discipline' }
      });
      var consent = KOTI.qs('#guideConsent', container);
      var wrap = consent.closest('.checkbox-row');
      if (!consent.checked) { ok = false; wrap.style.color = 'var(--error)'; } else { wrap.style.color = ''; }
      if (!ok) return;
      form.style.display = 'none';
      KOTI.qs('#guideSuccess', container).style.display = 'flex';
      var dl = KOTI.qs('#guideDownloadBtn', container);
      dl.style.display = 'inline-flex';
      KOTI.toast('Guide envoyé (démo) !');
    });
  };

  /* ================= 21. Communauté professionnelle ================= */
  KOTI.pages.communaute = function (container) {
    container.innerHTML =
      H.pageHero({
        crumb: [['#/', 'Accueil'], ['#/professionnel', 'Parcours professionnel'], ['#/professionnel/communaute', 'Communauté']],
        eyebrow: 'La KOTeam', title: 'Une communauté de praticiens engagés',
        lead: 'Rejoindre le KOTI, c\'est intégrer un collectif qui avance dans la même direction : le soin de la personne, avec exigence et bienveillance.',
        photo: 'page_valeurs__photo_equipe_discussion.jpg', photoAlt: 'Praticiens du KOTI en discussion'
      }) +
      '<section class="tight"><div class="container">' +
        '<div class="grid-cards cols-4">' +
          proInfo('people', 'Entraide entre praticiens', 'Des recommandations croisées et des parcours de soin coordonnés entre disciplines.') +
          proInfo('star', 'Montée en compétences', 'Des temps d\'échange et de formation continue organisés au sein du KOTI.') +
          proInfo('heart', 'Un cadre humain', 'Une équipe à l\'écoute pour vous accompagner dans votre installation et votre quotidien.') +
          proInfo('shield', 'Une image commune forte', 'Une communication mutualisée qui valorise chaque discipline représentée au KOTI.') +
        '</div>' +
      '</div></section>' +
      '<section class="tight"><div class="container">' +
        '<h3 style="margin-bottom:var(--sp-2);">Prochains temps forts</h3>' +
        '<div class="grid-cards cols-3">' +
          eventCard('Petit-déjeuner de la KOTeam', 'Mardi 9 septembre 2025', 'Un temps convivial mensuel entre praticiens du KOTI.') +
          eventCard('Atelier "Mieux communiquer sur son activité"', 'Jeudi 25 septembre 2025', 'Formation courte animée par un praticien confirmé de la communauté.') +
          eventCard('Portes ouvertes professionnelles', 'Samedi 15 juin 2025', 'Une matinée pour découvrir les espaces avant de candidater.') +
        '</div>' +
      '</div></section>' +
      '<section><div class="container"><div class="grid-cards cols-3">' +
        D.temoignagesTherapeutes.map(function (t) {
          return '<div class="card"><div class="card-body">' +
            '<div class="stars" aria-hidden="true">' + [0, 1, 2, 3, 4].map(function () { return icon('star'); }).join('') + '</div>' +
            '<p style="font-family:var(--font-serif);font-style:italic;">« ' + t.texte + ' »</p>' +
            '<span style="font-weight:600;font-size:.85rem;margin-top:6px;">' + t.nom + ' — ' + t.role + '</span></div></div>';
        }).join('') +
      '</div></div></section>' +
      KOTI.components.ctaBand({
        title: 'Envie de candidater ?', tone: 'gold', text: 'Faites-nous découvrir votre projet et votre pratique.',
        buttons: [['#/professionnel/guide-installation', 'Candidater', 'btn-dark']]
      });
  };

  function eventCard(title, date, text) {
    return '<div class="card"><div class="card-body">' +
      '<div style="display:flex;align-items:center;gap:6px;font-size:.8rem;color:var(--sage-ink);font-weight:600;">' + icon('calendar') + date + '</div>' +
      '<h3 style="font-size:1.02rem;">' + title + '</h3><p>' + text + '</p></div></div>';
  }
})();
