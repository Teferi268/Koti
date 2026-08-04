# Mapping images generees haute qualite

Nouveau dossier :

`assets_koti/images_generees_haute_qualite/`

Ces images ont ete regenerees pour obtenir une meilleure qualite que les crops issus de la capture.

Planche de controle :

`assets_koti/planche_images_generees_hd.jpg`

## Priorite d'utilisation

Utiliser ces images pour les grands visuels, backgrounds et cartes importantes.

Garder les anciennes images de `images_pour_claude/` quand il faut montrer une vraie personne/photo issue du PDF ou un element tres specifique.

## Images

| Fichier | Utilisation recommandee |
|---|---|
| `gen_accueil__hero_full_salon_reception_lumineux.jpg` | Hero principal pleine largeur ou fond principal de l'accueil |
| `gen_accueil__hero_gauche_salon_canape_plantes.jpg` | Partie gauche du hero accueil, salon/canape/plantes |
| `gen_accueil__hero_droite_comptoir_bois_plantes.jpg` | Partie droite du hero accueil, comptoir/bois/plantes |
| `gen_accueil__carte_patient_femme_apaisee_hd.jpg` | Carte patient, parcours patient, hero patient |
| `gen_accueil__carte_professionnel_bureau_consultation_hd.jpg` | Carte professionnel, parcours professionnel, espaces pro |
| `gen_general__espace_soin_lumineux_hd.jpg` | Page espaces, page programmes, bandeaux internes, cartes de salles |
| `gen_general__fond_decoratif_botanique_sauge_dore.jpg` | Fond discret pour bandeaux, transitions, footer, sections editorialisees |

## Remplacements conseilles

### Accueil

- Remplacer `accueil__hero_gauche_salon_canape_plantes.jpg` par `gen_accueil__hero_gauche_salon_canape_plantes.jpg`
- Remplacer `accueil__hero_droite_comptoir_logo_plantes.jpg` par `gen_accueil__hero_droite_comptoir_bois_plantes.jpg`
- Remplacer `accueil__carte_patient_femme_apaisee.jpg` par `gen_accueil__carte_patient_femme_apaisee_hd.jpg`
- Remplacer `accueil__carte_professionnel_espace_soin.jpg` par `gen_accueil__carte_professionnel_bureau_consultation_hd.jpg`

### Parcours patient

Utiliser :

- `gen_accueil__carte_patient_femme_apaisee_hd.jpg`
- `gen_general__espace_soin_lumineux_hd.jpg`
- `gen_general__fond_decoratif_botanique_sauge_dore.jpg`

### Parcours professionnel

Utiliser :

- `gen_accueil__carte_professionnel_bureau_consultation_hd.jpg`
- `gen_accueil__hero_droite_comptoir_bois_plantes.jpg`
- `gen_general__espace_soin_lumineux_hd.jpg`

### Backgrounds et sections

Utiliser :

- `gen_general__fond_decoratif_botanique_sauge_dore.jpg`

Pour :

- bandeau de transition ;
- CTA final ;
- header de pages internes ;
- footer decoratif ;
- fond de section editorialisee.

## Regles

- Ne pas ajouter de texte directement dans les images.
- Superposer les textes en HTML/CSS.
- Utiliser `object-fit: cover`.
- Ajouter un overlay doux si le texte manque de contraste.
- Ne pas trop assombrir : l'univers KOTI doit rester lumineux.
