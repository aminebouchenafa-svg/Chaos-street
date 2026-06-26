# 📱 Application compagnon — Décibels & Décombres (PWA)

Une **Progressive Web App** (HTML/CSS/JS pur, sans build) pour accompagner les
parties de *Chaos Street*.

## Fonctionnalités

- 🎯 **Baromètre de Tolérance** par joueur (0 → 100) avec boutons rapides
  (+1 / +3 / +5 / −1 / −2 / amende police −20).
- 🚓 **Détection automatique du Crash Sonore** (> 80 → retombe à 40).
- 🏆 Vérification de la **condition de victoire** (100+ et 4 membres en jeu).
- 📜 **Historique** des actions (anti-litige entre voisins), sauvegardé en local.
- 🎲 **Aléas** : tire une carte Action au hasard si pas de paquet physique.
- 🃏 **Galerie** des 24 membres avec pouvoirs et coups bas (filtrable par famille).
- 📖 **Aide-mémoire** des règles intégré.
- 📲 **Installable** sur mobile + fonctionne **hors-ligne** (service worker).

## Lancer en local

Comme c'est une PWA, il faut la servir via HTTP (le service worker ne marche pas
en `file://`). Le plus simple :

```bash
cd app
python3 -m http.server 8080
# puis ouvre http://localhost:8080
```

Ou avec Node : `npx serve app`

## Intégrer les images des cartes

Les illustrations vont dans `assets/cards/<famille>/<prenom>.png`, par exemple :

```
assets/cards/rockers/marco.png
assets/cards/occulte/archibald.png
assets/cards/sportifs/victor.png
assets/cards/collectionneurs/odette.png
```

Le nom de fichier = le **prénom en minuscules, sans accent** (ex. `zoe.png`,
`felix.png`). Tant qu'une image manque, un emoji de famille s'affiche à la place.

## Icônes de l'app

Place `icon-192.png` et `icon-512.png` dans `icons/` (placeholder en attendant le
logo définitif).
