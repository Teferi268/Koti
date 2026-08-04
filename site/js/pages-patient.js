/* ==========================================================================
   KOTI 2.0 — Pages du parcours patient
   ========================================================================== */
(function () {
  'use strict';
  var KOTI = (window.KOTI = window.KOTI || {});
  var icon = KOTI.icon;
  var C = KOTI.components;
  var D = KOTI.data;
  var H = KOTI.pageHelpers;
  KOTI.pages = KOTI.pages || {};

  /* ================= 9. Accueil parcours patient ================= */
  KOTI.pages.patientHome = function (container) {
    container.innerHTML =
      '<section class="hero"><div class="container page-hero-grid" style="align-items:center;">' +
        '<div>' +
          '<span class="eyebrow">Trouver mon accompagnement</span>' +
          '<h1 style="margin-top:8px;">Un accompagnement pensé pour vous</h1>' +
          '<p class="lead" style="margin-top:12px;">Quel que soit votre besoin, nous vous aidons à trouver la bonne personne, le bon programme et le bon rythme — sans jugement, à votre écoute.</p>' +
          '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:var(--sp-3);">' +
            '<a href="#/patient/questionnaire" class="btn btn-sage">Commencer mon orientation ' + icon('arrow') + '</a>' +
            '<a href="#/patient/therapeutes" class="btn btn-ghost">Voir les thérapeutes</a>' +
          '</div>' +
        '</div>' +
        KOTI.photoPanel('gen_accueil__carte_patient_femme_apaisee_hd.jpg', 'Patiente apaisée dans un espace du KOTI', null, null, '75% center') +
      '</div></section>' +

      '<section class="tight"><div class="container">' +
        C.sectionHead('Par où commencer ?', 'Des besoins fréquents, des réponses concrètes', { center: true }) +
        '<div class="grid-cards cols-4">' +
          need('meditation', 'Stress & anxiété du quotidien') +
          need('heart', 'Sommeil agité, fatigue persistante') +
          need('lotus', 'Douleurs physiques, tensions') +
          need('people', 'Traverser une période de transition') +
        '</div>' +
      '</div></section>' +

      '<section class="tight"><div class="container">' +
        C.sectionHead('Programmes', 'Nos programmes phares') +
        '<div class="grid-cards cols-3">' + D.programmes.slice(0, 3).map(function (p, i) { return C.programCard(p, i); }).join('') + '</div>' +
        '<div style="margin-top:var(--sp-3);"><a href="#/patient/programmes" class="link-arrow">Voir tous les programmes ' + icon('arrow') + '</a></div>' +
      '</div></section>' +

      '<section class="tight"><div class="container">' +
        C.sectionHead('Praticiens', 'Une équipe pluridisciplinaire') +
        '<div class="grid-cards cols-4">' + D.therapeutes.slice(0, 4).map(function (t) { return C.therapeuteCard(t); }).join('') + '</div>' +
        '<div style="margin-top:var(--sp-3);"><a href="#/patient/therapeutes" class="link-arrow">Voir tout l\'annuaire ' + icon('arrow') + '</a></div>' +
      '</div></section>' +

      '<section><div class="container"><div style="max-width:600px;margin-inline:auto;">' + C.testimonialsBlock() + '</div></div></section>';

    KOTI.initTabs(container);
  };

  function need(iconName, label) {
    return '<a href="#/patient/questionnaire" class="card" style="display:block;"><div class="card-body" style="align-items:center;text-align:center;">' +
      '<span class="why-icon" style="width:52px;height:52px;border-radius:50%;background:var(--sand);display:flex;align-items:center;justify-content:center;color:var(--sage-ink);">' + icon(iconName) + '</span>' +
      '<p style="font-weight:600;">' + label + '</p></div></a>';
  }

  /* ================= 10. Questionnaire d'orientation ================= */
  var QUIZ_STEPS = [
    { key: 'besoin', title: 'Quel est votre besoin principal ?', options: ['Stress & anxiété', 'Sommeil', 'Douleurs physiques', 'Équilibre alimentaire', 'Accompagnement émotionnel', 'Autre'] },
    { key: 'objectif', title: 'Quel est votre objectif aujourd\'hui ?', options: ['Me sentir mieux au quotidien', 'Retrouver de l\'énergie', 'Comprendre l\'origine de mes difficultés', 'Être accompagné(e) sur la durée'] },
    { key: 'dispo', title: 'Quelles sont vos disponibilités ?', options: ['En semaine, en journée', 'En semaine, le soir', 'Le week-end', 'Je suis flexible'] },
    { key: 'format', title: 'Quel format préférez-vous ?', options: ['Accompagnement individuel', 'Programme structuré', 'Atelier collectif', 'Peu importe'] }
  ];

  var QUIZ_MAP = {
    'Stress & anxiété': { disc: ['Sophrologie', 'Psychologie'], prog: 'p4' },
    'Sommeil': { disc: ['Sophrologie', 'Coaching bien-être'], prog: 'p3' },
    'Douleurs physiques': { disc: ['Ostéopathie', 'Kinésithérapie'], prog: 'p1' },
    'Équilibre alimentaire': { disc: ['Nutrition', 'Naturopathie'], prog: 'p1' },
    'Accompagnement émotionnel': { disc: ['Psychologie', 'Coaching bien-être'], prog: 'p4' },
    'Autre': { disc: ['Naturopathie', 'Coaching bien-être'], prog: 'p5' }
  };

  KOTI.pages.questionnaire = function (container) {
    var state = { step: 0, answers: {}, done: false };

    function render() {
      if (state.done) { renderResult(); return; }
      var step = QUIZ_STEPS[state.step];
      var dots = QUIZ_STEPS.map(function (s, i) {
        return '<span class="stepper-dot' + (i < state.step ? ' done' : i === state.step ? ' current' : '') + '"></span>';
      }).join('');

      container.innerHTML =
        H.pageHero({
          crumb: [['#/', 'Accueil'], ['#/patient', 'Parcours patient'], ['#/patient/questionnaire', 'Questionnaire']],
          eyebrow: 'Orientation personnalisée', title: 'Trouver mon accompagnement',
          lead: 'Quatre questions rapides pour vous orienter vers les praticiens et programmes les plus adaptés.',
          scene: 'figure', tone: 'sand'
        }) +
        '<section><div class="container">' +
          '<div class="wizard-card">' +
            '<div class="stepper">' + dots + '</div>' +
            '<span class="eyebrow">Étape ' + (state.step + 1) + ' / ' + QUIZ_STEPS.length + '</span>' +
            '<h2 style="margin-top:6px;">' + step.title + '</h2>' +
            '<div class="option-grid" id="quizOptions">' +
              step.options.map(function (o) {
                var checked = state.answers[step.key] === o;
                return '<label class="radio-card"><input type="radio" name="quizOpt" value="' + o + '" ' + (checked ? 'checked' : '') + '>' +
                  '<span class="radio-title">' + o + '</span></label>';
              }).join('') +
            '</div>' +
            '<div class="wizard-nav">' +
              '<button class="btn btn-ghost" id="quizBack" ' + (state.step === 0 ? 'disabled' : '') + '>' + icon('arrowLeft') + ' Précédent</button>' +
              '<button class="btn btn-sage" id="quizNext" disabled>' + (state.step === QUIZ_STEPS.length - 1 ? 'Voir mes recommandations' : 'Suivant') + ' ' + icon('arrow') + '</button>' +
            '</div>' +
          '</div>' +
        '</div></section>';

      var next = KOTI.qs('#quizNext', container);
      next.disabled = !state.answers[step.key];

      KOTI.qsa('input[name="quizOpt"]', container).forEach(function (input) {
        input.addEventListener('change', function () {
          state.answers[step.key] = input.value;
          next.disabled = false;
        });
      });
      var back = KOTI.qs('#quizBack', container);
      back.addEventListener('click', function () { state.step = Math.max(0, state.step - 1); render(); });
      next.addEventListener('click', function () {
        if (state.step < QUIZ_STEPS.length - 1) { state.step++; } else { state.done = true; }
        render();
      });
    }

    function renderResult() {
      var mapping = QUIZ_MAP[state.answers.besoin] || QUIZ_MAP.Autre;
      var theras = D.therapeutes.filter(function (t) { return mapping.disc.indexOf(t.discipline) !== -1; }).slice(0, 3);
      var prog = D.programmes.find(function (p) { return p.id === mapping.prog; });

      container.innerHTML =
        H.pageHero({
          crumb: [['#/', 'Accueil'], ['#/patient', 'Parcours patient'], ['#/patient/questionnaire', 'Questionnaire']],
          eyebrow: 'Vos recommandations', title: 'Voici ce que nous vous proposons',
          lead: 'Ces suggestions sont générées à partir de vos réponses — elles restent indicatives et peuvent être affinées avec un praticien.',
          scene: 'plants', tone: 'gold'
        }) +
        '<section><div class="container">' +
          '<h2 style="font-size:1.3rem;margin-bottom:var(--sp-2);">Thérapeutes recommandés</h2>' +
          '<div class="result-grid" style="margin-bottom:var(--sp-5);">' + theras.map(function (t) { return C.therapeuteCard(t); }).join('') + '</div>' +
          (prog ? '<h2 style="font-size:1.3rem;margin-bottom:var(--sp-2);">Programme conseillé</h2><div class="grid-cards cols-3" style="margin-bottom:var(--sp-5);">' + C.programCard(prog, 0) + '</div>' : '') +
          '<div style="display:flex;gap:12px;flex-wrap:wrap;">' +
            '<a href="#/rendez-vous" class="btn btn-sage">Prendre rendez-vous ' + icon('arrow') + '</a>' +
            '<button class="btn btn-ghost" id="quizRecapBtn">Recevoir mon récapitulatif</button>' +
            '<button class="btn btn-ghost" id="quizRestartBtn">Refaire le questionnaire</button>' +
          '</div>' +
        '</div></section>';

      KOTI.qs('#quizRecapBtn', container).addEventListener('click', function () {
        KOTI.toast('Récapitulatif envoyé par e-mail (démo).');
      });
      KOTI.qs('#quizRestartBtn', container).addEventListener('click', function () {
        state.step = 0; state.answers = {}; state.done = false; render();
      });
    }

    render();
  };

  /* ================= 11. Nos thérapeutes ================= */
  KOTI.pages.therapeutes = function (container) {
    renderTherapeutes(container, { disc: 'Toutes', dispo: 'Tous les jours', q: '' });
  };

  function renderTherapeutes(container, state) {
    var list = D.therapeutes.filter(function (t) {
      var matchDisc = state.disc === 'Toutes' || t.discipline === state.disc;
      var matchDispo = state.dispo === 'Tous les jours' || t.dispo.indexOf(state.dispo) !== -1;
      var matchQ = !state.q || t.nom.toLowerCase().indexOf(state.q.toLowerCase()) !== -1;
      return matchDisc && matchDispo && matchQ;
    });

    container.innerHTML =
      H.pageHero({
        crumb: [['#/', 'Accueil'], ['#/patient', 'Parcours patient'], ['#/patient/therapeutes', 'Nos thérapeutes']],
        eyebrow: 'Annuaire', title: 'Nos thérapeutes',
        lead: 'Une équipe pluridisciplinaire choisie pour la qualité de sa pratique et son sens de l\'écoute.',
        scene: 'plants', tone: 'sage'
      }) +
      '<section><div class="container">' +
        '<div class="filter-bar">' +
          '<div class="search-field">' + icon('search') + '<input type="search" id="theraSearch" placeholder="Rechercher un nom…" value="' + KOTI.escapeHtml(state.q) + '"></div>' +
          '<select id="theraDispo" class="field" style="border:1px solid var(--gray);border-radius:var(--radius-pill);padding:9px 14px;font-size:.82rem;">' +
            ['Tous les jours', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(function (d) { return '<option ' + (d === state.dispo ? 'selected' : '') + '>' + d + '</option>'; }).join('') +
          '</select>' +
        '</div>' +
        '<div class="filter-bar">' +
          H.chip('Toutes', state.disc === 'Toutes') +
          D.disciplines.map(function (d) { return H.chip(d, d === state.disc); }).join('') +
        '</div>' +
        '<div class="grid-cards cols-4">' + list.map(function (t) { return C.therapeuteCard(t); }).join('') + '</div>' +
        (list.length === 0 ? H.emptyState('Aucun thérapeute ne correspond à ces critères.') : '') +
      '</div></section>';

    container.querySelectorAll('.filter-chip').forEach(function (btn) {
      btn.addEventListener('click', function () { renderTherapeutes(container, { disc: btn.dataset.value, dispo: state.dispo, q: state.q }); });
    });
    KOTI.qs('#theraDispo', container).addEventListener('change', function (e) {
      renderTherapeutes(container, { disc: state.disc, dispo: e.target.value, q: state.q });
    });
    var search = KOTI.qs('#theraSearch', container);
    search.addEventListener('input', KOTI.debounce(function () {
      renderTherapeutes(container, { disc: state.disc, dispo: state.dispo, q: search.value });
      var el = KOTI.qs('#theraSearch', container);
      el.focus(); el.setSelectionRange(el.value.length, el.value.length);
    }, 250));
  }

  /* ================= 12. Nos programmes ================= */
  KOTI.pages.programmes = function (container) {
    renderProgrammes(container, 'Toutes');
  };

  function renderProgrammes(container, cat) {
    var categories = Array.from(new Set(D.programmes.map(function (p) { return p.categorie; })));
    var list = cat === 'Toutes' ? D.programmes : D.programmes.filter(function (p) { return p.categorie === cat; });
    container.innerHTML =
      H.pageHero({
        crumb: [['#/', 'Accueil'], ['#/patient', 'Parcours patient'], ['#/patient/programmes', 'Nos programmes']],
        eyebrow: 'Programmes', title: 'Nos programmes',
        lead: 'Des parcours structurés, individuels ou collectifs, pour avancer pas à pas vers votre équilibre.',
        photo: 'gen_general__espace_soin_lumineux_hd.jpg', photoAlt: 'Espace de soin lumineux du KOTI'
      }) +
      '<section><div class="container">' +
        '<div class="filter-bar">' + H.chip('Toutes', cat === 'Toutes') + categories.map(function (c) { return H.chip(c, c === cat); }).join('') + '</div>' +
        '<div class="grid-cards cols-3">' + list.map(function (p, i) { return C.programCard(p, i); }).join('') + '</div>' +
      '</div></section>' +
      KOTI.components.ctaBand({
        title: 'Pas sûr(e) du programme adapté ?', tone: 'sage',
        text: 'Notre questionnaire d\'orientation vous propose une sélection personnalisée en 2 minutes.',
        buttons: [['#/patient/questionnaire', 'Faire le questionnaire', 'btn-white']]
      });
    container.querySelectorAll('.filter-chip').forEach(function (btn) {
      btn.addEventListener('click', function () { renderProgrammes(container, btn.dataset.value); });
    });
  }

  /* ================= 13. Mon KOTI (dashboard démo) ================= */
  KOTI.pages.monKoti = function (container, params) {
    var universe = (params && params.universe) || 'patient';
    var loggedIn = KOTI.storage.get('koti-demo-auth', false);

    if (!loggedIn) {
      container.innerHTML =
        H.pageHero({
          crumb: [['#/', 'Accueil'], ['#/patient/mon-koti', 'Mon KOTI']],
          eyebrow: 'Espace personnel', title: 'Mon KOTI',
          lead: 'Retrouvez vos rendez-vous, vos programmes suivis et vos documents personnels.',
          scene: 'mirror', tone: 'sand'
        }) +
        '<section><div class="container-narrow">' +
          '<div class="login-gate card"><div class="card-body" style="align-items:center;">' + icon('lock') +
            '<h2 style="margin-top:6px;">Connectez-vous pour accéder à votre espace</h2>' +
            '<p style="max-width:44ch;">Cette démo simule une connexion : aucune donnée réelle n\'est transmise.</p>' +
            '<button class="btn btn-sage" id="loginBtn" style="margin-top:10px;">Se connecter</button>' +
          '</div></div>' +
        '</div></section>';
      KOTI.qs('#loginBtn', container).addEventListener('click', function () {
        KOTI.modal.open(
          '<h3>Connexion à Mon KOTI</h3><span class="gold-sep"></span>' +
          '<div class="field" style="margin-top:12px;"><label for="loginEmail">Adresse e-mail</label><input type="email" id="loginEmail" placeholder="vous@exemple.fr"></div>' +
          '<div class="field" style="margin-top:10px;"><label for="loginPass">Mot de passe</label><input type="password" id="loginPass" placeholder="••••••••"></div>' +
          '<button class="btn btn-sage btn-block" id="loginSubmitBtn" style="margin-top:16px;">Se connecter</button>' +
          '<p style="margin-top:10px;font-size:.78rem;color:#8a8f88;">Démo — n\'importe quelle valeur vous connecte.</p>',
          { label: 'Connexion' }
        );
        document.getElementById('loginSubmitBtn').addEventListener('click', function () {
          KOTI.storage.set('koti-demo-auth', true);
          KOTI.modal.close();
          KOTI.toast('Connexion réussie.');
          KOTI.pages.monKoti(container, params);
        });
      });
      return;
    }

    var lastRdv = KOTI.storage.get('koti-last-rdv', null);
    var isPro = universe === 'professionnel';

    container.innerHTML =
      H.pageHero({
        crumb: [['#/', 'Accueil'], ['#/patient/mon-koti', 'Mon KOTI']],
        eyebrow: 'Espace personnel', title: isPro ? 'Mon KOTI — Espace professionnel' : 'Mon KOTI',
        lead: 'Bienvenue dans votre espace. Toutes les données affichées ici sont fictives (démo).',
        scene: 'mirror', tone: 'sage'
      }) +
      '<section><div class="container">' +
        '<div style="display:flex;justify-content:flex-end;margin-bottom:var(--sp-2);">' +
          '<button class="btn btn-ghost btn-sm" id="logoutBtn">Se déconnecter</button></div>' +
        '<div class="dashboard-grid">' +
          '<div style="display:flex;flex-direction:column;gap:var(--sp-3);">' +
            '<div class="dash-card"><h3>Prochain rendez-vous</h3>' +
              (lastRdv
                ? '<div class="dash-list-item"><span>' + KOTI.formatDateLong(lastRdv.date) + ' à ' + lastRdv.slot.replace(':', 'h') + '</span><span class="tag">' + (lastRdv.motif || 'Consultation') + '</span></div>'
                : '<div class="dash-list-item"><span>Jeudi 11 septembre 2025 à 10h30</span><span class="tag">Suivi</span></div>') +
              '<a href="#/rendez-vous" class="link-arrow" style="margin-top:8px;">Prendre un nouveau rendez-vous ' + icon('arrow') + '</a>' +
            '</div>' +
            '<div class="dash-card"><h3>' + (isPro ? 'Mes réservations de salle' : 'Programmes suivis') + '</h3>' +
              (isPro
                ? D.salles.slice(0, 2).map(function (s) { return '<div class="dash-list-item"><span>' + s.nom + '</span><span class="tag gold">' + s.usage + '</span></div>'; }).join('')
                : D.programmes.slice(0, 2).map(function (p) { return '<div class="dash-list-item"><span>' + p.titre + '</span><span class="tag">En cours</span></div>'; }).join('')) +
            '</div>' +
            '<div class="dash-card"><h3>Documents &amp; guides</h3>' +
              ['Guide bien-être — édition 2025', isPro ? 'Contrat de mise à disposition' : 'Compte-rendu de bilan initial'].map(function (d) {
                return '<div class="dash-list-item"><span>' + d + '</span><button class="btn btn-ghost btn-sm" data-fake-download>' + icon('download') + '</button></div>';
              }).join('') +
            '</div>' +
          '</div>' +
          '<div style="display:flex;flex-direction:column;gap:var(--sp-3);">' +
            '<div class="dash-card"><h3>Messages</h3>' +
              '<div class="dash-list-item"><span>' + (isPro ? 'Équipe KOTI : votre salle de vendredi est confirmée.' : 'Camille R. : à bientôt pour votre prochaine séance !') + '</span></div>' +
            '</div>' +
            '<div class="dash-card"><h3>' + (isPro ? 'Facturation' : 'Favoris') + '</h3>' +
              (isPro
                ? '<div class="dash-list-item"><span>Facture #KT-0932</span><span class="tag">Payée</span></div>'
                : D.therapeutes.slice(0, 2).map(function (t) { return '<div class="dash-list-item"><span>' + t.nom + '</span>' + icon('heart') + '</div>'; }).join('')) +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div></section>';

    KOTI.qs('#logoutBtn', container).addEventListener('click', function () {
      KOTI.storage.set('koti-demo-auth', false);
      KOTI.toast('Vous avez été déconnecté(e).');
      KOTI.pages.monKoti(container, params);
    });
  };

  /* ================= 14. Acteurs de la santé ================= */
  KOTI.pages.acteursSante = function (container) {
    container.innerHTML =
      H.pageHero({
        crumb: [['#/', 'Accueil'], ['#/patient', 'Parcours patient'], ['#/patient/acteurs-sante', 'Acteurs de la santé']],
        eyebrow: 'Prescripteurs & partenaires', title: 'Acteurs de la santé',
        lead: 'Vous êtes médecin, sage-femme ou professionnel de santé ? Découvrez pourquoi et comment orienter vers le KOTI.',
        scene: 'corridor', tone: 'sand'
      }) +
      '<section class="tight"><div class="container"><div class="grid-cards cols-3">' +
        infoCard('shield', 'Un cadre exigeant', 'Chaque praticien est sélectionné pour la qualité de sa pratique et son sérieux professionnel.') +
        infoCard('people', 'Un suivi coordonné', 'Avec l\'accord du patient, un retour de parcours peut être partagé avec le prescripteur.') +
        infoCard('heart', 'Une approche complémentaire', 'Le KOTI s\'inscrit en complément du parcours de soin, jamais en substitution.') +
      '</div></div></section>' +
      '<section class="tight"><div class="container">' +
        '<h3 style="margin-bottom:var(--sp-2);">Ressources pour vos patients</h3>' +
        '<div class="grid-cards cols-3">' +
          ['Plaquette de présentation du KOTI', 'Fiche des programmes disponibles', 'Modèle de courrier d\'orientation'].map(function (d) {
            return '<div class="card"><div class="card-body"><h3 style="font-size:1rem;">' + d + '</h3>' +
              '<button class="btn btn-ghost btn-sm" style="align-self:flex-start;" data-fake-download>' + icon('download') + ' Télécharger (démo)</button></div></div>';
          }).join('') +
        '</div>' +
      '</div></section>' +
      '<section><div class="container"><div class="container-narrow" style="padding-inline:0;">' +
        '<h3 style="margin-bottom:var(--sp-1);">Contact professionnel de santé</h3><span class="gold-sep"></span>' +
        '<form id="acteursForm" novalidate style="margin-top:var(--sp-2);">' +
          '<div class="form-grid cols-2">' + H.field('text', 'acteursNom', 'Nom &amp; structure *', true) + H.field('email', 'acteursEmail', 'E-mail *', true) + '</div>' +
          '<div class="field" style="margin-top:var(--sp-2);"><label for="acteursMessage">Message *</label><textarea id="acteursMessage" placeholder="Votre demande…"></textarea><span class="field-error"></span></div>' +
          '<button type="submit" class="btn btn-sage" style="margin-top:var(--sp-2);">Envoyer ma demande</button>' +
        '</form>' +
        '<div id="acteursSuccess" class="form-success" style="display:none;margin-top:var(--sp-2);">' + icon('check') + '<span>Merci, votre demande a bien été transmise à notre équipe.</span></div>' +
      '</div></div></section>';

    var form = KOTI.qs('#acteursForm', container);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = KOTI.validateForm(form, {
        '#acteursNom': { required: true, label: 'Ce champ' },
        '#acteursEmail': { required: true, email: true },
        '#acteursMessage': { required: true, minLength: 10, label: 'Le message' }
      });
      if (!ok) return;
      form.style.display = 'none';
      KOTI.qs('#acteursSuccess', container).style.display = 'flex';
    });
  };

  function infoCard(iconName, title, text) {
    return '<div class="card"><div class="card-body">' +
      '<span class="why-icon" style="width:52px;height:52px;border-radius:50%;background:var(--sand);display:flex;align-items:center;justify-content:center;color:var(--sage-ink);">' + icon(iconName) + '</span>' +
      '<h3>' + title + '</h3><p>' + text + '</p></div></div>';
  }

  /* ================= 15. Boutique ================= */
  KOTI.pages.boutique = function (container) {
    renderBoutique(container, 'Toutes');
  };

  function renderBoutique(container, cat) {
    var list = cat === 'Toutes' ? D.produits : D.produits.filter(function (p) { return p.categorie === cat; });
    container.innerHTML =
      H.pageHero({
        crumb: [['#/', 'Accueil'], ['#/patient', 'Parcours patient'], ['#/patient/boutique', 'Boutique']],
        eyebrow: 'Boutique', title: 'La boutique du KOTI',
        lead: 'Des objets et rituels bien-être sélectionnés par notre équipe, à retrouver sur place ou en ligne.',
        scene: 'bag', tone: 'gold'
      }) +
      '<section><div class="container">' +
        '<div class="filter-bar">' + H.chip('Toutes', cat === 'Toutes') + D.produitsCategories.map(function (c) { return H.chip(c, c === cat); }).join('') +
          '<button class="btn btn-dark btn-sm" id="viewCartBtn" style="margin-left:auto;">' + icon('cart') + ' Voir mon panier (' + KOTI.cart.count() + ')</button>' +
        '</div>' +
        '<div class="grid-cards cols-4">' + list.map(function (p) { return C.productCard(p); }).join('') + '</div>' +
        '<p style="margin-top:var(--sp-3);font-size:.8rem;color:#8a8f88;">Démo — le paiement en ligne n\'est pas activé sur ce prototype.</p>' +
      '</div></section>';

    container.querySelectorAll('.filter-chip').forEach(function (btn) {
      btn.addEventListener('click', function () { renderBoutique(container, btn.dataset.value); });
    });
    KOTI.qs('#viewCartBtn', container).addEventListener('click', KOTI.layout.openCartDrawer);
  }

  /* ================= 16. Vlog / Blog bien-être ================= */
  KOTI.pages.vlog = function (container) {
    renderVlog(container, 'Tous');
  };

  function renderVlog(container, type) {
    var types = ['Article', 'Vidéo'];
    var list = type === 'Tous' ? D.articlesBlog : D.articlesBlog.filter(function (b) { return b.type === type; });
    container.innerHTML =
      H.pageHero({
        crumb: [['#/', 'Accueil'], ['#/patient', 'Parcours patient'], ['#/patient/vlog', 'Vlog']],
        eyebrow: 'Contenus', title: 'Vlog &amp; blog bien-être',
        lead: 'Conseils, interviews et vidéos courtes pour prendre soin de vous entre deux visites au KOTI.',
        scene: 'books', tone: 'sand'
      }) +
      '<section><div class="container">' +
        '<div class="filter-bar">' + H.chip('Tous', type === 'Tous') + types.map(function (t) { return H.chip(t, t === type); }).join('') + '</div>' +
        '<div class="grid-cards cols-3">' + list.map(function (b, i) { return C.blogCard(b, i); }).join('') + '</div>' +
        '<div class="card" style="margin-top:var(--sp-5);padding:var(--sp-4);text-align:center;">' +
          '<h3>Ne manquez aucun conseil</h3>' +
          '<p style="color:#4b544c;margin:6px 0 12px;">Recevez nos meilleurs contenus bien-être une fois par mois.</p>' +
          '<form id="vlogNewsletterForm" style="display:flex;gap:8px;max-width:380px;margin-inline:auto;">' +
            '<input type="email" required placeholder="Votre e-mail" style="flex:1;padding:11px 14px;border-radius:var(--radius-pill);border:1px solid var(--taupe);">' +
            '<button type="submit" class="btn btn-sage">S\'inscrire</button>' +
          '</form>' +
        '</div>' +
      '</div></section>';

    container.querySelectorAll('.filter-chip').forEach(function (btn) {
      btn.addEventListener('click', function () { renderVlog(container, btn.dataset.value); });
    });
    KOTI.qs('#vlogNewsletterForm', container).addEventListener('submit', function (e) {
      e.preventDefault();
      KOTI.toast('Merci pour votre inscription à la newsletter !');
      e.target.reset();
    });
  }
})();
