/* ==========================================================================
   KOTI 2.0 — Pages de l'univers général
   ========================================================================== */
(function () {
  'use strict';
  var KOTI = (window.KOTI = window.KOTI || {});
  var icon = KOTI.icon;
  var C = KOTI.components;
  var D = KOTI.data;
  KOTI.pages = KOTI.pages || {};

  /* ================= 1. Page d'orientation / accueil ================= */
  KOTI.pages.home = function (container) {
    var news = D.actualites.slice(0, 3);
    container.innerHTML =
      '<section class="hero" style="padding-top:var(--sp-6);">' +
        '<div class="container" style="display:grid;grid-template-columns:1fr;gap:var(--sp-5);align-items:center;">' +
          '<div style="text-align:center;">' +
            '<span class="eyebrow">Le soin autrement</span>' +
            '<h1 style="margin-top:8px;">Bienvenue au <span style="color:var(--gold-deep);">KOTI</span></h1>' +
            '<p class="lead" style="margin:14px auto 0;">Un lieu unique dédié à l\'humain, pour retrouver équilibre, harmonie et bien-être au KOTIdien.</p>' +
            '<div style="margin-top:var(--sp-4);display:flex;flex-direction:column;align-items:center;gap:6px;">' +
              '<span style="font-size:.9rem;color:#5a6359;">Deux façons de vivre l\'expérience KOTI</span>' +
              '<span style="font-family:var(--font-serif);font-style:italic;font-size:1.3rem;">À vous de choisir</span>' +
              '<a href="#paths" class="hero-arrow" aria-label="Voir les deux parcours" style="margin-top:8px;width:34px;height:34px;border-radius:50%;border:1px solid rgba(45,60,53,.25);display:flex;align-items:center;justify-content:center;background:var(--white);">' + icon('chevronDown') + '</a>' +
            '</div>' +
          '</div>' +
          '<div style="display:grid;grid-template-columns:1.15fr .85fr;gap:var(--sp-2);height:clamp(220px,38vw,380px);">' +
            KOTI.photoPanel('gen_accueil__hero_gauche_salon_canape_plantes.jpg', 'Salon lumineux du KOTI, canapé et plantes vertes') +
            KOTI.photoPanel('gen_accueil__hero_droite_comptoir_bois_plantes.jpg', 'Comptoir d\'accueil du KOTI avec logo et plantes', '<div class="art-mono">' + icon('globe') + '</div>') +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section id="paths"><div class="container">' +
        '<div class="grid-cards" style="align-items:stretch;">' +
          '<article class="card" style="position:relative;">' +
            '<a href="#/patient" style="position:absolute;inset:0;z-index:1;" aria-label="Trouver mon accompagnement — parcours patient"></a>' +
            '<div class="art media-frame" style="height:230px;border-radius:0;">' +
              '<img class="image-cover" src="' + KOTI.IMG + 'gen_accueil__carte_patient_femme_apaisee_hd.jpg" alt="Patiente apaisée dans un espace du KOTI" loading="lazy">' +
              '<div class="path-icon" style="position:absolute;left:18px;top:18px;width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;color:var(--sage-ink);">' + icon('meditation') + '</div></div>' +
            '<div class="card-body">' +
              '<h3>Je m\'accorde du temps, je prends soin de moi</h3><span class="gold-sep"></span>' +
              '<p>Je découvre les accompagnements, les thérapeutes et les programmes adaptés à mes besoins.</p>' +
              '<a href="#/patient" class="btn btn-sage" style="position:relative;z-index:2;align-self:flex-start;">Trouver mon accompagnement ' + icon('arrow') + '</a>' +
            '</div></article>' +
          '<article class="card" style="position:relative;">' +
            '<a href="#/professionnel" style="position:absolute;inset:0;z-index:1;" aria-label="Installer mon activité au KOTI — parcours professionnel"></a>' +
            '<div class="art media-frame" style="height:230px;border-radius:0;">' +
              '<img class="image-cover" src="' + KOTI.IMG + 'gen_accueil__carte_professionnel_bureau_consultation_hd.jpg" alt="Espace de soin du KOTI pour les professionnels" loading="lazy">' +
              '<div class="path-icon" style="position:absolute;left:18px;top:18px;width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;color:var(--gold-deep);">' + icon('house') + '</div></div>' +
            '<div class="card-body">' +
              '<h3>Je développe mon activité au KOTI</h3><span class="gold-sep"></span>' +
              '<p>Je découvre un lieu, des services et une communauté pensés pour développer mon activité.</p>' +
              '<a href="#/professionnel" class="btn btn-gold" style="position:relative;z-index:2;align-self:flex-start;">Installer mon activité au KOTI ' + icon('arrow') + '</a>' +
              '<a href="#/professionnel/guide-installation" class="link-arrow" style="position:relative;z-index:2;">Recevoir le guide d\'installation du KOTI ' + icon('arrow') + '</a>' +
            '</div></article>' +
        '</div></div></section>' +

      '<div class="transition-band"><div class="container"><h2>Un lieu. Deux parcours.<br>Une même promesse. Prendre soin de soi, ensemble.</h2></div></div>' +

      C.statsBlock() +
      C.whyDifferentBlock() +
      C.editorialTrio() +

      '<section><div class="container"><div class="lower-grid">' +
        '<div class="lower-card" style="background:var(--white);border-radius:var(--radius-lg);box-shadow:var(--shadow-soft);padding:var(--sp-3);display:flex;flex-direction:column;gap:var(--sp-2);">' +
          '<h3>Visitez le KOTI</h3>' +
          '<div class="art media-frame" style="height:200px;">' +
            '<img class="image-cover" src="' + KOTI.IMG + 'gen_accueil__hero_gauche_salon_canape_plantes.jpg" alt="Salon lumineux du KOTI, aperçu vidéo" loading="lazy">' +
            '<button class="play-btn" id="openVideoModal" aria-label="Lire la vidéo de présentation du KOTI" style="position:absolute;inset:0;margin:auto;width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-hover);">' + icon('play') + '</button></div>' +
          '<p style="color:#4b544c;font-size:.9rem;">Découvrez nos espaces et plongez dans l\'univers du KOTI comme si vous y étiez.</p>' +
          '<a href="#/contact" class="btn btn-gold btn-sm" style="align-self:flex-start;">Recevoir mon accès privé</a>' +
        '</div>' +
        C.testimonialsBlock() +
        '<div class="lower-card" style="background:var(--white);border-radius:var(--radius-lg);box-shadow:var(--shadow-soft);padding:var(--sp-3);display:flex;flex-direction:column;gap:8px;">' +
          '<h3>Nos actualités</h3>' +
          (function () {
            var featured = D.actualites.find(function (a) { return a.featured; }) || news[0];
            return '<button data-actualite="' + featured.id + '" style="text-align:left;background:none;border:none;cursor:pointer;padding:0;display:flex;flex-direction:column;gap:8px;">' +
              '<div class="card-media" style="height:110px;">' +
                '<img class="image-cover" src="' + KOTI.IMG + 'accueil__bloc_actualite_portes_ouvertes.jpg" alt="' + featured.titre + '" loading="lazy">' +
              '</div>' +
              '<span class="eyebrow" style="color:var(--gold-deep);">' + featured.categorie + '</span>' +
              '<strong style="font-size:.92rem;display:block;">' + featured.titre + '</strong>' +
              '<span style="font-size:.78rem;color:#7a8079;">' + KOTI.formatDateShort(featured.date) + '</span>' +
            '</button>' +
            news.slice(1).map(function (a) {
              return '<button data-actualite="' + a.id + '" class="dash-list-item" style="text-align:left;background:none;border:none;cursor:pointer;">' +
                '<span><strong style="font-size:.85rem;display:block;">' + a.titre + '</strong><span style="font-size:.75rem;color:#7a8079;">' + KOTI.formatDateShort(a.date) + '</span></span>' + icon('chevronRight') + '</button>';
            }).join('');
          })() +
          '<a href="#/actualites" class="link-arrow" style="margin-top:auto;">Voir toutes les actualités ' + icon('arrow') + '</a>' +
        '</div>' +
        '<div class="lower-card" style="background:var(--white);border-radius:var(--radius-lg);box-shadow:var(--shadow-soft);padding:var(--sp-3);display:flex;flex-direction:column;gap:8px;">' +
          '<h3>Notre équipe — La KOTeam</h3>' +
          '<div style="display:flex;gap:var(--sp-2);">' +
            D.equipe.map(function (m) {
              var photo = m.nom === 'Charline' ? 'accueil__portrait_charline_mini.jpg' : m.nom === 'Yoann' ? 'accueil__portrait_yoann_mini.jpg' : '';
              var avatar = photo
                ? '<span class="avatar-photo" style="width:56px;height:56px;"><img src="' + KOTI.IMG + photo + '" alt="Portrait de ' + m.nom + '" loading="lazy"></span>'
                : '<span class="team-avatar" style="width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--font-serif);color:#fff;background:linear-gradient(135deg,var(--' + (m.tone === 'sage' ? 'sage-ink),var(--sage' : 'gold-deep),var(--gold') + '));">' + m.nom[0] + '</span>';
              return '<div style="flex:1;text-align:center;display:flex;flex-direction:column;align-items:center;gap:4px;">' +
                avatar +
                '<span style="font-size:.82rem;font-weight:600;">' + m.nom + '</span><span style="font-size:.7rem;color:#7a8079;">' + m.role + '</span></div>';
            }).join('') +
          '</div>' +
          '<p style="color:#4b544c;font-size:.88rem;">Faites connaissance avec Yoann et Charline, et l\'équipe qui donne vie au KOTI au KOTIdien.</p>' +
          '<a href="#/equipe" class="link-arrow" style="margin-top:auto;">Découvrir toute la KOTeam ' + icon('arrow') + '</a>' +
        '</div>' +
      '</div></div></section>' +

      C.ctaBand({
        title: 'Prêt(e) à vivre l\'expérience KOTI ?', tone: 'sage',
        text: 'Que vous cherchiez un accompagnement ou un lieu pour exercer, le KOTI vous ouvre ses portes.',
        buttons: [['#/patient', 'Trouver mon accompagnement', 'btn-white'], ['#/professionnel', 'Installer mon activité au KOTI', 'btn-dark']]
      });

    KOTI.initTabs(container);
  };

  /* ================= 2. Notre vision ================= */
  KOTI.pages.vision = function (container) {
    var paragraphs = [
      'Le KOTI est né d\'une conviction simple : la santé ne se résume pas à soigner une maladie. Elle consiste à accompagner chaque personne dans la recherche de son équilibre global — corps, âme et esprit.',
      'Au KOTI, nous avons la conviction qu\'aucune discipline ne détient seule toutes les réponses. C\'est en faisant dialoguer les savoirs et en plaçant l\'humain au cœur de chaque parcours que l\'on construit un accompagnement véritablement durable.',
      'Notre ambition est de rendre la santé globale et intégrative accessible à tous : un lieu de rencontres où professionnels de santé, praticiens du bien-être et patients avancent ensemble.',
      'Au-delà d\'un centre, nous construisons un véritable écosystème où les parcours sont personnalisés et les synergies entre praticiens enrichissent la qualité de l\'accompagnement.',
      'Parce que le bien-être ne s\'arrête pas à la porte d\'un cabinet, le KOTI développe des services et des ressources qui prolongent cette expérience dans votre quotidien.',
      'Notre vision est simple : créer une communauté engagée où prendre soin de soi devient une démarche naturelle, accompagnée, accessible à tous et profondément humaine.',
      'Demain, le KOTI souhaite devenir un référentiel de confiance partout en France, en fédérant praticiens, patients et partenaires partageant les mêmes valeurs : bienveillance, confiance, coopération et respect de la singularité de chacun.'
    ];
    container.innerHTML =
      pageHero({
        crumb: [['#/', 'Accueil'], ['#/vision', 'Notre vision']],
        eyebrow: 'Notre vision', title: 'Notre vision',
        lead: 'Une vision globale, humaine et profondément engagée.',
        photo: 'page_vision__photo_lion_charline.jpg', photoAlt: 'Charline, cofondatrice du KOTI'
      }) +
      '<section><div class="container-narrow" style="display:flex;flex-direction:column;gap:var(--sp-3);">' +
        paragraphs.map(function (p) { return '<p style="color:#3f473f;line-height:1.75;">' + p + '</p>'; }).join('') +
        '<div class="mantra-card">' +
          '<span class="mantra-icon">' + icon('lotus') + '</span>' +
          '<p style="font-family:var(--font-serif);font-size:1.1rem;font-style:italic;">« Prendre soin de soi aujourd\'hui, c\'est construire un demain meilleur. »</p>' +
        '</div>' +
      '</div></section>' +
      C.ctaBand({
        title: 'Prêt(e) à faire partie de cette vision ?', tone: 'sage',
        text: 'Que vous cherchiez un accompagnement ou un lieu pour exercer, le KOTI vous ouvre ses portes.',
        buttons: [['#/patient', 'Trouver mon accompagnement', 'btn-white'], ['#/professionnel', 'Installer mon activité au KOTI', 'btn-dark']]
      });
  };

  /* ================= 3. Notre histoire ================= */
  KOTI.pages.histoire = function (container) {
    container.innerHTML =
      pageHero({
        crumb: [['#/', 'Accueil'], ['#/histoire', 'Notre histoire']],
        eyebrow: 'Notre histoire', title: 'Notre histoire',
        lead: 'Certaines histoires commencent par une idée. La nôtre a commencé bien avant — elle est née d\'une complicité et d\'un lien fraternel.',
        photo: 'page_histoire__photo_enfance_charline_yoann.jpg', photoAlt: 'Charline et Yoann enfants'
      }) +
      '<section><div class="container-narrow" style="display:flex;flex-direction:column;gap:var(--sp-4);">' +
        '<p style="color:#3f473f;line-height:1.75;">Avant d\'être un projet, le KOTI est l\'histoire d\'un frère et d\'une sœur. Deux parcours différents, deux personnalités singulières, mais une même façon de regarder le monde : avec le cœur, avec sincérité, et avec cette envie profonde d\'en prendre soin.</p>' +
        '<div class="media-frame" style="height:240px;">' +
          '<img class="image-cover" src="' + KOTI.IMG + 'page_histoire__photo_cafe_coeur.jpg" alt="Un café partagé, symbole des retrouvailles de Charline et Yoann" loading="lazy">' +
        '</div>' +
        '<p style="color:#3f473f;line-height:1.75;">Depuis l\'enfance, Yoann et Charline partagent ce lien particulier qui traverse les années, les distances et les chemins de vie. Même lorsque la vie les a éloignés géographiquement, leurs échanges sont restés nourris par les mêmes questions, les mêmes envies.</p>' +
        '<div class="mantra-card">' +
          '<span class="mantra-icon">' + icon('leaf') + '</span>' +
          '<div><h3 style="font-size:1.1rem;">Et si l\'on créait un lieu qui nous ressemble ?</h3>' +
          '<p style="color:#4b544c;font-size:.92rem;margin-top:6px;">Un lieu simple, chaleureux, sincère. Un lieu où l\'on puisse venir comme on entre dans une maison de famille, avec confiance, sans crainte d\'être jugé.</p></div>' +
        '</div>' +
        '<p style="color:#3f473f;line-height:1.75;">Peu à peu, cette envie est devenue plus forte. Ils ont imaginé un endroit qu\'ils auraient aimé trouver pour leurs proches. C\'est ainsi qu\'est né le KOTI — non pas seulement d\'une idée, mais d\'un lien.</p>' +
        '<blockquote style="background:var(--white);border-radius:var(--radius-lg);box-shadow:var(--shadow-soft);padding:var(--sp-4);text-align:center;">' +
          '<p style="font-family:var(--font-serif);font-size:1.15rem;font-style:italic;">« Prendre soin des autres, c\'est semer l\'harmonie. L\'harmonie reviendra à toi. »</p>' +
          '<footer style="margin-top:8px;font-size:.85rem;color:#7a8079;">Proverbe balinais</footer>' +
        '</blockquote>' +
      '</div></section>' +
      C.ctaBand({
        title: 'Envie de rencontrer l\'équipe ?', tone: 'gold',
        text: 'Charline, Yoann et toute la KOTeam seront ravis de vous accueillir.',
        buttons: [['#/equipe', 'Découvrir l\'équipe', 'btn-dark'], ['#/contact', 'Nous contacter', 'btn-white']]
      });
  };

  /* ================= 4. Nos valeurs ================= */
  KOTI.pages.valeurs = function (container) {
    var values = [
      ['heart', 'Humanité', 'Chaque personne est accueillie dans sa singularité, avec son histoire, ses besoins et ses attentes.'],
      ['meditation', 'Écoute', 'Nos praticiens prennent le temps d\'écouter, de comprendre et d\'accompagner sans jugement.'],
      ['lotus', 'Bienveillance', 'Une écoute attentive, des mots justes et un cadre rassurant, à chaque étape du parcours.'],
      ['people', 'Coopération', 'Les praticiens ne travaillent pas côte à côte, mais main dans la main, en lien constant.'],
      ['shield', 'Confiance', 'Une relation saine et éthique, construite dans la durée par la transparence et la loyauté.'],
      ['star', 'Exigence professionnelle', 'Chaque praticien est choisi pour la qualité de sa pratique et son engagement responsable.']
    ];
    container.innerHTML =
      pageHero({
        crumb: [['#/', 'Accueil'], ['#/valeurs', 'Nos valeurs']],
        eyebrow: 'Nos valeurs', title: 'Nos valeurs',
        lead: 'Des valeurs vécues au quotidien, au service d\'un accompagnement humain, cohérent et respectueux.',
        photo: 'page_valeurs__photo_equipe_discussion.jpg', photoAlt: 'L\'équipe du KOTI en discussion'
      }) +
      '<section><div class="container"><div class="grid-cards cols-3">' +
        values.map(function (v) {
          return '<div class="card"><div class="card-body">' +
            '<span class="why-icon" style="width:56px;height:56px;border-radius:50%;background:var(--sand);display:flex;align-items:center;justify-content:center;color:var(--sage-ink);">' + icon(v[0]) + '</span>' +
            '<h3 style="margin-top:8px;">' + v[1] + '</h3><p>' + v[2] + '</p></div></div>';
        }).join('') +
      '</div>' +
      '<div class="mantra-card" style="margin-top:var(--sp-4);">' +
        '<span class="avatar-photo" style="width:64px;height:64px;"><img src="' + KOTI.IMG + 'page_valeurs__photo_enfance.jpg" alt="Charline et Yoann enfants" loading="lazy"></span>' +
        '<div><h3 style="font-size:1.1rem;">Notre intention</h3>' +
        '<p style="color:#4b544c;font-size:.92rem;margin-top:6px;">Nos valeurs sont notre boussole. Elles donnent au KOTI son âme : celle d\'un lieu où les praticiens prennent soin des patients avec la même attention que l\'on accorderait à ceux qui nous sont les plus chers.</p></div>' +
      '</div></div></section>' +
      C.ctaBand({
        title: 'Prêt(e) à vivre l\'expérience KOTI ?', tone: 'sage',
        text: 'Prenez rendez-vous en quelques clics avec le praticien qui vous correspond.',
        buttons: [['#/rendez-vous', 'Prendre rendez-vous', 'btn-white']]
      });
  };

  /* ================= 5. Notre équipe ================= */
  KOTI.pages.equipe = function (container) {
    renderEquipe(container, 'Tous');
  };

  function renderEquipe(container, activeDiscipline) {
    var filtered = activeDiscipline === 'Tous' ? D.therapeutes : D.therapeutes.filter(function (t) { return t.discipline === activeDiscipline; });
    container.innerHTML =
      pageHero({
        crumb: [['#/', 'Accueil'], ['#/equipe', 'Notre équipe']],
        eyebrow: 'Notre équipe', title: 'Notre équipe — La KOTeam',
        lead: 'Une vision familiale portée par l\'humain et l\'excellence.',
        photo: 'page_equipe__photo_charline_yoann_table.jpg', photoAlt: 'Charline et Yoann, cofondateurs du KOTI'
      }) +
      '<section class="tight"><div class="container"><div class="grid-cards cols-3" style="margin-bottom:var(--sp-5);">' +
        D.equipe.map(function (m) {
          var photo = m.nom === 'Charline' ? 'accueil__portrait_charline_mini.jpg' : m.nom === 'Yoann' ? 'accueil__portrait_yoann_mini.jpg' : '';
          var avatar = photo
            ? '<span class="avatar-photo" style="width:76px;height:76px;"><img src="' + KOTI.IMG + photo + '" alt="Portrait de ' + m.nom + '" loading="lazy"></span>'
            : '<span class="profile-avatar" style="background:linear-gradient(135deg,var(--' + (m.tone === 'sage' ? 'sage-ink),var(--sage' : 'gold-deep),var(--gold') + '));">' + m.nom[0] + '</span>';
          return '<div class="profile-card">' +
            avatar +
            '<h3>' + m.nom + '</h3><span class="profile-role">' + m.role + '</span><p>' + m.bio + '</p></div>';
        }).join('') +
      '</div></div></section>' +
      '<section class="tight"><div class="container">' +
        C.sectionHead('Praticiens', 'Nos thérapeutes') +
        '<div class="filter-bar" id="equipeFilters">' +
          chip('Tous', activeDiscipline === 'Tous') +
          D.disciplines.map(function (d) { return chip(d, d === activeDiscipline); }).join('') +
        '</div>' +
        '<div class="grid-cards cols-4" id="equipeGrid">' +
          filtered.map(function (t) { return C.therapeuteCard(t); }).join('') +
        '</div>' +
        (filtered.length === 0 ? emptyState('Aucun thérapeute pour ce filtre.') : '') +
      '</div></section>' +
      C.ctaBand({
        title: 'Une question, une envie de rencontre ?', tone: 'gold',
        text: 'Contactez-nous ou prenez directement rendez-vous avec l\'un de nos praticiens.',
        buttons: [['#/contact', 'Nous contacter', 'btn-dark'], ['#/rendez-vous', 'Prendre rendez-vous', 'btn-white']]
      });

    KOTI.qs('#equipeFilters', container).addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-chip');
      if (!btn) return;
      renderEquipe(container, btn.dataset.value);
    });
  }

  /* ================= 6. Nos actualités ================= */
  KOTI.pages.actualites = function (container) {
    renderActualites(container, { cat: 'Toutes', q: '' });
  };

  function renderActualites(container, state) {
    var featured = D.actualites.find(function (a) { return a.featured; });
    var list = D.actualites.filter(function (a) {
      var matchCat = state.cat === 'Toutes' || a.categorie === state.cat;
      var matchQ = !state.q || (a.titre + a.excerpt).toLowerCase().indexOf(state.q.toLowerCase()) !== -1;
      return matchCat && matchQ && !a.featured;
    });

    container.innerHTML =
      pageHero({
        crumb: [['#/', 'Accueil'], ['#/actualites', 'Nos actualités']],
        eyebrow: 'Actualités', title: 'Nos actualités',
        lead: 'Retrouvez ici la vie du KOTI : évènements, conseils bien-être, portraits et inspirations.',
        photo: 'page_actualites__photo_table_basse_fleurs.jpg', photoAlt: 'Table basse fleurie dans un espace du KOTI'
      }) +
      (featured ? '<section class="tight"><div class="container">' +
        '<div class="eyebrow" style="text-align:center;display:block;margin-bottom:8px;">— À la une —</div>' +
        '<div class="card featured-news-card" style="overflow:hidden;">' +
          '<div class="card-media" style="height:220px;border-radius:0;">' +
            '<img class="image-cover" src="' + KOTI.IMG + 'accueil__bloc_actualite_portes_ouvertes.jpg" alt="' + featured.titre + '" loading="lazy">' +
          '</div>' +
          '<div class="card-body" style="padding:var(--sp-4);">' +
            '<span class="tag gold">' + featured.categorie + '</span>' +
            '<h2 style="font-size:1.4rem;">' + featured.titre + '</h2>' +
            '<div style="display:flex;align-items:center;gap:6px;font-size:.85rem;color:var(--sage-ink);font-weight:600;">' + icon('calendar') + KOTI.formatDateLong(featured.date) + '</div>' +
            '<p>' + featured.excerpt + '</p>' +
            '<button class="btn btn-gold btn-sm" style="align-self:flex-start;" data-actualite="' + featured.id + '">En savoir plus ' + icon('arrow') + '</button>' +
          '</div>' +
        '</div></div></section>' : '') +

      '<section><div class="container">' +
        '<div class="eyebrow" style="text-align:center;display:block;margin-bottom:8px;">— Nos derniers articles —</div>' +
        '<div class="filter-bar">' +
          '<div class="search-field">' + icon('search') + '<input type="search" id="actuSearch" placeholder="Rechercher une actualité…" value="' + KOTI.escapeHtml(state.q) + '"></div>' +
          chip('Toutes', state.cat === 'Toutes') +
          D.actualitesCategories.map(function (c) { return chip(c, c === state.cat); }).join('') +
        '</div>' +
        '<div class="grid-cards cols-3" id="actuGrid">' +
          list.map(function (a, i) { return C.actualiteCard(a, i); }).join('') +
        '</div>' +
        (list.length === 0 ? emptyState('Aucune actualité ne correspond à votre recherche.') : '') +
      '</div></section>';

    container.querySelectorAll('.filter-chip').forEach(function (btn) {
      btn.addEventListener('click', function () { renderActualites(container, { cat: btn.dataset.value, q: state.q }); });
    });
    var search = KOTI.qs('#actuSearch', container);
    if (search) search.addEventListener('input', KOTI.debounce(function () {
      renderActualites(container, { cat: state.cat, q: search.value });
      KOTI.qs('#actuSearch', container).focus();
      var v = KOTI.qs('#actuSearch', container).value;
      KOTI.qs('#actuSearch', container).value = v;
      KOTI.qs('#actuSearch', container).setSelectionRange(v.length, v.length);
    }, 250));
  }

  /* ================= 7. Contact ================= */
  KOTI.pages.contact = function (container) {
    container.innerHTML =
      pageHero({
        crumb: [['#/', 'Accueil'], ['#/contact', 'Contact']],
        eyebrow: 'Contact', title: 'Nous contacter',
        lead: 'Parlons de votre parcours. Nous sommes à votre écoute pour répondre à vos questions et vous orienter.',
        photo: 'page_contact__photo_charline_bureau.jpg', photoAlt: 'Charline à son bureau, prête à vous répondre'
      }) +
      '<section class="tight"><div class="container">' +
        '<div class="grid-cards cols-4" style="margin-bottom:var(--sp-5);">' +
          infoItem('train', 'Au pied du RER E') + infoItem('clock', 'Ouvert 7j/7, 8h–21h') +
          infoItem('people', 'Une équipe pluridisciplinaire') + infoItem('heart', 'Un accompagnement sur-mesure') +
        '</div>' +
        '<div class="rdv-grid">' +
          '<div class="calendar-card">' +
            '<h3>Coordonnées</h3><span class="gold-sep"></span>' +
            '<ul class="footer-contact" style="gap:14px;margin-top:12px;">' +
              '<li>' + icon('pin') + '<span>188 Grande Rue Charles de Gaulle, 94130 Nogent-sur-Marne, 4ème étage</span></li>' +
              '<li>' + icon('phone') + '<a href="tel:0614979608">06 14 97 96 08</a></li>' +
              '<li>' + icon('mail') + '<a href="mailto:contact@monkoti.fr">contact@monkoti.fr</a></li>' +
            '</ul>' +
            '<div class="art art-tone-sand" style="height:140px;margin-top:var(--sp-3);display:flex;align-items:center;justify-content:center;">' +
              '<span style="display:flex;flex-direction:column;align-items:center;gap:4px;color:var(--sage-ink);font-size:.8rem;">' + icon('pin') + 'Carte interactive — à intégrer</span></div>' +
          '</div>' +
          '<div class="slots-card">' +
            '<h3>Envoyez-nous un message</h3><span class="gold-sep"></span>' +
            '<p style="font-size:.78rem;color:#7a8079;margin:4px 0 10px;"><span style="color:var(--error);">*</span> champ obligatoire</p>' +
            '<form id="contactForm" novalidate>' +
              '<div class="form-grid cols-2">' +
                field('text', 'contactNom', 'Prénom &amp; nom *', true) +
                field('email', 'contactEmail', 'Adresse e-mail *', true) +
              '</div>' +
              '<div class="form-grid cols-2" style="margin-top:var(--sp-2);">' +
                field('tel', 'contactTel', 'Téléphone', false) +
                selectField('contactMotif', 'Vous êtes *', ['Patient', 'Professionnel de santé', 'Presse', 'Autre']) +
              '</div>' +
              '<div class="field" style="margin-top:var(--sp-2);"><label for="contactMessage">Message *</label>' +
                '<textarea id="contactMessage" placeholder="Votre message…"></textarea><span class="field-error"></span></div>' +
              '<label class="checkbox-row" style="margin-top:var(--sp-2);"><input type="checkbox" id="contactConsent">' +
                'J\'accepte que mes informations soient utilisées par le KOTI pour répondre à ma demande.</label>' +
              '<button type="submit" class="btn btn-sage" style="margin-top:var(--sp-3);">Envoyer mon message</button>' +
            '</form>' +
            '<div id="contactSuccess" style="display:none;" class="form-success">' + icon('check') +
              '<div><strong>Message envoyé.</strong><p style="font-size:.85rem;margin-top:4px;">Merci, notre équipe revient vers vous sous 48h ouvrées.</p></div></div>' +
          '</div>' +
        '</div>' +
      '</div></section>';

    var form = KOTI.qs('#contactForm', container);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = KOTI.validateForm(form, {
        '#contactNom': { required: true, label: 'Le nom' },
        '#contactEmail': { required: true, email: true, label: 'L\'e-mail' },
        '#contactTel': { phone: true },
        '#contactMotif': { required: true, label: 'Ce champ' },
        '#contactMessage': { required: true, minLength: 10, label: 'Le message' }
      });
      var consent = KOTI.qs('#contactConsent', container);
      var consentWrap = consent.closest('.checkbox-row');
      if (!consent.checked) { ok = false; consentWrap.style.color = 'var(--error)'; } else { consentWrap.style.color = ''; }
      if (!ok) return;
      form.style.display = 'none';
      KOTI.qs('#contactSuccess', container).style.display = 'flex';
      KOTI.toast('Votre message a bien été envoyé.');
    });
  };

  /* ================= 8. Prendre rendez-vous ================= */
  KOTI.pages.rendezvous = function (container) {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var state = { year: today.getFullYear(), month: today.getMonth(), date: null, slot: null, motif: null, confirmed: false };

    function isPast(y, m, d) { return new Date(y, m, d) < today; }
    function isComplet(y, m, d) { return (y * 372 + m * 31 + d) % 6 === 0; }

    function slotsFor(y, m, d) {
      var out = [];
      for (var h = 9; h <= 18; h++) {
        [0, 30].forEach(function (mm) {
          if (h === 18 && mm === 30) return;
          var idx = h * 2 + (mm ? 1 : 0);
          var unavailable = (d + idx) % 4 === 0;
          out.push({ key: h + ':' + (mm || '00'), label: (h < 10 ? '0' + h : h) + 'h' + (mm ? mm : '00'), unavailable: unavailable });
        });
      }
      return out;
    }

    function renderAll() {
      var monthLabel = new Date(state.year, state.month, 1).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
      monthLabel = monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1);

      var firstDow = (new Date(state.year, state.month, 1).getDay() + 6) % 7; // lundi = 0
      var daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
      var cells = [];
      for (var i = 0; i < firstDow; i++) cells.push({ blank: true, other: true });
      for (var d = 1; d <= daysInMonth; d++) cells.push({ d: d });
      while (cells.length % 7 !== 0) cells.push({ blank: true, other: true });

      var dow = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

      var calendarHtml =
        '<div class="calendar-head"><h3 style="font-size:1.05rem;">' + monthLabel + '</h3>' +
        '<div style="display:flex;gap:6px;">' +
        '<button class="calendar-nav" id="prevMonth" aria-label="Mois précédent">‹</button>' +
        '<button class="calendar-nav" id="nextMonth" aria-label="Mois suivant">›</button></div></div>' +
        '<div class="calendar-grid">' + dow.map(function (x) { return '<span class="calendar-dow">' + x + '</span>'; }).join('') +
        cells.map(function (c) {
          if (c.blank) return '<span class="calendar-day other-month">' + '</span>';
          var isToday = state.year === today.getFullYear() && state.month === today.getMonth() && c.d === today.getDate();
          var past = isPast(state.year, state.month, c.d);
          var complet = isComplet(state.year, state.month, c.d);
          var iso = state.year + '-' + String(state.month + 1).padStart(2, '0') + '-' + String(c.d).padStart(2, '0');
          var selected = state.date === iso;
          var cls = 'calendar-day' + (isToday ? ' is-today' : '') + ((past || complet) ? ' is-disabled' : '') + (selected ? ' is-selected' : '');
          return '<button class="' + cls + '" ' + ((past || complet) ? 'disabled' : 'data-date="' + iso + '"') + '>' + c.d + (isToday ? '<span class="today-tag">Aujourd\'hui</span>' : '') + '</button>';
        }).join('') + '</div>';

      var slotsHtml;
      if (!state.date) {
        slotsHtml = '<p class="slots-empty">Choisissez une date pour afficher les créneaux disponibles.</p>';
      } else {
        var parts = state.date.split('-').map(Number);
        var slots = slotsFor(parts[0], parts[1] - 1, parts[2]);
        var allFull = slots.every(function (s) { return s.unavailable; });
        slotsHtml = allFull ? '<p class="slots-empty">Aucun créneau disponible ce jour-là — essayez une autre date.</p>' :
          '<div class="slots-grid">' + slots.map(function (s) {
            var cls = 'slot-btn' + (s.unavailable ? ' unavailable' : '') + (state.slot === s.key ? ' selected' : '');
            return '<button class="' + cls + '" ' + (s.unavailable ? 'disabled' : 'data-slot="' + s.key + '"') + '>' + s.label + '</button>';
          }).join('') + '</div>';
      }

      var canConfirm = state.date && state.slot && state.motif && KOTI.qs('#rdvNom', container) && KOTI.qs('#rdvNom', container).value.trim() && KOTI.qs('#rdvEmail', container).value.trim();

      container.innerHTML =
        pageHero({
          crumb: [['#/', 'Accueil'], ['#/rendez-vous', 'Prendre rendez-vous']],
          eyebrow: 'Réservation', title: 'Prendre rendez-vous',
          lead: 'Choisissez votre date et votre horaire en quelques clics.',
          photo: 'page_rendezvous__photo_charline_telephone.jpg', photoAlt: 'Charline au téléphone, prête à confirmer votre rendez-vous'
        }) +
        (state.confirmed ? confirmationBlock(state) :
        '<section><div class="container">' +
          '<div class="rdv-grid">' +
            '<div class="calendar-card" id="calWrap">' + calendarHtml + '</div>' +
            '<div class="slots-card" id="slotsWrap"><h3 style="font-size:1.05rem;">Choisissez un horaire</h3><span class="gold-sep"></span>' + slotsHtml + '</div>' +
          '</div>' +
          '<div class="rdv-summary" style="margin-top:var(--sp-3);">' +
            '<h3 style="font-size:1.05rem;">Votre rendez-vous</h3><span class="gold-sep"></span>' +
            '<div class="form-grid cols-2" style="margin-top:var(--sp-2);">' +
              selectFieldValue('rdvMotif', 'Motif de la visite *', ['Première consultation', 'Suivi', 'Bilan naturopathie', 'Autre'], state.motif) +
              field('text', 'rdvNom', 'Nom complet *', true) +
            '</div>' +
            '<div class="form-grid cols-2" style="margin-top:var(--sp-2);">' +
              field('email', 'rdvEmail', 'E-mail *', true) +
              field('tel', 'rdvTel', 'Téléphone', false) +
            '</div>' +
            '<div style="margin-top:var(--sp-3);">' +
              '<div class="rdv-summary-row"><span>Date</span><strong>' + (state.date ? KOTI.formatDateLong(state.date) : '—') + '</strong></div>' +
              '<div class="rdv-summary-row"><span>Horaire</span><strong>' + (state.slot ? state.slot.replace(':', 'h') : '—') + '</strong></div>' +
              '<div class="rdv-summary-row"><span>Motif</span><strong>' + (state.motif || '—') + '</strong></div>' +
            '</div>' +
            '<button class="btn btn-sage" id="rdvConfirmBtn" style="margin-top:var(--sp-3);" ' + (canConfirm ? '' : 'disabled') + '>' + icon('calendar') + ' Confirmer la prise de rendez-vous</button>' +
          '</div>' +
        '</div></section>');

      wireEvents();
    }

    function wireEvents() {
      var prev = KOTI.qs('#prevMonth', container), next = KOTI.qs('#nextMonth', container);
      if (prev) prev.addEventListener('click', function () { state.month--; if (state.month < 0) { state.month = 11; state.year--; } renderAll(); });
      if (next) next.addEventListener('click', function () { state.month++; if (state.month > 11) { state.month = 0; state.year++; } renderAll(); });

      KOTI.qsa('[data-date]', container).forEach(function (btn) {
        btn.addEventListener('click', function () { state.date = btn.dataset.date; state.slot = null; renderAll(); });
      });
      KOTI.qsa('[data-slot]', container).forEach(function (btn) {
        btn.addEventListener('click', function () { state.slot = btn.dataset.slot; renderAll(); });
      });
      var motifSel = KOTI.qs('#rdvMotif', container);
      if (motifSel) motifSel.addEventListener('change', function () { state.motif = motifSel.value || null; refreshConfirmState(); });
      ['#rdvNom', '#rdvEmail'].forEach(function (sel) {
        var el = KOTI.qs(sel, container);
        if (el) el.addEventListener('input', refreshConfirmState);
      });
      var confirmBtn = KOTI.qs('#rdvConfirmBtn', container);
      if (confirmBtn) confirmBtn.addEventListener('click', function () {
        var form = { nom: KOTI.qs('#rdvNom', container), email: KOTI.qs('#rdvEmail', container) };
        var valid = KOTI.validate.required(form.nom.value) && KOTI.validate.email(form.email.value);
        if (!valid) { KOTI.toast('Merci de compléter le formulaire correctement.'); return; }
        state.confirmed = true;
        KOTI.storage.set('koti-last-rdv', { date: state.date, slot: state.slot, motif: state.motif });
        renderAll();
      });
    }

    function refreshConfirmState() {
      var btn = KOTI.qs('#rdvConfirmBtn', container);
      if (!btn) return;
      var nom = KOTI.qs('#rdvNom', container).value.trim();
      var email = KOTI.qs('#rdvEmail', container).value.trim();
      btn.disabled = !(state.date && state.slot && state.motif && nom && email);
    }

    renderAll();
  };

  function confirmationBlock(state) {
    return '<section><div class="container-narrow">' +
      '<div class="form-success" style="flex-direction:column;text-align:center;align-items:center;gap:10px;padding:var(--sp-5);">' +
        '<span style="width:54px;height:54px;border-radius:50%;background:var(--sage);display:flex;align-items:center;justify-content:center;color:var(--white);">' + KOTI.icon('check') + '</span>' +
        '<h2 style="font-size:1.4rem;">Rendez-vous confirmé</h2>' +
        '<p>Vous serez recontacté(e) par e-mail avec les détails de votre rendez-vous du <strong>' + KOTI.formatDateLong(state.date) + '</strong> à <strong>' + state.slot.replace(':', 'h') + '</strong>.</p>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:10px;">' +
          '<a href="#/" class="btn btn-dark">Retour à l\'accueil</a>' +
          '<a href="#/patient/mon-koti" class="btn btn-ghost">Voir dans Mon KOTI</a>' +
        '</div>' +
      '</div></div></section>';
  }

  /* ================= FAQ ================= */
  KOTI.pages.faq = function (container) {
    container.innerHTML =
      pageHero({
        crumb: [['#/', 'Accueil'], ['#/faq', 'FAQ']],
        eyebrow: 'Aide', title: 'Foire aux questions',
        lead: 'Les réponses aux questions les plus fréquentes, côté patients comme côté professionnels.',
        scene: 'books', tone: 'sand'
      }) +
      '<section><div class="container-narrow">' +
        D.faq.map(function (group, gi) {
          return '<h3 style="margin:' + (gi ? '32px' : '0') + ' 0 8px;">' + group.categorie + '</h3>' +
            '<div class="accordion" data-accordion>' +
            group.items.map(function (item, i) {
              return '<div class="accordion-item' + (gi === 0 && i === 0 ? ' open' : '') + '">' +
                '<button class="accordion-trigger" aria-expanded="' + (gi === 0 && i === 0 ? 'true' : 'false') + '">' + item.q + icon('plus') + '</button>' +
                '<div class="accordion-panel"><div class="accordion-panel-inner"><p>' + item.r + '</p></div></div></div>';
            }).join('') + '</div>';
        }).join('') +
      '</div></section>' +
      C.ctaBand({
        title: 'Une autre question ?', tone: 'sage', text: 'Notre équipe est disponible pour vous répondre directement.',
        buttons: [['#/contact', 'Nous contacter', 'btn-white']]
      });
    container.querySelectorAll('[data-accordion]').forEach(KOTI.initAccordion);
  };

  /* ================= 404 ================= */
  KOTI.pages.notFound = function (container) {
    container.innerHTML =
      '<section class="state-404"><div class="container">' +
        '<span class="code">404</span>' +
        '<h1 style="margin-top:8px;">Cette page n\'existe pas ou a été déplacée.</h1>' +
        '<p class="lead" style="margin:10px auto 0;">Retrouvez le parcours qui vous correspond.</p>' +
        '<div class="state-404-links">' +
          '<a href="#/" class="btn btn-dark">Retour à l\'accueil</a>' +
          '<a href="#/patient" class="btn btn-sage">Parcours patient</a>' +
          '<a href="#/professionnel" class="btn btn-gold">Parcours professionnel</a>' +
        '</div>' +
      '</div></section>';
  };

  /* ---------------------------------------------------------------------
     Aides internes
     --------------------------------------------------------------------- */
  function pageHero(opts) {
    var visual = opts.photo
      ? KOTI.photoPanel(opts.photo, opts.photoAlt || opts.title)
      : KOTI.artPanel(opts.tone, opts.scene);
    return '<section class="page-hero"><div class="container">' +
      C.breadcrumb(opts.crumb) +
      '<div class="page-hero-grid">' +
        '<div><span class="eyebrow">' + opts.eyebrow + '</span><h1 style="margin-top:8px;">' + opts.title + '</h1>' +
        '<p class="lead" style="margin-top:12px;">' + opts.lead + '</p></div>' +
        visual +
      '</div></div></section>';
  }

  function chip(label, active) {
    return '<button class="filter-chip' + (active ? ' active' : '') + '" data-value="' + label + '">' + label + '</button>';
  }

  function emptyState(msg) {
    return '<div class="empty-state">' + KOTI.icon('search') + '<p>' + msg + '</p></div>';
  }

  function infoItem(iconName, label) {
    return '<div class="card"><div class="card-body" style="align-items:center;text-align:center;">' +
      '<span class="why-icon" style="width:48px;height:48px;border-radius:50%;background:var(--sand);display:flex;align-items:center;justify-content:center;color:var(--sage-ink);">' + KOTI.icon(iconName) + '</span>' +
      '<p style="font-weight:600;color:var(--dark);">' + label + '</p></div></div>';
  }

  function field(type, id, label, required) {
    return '<div class="field"><label for="' + id + '">' + label + '</label>' +
      '<input type="' + type + '" id="' + id + '">' + '<span class="field-error"></span></div>';
  }

  function selectField(id, label, options) {
    return '<div class="field"><label for="' + id + '">' + label + '</label>' +
      '<select id="' + id + '"><option value="">Sélectionner…</option>' +
      options.map(function (o) { return '<option value="' + o + '">' + o + '</option>'; }).join('') +
      '</select><span class="field-error"></span></div>';
  }

  function selectFieldValue(id, label, options, value) {
    return '<div class="field"><label for="' + id + '">' + label + '</label>' +
      '<select id="' + id + '"><option value="">Sélectionner…</option>' +
      options.map(function (o) { return '<option value="' + o + '"' + (o === value ? ' selected' : '') + '>' + o + '</option>'; }).join('') +
      '</select></div>';
  }

  // Exposés pour réutilisation par les autres modules de pages
  KOTI.pageHelpers = { pageHero: pageHero, chip: chip, emptyState: emptyState, infoItem: infoItem, field: field, selectField: selectField, selectFieldValue: selectFieldValue };
})();
