# Prompt parfait a donner a Claude - Integrer les images KOTI correctement

Tu es un expert senior frontend, UI/UX et direction artistique.

Je veux que tu ameliores la demo KOTI existante en integrant correctement les images extraites du PDF et les crops prepares depuis l'image de reference.

L'objectif est de rapprocher le site au maximum de la photo de reference et du PDF, sans casser les fonctionnalites deja presentes.

## Contexte

Le projet contient deja une demo du site dans le dossier `site/`.

Les images ont ete preparees dans le dossier :

`assets_koti/`

Lis d'abord :

`assets_koti/README_assets_koti.md`

Lis ensuite le mapping specifique des images renommees :

`assets_koti/MAPPING_IMAGES_POUR_CLAUDE.md`

Lis aussi le mapping des images regenerees en meilleure qualite :

`assets_koti/MAPPING_IMAGES_GENEREES_HD.md`

Pour les icones, lis :

`assets_koti/icones_pour_claude/README_ICONES_KOTI.md`

Puis utilise principalement pour les grands visuels :

`assets_koti/images_generees_haute_qualite/`

Et utilise pour les photos specifiques / portraits / contenus existants :

`assets_koti/images_pour_claude/`

Utilise seulement comme references visuelles :

`assets_koti/layout_references/`

Ne va dans `assets_koti/pdf_raw/` que si une image manque vraiment.

Le dossier `assets_koti/site_ready/` existe encore comme backup, mais les noms les plus clairs sont dans `assets_koti/images_pour_claude/` et les meilleurs grands visuels sont dans `assets_koti/images_generees_haute_qualite/`.

## Priorite

1. Ne casse aucune fonctionnalite existante.
2. Remplace les illustrations placeholders par les vraies images disponibles.
3. Rapproche la page d'accueil de l'image de reference.
4. Utilise les captures de `layout_references/` uniquement comme modeles de composition.
5. N'affiche jamais une capture de page entiere comme photo de carte, hero ou contenu.
6. Garde le site responsive et sans debordement horizontal.

## Dossier des images a integrer

Images pretes a utiliser :

`assets_koti/images_generees_haute_qualite/`

`assets_koti/images_pour_claude/`

Icones vectorielles :

`assets_koti/icones_pour_claude/koti-icons.svg`

References de layout uniquement :

`assets_koti/layout_references/`

Planche de controle :

`assets_koti/planche_images_generees_hd.jpg`

`assets_koti/planche_images_pour_claude.jpg`

## Regles importantes

- Les images doivent etre copiees ou referencees proprement depuis le site.
- Si necessaire, copie `assets_koti/images_generees_haute_qualite/` et `assets_koti/images_pour_claude/` vers un dossier public du site, par exemple `site/assets/images/`.
- Si necessaire, copie `assets_koti/icones_pour_claude/koti-icons.svg` vers `site/assets/icons/koti-icons.svg`.
- Mets a jour les chemins dans le code.
- Utilise des noms explicites.
- Ajoute des textes alternatifs propres.
- Utilise `object-fit: cover`.
- Utilise `object-position` pour garder les sujets visibles.
- Ne deforme aucune image.
- Ne mets pas une image trop basse resolution en plein ecran si elle pixelise.
- Garde les coins arrondis, les ombres legeres et l'univers premium KOTI.

## Images a placer - Accueil

### Header

Utilise temporairement :

`accueil__logo_koti_header.jpg`

Pour le logo si aucun vrai logo vectoriel KOTI n'est disponible.

Le logo doit etre plus visible que dans la demo actuelle, proche de l'image de reference.

### Hero

Le hero actuel est trop vide et trop "illustration placeholder".

Remplace-le par une composition proche de l'image de reference :

- option 1, meilleure qualite : utiliser `gen_accueil__hero_full_salon_reception_lumineux.jpg` comme image hero large ;
- option 2, composition en deux images : a gauche `gen_accueil__hero_gauche_salon_canape_plantes.jpg`, a droite `gen_accueil__hero_droite_comptoir_bois_plantes.jpg`.

Le centre conserve :

- `Bienvenue au KOTI`
- `KOTI` en dore champagne
- texte d'accroche
- `A vous de choisir`
- fleche vers les cartes

Le rendu doit etre lumineux, premium, vegetal, chaleureux.

### Cartes d'orientation

Carte patient :

`gen_accueil__carte_patient_femme_apaisee_hd.jpg`

Carte professionnel :

`gen_accueil__carte_professionnel_bureau_consultation_hd.jpg`

Ces images doivent remplacer les placeholders en haut des deux cartes.

Les cartes doivent rester proches de la reference :

- image en haut ;
- icone ronde superposee ;
- titre Playfair ;
- separateur dore ;
- bouton pilule ;
- hover discret.

### Cartes editoriales accueil

Notre vision :

`accueil__carte_notre_vision_salon.jpg`

Notre histoire :

`accueil__carte_notre_histoire_bouquet.jpg`

Nos valeurs :

`accueil__carte_nos_valeurs_espace_lumineux.jpg`

### Bloc visite KOTI

Utilise :

`accueil__bloc_visite_video_salon.jpg`

Le bouton lecture doit rester visible au centre.

### Actualite accueil

Utilise :

`accueil__bloc_actualite_portes_ouvertes.jpg`

Pour l'actualite `Portes ouvertes au KOTI`.

Si l'image est trop petite pour une grande largeur, garde-la dans une vignette ou une carte, pas en hero plein ecran.

### Equipe accueil

Utilise :

- `accueil__portrait_charline_mini.jpg`
- `accueil__portrait_yoann_mini.jpg`

Pour les petits portraits de Charline et Yoann dans le bloc `Notre equipe - La KOTeam`.

### CTA final / bandeau

Utilise :

`gen_general__fond_decoratif_botanique_sauge_dore.jpg`

ou, si tu veux garder une image reelle :

`accueil__bandeau_cta_final_canape.jpg`

Comme image/fond du bandeau final si le rendu reste propre.

Si elle est trop basse, l'utiliser en image de fond avec overlay doux vert sauge, ou la laisser dans une zone contrainte.

### Footer

Utilise optionnellement :

`footer__monogramme_koti_decoratif.jpg`

Comme monogramme decoratif discret.

## Images a placer - Pages generales

### Notre vision

Utilise :

`page_vision__photo_lion_charline.jpg`

Comme visuel principal ou carte image de la page.

Reference de mise en page :

`layout_references/reference_page_vision.jpg`

### Notre histoire

Utilise :

- `page_histoire__photo_enfance_charline_yoann.jpg`
- `page_histoire__photo_cafe_coeur.jpg`

Reference :

`layout_references/reference_page_histoire.jpg`

### Nos valeurs

Utilise :

- `page_valeurs__photo_equipe_discussion.jpg`
- `page_valeurs__photo_enfance.jpg`

Reference :

`layout_references/reference_page_valeurs.jpg`

### Notre equipe

Utilise :

- `page_equipe__photo_charline_yoann_table.jpg`
- `page_equipe__portrait_charline_yoann.jpg`

Reference :

`layout_references/reference_page_equipe.jpg`

Les autres therapeutes peuvent garder des avatars a initiales tant qu'aucune vraie photo n'est fournie.

### Nos actualites

Utilise :

- `page_actualites__photo_table_basse_fleurs.jpg`
- `page_actualites__image_a_la_une_portes_ouvertes.jpg`

Reference :

`layout_references/reference_page_actualites.jpg`

Attention :

`page_actualites__reference_cartes_programmes_ne_pas_utiliser_comme_photo.jpg` est une capture de cartes d'articles. Tu peux t'en servir comme reference visuelle, mais ne l'utilise pas comme photo pleine largeur si cela ressemble a une capture collee.

### Contact

Utilise :

`page_contact__photo_charline_bureau.jpg`

Reference :

`layout_references/reference_page_contact.jpg`

### Prendre rendez-vous

Utilise :

`page_rendezvous__photo_charline_telephone.jpg`

Reference :

`layout_references/reference_page_rendezvous.jpg`

## Images a placer - Parcours patient

### Accueil patient

Utilise en priorite :

- `gen_accueil__carte_patient_femme_apaisee_hd.jpg`
- `gen_accueil__hero_gauche_salon_canape_plantes.jpg`
- `gen_general__espace_soin_lumineux_hd.jpg`

Le parcours patient doit rester doux, rassurant, centre sur l'accompagnement.

### Programmes

Utilise les images d'ambiance disponibles comme vignettes :

- `gen_general__espace_soin_lumineux_hd.jpg`
- `accueil__carte_notre_histoire_bouquet.jpg`
- `page_actualites__photo_table_basse_fleurs.jpg`
- `accueil__bloc_visite_video_salon.jpg`

Si l'image ne correspond pas parfaitement, garde un cadrage sobre et ne force pas un plein ecran.

### Therapeutes

Si aucune vraie photo therapeuthe n'est disponible :

- garder les initiales actuelles ;
- ou utiliser des avatars sobres ;
- ne pas inventer de vraies photos de praticiens.

## Images a placer - Parcours professionnel

### Accueil professionnel

Utilise en priorite :

- `gen_accueil__carte_professionnel_bureau_consultation_hd.jpg`
- `gen_accueil__hero_droite_comptoir_bois_plantes.jpg`
- `page_equipe__photo_charline_yoann_table.jpg`

Le parcours professionnel doit avoir une ambiance plus structuree, mais toujours chaleureuse.

### Espaces

Utilise :

- `gen_general__espace_soin_lumineux_hd.jpg`
- `accueil__carte_nos_valeurs_espace_lumineux.jpg`
- `accueil__bloc_visite_video_salon.jpg`
- `gen_accueil__hero_droite_comptoir_bois_plantes.jpg`

### Communaute professionnelle

Utilise :

- `page_valeurs__photo_equipe_discussion.jpg`
- `page_equipe__photo_charline_yoann_table.jpg`

## Ameliorations visuelles attendues

La version actuelle ressemble encore trop a une maquette avec placeholders.

Apres integration, je veux :

- un hero plus proche de la photo ;
- des cartes principales avec vraies images ;
- des pages internes moins vides ;
- une meilleure presence du logo ;
- des vignettes actualites/programmes plus vivantes ;
- une equipe plus humaine ;
- un rendu plus premium et moins wireframe.

## CSS / implementation

Mets en place ou corrige :

- `.media-frame`
- `.hero-visual`
- `.card-media`
- `.avatar-photo`
- `.image-cover`

Remplace aussi les anciennes icones placeholders par le sprite :

`assets_koti/icones_pour_claude/koti-icons.svg`

Utilise le mapping :

- chiffres cles : `koti-leaf`, `koti-person`, `koti-heart`, `koti-calendar`, `koti-star`
- pourquoi KOTI : `koti-globe-human`, `koti-home`, `koti-community`, `koti-lotus`, `koti-shield-check`
- UI : `koti-user-round`, `koti-play`, `koti-arrow-right`, `koti-mail`, `koti-menu`

Exemple de regle attendue :

```css
.image-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
```

Pour les images contenant des personnes, ajuste `object-position` :

- patient : centre / droite si le visage est a droite ;
- equipe : centre ;
- contact : centre / droite ;
- rendez-vous : centre / haut.

## Validation obligatoire

Avant de finaliser :

1. Lance la demo.
2. Verifie l'accueil desktop.
3. Verifie le menu mobile.
4. Verifie les pages patient et professionnel.
5. Verifie la page rendez-vous.
6. Fais des captures si possible.
7. Compare avec :
   - `assets_koti/layout_references/reference_homepage_image_complete.jpeg`
   - `assets_koti/planche_images_generees_hd.jpg`
   - `assets_koti/planche_images_pour_claude.jpg`
8. Corrige les images et cadrages si une image est deformee, coupee bizarrement ou pixelisee.

## Critere de reussite

La demo doit passer d'une ressemblance d'environ 45-50% avec la photo a au moins 75-80%.

Le site doit garder sa couverture fonctionnelle, mais devenir beaucoup plus proche visuellement de l'univers KOTI :

- lumineux ;
- vegetal ;
- chaleureux ;
- premium ;
- humain ;
- proche de la photo de reference ;
- coherent avec le PDF.

Commence directement par modifier la demo. Ne fais pas seulement une analyse.
