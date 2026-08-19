---
title: "Capsule 02 — Pourquoi une feuille CSS externe?"
description: Comprendre pourquoi plusieurs pages HTML peuvent partager une même feuille styles.css et pourquoi cette organisation simplifie la mise en forme d'un site.
sidebar_position: 3
sidebar_label: "02 — Pourquoi une feuille CSS externe?"
---

# Pourquoi une feuille CSS externe?

Quand un site contient plusieurs pages, il est fréquent de vouloir garder la même apparence partout : mêmes couleurs, mêmes polices, mêmes titres et mêmes règles de mise en forme.

Cette capsule montre pourquoi il est beaucoup plus pratique de placer ces règles dans **un seul fichier CSS partagé** plutôt que de les répéter dans chaque page HTML.

## Ce que vous allez voir

En quelques minutes, vous verrez comment :

- séparer la **structure HTML** de la **présentation CSS**;
- placer les règles communes dans un fichier comme `styles.css`;
- relier une page HTML à cette feuille avec `<link>`;
- faire utiliser la même feuille CSS par plusieurs pages;
- comprendre pourquoi une seule modification dans `styles.css` peut mettre à jour l'apparence de plusieurs pages du site.

L'idée essentielle est simple : **on écrit les styles communs une seule fois, puis plusieurs pages peuvent les utiliser**.

## Présentation

La présentation est offerte en deux formats. Utilisez le PDF pour la consulter facilement dans un navigateur ou sur un appareil mobile, ou la version PowerPoint si vous préférez le format diaporama.

:::info 📥 Fichiers à télécharger

- **[Consulter `The_CSS_Central_Hub.pdf`](pathname:///files/dans-autobus/ExternalCss/The_CSS_Central_Hub.pdf)** — version PDF, pratique pour la consultation.
- **[Télécharger `The_CSS_Central_Hub.pptx`](pathname:///files/dans-autobus/ExternalCss/The_CSS_Central_Hub.pptx)** — version PowerPoint.

:::

## Vidéo

La capsule vidéo viendra compléter cette page lorsqu'elle sera prête.

:::tip À retenir
Plusieurs pages HTML peuvent être reliées au même fichier `styles.css`. Cela permet de garder une apparence cohérente et de modifier les styles communs à un seul endroit.
:::
