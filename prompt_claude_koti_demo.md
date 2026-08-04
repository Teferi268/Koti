# Prompt parfait a donner a Claude

Tu es un expert senior en design web, UI/UX, direction artistique et developpement frontend.

Je veux que tu crees une demo web haut de gamme pour le site KOTI, un lieu de sante integrative et de mieux-etre.

Je te fournis :
- un PDF de specification fonctionnelle : `KOTI 2.0_Page_Orientation_Detaillee.pdf` ;
- une image de reference visuelle qui montre exactement l'ambiance, la structure et le niveau de finition attendus.

## Priorite des sources

1. L'image de reference est la priorite absolue pour le rendu visuel, la composition, l'ambiance, les proportions et le style.
2. Le PDF sert de reference pour les contenus, la structure, les couleurs, les regles UI, le responsive et les interactions.
3. Si le PDF et l'image se contredisent, suis l'image pour la demo.
4. Ignore les longues pages juridiques, RGPD, cookies et CGV du PDF pour cette demo, sauf pour prevoir des liens factices dans le footer.

## Objectif

Construire une demo realiste et cliquable de la page d'accueil / page d'orientation KOTI.

Cette demo doit permettre de montrer au client et a un developpeur ce que le site doit devenir.

Le resultat doit etre beau, credible, responsive et directement exploitable comme base frontend.

## Livrable attendu

Produis un prototype complet :
- responsive desktop, tablette et mobile ;
- avec HTML/CSS/JS simple ou React, selon ce qui est le plus efficace dans ton environnement ;
- sans backend ;
- avec des interactions front fonctionnelles ;
- avec du code propre, lisible et facilement transmissible a un developpeur.

Si tu travailles dans un artifact Claude, cree directement l'application complete dans l'artifact.

## Direction artistique

Le site doit ressembler a l'image fournie :
- ambiance lumineuse, douce, premium et humaine ;
- blanc casse dominant ;
- vert sauge ;
- dore champagne ;
- bois clair ;
- plantes ;
- grandes ouvertures lumineuses ;
- cartes elegantes ;
- coins arrondis ;
- ombres tres legeres ;
- typographie editoriale ;
- sensation de calme, confiance, soin et professionnalisme.

Evite :
- les rendus trop generiques SaaS ;
- les gros gradients modernes sans rapport avec KOTI ;
- les couleurs criardes ;
- les cartes trop lourdes ;
- les animations excessives ;
- les blocs marketing impersonnels.

## Identite visuelle

Couleurs :
- vert sauge principal : `#B0C1B1`
- vert fonce / texte : `#2D3C35`
- blanc casse : `#F7F5F1`
- sable : `#E9E2D6`
- taupe : `#C8B9A6`
- gris clair : `#E1E0E2`
- dore champagne : `#DCC99A`

Typographies :
- titres : Playfair Display ;
- texte, navigation, boutons : Montserrat.

Si les polices ne sont pas disponibles, utilise des alternatives proches, mais garde la meme hierarchie visuelle.

## Images

Utilise l'image fournie comme reference de style, pas comme simple capture collee dans la page.

Si tu n'as pas acces aux vraies photos KOTI :
- cree des emplacements visuels elegants qui imitent l'univers de l'image ;
- utilise des visuels coherents : salon lumineux, plantes, espace de soin, accueil chaleureux, fleurs, personne apaisee ;
- ne deforme jamais les images ;
- garde des `alt` propres ;
- structure le code pour que les vraies images puissent etre remplacees facilement plus tard.

## Structure obligatoire de la page

### 1. Header sticky

Contenu :
- logo KOTI a gauche ;
- navigation : Decouvrir le KOTI, Notre vision, Notre histoire, Nos valeurs, Notre equipe, Nos actualites ;
- bouton `Prendre rendez-vous` ;
- icone compte/utilisateur ;
- menu burger sur mobile.

Comportement :
- header visible au scroll ;
- fond blanc casse legerement opaque apres scroll ;
- hover discret sur les liens ;
- menu mobile propre et accessible.

### 2. Hero

Reproduire l'esprit de l'image.

Contenu :
- titre principal : `Bienvenue au KOTI`
- le mot `KOTI` en dore champagne ;
- texte : `Un lieu unique dedie a l'humain, pour retrouver equilibre, harmonie et bien-etre au KOTIdien.`
- sous-texte : `Deux facons de vivre l'experience KOTI`
- phrase manuscrite ou style elegant : `A vous de choisir`
- fleche vers les deux cartes.

Composition :
- espace tres lumineux ;
- visuel salon / accueil ;
- plantes ;
- reception ou mobilier bois ;
- sensation de lieu reel, chaleureux et premium.

### 3. Deux cartes d'orientation

Les deux cartes doivent etre les CTA principaux de la page.

Carte patient :
- titre : `Je m'accorde du temps, je prends soin de moi`
- texte : `Je decouvre les accompagnements, les therapeutes et les programmes adaptes a mes besoins.`
- bouton : `Trouver mon accompagnement`
- couleur bouton : vert sauge ;
- image : personne apaisee / bien-etre / soin ;
- icone lineaire verte.

Carte professionnel :
- titre : `Je developpe mon activite au KOTI`
- texte : `Je decouvre un lieu, des services et une communaute penses pour developper mon activite.`
- bouton : `Installer mon activite au KOTI`
- lien secondaire : `Recevoir le guide d'installation du KOTI`
- couleur bouton : dore champagne ;
- image : espace professionnel chaleureux ;
- icone lineaire doree.

Interactions :
- toute la carte est cliquable ;
- hover avec elevation subtile ;
- pas de zoom excessif.

### 4. Bandeau de transition

Texte :
`Un lieu. Deux parcours. Une meme promesse. Prendre soin de soi, ensemble.`

Style :
- fond vert sauge ;
- texte clair ;
- separateur dore discret ;
- motifs floraux tres subtils si possible.

### 5. Chiffres cles

Afficher en ligne sur desktop, empile ou grille sur mobile :
- `50+` therapeutes passionnes ;
- `70+` disciplines complementaires ;
- `5000+` accompagnements chaque annee ;
- `7j/7` un lieu ouvert tous les jours ;
- `95%` de satisfaction de nos clients.

Utilise des icones lineaires simples.

### 6. Pourquoi le KOTI est different ?

Titre :
`Pourquoi le KOTI est different ?`

Afficher 5 items :
- Une approche globale ;
- Un lieu d'exception ;
- Une communaute bienveillante ;
- Des solutions sur-mesure ;
- Securite & confidentialite.

Chaque item doit avoir :
- une icone lineaire ;
- un titre ;
- un court texte ;
- une mise en page propre et lisible.

### 7. Cartes editoriales

Afficher 3 cartes :
- Notre vision ;
- Notre histoire ;
- Nos valeurs.

Chaque carte doit contenir :
- une image ;
- un titre ;
- un court texte ;
- un lien `En savoir plus`.

### 8. Section basse

Creer 4 blocs comme dans l'image :

Bloc 1 :
- titre : `Visitez le KOTI`
- image d'espace lumineux ;
- bouton lecture circulaire ;
- texte : `Decouvrez nos espaces et plongez dans l'univers du KOTI comme si vous y etiez.`
- CTA : `Recevoir mon acces prive`

Bloc 2 :
- titre : `Ils en parlent mieux que nous`
- onglets : `Cote clients` / `Cote therapeutes`
- avis client ;
- note 5 etoiles ;
- auteur : `Sophie L.`
- lien : `Voir tous les temoignages`

Bloc 3 :
- titre : `Nos actualites`
- evenement : `Portes ouvertes au KOTI`
- date : `Samedi 15 juin 2025`
- court texte ;
- lien : `Voir toutes les actualites`

Bloc 4 :
- titre : `Notre equipe - La KOTeam`
- profils : Charline, cofondatrice ; Yoann, cofondateur ;
- lien : `Decouvrir toute la KOTeam`

### 9. Footer

Footer proche de l'image :
- logo KOTI ;
- liens de navigation ;
- informations pratiques ;
- newsletter avec champ email et bouton ;
- liens sociaux ;
- mentions legales, confidentialite, cookies.

## Interactions front attendues

Mets en place :
- header sticky avec etat au scroll ;
- menu mobile ouvrable/fermable ;
- onglets temoignages fonctionnels ;
- hover boutons/cartes/liens ;
- bouton video ouvrant une modale ou un placeholder propre ;
- champ newsletter visuel ;
- liens factices avec `#`.

## Contraintes qualite

Avant de finaliser, verifie mentalement et corrige :
- aucun debordement horizontal mobile ;
- aucun texte coupe ;
- boutons lisibles ;
- contraste suffisant ;
- hierarchie H1/H2/H3 correcte ;
- images non deformees ;
- cartes equilibrees ;
- rendu proche de l'image ;
- code propre et commente seulement si necessaire ;
- responsive soigne.

## Niveau d'exigence

Je ne veux pas une simple maquette approximative.

Je veux une demo qui donne envie, qui ressemble vraiment a un site premium de sante integrative, et qu'un developpeur puisse utiliser comme base de travail.

Commence directement par produire la demo. Ne me fais pas seulement une analyse du PDF.
