// ============================================================
//  DÉCIBELS & DÉCOMBRES — Données du jeu
//  Source de vérité : data/master-deck.csv & data/actions.csv
// ============================================================

export const FAMILIES = {
  rockers: {
    id: "rockers",
    name: "Les Electro-Rockers",
    icon: "🎸",
    tagline: "La famille qui vit à 120 décibels.",
    power: "Ampli à 11 : force les autres joueurs à défausser une carte au hasard.",
    color: "#8b2fd6",        // violet néon
    accent: "#ffe600",       // jaune électrique
  },
  occulte: {
    id: "occulte",
    name: "Les Excentriques de l'Occulte",
    icon: "🔮",
    tagline: "La famille qui fait tourner les tables.",
    power: "Malédiction : permet de voler une carte dans la main d'un adversaire.",
    color: "#3a2c6e",        // indigo
    accent: "#9d7bff",
  },
  sportifs: {
    id: "sportifs",
    name: "Les Sportifs Extrêmes",
    icon: "🛹",
    tagline: "La famille qui transforme le jardin en parcours d'obstacles.",
    power: "Accident de parcours : annule l'effet d'une carte jouée par un adversaire.",
    color: "#ff7a18",        // orange
    accent: "#1f8fff",       // bleu électrique
  },
  collectionneurs: {
    id: "collectionneurs",
    name: "Les Collectionneurs de Bazar",
    icon: "🔧",
    tagline: "La famille qui entasse tout et n'importe quoi.",
    power: "Bric-à-brac : permet de piocher deux cartes dans la défausse.",
    color: "#6e6155",        // gris
    accent: "#a9572b",       // rouille
  },
};

// 24 membres — surnom, nom, rôle, pouvoir en jeu, coup bas
export const MEMBERS = [
  // 🎸 Electro-Rockers
  { family: "rockers", surnom: "Le Saccageur", nom: "Marco", role: "Papa / Guitariste",
    enJeu: "Solo de 10 min : tu joues une carte supplémentaire immédiatement.",
    coupBas: "Retour de Larsen : annule l'action d'un adversaire." },
  { family: "rockers", surnom: "Flingue-fûts", nom: "Rita", role: "Maman / Batteuse",
    enJeu: "Rythme effréné : tu pioches 2 cartes, puis tu défausses 1.",
    coupBas: "Double pédale : vole 1 membre chez un voisin." },
  { family: "rockers", surnom: "Le Fracasse", nom: "Kevin", role: "Ado rebelle",
    enJeu: "Fête clandestine : annule le Pouvoir de Quartier adverse.",
    coupBas: "Câble coupé : force un voisin à défausser sa main." },
  { family: "rockers", surnom: "Loop-Machine", nom: "Lulu", role: "DJ en herbe",
    enJeu: "Remix : échange la position de 2 cartes sur la table.",
    coupBas: "Basses saturées : tous les joueurs passent leur main au voisin de gauche." },
  { family: "rockers", surnom: "Le Bagagiste", nom: "Sam", role: "Roadie",
    enJeu: "Matos : récupère une carte de la défausse en main.",
    coupBas: "Casse de matos : oblige un adversaire à défausser une carte Membre." },
  { family: "rockers", surnom: "Le Hurleur", nom: "Timmy", role: "Petit dernier / Death Metal",
    enJeu: "Hurlante : ton score de nuisance ne compte pas pour ce tour.",
    coupBas: "Pleurs stridents : annule tout le score de nuisance d'un adversaire ce tour-ci." },

  // 🔮 Occulte
  { family: "occulte", surnom: "L'Ombre", nom: "Archibald", role: "Grand-père / Sorcier",
    enJeu: "Rituel de protection : tes membres ne peuvent pas être ciblés par un Coup Bas adverse.",
    coupBas: "Invocation : regarde les 5 premières cartes de la pioche et place-les dans l'ordre de ton choix." },
  { family: "occulte", surnom: "Cosmos", nom: "Gladys", role: "Tante / Astrologue",
    enJeu: "Alignement des planètes : change la couleur/famille d'un de tes membres pour un tour.",
    coupBas: "Éclipse : force un adversaire à sauter son tour." },
  { family: "occulte", surnom: "La Funèbre", nom: "Morticia", role: "Gothique 1",
    enJeu: "Lecture d'aura : vois la main d'un adversaire.",
    coupBas: "Esprit frappeur : annule le score d'un membre adverse." },
  { family: "occulte", surnom: "Le Spectre", nom: "Balthazar", role: "Gothique 2",
    enJeu: "Lévitation : déplace un de tes membres posés vers un autre emplacement.",
    coupBas: "Apparition : échange ton score avec celui d'un adversaire." },
  { family: "occulte", surnom: "La Nébuleuse", nom: "Lilith", role: "Gothique 3",
    enJeu: "Cercle magique : une fois par tour, pioche une carte si tu subis une attaque.",
    coupBas: "Disparition : le dernier membre posé par ton adversaire retourne dans sa main." },
  { family: "occulte", surnom: "Le Sanglant", nom: "Vlad", role: "Gothique 4",
    enJeu: "Transmutation : transforme un Coup Bas adverse en carte Membre pour toi.",
    coupBas: "Baiser du vampire : vole 10 points de Nuisance à un adversaire." },

  // 🛹 Sportifs
  { family: "sportifs", surnom: "Le Sergent", nom: "Victor", role: "Coach",
    enJeu: "Entraînement intensif : pose deux membres Sportifs d'un coup s'ils ont un surnom à 3 lettres (Max, Tom, Kim, Zoé).",
    coupBas: "Carton Rouge : bloque un pouvoir de famille actif d'un adversaire pour le reste de la manche." },
  { family: "sportifs", surnom: "Le Voltigeur", nom: "Jack", role: "Oncle / Cascadeur",
    enJeu: "Saut de haie : vole une carte directement dans la défausse d'un joueur.",
    coupBas: "Trampoline : renvoie un Coup Bas reçu directement à l'envoyeur." },
  { family: "sportifs", surnom: "Le Grind", nom: "Max", role: "Skateur",
    enJeu: "Rampe de lancement : si tu pioches un autre Sportif, pose-le immédiatement gratuitement.",
    coupBas: "Vitesse de pointe : rejoue immédiatement un tour complet après celui-ci." },
  { family: "sportifs", surnom: "Le Ressort", nom: "Zoé", role: "Parkour",
    enJeu: "Agilité : tu es totalement immunisé contre les vols de cartes.",
    coupBas: "Esquive : annule le dernier Coup Bas qui te ciblait et pioche 1 carte." },
  { family: "sportifs", surnom: "Nitro", nom: "Tom", role: "BMX",
    enJeu: "Roue arrière : double les points de nuisance de ton prochain membre posé.",
    coupBas: "Saut d'obstacle : regarde la main d'un joueur et force-le à défausser sa carte la plus forte." },
  { family: "sportifs", surnom: "La Ventouse", nom: "Kim", role: "Escalade",
    enJeu: "Prise solide : un de tes membres en jeu ne peut plus être retiré, volé ou détruit.",
    coupBas: "Rappel : reprends en main un de tes membres déjà posés." },

  // 🔧 Collectionneurs
  { family: "collectionneurs", surnom: "La Fouineuse", nom: "Odette", role: "Maman / Antiquaire",
    enJeu: "Brocante : échange une carte de ta main avec une carte visible de la défausse générale.",
    coupBas: "Vide-poches : force un adversaire à défausser 2 cartes au hasard et à piocher 2 cartes de la défausse." },
  { family: "collectionneurs", surnom: "Le Vide-Grenier", nom: "Berthe", role: "Grand-mère / Accumulatrice",
    enJeu: "Invasion : tant qu'elle est en jeu, la limite de main de TOUS les autres joueurs passe à 3.",
    coupBas: "Montagne de détritus : bloque la pioche générale pour un tour ; les joueurs piochent dans la défausse." },
  { family: "collectionneurs", surnom: "Le Rafistoleur", nom: "Gaspard", role: "Bricoleur 1",
    enJeu: "Seconde vie : copie le pouvoir d'un membre présent dans la défausse.",
    coupBas: "Pièce détachée : protège un de tes membres en défaussant Gaspard à la place." },
  { family: "collectionneurs", surnom: "La Rouille", nom: "Hector", role: "Bricoleur 2",
    enJeu: "Tétanos : chaque joueur qui te vole une carte ou un membre perd 10 points.",
    coupBas: "Benne à ordure : mélange de force 3 cartes de la défausse dans la main d'un adversaire." },
  { family: "collectionneurs", surnom: "La Récup", nom: "Clara", role: "Bricoleuse 3",
    enJeu: "Tri sélectif : regarde les 3 dernières cartes défaussées, prends-en une, remets les autres.",
    coupBas: "Troque : échange un membre faible de ton jeu contre un membre fort d'un adversaire." },
  { family: "collectionneurs", surnom: "Le Chipeur", nom: "Félix", role: "Bricoleur 4",
    enJeu: "Vol à l'étalage : pioche une carte dans la main du joueur qui a le plus de points.",
    coupBas: "Camouflage : échange Félix avec un membre adverse déjà posé sur la table." },
];

// 16 cartes Action (8 × 2 exemplaires) — img = assets/cards/actions/<slug>.png
export const ACTIONS = [
  { nom: "Pétition contre le bruit", slug: "petition", effet: "Le joueur avec le plus haut score de nuisance défausse immédiatement un membre en jeu." },
  { nom: "Dégâts des eaux", slug: "degats-eaux", effet: "Annule le pouvoir de quartier de tous les joueurs ce tour. Chacun pose une carte face cachée." },
  { nom: "Réunion de copropriété", slug: "reunion-copropriete", effet: "Tous les joueurs passent leur main entière au joueur de gauche." },
  { nom: "Police municipale en patrouille", slug: "police", effet: "Tous les joueurs au-dessus de 60 reculent leur score de 20 points." },
  { nom: "Échange de maison", slug: "echange-maison", effet: "Échange tous tes membres posés avec ceux d'un autre joueur." },
  { nom: "Fête surprise", slug: "fete-surprise", effet: "Pioche 3 cartes. Pose-en une immédiatement, même hors de ton tour." },
  { nom: "Panne générale de courant", slug: "panne-courant", effet: "Toutes les cartes Pouvoir en jeu sont annulées jusqu'au prochain tour." },
  { nom: "Le Voisin dénonciateur", slug: "voisin-denonciateur", effet: "Regarde la main d'un joueur, choisis une carte, force la défausse sans Coup Bas." },
];

// 2 cartes Événement — img = assets/cards/events/<slug>.png
export const EVENTS = [
  { nom: "Coupure d'électricité", slug: "coupure-electricite", effet: "Les Electro-Rockers ne peuvent plus utiliser leurs pouvoirs." },
  { nom: "Pluie battante", slug: "pluie-battante", effet: "Les Sportifs Extrêmes perdent leurs bonus de déplacement." },
];

// Plateau de jeu
export const BOARD = "assets/board/plateau-chaos-street.png";

// Constantes de scoring
export const SCORING = {
  WIN: 100,
  CRASH_THRESHOLD: 80,   // au-dessus = Crash Sonore
  CRASH_RESET: 40,       // score après crash
  POLICE_THRESHOLD: 60,
  POLICE_FINE: 20,
  MIN_MEMBERS_TO_WIN: 4,
};
