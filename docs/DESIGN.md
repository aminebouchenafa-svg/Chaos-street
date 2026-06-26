# 🎨 GUIDE DE DESIGN — DÉCIBELS & DÉCOMBRES

---

## 🃏 Template de carte (Membre)

Imagine la carte divisée en **4 zones horizontales** :

```
┌─────────────────────────────┐
│  SURNOM (gros gras)      [🎸]│  ← 1. IDENTITÉ
│  Nom réel (italique)         │     (icône famille en haut à droite)
├─────────────────────────────┤
│                             │
│      [ ILLUSTRATION ]       │  ← 2. ILLUSTRATION
│                             │
├─────────────────────────────┤
│ EN JEU : <effet du pouvoir> │  ← 3. POUVOIR POSÉ (fond clair)
├─────────────────────────────┤
│ COUP BAS : <effet>          │  ← 4. COUP BAS (bandeau couleur vive)
└─────────────────────────────┘
```

1. **Zone du Haut (Identité)** : surnom en **gros gras**, nom réel en *italique*
   dessous, icône de famille dans le coin supérieur droit (ex. une guitare pour
   les Rockers, un œil pour l'Occulte).
2. **Zone Centrale (Illustration)** : un espace dédié à l'illustration ou à une
   description du look (ex. « Marco avec sa Gibson brisée »).
3. **Zone « Pouvoir Posé »** : fond de couleur claire, texte **« En Jeu : »** suivi
   de l'effet.
4. **Zone « Coup Bas »** : bandeau de couleur vive contrastée (ex. rouge vif) en
   bas, texte **« Coup Bas : »** suivi de l'effet.

### Exemple concret

```
┌─────────────────────────────┐
│  MARCO « LE SACCAGEUR »  [🎸]│
│  Papa Rocker                │
├─────────────────────────────┤
│      (Espace illustration)  │
│   Marco & sa Gibson brisée  │
├─────────────────────────────┤
│ EN JEU : Solo de 10 min –   │
│ Tu joues une carte          │
│ supplémentaire immédiatement│
├─────────────────────────────┤
│ COUP BAS : Retour de Larsen │
│ – Annule l'action d'un      │
│ adversaire.                 │
└─────────────────────────────┘
```

---

## 🌈 Code couleur par famille

| Famille | Ambiance | Couleurs |
|---------|----------|----------|
| 🎸 **Electro-Rockers** | Néon / Électrique | **Violet** ou **Jaune** |
| 🔮 **Excentriques de l'Occulte** | Mystique | **Noir** ou **Indigo** |
| 🛹 **Sportifs Extrêmes** | Dynamique | **Orange** ou **Bleu électrique** |
| 🔧 **Collectionneurs de Bazar** | Industriel | **Gris** ou **Marron / Rouille** |

---

## 🔠 Iconographie & lisibilité

- **Iconographie** : utilise des **symboles simples** au lieu de longs textes pour
  les conditions. Par exemple, un petit symbole de **« main barrée »** pour
  signifier « défausser ».
- **Lisibilité** : police très lisible type **Montserrat** ou **Roboto**. Dans ce
  jeu, on doit pouvoir lire les cartes des voisins **rapidement** pour interagir.
- **Surnoms** : inscris le surnom en gras en haut de la carte pour que les joueurs
  s'interpellent par leur surnom (« Je joue Le Sergent pour bloquer ton
  Saccageur ! ») — ça rend les interactions beaucoup plus vivantes.

---

## 🖼️ Descriptions visuelles des personnages

### 🎸 Famille 1 — Les Electro-Rockers

> **Style visuel** : Cartoon 3D (type Pixar), formes exagérées, couleurs vives et
> saturées, éclairage « scène de concert ».
> **Dominante** : Violet Néon & Jaune Électrique.

| Personnage | Look & détail | Couleur |
|------------|---------------|---------|
| **Marco** « Le Saccageur » (Papa) | Grand gaillard, crête violette dressée toute seule, perfecto cuir trop serré couvert de badges. Expression de concentration extrême, mèche rebelle sur le nez, serre sa guitare en forme d'éclair comme son bébé. | Veste cuir violet foncé, badges jaune vif |
| **Rita** « Flingue-fûts » (Maman) | Maman rockeuse, lunettes en forme d'étoile sur la tête, tee-shirt « Maman Rock » à crâne rigolo. Baguettes de batterie dans les poches arrière, petit sourire malicieux, prête à tout démolir. | Tee-shirt jaune, pantalon violet |
| **Kevin** « Le Fracasse » (Ado) | Ado dégingandé, casque audio gigantesque autour du cou, sweat à capuche violet qui tombe sur les yeux. Toujours un smartphone à la main pour filmer le chaos, baskets beaucoup trop grandes. | Sweat violet, casque jaune |
| **Lulu** « Loop-Machine » (DJ) | Petite fille, couettes violettes dressées par l'électricité statique, mini-synthé portatif autour du cou. Joues toutes rondes, regard très sérieux comme si elle mixait le morceau de sa vie. | Robe jaune, accessoires violets |
| **Sam** « Le Bagagiste » (Roadie) | Ado costaud portant une pile de flight-cases plus haute que lui, gilet de sécurité jaune fluo par-dessus un tee-shirt violet. Transpire avec une grosse goutte sur le front, mais super enthousiaste. | Gilet jaune fluo, tee-shirt violet |
| **Timmy** « Le Hurleur » (Bébé) | Tout petit bébé en couche violette, déjà une mèche de cheveux en l'air. Tient un biberon en forme de microphone, bouche grande ouverte comme s'il hurlait, mais avec une tête d'ange. | Couche violette, biberon jaune |

> Les descriptions visuelles des familles 2, 3 et 4 sont à compléter sur le même
> modèle (look + détail cartoon + couleurs).

---

## 🛠️ Comment générer les visuels

1. **Génération IA** : utilise un outil comme Midjourney ou DALL·E avec un prompt
   type :
   > `3D Disney Pixar style character, [Nom], [Description], colorful, bright lighting, high quality.`
2. **Intégration** : une fois les images générées, intègre-les dans le projet
   (Flutter / web) avec les codes couleur ci-dessus pour le texte et les bordures
   des cartes.
3. **Automatisation** : un script simple (Python ou HTML/JS) peut générer toutes
   les cartes à partir des fichiers CSV ([`data/master-deck.csv`](../data/master-deck.csv)
   et [`data/actions.csv`](../data/actions.csv)).
