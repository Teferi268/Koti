/* ==========================================================================
   KOTI 2.0 — Utilitaires partagés : icônes, illustrations, modale, toast,
   validation de formulaires, aides DOM. Chargé avant les modules de pages.
   ========================================================================== */
(function () {
  'use strict';
  var KOTI = (window.KOTI = window.KOTI || {});

  /* ---------------------------------------------------------------------
     Icônes (traits simples, cohérents avec la charte KOTI)
     --------------------------------------------------------------------- */
  var ICONS = {
    arrow: { d: '<path d="M5 12h14M13 6l6 6-6 6"/>' },
    arrowLeft: { d: '<path d="M19 12H5M12 19l-7-7 7-7"/>' },
    chevronDown: { d: '<path d="M6 9l6 6 6-6"/>' },
    chevronRight: { d: '<path d="M9 6l6 6-6 6"/>' },
    close: { d: '<path d="M6 6l12 12M18 6L6 18"/>' },
    menu: { d: '<path d="M5 7h14M5 12h14M5 17h14"/>' },
    user: { d: '<circle cx="12" cy="9" r="2.8"/><path d="M7.2 18a5 5 0 0 1 9.6 0"/>' },
    cart: { d: '<circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6L21 8H6"/>' },
    calendar: { d: '<rect x="4" y="5.5" width="16" height="15" rx="2.5"/><path d="M8 3.5v4M16 3.5v4M4 10h16"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" stroke-width="2.2"/>' },
    clock: { d: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>' },
    pin: { d: '<path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/>' },
    phone: { d: '<path d="M4 5c0 8.3 6.7 15 15 15l2-4-5-2-2 2c-2.4-1.2-4.8-3.6-6-6l2-2-2-5Z"/>' },
    mail: { d: '<rect x="4" y="6" width="16" height="12" rx="2.5"/><path d="m5 7.5 7 5.2 7-5.2"/>' },
    check: { d: '<path d="M5 13l4 4L19 7"/>' },
    star: { d: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8Z"/>', fill: true },
    play: { d: '<path d="m10 8.5 6 3.5-6 3.5v-7Z"/>', fill: true },
    search: { d: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.4-3.4"/>' },
    plus: { d: '<path d="M12 5v14M5 12h14"/>' },
    minus: { d: '<path d="M5 12h14"/>' },
    leaf: { d: '<path d="M5 19c8 0 14-6 14-14C11 5 5 11 5 19Z"/><path d="M5 19c4-4 7-7 14-14"/>' },
    meditation: { d: '<path d="M12 3v3M8 5l1.2 2.6M16 5l-1.2 2.6"/><circle cx="12" cy="14" r="5.2"/>' },
    house: { d: '<path d="m3.5 11 8.5-7 8.5 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-6h4v6"/>' },
    people: { d: '<circle cx="12" cy="8" r="3"/><path d="M6 20a6 6 0 0 1 12 0"/><path d="M5.5 10.5a2.5 2.5 0 1 0-1.7 4.4M18.5 10.5a2.5 2.5 0 1 1 1.7 4.4M2.8 19a4.5 4.5 0 0 1 5-3.8M21.2 19a4.5 4.5 0 0 0-5-3.8"/>' },
    lotus: { d: '<path d="M12 20c-5.5-2.5-7.5-6.5-7-11 4.1 1.1 6.2 4.2 7 11Z"/><path d="M12 20c5.5-2.5 7.5-6.5 7-11-4.1 1.1-6.2 4.2-7 11Z"/><path d="M12 20c-2.7-4.5-2.7-9.2 0-14 2.7 4.8 2.7 9.5 0 14Z"/>' },
    shield: { d: '<path d="M12 3.5 19 6v5.5c0 4.4-2.7 7.6-7 9-4.3-1.4-7-4.6-7-9V6l7-2.5Z"/><path d="m8.8 12.1 2.1 2.1 4.5-4.8"/>' },
    quote: { d: '<path d="M7 10c0-2.5 1.7-4 4-4v2c-1.2 0-2 .8-2 2h2v5H7v-5Zm8 0c0-2.5 1.7-4 4-4v2c-1.2 0-2 .8-2 2h2v5h-4v-5Z"/>', fill: true },
    download: { d: '<path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>' },
    lock: { d: '<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>' },
    train: { d: '<rect x="6" y="4" width="12" height="12" rx="3"/><circle cx="9" cy="13.5" r="1"/><circle cx="15" cy="13.5" r="1"/><path d="M7 20l2-2.5M17 20l-2-2.5M9 8h6"/>' },
    parking: { d: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M10 16V8h3.2a2.6 2.6 0 1 1 0 5.2H10"/>' },
    sun: { d: '<circle cx="12" cy="12" r="4.4"/><path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>' },
    heart: { d: '<path d="M12 20s-7.5-4.8-9-10.1C1.9 6 4.3 3.5 7.2 3.5c1.8 0 3.3 1 4.1 2.4.8-1.4 2.3-2.4 4.1-2.4 2.9 0 5.3 2.5 4.2 6.4C18 15.2 12 20 12 20Z"/>' },
    bookmark: { d: '<path d="M6 3.5h12v17l-6-4-6 4Z"/>' },
    pencil: { d: '<path d="M4 20l1-4.2L15.5 5.3a1.5 1.5 0 0 1 2.1 0l1.1 1.1a1.5 1.5 0 0 1 0 2.1L8.2 19 4 20Z"/><path d="M14 6.8l3.2 3.2"/>' },
    trash: { d: '<path d="M5 7h14M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-9 0 1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12"/>' },
    globe: { d: '<circle cx="12" cy="12" r="9"/><path d="M8 10.5 12 7l4 3.5M12 7v10M8.5 17l3.5-4 3.5 4"/>' },
    handshake: { d: '<path d="M2 12l4-3 4 2 3-2 4 2 5-3M6 11l4 5 3-2M14 14l3 3"/>' },
    facebook: { d: '<path d="M14 8.5h2.5V5H14c-2.2 0-3.5 1.4-3.5 3.5V11H8v3h2.5v6H13v-6h2.3l.5-3H13V8.9c0-.4.3-.4.6-.4Z"/>', fill: true },
    instagram: { d: '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.4"/><circle cx="16.6" cy="7.4" r="0.7" fill="currentColor" stroke="none"/>' },
    linkedin: { d: '<rect x="4" y="9.5" width="3" height="9.5" rx=".5"/><circle cx="5.5" cy="6" r="1.7"/><path d="M10.5 19h3v-5.2c0-1.3.7-2.1 1.9-2.1s1.8.8 1.8 2.1V19h3v-5.7c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5.9-2.9 1.6V9.5h-3c0 .8 0 9.5 0 9.5Z"/>', fill: true }
  };

  KOTI.icon = function (name, cls) {
    var def = ICONS[name];
    if (!def) return '';
    var attrs = def.fill
      ? 'viewBox="0 0 24 24" fill="currentColor"'
      : 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
    return '<svg class="' + (cls || '') + '" ' + attrs + ' aria-hidden="true">' + def.d + '</svg>';
  };

  /* ---------------------------------------------------------------------
     Bibliothèque de scènes illustrées (remplace les photos KOTI)
     --------------------------------------------------------------------- */
  /* ---------------------------------------------------------------------
     Important : le style (fill/stroke/etc.) est porté par des ATTRIBUTS de
     présentation directement sur le <g> de chaque symbole, pas par une règle
     CSS externe ciblant "path/circle". Un sélecteur CSS écrit dans le
     document (ex. ".art-scene-svg path{...}") ne matche PAS le contenu d'un
     <symbol> cloné via <use> — seule l'héritage normal des propriétés CSS
     (fill, stroke, color…) traverse la frontière <use>. D'où l'attribut
     fill/stroke posé ici une fois par symbole, qui se propage par héritage
     à tous ses enfants ; seul vector-effect (non hérité) est répété par
     élément. La teinte (currentColor) et l'opacité restent pilotées par les
     classes line-soft / line-strong / accent-* posées sur le <use> appelant. */
  var G_OPEN = '<g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">';
  var VE = 'vector-effect="non-scaling-stroke"';
  var FILL_SOFT = 'fill="currentColor" fill-opacity=".12"';

  KOTI.spriteDefs =
    '<svg style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false"><defs>' +
    '<symbol id="sym-frond" viewBox="0 0 60 90">' + G_OPEN +
      '<path ' + VE + ' d="M30 88C20 60 20 30 30 2"/>' +
      '<path ' + VE + ' d="M30 20C20 24 12 30 8 40M30 34C22 36 14 42 10 50M30 50C22 50 14 54 10 62M30 20C40 24 48 30 52 40M30 34C38 36 46 42 50 50M30 50C38 50 46 54 50 62"/>' +
    '</g></symbol>' +
    '<symbol id="sym-window" viewBox="0 0 60 100">' + G_OPEN +
      '<path ' + VE + ' d="M8 98V18C8 8 16 2 30 2s22 6 22 16v80"/>' +
      '<path ' + VE + ' d="M8 98h44M30 2v96M8 40h44M8 70h44"/>' +
    '</g></symbol>' +
    '<symbol id="sym-sofa" viewBox="0 0 120 60">' + G_OPEN +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M6 58V34c0-6 4-10 10-10h6V16a6 6 0 0 1 6-6h84a6 6 0 0 1 6 6v8h6c6 0 10 4 10 10v24Z"/>' +
      '<path ' + VE + ' d="M6 58h108M22 24v34M98 24v34M38 20v12M62 20v12M86 20v12"/>' +
    '</g></symbol>' +
    '<symbol id="sym-pot-plant" viewBox="0 0 60 100">' + G_OPEN +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M18 96h24l4-28H14l4 28Z"/>' +
      '<path ' + VE + ' d="M30 68C24 46 24 24 30 4M30 34c-8 3-14 9-18 17M30 50c-8 1-15 6-19 13M30 34c8 3 14 9 18 17M30 50c8 1 15 6 19 13"/>' +
    '</g></symbol>' +
    '<symbol id="sym-pendant" viewBox="0 0 30 80">' + G_OPEN +
      '<path ' + VE + ' d="M15 0v40"/>' +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M4 40h22l-4 14H8l-4-14Z"/>' +
    '</g></symbol>' +
    '<symbol id="sym-desk" viewBox="0 0 120 70">' + G_OPEN +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M6 66V26h108v40Z"/>' +
      '<path ' + VE + ' d="M6 26 20 4h80l14 22"/>' +
      '<path ' + VE + ' d="M40 26v-6h40v6M6 66h108"/>' +
    '</g></symbol>' +
    '<symbol id="sym-figure" viewBox="0 0 60 90">' + G_OPEN +
      '<circle ' + VE + ' cx="30" cy="16" r="10"/>' +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M12 84c0-22 6-38 18-38s18 16 18 38Z"/>' +
      '<path ' + VE + ' d="M30 46v18M22 66c3 4 5 6 8 6s5-2 8-6"/>' +
    '</g></symbol>' +
    '<symbol id="sym-aura" viewBox="0 0 100 100">' + G_OPEN +
      '<circle ' + VE + ' cx="50" cy="50" r="46"/>' +
      '<circle ' + VE + ' cx="50" cy="50" r="34"/>' +
      '<circle ' + VE + ' cx="50" cy="50" r="22"/>' +
    '</g></symbol>' +
    '<symbol id="sym-vase" viewBox="0 0 60 100">' + G_OPEN +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M22 96h16l3-20a9 9 0 0 0-11-9 9 9 0 0 0-11 9l3 20Z"/>' +
      '<path ' + VE + ' d="M30 67V30M30 40c-6-8-6-18 0-30M30 46c6-10 12-16 20-18M30 54c-8-6-16-8-24-6"/>' +
      '<circle ' + VE + ' cx="30" cy="26" r="4"/><circle ' + VE + ' cx="49" cy="27" r="4"/><circle ' + VE + ' cx="7" cy="47" r="4"/>' +
    '</g></symbol>' +
    '<symbol id="sym-corridor" viewBox="0 0 100 100">' + G_OPEN +
      '<path ' + VE + ' d="M2 98 40 40h20l38 58"/>' +
      '<path ' + VE + ' d="M50 40V4"/>' +
      '<path ' + VE + ' d="M14 98 44 50M86 98 56 50"/>' +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M50 4c-6 0-10 4-10 10h20c0-6-4-10-10-10Z"/>' +
    '</g></symbol>' +
    '<symbol id="sym-storefront" viewBox="0 0 140 90">' + G_OPEN +
      '<path ' + VE + ' d="M4 86V38l16-22h100l16 22v48"/>' +
      '<path ' + VE + ' d="M4 38h132"/>' +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M52 86V52h36v34Z"/>' +
      '<path ' + VE + ' d="M20 24h100"/>' +
      '<circle ' + VE + ' cx="70" cy="10" r="6"/>' +
    '</g></symbol>' +
    '<symbol id="sym-book" viewBox="0 0 80 60">' + G_OPEN +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M4 8h30a6 6 0 0 1 6 6v40H10a6 6 0 0 1-6-6V8Z"/>' +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M76 8H46a6 6 0 0 0-6 6v40h30a6 6 0 0 0 6-6V8Z"/>' +
      '<path ' + VE + ' d="M40 14v40"/>' +
    '</g></symbol>' +
    '<symbol id="sym-bag" viewBox="0 0 70 80">' + G_OPEN +
      '<path ' + VE + ' ' + FILL_SOFT + ' d="M8 22h54l-5 52a5 5 0 0 1-5 4.5H18a5 5 0 0 1-5-4.5L8 22Z"/>' +
      '<path ' + VE + ' d="M22 22v-4a13 13 0 0 1 26 0v4"/>' +
    '</g></symbol>' +
    '<symbol id="sym-mirror" viewBox="0 0 60 90">' + G_OPEN +
      '<ellipse ' + VE + ' ' + FILL_SOFT + ' cx="30" cy="38" rx="22" ry="30"/>' +
      '<path ' + VE + ' d="M30 68v18M18 90h24"/>' +
    '</g></symbol>' +
    '</defs></svg>';

  var SCENES = {
    salon: { vb: '0 0 400 300', ratio: 'xMidYMax slice', use: [
      ['sym-window', 20, 20, 95, 230, 'line-soft'],
      ['sym-pendant', 205, 6, 22, 56, 'line-soft'],
      ['sym-pendant', 252, 6, 22, 56, 'line-soft'],
      ['sym-sofa', 140, 192, 230, 92, 'line-strong'],
      ['sym-pot-plant', 330, 110, 58, 150, 'line-strong accent-sage']
    ], line: [0, 284, 400, 284] },
    reception: { vb: '0 0 300 300', ratio: 'xMidYMax slice', use: [
      ['sym-pot-plant', 16, 70, 72, 175, 'line-strong accent-sage'],
      ['sym-pendant', 215, 6, 20, 50, 'line-soft'],
      ['sym-desk', 90, 205, 200, 78, 'line-strong accent-gold']
    ], line: [0, 284, 300, 284] },
    figure: { vb: '0 0 400 250', ratio: 'xMidYMid slice', use: [
      ['sym-aura', 130, 15, 180, 180, 'line-faint'],
      ['sym-frond', 30, 90, 46, 70, 'line-soft', 'rotate(-14 53 125)'],
      ['sym-frond', 330, 70, 46, 70, 'line-soft', 'rotate(16 353 105)'],
      ['sym-figure', 175, 80, 66, 100, 'line-strong']
    ]},
    desk: { vb: '0 0 400 250', ratio: 'xMidYMid slice', use: [
      ['sym-desk', 130, 150, 240, 94, 'line-strong'],
      ['sym-pot-plant', 325, 88, 48, 118, 'line-strong accent-gold']
    ], rays: true },
    vision: { vb: '0 0 300 190', ratio: 'xMidYMid slice', use: [
      ['sym-frond', 14, 100, 44, 70, 'line-strong accent-sage'],
      ['sym-frond', 238, 90, 44, 70, 'line-soft', 'rotate(18 260 125)']
    ], arc: true },
    vase: { vb: '0 0 300 190', ratio: 'xMidYMid slice', use: [
      ['sym-vase', 118, 14, 64, 160, 'line-strong accent-gold']
    ]},
    corridor: { vb: '0 0 300 190', ratio: 'xMidYMid slice', use: [
      ['sym-corridor', 80, 4, 140, 140, 'line-soft'],
      ['sym-pot-plant', 140, 94, 20, 46, 'line-strong accent-sage']
    ]},
    storefront: { vb: '0 0 300 130', ratio: 'xMidYMid slice', use: [
      ['sym-storefront', 70, 6, 160, 103, 'line-strong'],
      ['sym-pot-plant', 46, 60, 26, 60, 'line-soft accent-sage'],
      ['sym-pot-plant', 228, 60, 26, 60, 'line-soft accent-sage']
    ]},
    plants: { vb: '0 0 300 190', ratio: 'xMidYMid slice', use: [
      ['sym-pot-plant', 40, 40, 60, 145, 'line-strong accent-sage'],
      ['sym-pot-plant', 200, 60, 60, 125, 'line-soft accent-sage'],
      ['sym-pendant', 130, 4, 18, 46, 'line-faint']
    ]},
    books: { vb: '0 0 300 190', ratio: 'xMidYMid slice', use: [
      ['sym-book', 108, 100, 84, 62, 'line-strong accent-gold'],
      ['sym-frond', 20, 90, 40, 70, 'line-soft']
    ]},
    bag: { vb: '0 0 300 190', ratio: 'xMidYMid slice', use: [
      ['sym-bag', 118, 60, 64, 76, 'line-strong accent-gold']
    ]},
    mirror: { vb: '0 0 300 190', ratio: 'xMidYMid slice', use: [
      ['sym-mirror', 118, 8, 64, 175, 'line-soft accent-sage']
    ]}
  };

  KOTI.artScene = function (name) {
    var s = SCENES[name];
    if (!s) return '';
    var html = '<svg class="art-scene-svg" viewBox="' + s.vb + '" preserveAspectRatio="' + (s.ratio || 'xMidYMid slice') + '">';
    if (s.rays) {
      html += '<line x1="8" y1="10" x2="70" y2="72" class="line-faint"/><line x1="30" y1="8" x2="92" y2="70" class="line-faint"/><line x1="52" y1="6" x2="114" y2="68" class="line-faint"/>';
    }
    if (s.arc) {
      html += '<path d="M20 150 Q150 60 280 150" class="line-soft"/><circle cx="150" cy="86" r="15" class="line-soft"/>';
    }
    (s.use || []).forEach(function (u) {
      html += '<use href="#' + u[0] + '" x="' + u[1] + '" y="' + u[2] + '" width="' + u[3] + '" height="' + u[4] + '" class="' + u[5] + '"' + (u[6] ? ' transform="' + u[6] + '"' : '') + '/>';
    });
    if (s.line) html += '<line x1="' + s.line[0] + '" y1="' + s.line[1] + '" x2="' + s.line[2] + '" y2="' + s.line[3] + '" class="line-faint"/>';
    html += '</svg>';
    return html;
  };

  /**
   * Construit le markup d'un panneau illustré.
   * @param {string} tone sage|gold|sand
   * @param {string} scene nom de la scène (cf. SCENES)
   * @param {string} [extra] markup additionnel (badge, bouton lecture...)
   */
  KOTI.artPanel = function (tone, scene, extra, style) {
    return '<div class="art art-tone-' + tone + '"' + (style ? ' style="' + style + '"' : '') + ' aria-hidden="true">' +
      KOTI.artScene(scene) + (extra || '') + '</div>';
  };

  /**
   * Chemin de base des photos KOTI (dossier assets/images copié depuis assets_koti/images_pour_claude).
   */
  KOTI.IMG = 'assets/images/';

  /**
   * Construit un panneau photo réelle (remplace un panneau illustré quand une vraie photo KOTI est disponible).
   * @param {string} file nom de fichier dans assets/images/
   * @param {string} alt texte alternatif
   * @param {string} [extra] markup additionnel superposé (badge, bouton lecture...)
   * @param {string} [style] style inline additionnel sur le conteneur
   */
  KOTI.photoPanel = function (file, alt, extra, style, objectPosition) {
    return '<div class="art media-frame"' + (style ? ' style="' + style + '"' : '') + '>' +
      '<img class="image-cover" src="' + KOTI.IMG + file + '" alt="' + alt + '" loading="lazy"' +
      (objectPosition ? ' style="object-position:' + objectPosition + ';"' : '') + '>' + (extra || '') + '</div>';
  };

  /**
   * TEMPORAIRE — mapping "nom de fichier" -> numéro, pour repérer facilement
   * chaque photo à remplacer. Renommez vos vraies photos "image-N.jpg" en
   * suivant ces numéros pour un remplacement direct. À retirer une fois les
   * photos définitives livrées (voir KOTI.labelImages).
   */
  KOTI.IMG_LABELS = {
    'gen_accueil__hero_gauche_salon_canape_plantes.jpg': 1,
    'gen_accueil__hero_droite_comptoir_bois_plantes.jpg': 2,
    'gen_accueil__carte_patient_femme_apaisee_hd.jpg': 3,
    'gen_accueil__carte_professionnel_bureau_consultation_hd.jpg': 4,
    'accueil__carte_notre_vision_salon.jpg': 5,
    'accueil__carte_notre_histoire_bouquet.jpg': 6,
    'accueil__carte_nos_valeurs_espace_lumineux.jpg': 7,
    'accueil__bloc_actualite_portes_ouvertes.jpg': 8,
    'accueil__portrait_charline_mini.jpg': 9,
    'accueil__portrait_yoann_mini.jpg': 10,
    'page_actualites__photo_table_basse_fleurs.jpg': 11,
    'page_vision__photo_lion_charline.jpg': 12,
    'page_histoire__photo_enfance_charline_yoann.jpg': 13,
    'page_histoire__photo_cafe_coeur.jpg': 14,
    'page_valeurs__photo_equipe_discussion.jpg': 15,
    'page_valeurs__photo_enfance.jpg': 16,
    'page_equipe__photo_charline_yoann_table.jpg': 17,
    'page_contact__photo_charline_bureau.jpg': 18,
    'page_rendezvous__photo_charline_telephone.jpg': 19,
    'gen_general__espace_soin_lumineux_hd.jpg': 20
  };

  /**
   * Pose un badge "Image N" sur chaque photo affichée (repère visuel temporaire).
   * Appelé après chaque rendu de page via un MutationObserver (voir app.js).
   */
  KOTI.labelImages = function (root) {
    var imgs = (root || document).querySelectorAll('img[src*="assets/images/"]');
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      if (img.dataset.imgLabeled) continue;
      var file = img.getAttribute('src').split('/').pop();
      var num = KOTI.IMG_LABELS[file];
      if (!num) continue;
      img.dataset.imgLabeled = '1';

      var avatarWrap = img.closest('.avatar-photo');
      if (avatarWrap) {
        // Les avatars ronds sont trop petits / clippés (overflow:hidden) pour un badge
        // superposé lisible : on ajoute une petite étiquette juste à côté, hors du cercle.
        var inlineBadge = document.createElement('span');
        inlineBadge.className = 'img-debug-badge img-debug-badge-inline';
        inlineBadge.textContent = 'Image ' + num;
        if (avatarWrap.parentNode) avatarWrap.parentNode.insertBefore(inlineBadge, avatarWrap.nextSibling);
        continue;
      }

      var parent = img.parentElement;
      if (!parent) continue;
      if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
      var badge = document.createElement('span');
      badge.className = 'img-debug-badge';
      badge.textContent = 'Image ' + num;
      parent.appendChild(badge);
    }
  };

  /* ---------------------------------------------------------------------
     Aides DOM
     --------------------------------------------------------------------- */
  KOTI.qs = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  KOTI.qsa = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  KOTI.on = function (root, evt, selector, handler) {
    root.addEventListener(evt, function (e) {
      var target = e.target.closest(selector);
      if (target && root.contains(target)) handler(e, target);
    });
  };

  KOTI.escapeHtml = function (str) {
    return String(str == null ? '' : str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  KOTI.debounce = function (fn, delay) {
    var t;
    return function () {
      var args = arguments, ctx = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, delay || 200);
    };
  };

  KOTI.formatDateLong = function (isoDate) {
    try {
      var d = new Date(isoDate + 'T00:00:00');
      var s = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      return s.charAt(0).toUpperCase() + s.slice(1);
    } catch (e) { return isoDate; }
  };

  KOTI.formatDateShort = function (isoDate) {
    try {
      var d = new Date(isoDate + 'T00:00:00');
      return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch (e) { return isoDate; }
  };

  /* ---------------------------------------------------------------------
     Validation de formulaires
     --------------------------------------------------------------------- */
  KOTI.validate = {
    required: function (v) { return String(v || '').trim().length > 0; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || '').trim()); },
    phone: function (v) {
      if (!v) return true; // souvent facultatif
      var digits = String(v).replace(/[\s.\-()]/g, '');
      return /^(\+33|0)[1-9]\d{8}$/.test(digits);
    },
    minLength: function (v, n) { return String(v || '').trim().length >= n; }
  };

  /**
   * Valide un formulaire selon une config déclarative et affiche les erreurs.
   * fields: { '#id': { required: true, email: true, minLength: 10, label: 'Message' } }
   * Renvoie true si le formulaire est valide.
   */
  KOTI.validateForm = function (form, fields) {
    var valid = true;
    Object.keys(fields).forEach(function (sel) {
      var input = form.querySelector(sel);
      if (!input) return;
      var rules = fields[sel];
      var fieldWrap = input.closest('.field') || input.parentElement;
      var errorEl = fieldWrap.querySelector('.field-error');
      var value = input.type === 'checkbox' ? input.checked : input.value;
      var message = '';

      if (rules.required && !(input.type === 'checkbox' ? value : KOTI.validate.required(value))) {
        message = rules.requiredMsg || (rules.label || 'Ce champ') + ' est obligatoire.';
      } else if (rules.email && value && !KOTI.validate.email(value)) {
        message = 'Merci de renseigner une adresse e-mail valide.';
      } else if (rules.phone && value && !KOTI.validate.phone(value)) {
        message = 'Merci de renseigner un numéro de téléphone valide.';
      } else if (rules.minLength && value && !KOTI.validate.minLength(value, rules.minLength)) {
        message = 'Merci de détailler un peu plus (' + rules.minLength + ' caractères minimum).';
      }

      if (message) {
        valid = false;
        fieldWrap.classList.add('has-error');
        if (errorEl) errorEl.textContent = message;
      } else {
        fieldWrap.classList.remove('has-error');
        if (errorEl) errorEl.textContent = '';
      }
    });
    return valid;
  };

  /* ---------------------------------------------------------------------
     Modale générique
     --------------------------------------------------------------------- */
  var modalLastFocused = null;
  function modalRoot() {
    var root = document.getElementById('modal-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'modal-root';
      document.body.appendChild(root);
    }
    return root;
  }

  KOTI.modal = {
    open: function (innerHtml, opts) {
      opts = opts || {};
      modalLastFocused = document.activeElement;
      var root = modalRoot();
      root.innerHTML =
        '<div class="modal-overlay" id="genericModal" role="dialog" aria-modal="true" aria-label="' + KOTI.escapeHtml(opts.label || 'Fenêtre') + '">' +
        '<div class="modal-box' + (opts.wide ? ' wide' : '') + '">' +
        '<div class="modal-top"><div style="flex:1"></div>' +
        '<button class="modal-close" data-modal-close aria-label="Fermer">' + KOTI.icon('close') + '</button>' +
        '</div>' + innerHtml + '</div></div>';
      var overlay = root.querySelector('.modal-overlay');
      requestAnimationFrame(function () { overlay.classList.add('open'); });
      document.body.style.overflow = 'hidden';
      overlay.addEventListener('click', function (e) { if (e.target === overlay) KOTI.modal.close(); });
      root.querySelector('[data-modal-close]').addEventListener('click', KOTI.modal.close);
      var closeBtn = root.querySelector('[data-modal-close]');
      closeBtn.focus();
      document.addEventListener('keydown', KOTI._modalEsc = function (e) {
        if (e.key === 'Escape') KOTI.modal.close();
      });
    },
    close: function () {
      var root = document.getElementById('modal-root');
      if (!root) return;
      var overlay = root.querySelector('.modal-overlay');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', KOTI._modalEsc);
      setTimeout(function () { root.innerHTML = ''; }, 200);
      if (modalLastFocused && modalLastFocused.focus) modalLastFocused.focus();
    }
  };

  /* ---------------------------------------------------------------------
     Toast
     --------------------------------------------------------------------- */
  KOTI.toast = function (message, opts) {
    opts = opts || {};
    var stack = document.getElementById('toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.id = 'toast-stack';
      stack.className = 'toast-stack';
      document.body.appendChild(stack);
    }
    var el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = KOTI.icon('check') + '<span>' + KOTI.escapeHtml(message) + '</span>';
    stack.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('show'); });
    setTimeout(function () {
      el.classList.remove('show');
      setTimeout(function () { el.remove(); }, 250);
    }, opts.duration || 3200);
  };

  /* ---------------------------------------------------------------------
     Onglets / Accordéon (réutilisables sur toute page)
     --------------------------------------------------------------------- */
  KOTI.initTabs = function (container) {
    KOTI.qsa('.tabs', container).forEach(function (tabs) {
      var group = tabs.closest('[data-tabs-group]') || tabs.parentElement;
      KOTI.on(tabs, 'click', '.tab-btn', function (e, btn) {
        KOTI.qsa('.tab-btn', tabs).forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        KOTI.qsa('.tab-panel', group).forEach(function (p) { p.classList.remove('active'); });
        var target = group.querySelector('.tab-panel[data-panel="' + btn.dataset.tab + '"]');
        if (target) target.classList.add('active');
      });
    });
  };

  KOTI.initAccordion = function (container) {
    KOTI.on(container, 'click', '.accordion-trigger', function (e, btn) {
      var item = btn.closest('.accordion-item');
      var wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.accordion-item').forEach(function (i) {
        if (i !== item) { i.classList.remove('open'); i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false'); }
      });
      item.classList.toggle('open', !wasOpen);
      btn.setAttribute('aria-expanded', String(!wasOpen));
    });
  };

  /* ---------------------------------------------------------------------
     LocalStorage sûr (le mode privé peut le bloquer)
     --------------------------------------------------------------------- */
  KOTI.storage = {
    get: function (key, fallback) {
      try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* mode privé : ignoré en démo */ }
    }
  };
})();
