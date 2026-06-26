# 🎶💥 DÉCIBELS & DÉCOMBRES 💥🎶
### *Bienvenue à Chaos Street : le quartier où la vie privée n'existe plus.*

> *« Ici, on ne demande pas de baisser le son. On coupe le courant. »*

---

Un jeu de cartes **rapide, déjanté et interactif** pour 2 à 4 joueurs, basé sur le
**Draft**, le **Set Collection** et les **coups bas constants**. Quatre familles
totalement dysfonctionnelles emménagent en même temps à Chaos Street. Votre but :
faire craquer les nerfs de vos voisins pour qu'ils plient bagage et devenir le
**Propriétaire Unique** du quartier.

| | |
|---|---|
| **Joueurs** | 2 à 4 |
| **Durée** | 15–30 min |
| **Mécaniques** | Draft · Set Collection · Take That · Push your luck |
| **Matériel** | 24 cartes Membres · 16 cartes Action · 1 Baromètre de Tolérance · 4 pions |

---

## 📚 Le dossier de conception

Ce dépôt contient le **dossier complet** du jeu, restructuré et prêt pour le
prototypage.

| Document | Contenu |
|----------|---------|
| **[docs/REGLES.md](docs/REGLES.md)** | Livret de règles complet (introduction, mise en place, tour de jeu, scoring, fin de partie) |
| **[docs/FAMILLES.md](docs/FAMILLES.md)** | Les 4 familles détaillées : 24 personnages, Pouvoirs « En Jeu » + « Coups Bas », synergies |
| **[docs/CARTES-ACTION.md](docs/CARTES-ACTION.md)** | Le deck du chaos : 16 cartes Action + cartes Événement |
| **[docs/DESIGN.md](docs/DESIGN.md)** | Template de carte, code couleur, iconographie, descriptions visuelles |
| **[docs/AIDE-MEMOIRE.md](docs/AIDE-MEMOIRE.md)** | La carte récap (format tarot) à distribuer aux joueurs |
| **[data/master-deck.csv](data/master-deck.csv)** | La base de données source des 24 membres (pour générer les cartes) |
| **[data/actions.csv](data/actions.csv)** | La base de données source des 16 cartes Action |

---

## 🎯 En une phrase

Construisez votre famille pour faire monter votre **Indice de Nuisance** jusqu'à
**100**, sabotez vos voisins à coups de **Coups Bas** et de **cartes Action**…
mais ne dépassez jamais **80 points** sous peine de **Crash Sonore** : la police
débarque et vous perdez la moitié de vos atouts.

## 🗺️ Feuille de route de prototypage

1. **Master Deck** — la base de données source est déjà dans [`data/`](data/).
2. **Génération des visuels** — un script (Python ou HTML/JS) peut générer les
   cartes à partir des CSV en suivant le [template](docs/DESIGN.md).
3. **Test « à blanc »** — dessiner les cartes à la main et jouer une partie solo
   pour vérifier l'équilibrage (vitesse de montée du score, puissance des familles).
4. **Application compagnon (PWA / Flutter)** — un compteur Baromètre 0–100, un
   historique des actions, et un bouton « Aléas » qui tire une carte Action au hasard.
