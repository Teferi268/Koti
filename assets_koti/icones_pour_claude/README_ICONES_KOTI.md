# Icones KOTI pour Claude

Fichier principal :

`assets_koti/icones_pour_claude/koti-icons.svg`

Ces icones sont en SVG lineaire, sobres, en `currentColor`.

## Utilisation recommandee

Copier le sprite dans le HTML ou le charger comme fichier externe, puis utiliser :

```html
<svg class="icon" aria-hidden="true">
  <use href="#koti-leaf"></use>
</svg>
```

Ou, si le sprite reste externe :

```html
<svg class="icon" aria-hidden="true">
  <use href="assets/icons/koti-icons.svg#koti-leaf"></use>
</svg>
```

## Mapping

### Chiffres cles

- `50+ therapeutes passionnes` : `koti-leaf`
- `70+ disciplines complementaires` : `koti-person`
- `5000+ accompagnements chaque annee` : `koti-heart`
- `7j/7` : `koti-calendar`
- `95% satisfaction` : `koti-star`

### Pourquoi le KOTI est different ?

- `Une approche globale` : `koti-globe-human`
- `Un lieu d'exception` : `koti-home`
- `Une communaute bienveillante` : `koti-community`
- `Des solutions sur-mesure` : `koti-lotus`
- `Securite & confidentialite` : `koti-shield-check`

### UI

- Compte utilisateur : `koti-user-round`
- Lecture video : `koti-play`
- Fleche bouton/lien : `koti-arrow-right`
- Newsletter / email : `koti-mail`
- Menu mobile : `koti-menu`

## CSS conseille

```css
.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: currentColor;
  flex: 0 0 auto;
}
```

Pour les medaillons :

```css
.icon-medallion {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #F7F5F1;
  color: #2D3C35;
}
```
