/* ==========================================================================
   KOTI 2.0 — Mode édition rapide des textes (démo).
   Un bouton flottant active un mode où les textes du site deviennent
   modifiables au clic ; chaque modification est enregistrée dans le
   navigateur (localStorage) et réappliquée automatiquement à chaque
   affichage de page, tant que ce navigateur/appareil est utilisé.
   ========================================================================== */
(function () {
  'use strict';
  var KOTI = (window.KOTI = window.KOTI || {});

  var STORAGE_KEY = 'koti-text-edits';
  var BLOCK_SEL = 'h1,h2,h3,h4,p,li,blockquote,td,th,label,figcaption';
  var LEAF_SEL = 'a,button,span';
  var ROOT_IDS = ['headerMount', 'mainContent', 'footerMount'];
  var active = false;
  var toggleBtn, resetBtn;

  function getEdits() { return KOTI.storage.get(STORAGE_KEY, {}); }
  function setEdit(key, html) {
    var edits = getEdits();
    edits[key] = html;
    KOTI.storage.set(STORAGE_KEY, edits);
  }
  function clearAllEdits() { KOTI.storage.set(STORAGE_KEY, {}); }

  function pathFor(el, root) {
    var path = [];
    var node = el;
    while (node && node !== root && node.parentElement) {
      var parent = node.parentElement;
      path.unshift(Array.prototype.indexOf.call(parent.children, node));
      node = parent;
    }
    return path.join('.');
  }

  function namespaceFor(root) {
    if (root.id === 'mainContent') return 'main:' + (window.location.hash || '#/');
    if (root.id === 'headerMount') return 'header:' + (KOTI.currentUniverse || 'general');
    return 'footer';
  }

  function collectTargets(root) {
    var targets = [];
    root.querySelectorAll(BLOCK_SEL).forEach(function (el) {
      if (el.textContent.trim()) targets.push(el);
    });
    root.querySelectorAll(LEAF_SEL).forEach(function (el) {
      if (!el.textContent.trim()) return;
      if (el.closest(BLOCK_SEL)) return; // déjà couvert par un ancêtre bloc
      targets.push(el);
    });
    return targets;
  }

  function applyRoot(root) {
    var ns = namespaceFor(root);
    var edits = getEdits();
    collectTargets(root).forEach(function (el) {
      var key = ns + ':' + pathFor(el, root);
      el.dataset.editKey = key;
      var isEditing = el === document.activeElement || el.contains(document.activeElement);
      var saved = edits[key];
      if (!isEditing && saved !== undefined && el.innerHTML !== saved) el.innerHTML = saved;
      if (el.getAttribute('contenteditable') !== String(active)) el.setAttribute('contenteditable', active);
      el.classList.toggle('is-editable', active);
    });
  }

  function refreshAll() {
    ROOT_IDS.forEach(function (id) {
      var root = document.getElementById(id);
      if (root) applyRoot(root);
    });
  }

  function handleFocusOut(e) {
    var el = e.target;
    if (!el || el.getAttribute('contenteditable') !== 'true') return;
    var key = el.dataset.editKey;
    if (!key) return;
    setEdit(key, el.innerHTML);
  }

  function updateToggleUI() {
    toggleBtn.classList.toggle('active', active);
    toggleBtn.innerHTML = (active ? KOTI.icon('check') : KOTI.icon('pencil')) +
      '<span>' + (active ? 'Terminer l\'édition' : 'Modifier les textes') + '</span>';
    resetBtn.style.display = active ? 'inline-flex' : 'none';
  }

  function setActive(next) {
    active = next;
    document.body.classList.toggle('edit-mode-active', active);
    refreshAll();
    updateToggleUI();
  }

  function buildUI() {
    var wrap = document.createElement('div');
    wrap.className = 'edit-mode-controls';

    resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'edit-mode-reset';
    resetBtn.innerHTML = KOTI.icon('trash') + '<span>Réinitialiser les textes</span>';
    resetBtn.style.display = 'none';
    resetBtn.addEventListener('click', function () {
      if (!window.confirm('Réinitialiser tous les textes modifiés sur l\'ensemble du site ?')) return;
      clearAllEdits();
      window.location.reload();
    });

    toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'edit-mode-toggle';
    toggleBtn.addEventListener('click', function () {
      setActive(!active);
      if (!active) KOTI.toast('Modifications enregistrées.');
    });

    wrap.appendChild(resetBtn);
    wrap.appendChild(toggleBtn);
    document.body.appendChild(wrap);
    updateToggleUI();
  }

  KOTI.editMode = {
    init: function () {
      buildUI();

      document.addEventListener('focusout', handleFocusOut, true);

      // Tant que le mode édition est actif, un clic dans une zone modifiable
      // ne doit ni suivre un lien, ni déclencher les actions du site
      // (ouverture de modale, navigation…) : seul le curseur d'édition doit
      // se placer normalement.
      document.addEventListener('click', function (e) {
        if (!active) return;
        if (e.target.closest('.edit-mode-controls')) return;
        if (e.target.closest('[contenteditable="true"]')) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, true);

      var observer = new MutationObserver(function () { refreshAll(); });
      ROOT_IDS.forEach(function (id) {
        var root = document.getElementById(id);
        if (root) observer.observe(root, { childList: true, subtree: true });
      });

      refreshAll();
    }
  };
})();
