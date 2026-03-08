# Guide de la Nouvelle Architecture des Composants AgroNoya

**Date :** 09/02/2025

**Auteur :** Manus, Architecte Logiciel Senior & DevOps

## 1. Introduction

Ce document présente la nouvelle architecture des composants du projet React AgroNoya. L'objectif est de fournir une structure claire, modulaire et scalable qui facilite le développement, la maintenance et la collaboration.

## 2. Nouvelle Structure des Composants

Le dossier `src/components` est maintenant organisé en trois catégories principales :

*   `src/components/common` : Composants atomiques et réutilisables dans toute l'application.
*   `src/components/features` : Composants complexes spécifiques à une fonctionnalité.
*   `src/components/layout` : Composants de mise en page de l'application.

### 2.1. Composants `common`

Ces composants sont la base de notre système de design. Ils sont conçus pour être génériques et hautement configurables.

*   **Exemples :** `Button`, `Input`, `Card`, `Modal`, `Loader`, etc.
*   **Règles :**
    *   Ne doivent contenir aucune logique métier.
    *   Doivent être stylisés avec des modules CSS (`.module.css`).
    *   Doivent être exportés depuis `src/components/common/index.js`.

### 2.2. Composants `features`

Ces composants représentent des fonctionnalités complètes de l'application.

*   **Exemples :** `Hero`, `Gallery`, `ProblematiquesSection`, `FarmManagement`, etc.
*   **Règles :**
    *   Peuvent contenir de la logique métier (souvent extraite dans des hooks).
    *   Sont composés de plusieurs composants `common`.
    *   Doivent être organisés dans leur propre dossier (ex: `src/components/features/Hero/`).

### 2.3. Composants `layout`

Ces composants définissent la structure visuelle de l'application.

*   **Exemples :** `Header`, `Footer`, `Sidebar`, `AppLayout`, etc.
*   **Règles :**
    *   Gèrent la disposition générale des pages.
    *   Utilisent les composants `features` et `common`.

## 3. Organisation des Styles avec Modules CSS

Pour éviter les conflits de classes et garantir un style encapsulé, nous utilisons maintenant les **Modules CSS**.

*   **Convention de nommage :** `[NomDuComposant].module.css`
*   **Utilisation :**
    ```jsx
    import styles from './Button.module.css';

    const Button = () => {
      return <button className={styles.primaryButton}>Click Me</button>;
    };
    ```

**Avantages :**

*   **Isolation des styles :** Les classes sont uniques et ne peuvent pas entrer en conflit.
*   **Maintenabilité :** Les styles sont co-localisés avec leurs composants, ce qui facilite la maintenance.
*   **Performance :** Seuls les styles utilisés sont inclus dans le build final.

## 4. Guide de Migration

Pour migrer les anciens composants vers cette nouvelle architecture, suivez ces étapes :

1.  **Identifier le type de composant :** Est-ce un composant `common`, `feature`, ou `layout` ?
2.  **Déplacer le composant** dans le dossier approprié.
3.  **Créer un module CSS** pour le composant et y déplacer les styles pertinents.
4.  **Mettre à jour les imports** de styles pour utiliser les modules CSS.
5.  **Refactoriser le composant** si nécessaire pour le décomposer en sous-composants plus petits.
6.  **Mettre à jour les imports** du composant dans le reste de l'application.

## 5. Conclusion

Cette nouvelle architecture des composants est une étape cruciale pour améliorer la qualité et la scalabilité du projet AgroNoya. Elle favorise la réutilisation, la maintenabilité, et la collaboration au sein de l'équipe de développement. Il est impératif de suivre ces nouvelles conventions pour tous les futurs développements.


