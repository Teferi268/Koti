# Mapping images pour Claude

Ce dossier est fait pour eviter toute confusion :

`assets_koti/images_pour_claude/`

Les fichiers sont nommes selon cette logique :

`page__zone_usage_description.jpg`

Exemple :

`accueil__carte_patient_femme_apaisee.jpg`

Signifie : page accueil, carte patient, image femme apaisee.

## Regle principale

Utiliser les images de ce dossier pour le site.

Ne pas utiliser les captures de pages entieres comme images de contenu.

Les fichiers marques `reference` servent seulement a comprendre un style ou une composition.

## Accueil

| Fichier | Utilisation exacte |
|---|---|
| `accueil__logo_koti_header.jpg` | Logo dans le header, seulement si aucun logo officiel vectoriel n'est disponible |
| `accueil__hero_gauche_salon_canape_plantes.jpg` | Image gauche du hero, zone salon lumineuse |
| `accueil__hero_droite_comptoir_logo_plantes.jpg` | Image droite du hero, zone accueil / comptoir |
| `accueil__carte_patient_femme_apaisee.jpg` | Image de la carte patient "Je m'accorde du temps..." |
| `accueil__carte_professionnel_espace_soin.jpg` | Image de la carte professionnel "Je developpe mon activite..." |
| `accueil__bandeau_cta_final_canape.jpg` | Image ou fond du CTA final |
| `accueil__carte_notre_vision_salon.jpg` | Image de la carte "Notre vision" |
| `accueil__carte_notre_histoire_bouquet.jpg` | Image de la carte "Notre histoire" |
| `accueil__carte_nos_valeurs_espace_lumineux.jpg` | Image de la carte "Nos valeurs" |
| `accueil__bloc_visite_video_salon.jpg` | Image du bloc "Visitez le KOTI" avec bouton lecture |
| `accueil__bloc_actualite_portes_ouvertes.jpg` | Image de l'actualite "Portes ouvertes au KOTI" sur l'accueil |
| `accueil__portrait_charline_mini.jpg` | Petit portrait Charline dans le bloc equipe accueil |
| `accueil__portrait_yoann_mini.jpg` | Petit portrait Yoann dans le bloc equipe accueil |

## Footer

| Fichier | Utilisation exacte |
|---|---|
| `footer__monogramme_koti_decoratif.jpg` | Monogramme decoratif discret dans le footer |

## Pages generales

| Fichier | Utilisation exacte |
|---|---|
| `general__hero_espace_soin_koti.jpg` | Image generale pour un hero ou une carte d'espace KOTI |
| `page_vision__photo_lion_charline.jpg` | Visuel principal de la page "Notre vision" |
| `page_histoire__photo_enfance_charline_yoann.jpg` | Photo enfance pour la page "Notre histoire" |
| `page_histoire__photo_cafe_coeur.jpg` | Photo cafe / coeur pour la page "Notre histoire" |
| `page_valeurs__photo_equipe_discussion.jpg` | Photo equipe/discussion pour la page "Nos valeurs" |
| `page_valeurs__photo_enfance.jpg` | Photo enfance secondaire pour la page "Nos valeurs" |
| `page_equipe__photo_charline_yoann_table.jpg` | Photo principale de la page "Notre equipe" |
| `page_equipe__portrait_charline_yoann.jpg` | Portrait secondaire Charline/Yoann |
| `page_actualites__photo_table_basse_fleurs.jpg` | Image ambiance pour la page "Nos actualites" |
| `page_actualites__image_a_la_une_portes_ouvertes.jpg` | Image de l'article a la une "Portes ouvertes au KOTI" |
| `page_contact__photo_charline_bureau.jpg` | Photo principale de la page "Contact" |
| `page_rendezvous__photo_charline_telephone.jpg` | Photo principale de la page "Prendre rendez-vous" |

## Attention

| Fichier | Regle |
|---|---|
| `page_actualites__reference_cartes_programmes_ne_pas_utiliser_comme_photo.jpg` | Reference visuelle uniquement. Ne pas mettre cette capture comme photo finale dans une carte. |

## Parcours patient

Pour le parcours patient, utiliser en priorite :

- `accueil__carte_patient_femme_apaisee.jpg`
- `accueil__hero_gauche_salon_canape_plantes.jpg`
- `general__hero_espace_soin_koti.jpg`
- `accueil__bloc_visite_video_salon.jpg`
- `accueil__carte_notre_vision_salon.jpg`

Pour les therapeutes, garder des avatars a initiales si aucune vraie photo praticien n'est disponible.

## Parcours professionnel

Pour le parcours professionnel, utiliser en priorite :

- `accueil__carte_professionnel_espace_soin.jpg`
- `accueil__hero_droite_comptoir_logo_plantes.jpg`
- `general__hero_espace_soin_koti.jpg`
- `page_equipe__photo_charline_yoann_table.jpg`
- `page_valeurs__photo_equipe_discussion.jpg`

## Regles CSS

Toutes les images doivent utiliser une classe ou une regle equivalente :

```css
.image-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
```

Pour les visages :

- garder le visage visible ;
- ajuster `object-position` si necessaire ;
- ne jamais etirer l'image ;
- ne jamais utiliser une capture de page entiere comme photo finale.

## Verification finale

Verifier apres integration :

- hero accueil proche de la photo de reference ;
- cartes patient/pro avec vraies images ;
- pages internes moins vides ;
- portraits equipe visibles ;
- aucun debordement mobile ;
- aucune image deformee ;
- aucun texte coupe ;
- aucun fichier `reference` utilise comme photo finale.
