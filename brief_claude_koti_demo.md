# Brief Claude - Demo site KOTI 2.0

## Objectif

Créer une demo web responsive et haut de gamme pour le site KOTI, destinee a etre montree puis transmise a un developpeur.

La demo doit reproduire au plus pres l'image de reference fournie, avec l'univers graphique KOTI : lieu lumineux, bien-etre, sante integrative, elegance douce, vert sauge, dore champagne, blanc casse, typographies editoriales.

## Sources a utiliser

- Image de reference : priorite visuelle principale.
- PDF "KOTI 2.0 - Page d'orientation detaillee" : reference fonctionnelle, contenus, structure, regles UI.

En cas de contradiction entre le PDF et l'image, suivre l'image pour la demo visuelle.

Ne pas utiliser les pages juridiques/RGPD/cookies du PDF dans la demo, sauf pour prevoir des liens footer factices.

## Livrable attendu

Produire un prototype fonctionnel de la page d'accueil / page d'orientation KOTI.

Format souhaite :
- une page web responsive desktop, tablette et mobile ;
- HTML/CSS/JS simple ou React/Next selon ce qui est le plus adapte ;
- liens et boutons cliquables mais sans backend ;
- donnees mockees si necessaire ;
- code propre, structure, facilement transmissible a un developpeur.

## Direction visuelle

Ambiance :
- tres lumineux ;
- blanc casse et tons naturels ;
- touches vert sauge et dore champagne ;
- cartes elegantes avec coins arrondis ;
- ombres tres legeres ;
- visuels non deformes ;
- rendu premium, chaleureux, calme, professionnel.

Couleurs :
- vert sauge principal : #B0C1B1 ;
- vert fonce / texte : #2D3C35 ;
- blanc casse : #F7F5F1 ;
- sable : #E9E2D6 ;
- taupe : #C8B9A6 ;
- gris clair : #E1E0E2 ;
- dore champagne : #DCC99A.

Typographies :
- titres : Playfair Display ;
- textes, menus, boutons : Montserrat.

## Structure de la page

1. Header sticky
- logo KOTI a gauche ;
- navigation : Decouvrir le KOTI, Notre vision, Notre histoire, Nos valeurs, Notre equipe, Nos actualites ;
- bouton "Prendre rendez-vous" ;
- icone compte/utilisateur ;
- menu burger sur mobile.

2. Hero
- grand titre : "Bienvenue au KOTI" ;
- "KOTI" en dore champagne ;
- texte : "Un lieu unique dedie a l'humain, pour retrouver equilibre, harmonie et bien-etre au KOTIdien." ;
- sous-texte : "Deux facons de vivre l'experience KOTI" ;
- mention manuscrite ou style elegant : "A vous de choisir" ;
- fleche vers les cartes ;
- composition visuelle proche de l'image : salon lumineux a gauche, accueil/reception a droite, plantes, lumiere naturelle, details dores.

3. Bloc orientation - deux cartes principales

Carte patient :
- titre : "Je m'accorde du temps, je prends soin de moi" ;
- texte : "Je decouvre les accompagnements, les therapeutes et les programmes adaptes a mes besoins." ;
- bouton : "Trouver mon accompagnement" ;
- couleur bouton : vert sauge ;
- image : personne apaisee / soin / bien-etre.

Carte professionnel :
- titre : "Je developpe mon activite au KOTI" ;
- texte : "Je decouvre un lieu, des services et une communaute penses pour developper mon activite." ;
- bouton : "Installer mon activite au KOTI" ;
- lien secondaire : "Recevoir le guide d'installation du KOTI" ;
- couleur bouton : dore champagne ;
- image : espace de soin / bureau / lieu professionnel chaleureux.

Les deux cartes doivent etre entierement cliquables, avec un hover discret.

4. Bandeau de transition
- texte : "Un lieu. Deux parcours. Une meme promesse. Prendre soin de soi, ensemble." ;
- fond vert sauge ;
- separateur dore discret.

5. Chiffres cles
- 50+ therapeutes passionnes ;
- 70+ disciplines complementaires ;
- 5000+ accompagnements chaque annee ;
- 7j/7 un lieu ouvert a tous les jours ;
- 95% de satisfaction de nos clients.

6. Section "Pourquoi le KOTI est different ?"
Afficher 5 items avec icones lineaires :
- Une approche globale ;
- Un lieu d'exception ;
- Une communaute bienveillante ;
- Des solutions sur-mesure ;
- Securite & confidentialite.

7. Cartes editoriales
Trois cartes :
- Notre vision ;
- Notre histoire ;
- Nos valeurs.

Chaque carte a une image, un court texte et un lien "En savoir plus".

8. Bloc bas de page
Quatre blocs comme dans l'image :
- Visitez le KOTI avec bouton lecture et CTA "Recevoir mon acces prive" ;
- Ils en parlent mieux que nous avec onglets "Cote clients" / "Cote therapeutes", avis et etoiles ;
- Nos actualites avec evenement "Portes ouvertes au KOTI" ;
- Notre equipe - La KOTeam avec Charline et Yoann.

9. Footer
- logo KOTI ;
- liens de navigation ;
- informations pratiques ;
- newsletter avec champ email ;
- liens sociaux ;
- mentions legales, confidentialite, cookies.

## Responsive

Desktop :
- mise en page proche de l'image ;
- largeur confortable ;
- cartes en colonnes.

Tablette :
- grille adaptee en 2 colonnes ;
- header lisible.

Mobile :
- menu burger ;
- hero simplifie ;
- cartes empilees ;
- aucun debordement horizontal ;
- boutons sur une seule ligne quand possible.

## Interactions attendues

- header sticky avec fond legerement opaque au scroll ;
- hover discret sur boutons/cartes/liens ;
- menu mobile ouvrable ;
- onglets temoignages fonctionnels ;
- lecture video en modale factice ou placeholder ;
- formulaires/newsletter non connectes mais visuellement presents.

## Important

Le resultat doit etre une demo visuelle convaincante, pas un site final avec backend.

Le code doit etre propre, maintenable et pret a servir de base a un developpeur.

Verifier avant de rendre :
- page responsive ;
- textes lisibles ;
- images non deformees ;
- pas de chevauchement ;
- pas de scroll horizontal mobile ;
- hierarchie H1/H2/H3 correcte ;
- contraste correct ;
- rendu proche de l'image fournie.
