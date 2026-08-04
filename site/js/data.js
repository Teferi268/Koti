/* ==========================================================================
   KOTI 2.0 — Données mockées (démo frontend, aucun backend)
   Toutes les données ci-dessous sont fictives et destinées uniquement à
   illustrer le fonctionnement des pages. À remplacer par de vraies données
   (CMS / API) lors de l'intégration finale.
   ========================================================================== */
(function () {
  'use strict';

  var tones = ['sage', 'gold', 'sand'];

  var therapeutes = [
    { id: 't1', nom: 'Camille Rivière', discipline: 'Naturopathie', tone: 'sage',
      bio: 'Accompagne les déséquilibres digestifs et la fatigue chronique par une approche naturelle.',
      dispo: ['Lun', 'Mer', 'Ven'], depuis: 2021 },
    { id: 't2', nom: 'Antoine Lefèvre', discipline: 'Sophrologie', tone: 'gold',
      bio: 'Aide à gérer le stress et l\'anxiété par des exercices de respiration et de relaxation.',
      dispo: ['Mar', 'Jeu', 'Sam'], depuis: 2022 },
    { id: 't3', nom: 'Léa Bertrand', discipline: 'Ostéopathie', tone: 'sand',
      bio: 'Prend en charge les douleurs articulaires, musculaires et les troubles posturaux.',
      dispo: ['Lun', 'Mar', 'Jeu'], depuis: 2020 },
    { id: 't4', nom: 'Nadia Chraïbi', discipline: 'Psychologie', tone: 'sage',
      bio: 'Psychologue clinicienne, accompagne les périodes de transition et le mal-être émotionnel.',
      dispo: ['Mer', 'Ven'], depuis: 2023 },
    { id: 't5', nom: 'Julien Faure', discipline: 'Acupuncture', tone: 'gold',
      bio: 'Praticien en médecine traditionnelle chinoise, spécialisé dans la gestion de la douleur.',
      dispo: ['Lun', 'Jeu', 'Sam'], depuis: 2019 },
    { id: 't6', nom: 'Sarah Weiss', discipline: 'Coaching bien-être', tone: 'sand',
      bio: 'Coach certifiée, aide à retrouver énergie et motivation au quotidien.',
      dispo: ['Mar', 'Mer', 'Ven'], depuis: 2022 },
    { id: 't7', nom: 'Karim Belkacem', discipline: 'Kinésithérapie', tone: 'sage',
      bio: 'Kinésithérapeute du sport, rééducation et prévention des blessures.',
      dispo: ['Lun', 'Mer', 'Sam'], depuis: 2021 },
    { id: 't8', nom: 'Élise Fontaine', discipline: 'Nutrition', tone: 'gold',
      bio: 'Diététicienne-nutritionniste, accompagnement personnalisé sans régime restrictif.',
      dispo: ['Mar', 'Jeu', 'Ven'], depuis: 2023 }
  ];

  var disciplines = Array.from(new Set(therapeutes.map(function (t) { return t.discipline; })));

  var programmes = [
    { id: 'p1', titre: 'Métamorphose M360', categorie: 'Silhouette & bien-être', duree: '8 semaines', format: 'Programme',
      accroche: 'Accompagner une évolution globale du bien-être physique, émotionnel et mental.',
      description: 'Un programme complet mêlant acupression, rééquilibrage alimentaire doux et exercices guidés, pensé pour transformer durablement la relation à son corps sans injonction de résultat.', tone: 'sage' },
    { id: 'p2', titre: 'Règles & Endométriose', categorie: 'Santé féminine', duree: '6 semaines', format: 'Programme',
      accroche: 'Un accompagnement dédié aux femmes souffrant de règles douloureuses ou d\'endométriose.',
      description: 'Acupression ciblée, rééquilibrage hormonal doux et gestes bien-être à intégrer facilement au quotidien, en lien avec l\'équipe médicale de la patiente.', tone: 'gold' },
    { id: 'p3', titre: 'Sommeil Serein', categorie: 'Sommeil', duree: '4 semaines', format: 'Programme',
      accroche: 'Retrouver un sommeil réparateur grâce à une routine progressive et personnalisée.',
      description: 'Sophrologie, respiration et hygiène de sommeil pour sortir durablement des cycles d\'insomnie légère à modérée.', tone: 'sand' },
    { id: 'p4', titre: 'Équilibre Émotionnel', categorie: 'Stress & émotions', duree: '6 semaines', format: 'Atelier',
      accroche: 'Apprendre à mieux traverser les périodes de stress et de charge mentale.',
      description: 'Ateliers collectifs animés par nos psychologues et sophrologues autour de la régulation émotionnelle.', tone: 'sage' },
    { id: 'p5', titre: 'Renaissance Post-Partum', categorie: 'Parentalité', duree: '10 semaines', format: 'Individuel',
      accroche: 'Accompagner le corps et l\'esprit dans les mois qui suivent l\'accouchement.',
      description: 'Un parcours individuel associant kinésithérapie douce, soutien psychologique et nutrition adaptée à l\'allaitement.', tone: 'gold' }
  ];

  var actualites = [
    { id: 'a1', titre: 'Portes ouvertes au KOTI', categorie: 'Événements', date: '2025-06-15',
      excerpt: 'Une journée pour découvrir nos espaces, rencontrer l\'équipe et ressentir l\'énergie du lieu.',
      content: 'Venez découvrir le KOTI le temps d\'une journée portes ouvertes : visite libre des espaces, rencontre avec les thérapeutes, mini-ateliers de sophrologie et d\'acupression, et échanges autour d\'un moment convivial. Entrée libre, sur inscription conseillée.', featured: true, tone: 'sand' },
    { id: 'a2', titre: 'Bien démarrer l\'automne en douceur', categorie: 'Bien-être', date: '2025-09-20',
      excerpt: 'Trois rituels simples pour accompagner le changement de saison sans bousculer son corps.', tone: 'sage' },
    { id: 'a3', titre: 'Nouveau programme : Sommeil Serein', categorie: 'Programmes', date: '2025-05-02',
      excerpt: 'Un accompagnement de 4 semaines pour sortir durablement des nuits agitées.', tone: 'gold' },
    { id: 'a4', titre: 'Deux nouveaux thérapeutes rejoignent le KOTI', categorie: 'Vie du KOTI', date: '2025-04-11',
      excerpt: 'Julien et Élise complètent notre équipe pluridisciplinaire en acupuncture et nutrition.', tone: 'sand' },
    { id: 'a5', titre: '5 gestes d\'acupression anti-stress', categorie: 'Bien-être', date: '2025-03-18',
      excerpt: 'À pratiquer chez soi en cinq minutes, entre deux réunions ou avant de dormir.', tone: 'sage' },
    { id: 'a6', titre: 'Le KOTI fête sa première année', categorie: 'Vie du KOTI', date: '2025-02-01',
      excerpt: 'Retour en images sur douze mois d\'accompagnement au cœur de Nogent-sur-Marne.', tone: 'gold' }
  ];

  var actualitesCategories = Array.from(new Set(actualites.map(function (a) { return a.categorie; })));

  var salles = [
    { id: 's1', nom: 'Salle Lotus', usage: 'Consultation', capacite: '1 à 2 personnes',
      equipements: ['Table de soin', 'Lumière tamisable', 'Point d\'eau'], tone: 'sage',
      description: 'Un cabinet intimiste, idéal pour les consultations individuelles en naturopathie, ostéopathie ou nutrition.' },
    { id: 's2', nom: 'Atelier Sauge', usage: 'Atelier', capacite: 'Jusqu\'à 10 personnes',
      equipements: ['Tapis fournis', 'Sono', 'Rangement matériel'], tone: 'gold',
      description: 'Un espace modulable pour les ateliers de sophrologie, yoga doux ou groupes de parole.' },
    { id: 's3', nom: 'Espace Lumière', usage: 'Événement', capacite: 'Jusqu\'à 40 personnes',
      equipements: ['Vidéoprojecteur', 'Mobilier modulable', 'Accès traiteur'], tone: 'sand',
      description: 'Le grand espace baigné de lumière naturelle, parfait pour les conférences et journées portes ouvertes.' },
    { id: 's4', nom: 'Cabine Zen', usage: 'Consultation', capacite: '1 personne',
      equipements: ['Table de massage', 'Diffuseur d\'huiles', 'Musique douce'], tone: 'sage',
      description: 'Une cabine feutrée dédiée aux soins manuels : massage, acupuncture, kinésithérapie.' }
  ];

  var tarifsPro = [
    { id: 'ponctuel', titre: 'Location ponctuelle', prix: '35€', unite: '/ créneau (2h)',
      desc: 'Idéal pour tester le KOTI ou compléter un planning déjà bien rempli ailleurs.',
      inclus: ['Accès à la salle réservée', 'Ligne annuaire "invité"', 'Wifi & point d\'eau'] },
    { id: 'abonnement', titre: 'Abonnement mensuel', prix: '290€', unite: '/ mois', featured: true,
      desc: 'La formule la plus choisie par les thérapeutes qui s\'installent durablement au KOTI.',
      inclus: ['2 demi-journées / semaine', 'Fiche annuaire complète', 'Communication mutualisée', 'Accès communauté KOTeam'] },
    { id: 'pack', titre: 'Pack lancement', prix: '190€', unite: '/ mois pendant 3 mois',
      desc: 'Pensé pour démarrer sereinement une nouvelle activité au KOTI.',
      inclus: ['1 demi-journée / semaine', 'Accompagnement administratif de démarrage', 'Mise en avant "nouveau praticien"'] }
  ];

  var comparatifRows = [
    { label: 'Accès aux salles de soin', ponctuel: true, abonnement: true, pack: true },
    { label: 'Fiche sur l\'annuaire KOTI', ponctuel: false, abonnement: true, pack: true },
    { label: 'Communication mutualisée', ponctuel: false, abonnement: true, pack: false },
    { label: 'Accompagnement administratif', ponctuel: false, abonnement: false, pack: true },
    { label: 'Communauté KOTeam', ponctuel: false, abonnement: true, pack: true },
    { label: 'Tarif dégressif au volume', ponctuel: false, abonnement: true, pack: false }
  ];

  var produits = [
    { id: 'pr1', nom: 'Huile essentielle relaxante', categorie: 'Rituel', prix: '18,00 €', tone: 'sage',
      desc: 'Mélange apaisant lavande & camomille, à diffuser le soir.' },
    { id: 'pr2', nom: 'Tisane Nuit Sereine', categorie: 'Rituel', prix: '12,50 €', tone: 'gold',
      desc: 'Infusion bio tilleul, verveine et fleur d\'oranger.' },
    { id: 'pr3', nom: 'Coussin de méditation', categorie: 'Bien-être', prix: '39,00 €', tone: 'sand',
      desc: 'Galette en lin épais, garnissage naturel, coloris sauge.' },
    { id: 'pr4', nom: 'Carnet Bien-être KOTI', categorie: 'Bien-être', prix: '14,00 €', tone: 'sage',
      desc: 'Carnet guidé pour suivre son sommeil, son énergie et ses émotions.' },
    { id: 'pr5', nom: 'Bougie parfumée Cocon', categorie: 'Rituel', prix: '22,00 €', tone: 'gold',
      desc: 'Cire végétale, senteur bois de santal et fleur de coton.' },
    { id: 'pr6', nom: 'Kit d\'acupression', categorie: 'Bien-être', prix: '28,00 €', tone: 'sand',
      desc: 'Balles et guide illustré pour une auto-pratique quotidienne.' },
    { id: 'pr7', nom: 'Huile de massage Douceur', categorie: 'Rituel', prix: '24,00 €', tone: 'sage',
      desc: 'Formule nourrissante amande douce et fleur de karité.' },
    { id: 'pr8', nom: 'Carte cadeau KOTI', categorie: 'Cadeau', prix: 'à partir de 30,00 €', tone: 'gold',
      desc: 'Valable sur toutes les séances et tous les programmes du KOTI.' }
  ];

  var produitsCategories = Array.from(new Set(produits.map(function (p) { return p.categorie; })));

  var articlesBlog = [
    { id: 'b1', titre: 'Cinq minutes pour souffler entre deux réunions', categorie: 'Bien-être', type: 'Article', tone: 'sage',
      excerpt: 'Une micro-pause de respiration à glisser dans une journée chargée.' },
    { id: 'b2', titre: 'Interview vidéo : la sophrologie expliquée simplement', categorie: 'Vidéo', type: 'Vidéo', tone: 'gold',
      excerpt: 'Antoine, sophrologue au KOTI, répond aux questions les plus fréquentes.' },
    { id: 'b3', titre: 'Manger de saison sans complexité', categorie: 'Nutrition', type: 'Article', tone: 'sand',
      excerpt: 'Les conseils d\'Élise pour composer des assiettes simples et équilibrées.' },
    { id: 'b4', titre: 'Visite guidée : dans les coulisses du KOTI', categorie: 'Vie du KOTI', type: 'Vidéo', tone: 'sage',
      excerpt: 'Une immersion de trois minutes dans nos espaces de soin.' },
    { id: 'b5', titre: 'Pourquoi le sommeil se travaille comme un muscle', categorie: 'Sommeil', type: 'Article', tone: 'gold',
      excerpt: 'Les bases d\'une bonne hygiène de sommeil, expliquées simplement.' },
    { id: 'b6', titre: 'Acupression : 3 points à connaître', categorie: 'Bien-être', type: 'Article', tone: 'sand',
      excerpt: 'De quoi calmer une migraine naissante ou une nausée légère.' }
  ];

  var temoignagesClients = [
    { nom: 'Sophie L.', role: 'Cliente KOTI', initiales: 'SL',
      texte: 'Le KOTI a vraiment eu un impact positif sur ma vie. J\'y ai trouvé des thérapeutes formidables et une écoute bienveillante à chaque étape.' },
    { nom: 'Hugo M.', role: 'Client KOTI', initiales: 'HM',
      texte: 'Un lieu qui ne ressemble à aucun autre : chaleureux, exigeant sur la qualité des soins, et jamais culpabilisant.' },
    { nom: 'Fatou D.', role: 'Cliente KOTI', initiales: 'FD',
      texte: 'J\'ai suivi le programme Sommeil Serein : quatre semaines qui ont changé mes nuits durablement.' }
  ];

  var temoignagesTherapeutes = [
    { nom: 'Marc D.', role: 'Thérapeute au KOTI', initiales: 'MD',
      texte: 'Rejoindre le KOTI, c\'est intégrer un lieu vivant où chaque praticien est écouté, soutenu et libre d\'exercer avec exigence.' },
    { nom: 'Camille R.', role: 'Naturopathe au KOTI', initiales: 'CR',
      texte: 'Le cadre administratif est simple, la communauté est solide : je peux me concentrer sur mes patients.' }
  ];

  var faq = [
    { categorie: 'Patients', items: [
      { q: 'Comment choisir le bon thérapeute ?', r: 'Le questionnaire d\'orientation vous propose une sélection adaptée à votre besoin en quelques minutes. Vous pouvez aussi consulter l\'annuaire complet et filtrer par discipline.' },
      { q: 'Faut-il une ordonnance pour consulter au KOTI ?', r: 'Non, la plupart des accompagnements sont accessibles librement. Certains praticiens peuvent recommander un avis médical complémentaire selon votre situation.' },
      { q: 'Puis-je annuler ou déplacer un rendez-vous ?', r: 'Oui, directement depuis votre espace Mon KOTI ou en nous contactant au moins 24h à l\'avance.' }
    ]},
    { categorie: 'Professionnels', items: [
      { q: 'Comment rejoindre la communauté de thérapeutes ?', r: 'Remplissez le formulaire "Recevoir le guide d\'installation" : notre équipe vous recontacte sous 48h pour organiser une visite.' },
      { q: 'Les salles sont-elles disponibles à la demande ?', r: 'Selon la formule choisie, l\'accès se fait sur créneaux réservés à l\'avance depuis votre espace professionnel.' }
    ]},
    { categorie: 'Pratique', items: [
      { q: 'Où se situe le KOTI ?', r: '188 Grande Rue Charles de Gaulle, 94130 Nogent-sur-Marne, au pied du RER E.' },
      { q: 'Le KOTI est-il accessible PMR ?', r: 'Oui, l\'ensemble des espaces est accessible aux personnes à mobilité réduite.' }
    ]},
    { categorie: 'Confidentialité', items: [
      { q: 'Mes échanges avec un thérapeute sont-ils confidentiels ?', r: 'Oui. Chaque praticien est soumis au secret professionnel propre à sa discipline.' },
      { q: 'Que devient mon formulaire de contact ?', r: 'Il est utilisé uniquement pour traiter votre demande, conformément à notre politique de confidentialité (voir footer).' }
    ]}
  ];

  var equipe = [
    { nom: 'Charline', role: 'Cofondatrice', tone: 'sage', bio: '16 années dans l\'éducation et le développement personnel, au service d\'un environnement où chacun se sent compris.' },
    { nom: 'Yoann', role: 'Cofondateur', tone: 'gold', bio: 'Voyageur passionné, il s\'inspire des cultures du monde pour créer des espaces empreints de sérénité.' }
  ];

  window.KOTI = window.KOTI || {};
  window.KOTI.data = {
    tones: tones,
    therapeutes: therapeutes,
    disciplines: disciplines,
    programmes: programmes,
    actualites: actualites,
    actualitesCategories: actualitesCategories,
    salles: salles,
    tarifsPro: tarifsPro,
    comparatifRows: comparatifRows,
    produits: produits,
    produitsCategories: produitsCategories,
    articlesBlog: articlesBlog,
    temoignagesClients: temoignagesClients,
    temoignagesTherapeutes: temoignagesTherapeutes,
    faq: faq,
    equipe: equipe
  };
})();
