# Prompt parfait a donner a Claude - Site complet KOTI demo

Tu es un expert senior en direction artistique, UX/UI, architecture frontend et developpement web.

Je veux que tu crees une demo complete du site KOTI, pas seulement la page d'accueil.

L'objectif est de pouvoir naviguer dans toutes les pages importantes du site, tester les principales fonctionnalites en mode demo, puis transmettre ce prototype a un developpeur comme base claire de travail.

## Sources fournies

Je te fournis :
- le PDF de specification : `KOTI 2.0_Page_Orientation_Detaillee.pdf` ;
- une image de reference visuelle montrant l'ambiance attendue de la page d'accueil ;
- eventuellement un premier prompt deja utilise pour la page d'accueil.

## Priorite des sources

1. L'image de reference est prioritaire pour l'identite visuelle : ambiance, composition, couleurs, typographies, style des cartes, niveau de finition.
2. Le PDF est prioritaire pour les contenus, la structure des pages, les menus, les regles UI, le responsive et les comportements.
3. Si le PDF et l'image se contredisent pour la page d'accueil, suis l'image.
4. Si le PDF ne donne pas encore le detail complet d'un parcours, cree une version demo coherente, clairement mockee, qui permet de comprendre la fonctionnalite.
5. N'integre pas les longues pages juridiques/RGPD/cookies comme contenu principal de la demo, sauf sous forme de pages ou modales placeholder accessibles depuis le footer.

## Objectif du livrable

Construire une application web demo complete, responsive et cliquable, permettant de visiter :
- la page d'orientation ;
- les pages institutionnelles ;
- le parcours patient ;
- le parcours professionnel ;
- les formulaires ;
- la prise de rendez-vous ;
- les actualites ;
- les espaces ;
- les contenus type programmes, therapeutes, blog/vlog, boutique ;
- les etats utiles : modale, confirmation, erreur, menu mobile, cookies, 404.

Cette demo ne doit pas avoir de backend reel. Toutes les donnees peuvent etre mockees dans le frontend.

## Format attendu

Produis une application complete :
- React, Next.js ou HTML/CSS/JS selon ton environnement ;
- navigation multi-pages ou SPA avec routing simule ;
- composants propres et reutilisables ;
- donnees mockees dans un fichier ou une structure claire ;
- design responsive desktop, tablette, mobile ;
- interactions front fonctionnelles ;
- code lisible et pret a transmettre a un developpeur.

Si tu travailles dans un artifact Claude, cree directement l'application complete dans l'artifact.

## Direction artistique globale

Le site doit conserver l'univers visuel KOTI de l'image :
- lumineux ;
- premium ;
- doux ;
- humain ;
- calme ;
- blanc casse dominant ;
- vert sauge ;
- dore champagne ;
- bois clair ;
- plantes ;
- espaces de soin chaleureux ;
- grandes images non deformees ;
- cartes elegantes ;
- ombres tres legeres ;
- coins arrondis ;
- typographie editoriale.

Evite absolument :
- un rendu SaaS generique ;
- des gradients modernes sans rapport avec KOTI ;
- des couleurs trop vives ;
- un design medical froid ;
- des composants lourds ou trop sombres ;
- des animations excessives ;
- des pages marketing vides sans fonctionnalite.

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
- textes, navigation, boutons : Montserrat.

Boutons :
- forme pilule ;
- hover subtil ;
- fleche ou icone quand utile ;
- CTA patient en vert sauge ;
- CTA professionnel en dore champagne.

Cartes :
- coins arrondis ;
- ombre tres legere ;
- image en haut ou en fond selon le contexte ;
- hover discret ;
- jamais d'image deformee.

## Structure globale du site

Le site doit avoir trois univers de navigation :

1. Page d'orientation / univers general
2. Parcours patient
3. Parcours professionnel

La page d'orientation sert a choisir entre :
- `Trouver mon accompagnement`
- `Installer mon activite au KOTI`

Les deux choix doivent mener a des pages ou parcours differents, avec un header adapte.

## Pages obligatoires - Univers general

### 1. Page d'orientation / accueil

Reprendre la page d'accueil proche de l'image :
- hero `Bienvenue au KOTI` ;
- deux cartes d'orientation ;
- chiffres cles ;
- section `Pourquoi le KOTI est different ?` ;
- cartes `Notre vision`, `Notre histoire`, `Nos valeurs` ;
- blocs `Visitez le KOTI`, temoignages, actualites, equipe ;
- footer complet.

### 2. Notre vision

Page editoriale premium avec :
- hero ou intro image + texte ;
- titre `Notre vision` ;
- accroche : `Une vision globale, humaine et profondement engagee.`
- contenu structure en sections ;
- bloc/mantra : `Prendre soin de soi aujourd'hui, c'est construire un demain meilleur`
- CTA vers `Trouver mon accompagnement` et `Installer mon activite au KOTI`.

### 3. Notre histoire

Page narrative avec :
- titre `Notre histoire` ;
- accroche familiale ;
- sections racontees avec photos ;
- carte citation/proverbe balinais ;
- CTA vers equipe ou contact.

### 4. Nos valeurs

Page claire et emotionnelle avec :
- titre `Nos valeurs` ;
- valeurs principales sous forme de cartes ou sections ;
- humanite, ecoute, bienveillance, cooperation, confiance, exigence professionnelle ;
- CTA final vers prise de rendez-vous.

### 5. Notre equipe

Page equipe avec :
- introduction ;
- profils Charline et Yoann ;
- grille de therapeutes mockee ;
- filtres simples par discipline ;
- carte profil avec photo, role, courte bio ;
- modale ou page detail profil ;
- CTA contact / rendez-vous.

### 6. Nos actualites

Page actualites avec :
- article `A la une` ;
- grille d'actualites ;
- filtres par categorie : Evenements, Bien-etre, Programmes, Vie du KOTI ;
- recherche simple ;
- bouton `Voir toutes les actualites` si necessaire ;
- page detail ou modale detail d'article ;
- exemple : `Portes ouvertes au KOTI - Samedi 15 juin 2025`.

### 7. Contact

Page contact avec :
- titre `Nous contacter` ;
- infos pratiques : adresse, telephone, email, horaires ;
- 4 avantages/icones : RER, horaires, equipe, accompagnement ;
- formulaire : prenom/nom, email, telephone, sujet, message ;
- selection du motif : patient, professionnel, presse, autre ;
- carte ou placeholder map ;
- confirmation apres envoi ;
- validation front simple des champs obligatoires.

### 8. Prendre rendez-vous

Page de reservation demo avec :
- calendrier mensuel ;
- navigation mois precedent/suivant ;
- choix d'une date ;
- choix d'un creneau ;
- choix du motif ;
- formulaire court : nom, email, telephone ;
- recapitulatif ;
- bouton confirmer ;
- ecran ou modale de confirmation ;
- etats : creneau selectionne, indisponible, erreur formulaire.

## Pages obligatoires - Parcours patient

### 9. Accueil parcours patient - Trouver mon accompagnement

Cette page doit avoir un header patient dedie.

Contenu :
- hero oriente patient ;
- promesse : aider la personne a trouver un accompagnement adapte ;
- CTA principal : `Commencer mon orientation`
- CTA secondaire : `Voir les therapeutes`
- sections : besoins frequents, programmes, therapeutes, temoignages.

### 10. Questionnaire d'orientation patient

Prototype interactif en plusieurs etapes :
- etape 1 : besoin principal ;
- etape 2 : objectif ;
- etape 3 : disponibilites ;
- etape 4 : preference accompagnement individuel / programme / atelier ;
- resultat : recommandations mockees.

Le resultat doit proposer :
- 2 ou 3 therapeutes ;
- 1 programme ;
- bouton `Prendre rendez-vous` ;
- bouton `Recevoir mon recapitulatif`.

### 11. Nos therapeutes

Annuaire demo :
- liste de therapeutes ;
- filtres par discipline ;
- filtres par disponibilite ;
- recherche ;
- carte profil ;
- detail profil ;
- CTA `Prendre rendez-vous`.

### 12. Nos programmes

Page programmes :
- cartes de programmes ;
- exemples : endometriose, minceur, gestion du stress, sommeil, equilibre emotionnel ;
- filtres ;
- detail programme ;
- CTA `Commencer` ou `Prendre rendez-vous`.

### 13. Mon KOTI - espace patient demo

Dashboard mocke :
- prochains rendez-vous ;
- programmes suivis ;
- documents ou guides ;
- messages ;
- favoris ;
- etat connecte/deconnecte simule ;
- bouton `Se connecter` ouvrant une modale factice.

### 14. Acteurs de la sante

Page partenariats / prescripteurs :
- presentation ;
- pourquoi orienter vers KOTI ;
- formulaire de contact pro sante ;
- ressources telechargeables factices ;
- CTA contact.

### 15. Boutique

Prototype boutique simple :
- grille produits ;
- categories ;
- fiche produit en modale ;
- panier mocke ;
- ajout/retrait quantite ;
- total ;
- bouton paiement factice ;
- message que le paiement n'est pas active en demo.

### 16. Vlog / Blog bien-etre

Page contenu editorial :
- grille articles/videos ;
- filtres ;
- detail article ou modale ;
- lecteur video placeholder ;
- newsletter.

## Pages obligatoires - Parcours professionnel

### 17. Accueil parcours professionnel - Installer mon activite au KOTI

Header professionnel dedie.

Contenu :
- hero oriente therapeuthe/professionnel ;
- promesse : developper son activite dans un lieu chaleureux et structure ;
- CTA principal : `Demander une visite`
- CTA secondaire : `Recevoir le guide d'installation`
- sections : espaces, services, communaute, tarifs, temoignages professionnels.

### 18. Nos espaces

Page espaces :
- galerie de salles ;
- cartes salles avec capacite, usage, equipements ;
- filtres : consultation, atelier, evenement ;
- detail salle ;
- CTA `Demander une visite`.

### 19. Tarifs professionnels

Page tarifs demo :
- cartes d'offres mockees ;
- location ponctuelle ;
- abonnement ;
- pack lancement ;
- tableau comparatif ;
- FAQ ;
- CTA `Etre recontacte`.

### 20. Guide d'installation

Page ou modale formulaire :
- explication du guide ;
- champs : nom, email, telephone, discipline, message ;
- case consentement ;
- confirmation apres envoi ;
- bouton telechargement factice.

### 21. Communaute professionnelle

Page demo :
- valeurs de la communaute ;
- avantages ;
- evenements ;
- temoignages de therapeutes ;
- CTA candidater.

## Pages utilitaires et etats obligatoires

### 22. FAQ

FAQ generale avec accordions :
- questions patients ;
- questions professionnels ;
- questions pratiques ;
- questions confidentialite.

### 23. Pages legales placeholder

Depuis le footer, prevoir des pages simples ou modales :
- Mentions legales ;
- CGV ;
- Politique de confidentialite ;
- Cookies ;
- Gestion des cookies.

Ne pas recopier tout le juridique du PDF dans la demo. Mettre seulement un placeholder propre indiquant que le contenu final sera integre.

### 24. Gestion des cookies

Creer un bandeau cookies demo :
- accepter ;
- refuser ;
- personnaliser ;
- modal de preferences ;
- categories : necessaires, mesure d'audience, contenus externes, publicite ;
- memorisation front dans l'etat local si possible.

### 25. Page 404

Page 404 personnalisee :
- message rassurant ;
- bouton retour accueil ;
- liens vers parcours patient et parcours professionnel.

## Navigation attendue

Tous les liens principaux doivent fonctionner dans la demo.

Le header general contient :
- Decouvrir le KOTI ;
- Notre vision ;
- Notre histoire ;
- Nos valeurs ;
- Notre equipe ;
- Nos actualites ;
- Prendre rendez-vous.

Le header patient contient :
- Trouver mon accompagnement ;
- Nos therapeutes ;
- Nos programmes ;
- Mon KOTI ;
- Acteurs de la sante ;
- Boutique ;
- Vlog ;
- Prendre rendez-vous.

Le header professionnel contient :
- Installer mon activite au KOTI ;
- Nos therapeutes ;
- Mon KOTI ;
- Nos espaces ;
- Tarifs ;
- Contact ;
- Prendre rendez-vous.

Sur mobile :
- utiliser un menu burger ;
- le menu doit etre lisible ;
- les CTA importants doivent rester accessibles.

## Fonctionnalites demo a implementer

Meme sans backend, rends ces fonctionnalites visibles et testables :

- navigation multi-pages ;
- menu mobile ;
- header sticky ;
- filtres sur annuaire therapeutes ;
- filtres sur actualites ;
- filtres sur programmes ;
- questionnaire patient multi-etapes ;
- resultats recommandes ;
- calendrier de rendez-vous ;
- selection de creneau ;
- formulaires avec validation front ;
- confirmation apres soumission ;
- modales de detail ;
- modale video ;
- panier boutique mocke ;
- onglets temoignages ;
- accordions FAQ ;
- bandeau cookies ;
- page 404 ;
- etats vides et messages d'erreur simples.

## Donnees mockees

Tu peux inventer des donnees temporaires coherentes :
- noms de therapeutes ;
- disciplines ;
- programmes ;
- actualites ;
- salles ;
- tarifs ;
- produits boutique ;
- temoignages.

Mais garde un ton realiste, professionnel et compatible avec KOTI.

Important :
- ne pas faire de promesses medicales excessives ;
- ne pas ecrire comme si le site remplacait un avis medical ;
- ne pas inventer de donnees legales definitives ;
- utiliser des mentions `demo` ou `placeholder` seulement quand c'est necessaire pour eviter la confusion.

## UX et accessibilite

Verifier :
- un seul H1 par page ;
- titres H2/H3 coherents ;
- boutons accessibles ;
- focus visible ;
- labels sur les formulaires ;
- textes alternatifs sur les images ;
- contraste suffisant ;
- navigation clavier raisonnable ;
- responsive soigne ;
- aucun scroll horizontal mobile ;
- aucun chevauchement de texte ;
- aucun bouton coupe.

## Performance et qualite frontend

Le code doit etre :
- propre ;
- structure ;
- maintenable ;
- facile a modifier ;
- avec composants reutilisables ;
- avec donnees centralisees ;
- sans dependances inutiles ;
- avec CSS organise ;
- responsive par conception.

Si possible, ajoute :
- animations subtiles ;
- transitions douces ;
- hover elegants ;
- skeletons ou placeholders propres si utile.

## Critere final

Je dois pouvoir ouvrir la demo, naviguer dans tout le site et comprendre :
- le parcours d'un patient ;
- le parcours d'un professionnel ;
- comment prendre rendez-vous ;
- comment chercher un therapeute ;
- comment consulter les programmes ;
- comment lire les actualites ;
- comment contacter KOTI ;
- comment la boutique pourrait fonctionner ;
- comment l'espace Mon KOTI pourrait fonctionner.

Le resultat doit donner l'impression d'un vrai site premium deja presque pret, meme si les donnees et le backend sont fictifs.

Commence directement par construire la demo complete. Ne te limite pas a une analyse du PDF.
