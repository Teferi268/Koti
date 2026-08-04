# Assets KOTI - Guide d'utilisation

## Dossiers

- `images_pour_claude/` : dossier prioritaire. Images renommees avec des noms explicites pour Claude et pour le code.
- `images_generees_haute_qualite/` : nouvelles images regenerees, meilleures pour les grands backgrounds et cartes principales.
- `icones_pour_claude/` : icones SVG lineaires KOTI.
- `site_ready/` : ancien dossier de selection, conserve en backup.
- `layout_references/` : captures et references de mise en page uniquement. Ne pas les afficher comme images de contenu.
- `pdf_raw/` : extraction brute du PDF. A utiliser seulement si une image manque dans `images_pour_claude/`.
- `MAPPING_IMAGES_POUR_CLAUDE.md` : mapping le plus clair, page par page.
- `MAPPING_IMAGES_GENEREES_HD.md` : mapping des nouvelles images haute qualite.
- `planche_images_pour_claude.jpg` : planche visuelle avec les noms definitifs.
- `planche_images_generees_hd.jpg` : planche visuelle des nouvelles images generees.
- `contact_sheet_site_ready.jpg` : ancienne planche visuelle du dossier backup `site_ready/`.
- `contact_sheet_selected.jpg` : planche de la selection initiale.
- `contact_sheet_large.jpg` : planche des grandes images extraites du PDF.
- `inventory.csv` / `inventory.json` : inventaire complet des images extraites.

## Regle importante

Ne jamais integrer une capture de page entiere dans une carte ou un hero.

Les captures entieres servent seulement a comprendre la composition, les proportions et l'ambiance.

## Mapping recommande

Pour les grands backgrounds et cartes principales, commencer par :

`MAPPING_IMAGES_GENEREES_HD.md`

Pour les photos specifiques, portraits et images existantes :

`MAPPING_IMAGES_POUR_CLAUDE.md`

Le mapping complet est dans :

`MAPPING_IMAGES_POUR_CLAUDE.md`

### Accueil

- Logo provisoire : `images_pour_claude/accueil__logo_koti_header.jpg`
- Hero gauche : `images_pour_claude/accueil__hero_gauche_salon_canape_plantes.jpg`
- Hero droite : `images_pour_claude/accueil__hero_droite_comptoir_logo_plantes.jpg`
- Carte patient : `images_pour_claude/accueil__carte_patient_femme_apaisee.jpg`
- Carte professionnel : `images_pour_claude/accueil__carte_professionnel_espace_soin.jpg`
- Carte Notre vision : `images_pour_claude/accueil__carte_notre_vision_salon.jpg`
- Carte Notre histoire : `images_pour_claude/accueil__carte_notre_histoire_bouquet.jpg`
- Carte Nos valeurs : `images_pour_claude/accueil__carte_nos_valeurs_espace_lumineux.jpg`
- Bloc visite video : `images_pour_claude/accueil__bloc_visite_video_salon.jpg`
- Actualite accueil : `images_pour_claude/accueil__bloc_actualite_portes_ouvertes.jpg`
- Portrait Charline accueil : `images_pour_claude/accueil__portrait_charline_mini.jpg`
- Portrait Yoann accueil : `images_pour_claude/accueil__portrait_yoann_mini.jpg`
- CTA final : `images_pour_claude/accueil__bandeau_cta_final_canape.jpg`
- Monogramme footer : `images_pour_claude/footer__monogramme_koti_decoratif.jpg`

### Pages generales

- Notre vision : `images_pour_claude/page_vision__photo_lion_charline.jpg`
- Notre histoire : `images_pour_claude/page_histoire__photo_enfance_charline_yoann.jpg` et `images_pour_claude/page_histoire__photo_cafe_coeur.jpg`
- Nos valeurs : `images_pour_claude/page_valeurs__photo_equipe_discussion.jpg` et `images_pour_claude/page_valeurs__photo_enfance.jpg`
- Notre equipe : `images_pour_claude/page_equipe__photo_charline_yoann_table.jpg` et `images_pour_claude/page_equipe__portrait_charline_yoann.jpg`
- Nos actualites : `images_pour_claude/page_actualites__photo_table_basse_fleurs.jpg`, `images_pour_claude/page_actualites__image_a_la_une_portes_ouvertes.jpg`
- Contact : `images_pour_claude/page_contact__photo_charline_bureau.jpg`
- Prendre rendez-vous : `images_pour_claude/page_rendezvous__photo_charline_telephone.jpg`

### Parcours patient

- Hero patient : `images_pour_claude/accueil__carte_patient_femme_apaisee.jpg` ou `images_pour_claude/accueil__hero_gauche_salon_canape_plantes.jpg`
- Programmes : utiliser les images d'ambiance disponibles, avec `object-fit: cover`, sans deformation.
- Therapeutes : utiliser des initiales ou avatars sobres si aucune vraie photo praticien n'est disponible.

### Parcours professionnel

- Hero professionnel : `images_pour_claude/accueil__carte_professionnel_espace_soin.jpg` ou `images_pour_claude/accueil__hero_droite_comptoir_logo_plantes.jpg`
- Espaces : `images_pour_claude/general__hero_espace_soin_koti.jpg`, `images_pour_claude/accueil__carte_nos_valeurs_espace_lumineux.jpg`, `images_pour_claude/accueil__bloc_visite_video_salon.jpg`
- Communaute : `images_pour_claude/page_equipe__photo_charline_yoann_table.jpg` ou `images_pour_claude/page_valeurs__photo_equipe_discussion.jpg`

## References de layout

Utiliser `layout_references/` pour comparer la mise en page :

- `reference_homepage_image_complete.jpeg`
- `reference_homepage_pdf_full.jpg`
- `reference_orientation_cards.jpg`
- `reference_chiffres_cles.jpg`
- `reference_pourquoi_koti.jpg`
- `reference_blocs_editoriaux.jpg`
- `reference_footer.jpg`
- `reference_page_vision.jpg`
- `reference_page_histoire.jpg`
- `reference_page_valeurs.jpg`
- `reference_page_equipe.jpg`
- `reference_page_actualites.jpg`
- `reference_page_contact.jpg`
- `reference_page_rendezvous.jpg`

Ces fichiers ne doivent pas etre utilises comme contenu final.

## Regles CSS recommandees

- Utiliser `object-fit: cover` pour les cartes et hero.
- Definir une hauteur stable pour chaque zone image.
- Utiliser `object-position` quand necessaire pour garder les visages ou zones importantes visibles.
- Ne jamais etirer une image avec `width` et `height` sans `object-fit`.
- Ajouter un fond `#F7F5F1` ou `#E9E2D6` derriere les images si le ratio ne correspond pas.
- Garder les coins arrondis entre 14 et 18 px pour les cartes.
- Ne pas utiliser les images basse resolution en plein ecran si elles pixelisent.
