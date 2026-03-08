# Plan de Migration vers la Nouvelle Architecture Frontend

**Date :** 09/02/2025

**Auteur :** Manus, Architecte Logiciel Senior

## 1. Introduction

Ce document présente un plan de migration concret pour restructurer le projet React AgroNoya vers une nouvelle organisation plus modulaire, maintenable et scalable. L'objectif est de fournir des étapes claires et des exemples pour faciliter la transition.

## 2. Nouvelle Structure Cible

La nouvelle structure de dossiers est la suivante :

```
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   │   ├── features/
│   │   ├── navigation/
│   │   └── ui/
│   ├── images/
│   │   ├── gallery/
│   │   ├── hero/
│   │   ├── solutions/
│   │   └── technologies/
│   └── videos/
├── components/
│   ├── common/         # Composants réutilisables (Button, Input, Card, etc.)
│   ├── features/       # Composants spécifiques à une fonctionnalité (ex: FarmList, FieldMap)
│   ├── forms/          # Composants de formulaires
│   ├── layout/         # Composants de mise en page (Header, Footer, Sidebar)
│   └── ui/             # Composants d'UI de bas niveau (shadcn/ui)
├── constants/
│   ├── colors.js
│   ├── index.js
│   ├── languages.js
│   └── routes.js
├── hooks/
│   ├── useApi.js
│   ├── useAuth.js
│   ├── useDebounce.js
│   ├── useLocalStorage.js
│   ├── useMediaQuery.js
│   └── useTheme.js
├── layouts/
│   ├── AppLayout.jsx
│   ├── AuthLayout.jsx
│   └── DashboardLayout.jsx
├── lib/
│   ├── i18n.js
│   └── utils.js
├── locales/
│   ├── en/
│   └── fr/
├── pages/
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   └── ...
├── services/
│   ├── index.js
│   └── ... (un fichier par service: auth.js, user.js, etc.)
├── styles/
│   ├── globals.css
│   ├── themes.css
│   └── typography.css
├── types/
│   └── index.js
└── utils/
    ├── api.js
    ├── formatting.js
    ├── index.js
    └── validation.js
```

## 3. Plan de Migration par Étapes

### Étape 1 : Création de la Structure et des Fichiers de Base (Terminé)

Cette étape a déjà été réalisée. Les dossiers et les fichiers de constantes/utilitaires ont été créés.

### Étape 2 : Migration des Assets

1.  **Déplacer les images** existantes de `public/assets` vers les nouveaux dossiers dans `src/assets/images`.
    *   Exemple : `public/assets/hero-bg.jpg` -> `src/assets/images/hero/background.jpg`
2.  **Organiser les icônes** (si elles ne sont pas déjà gérées par `lucide-react`) dans `src/assets/icons`.
3.  **Mettre à jour les chemins d'importation** dans les composants.
    *   **Avant :** `<img src="/assets/logo.png" />`
    *   **Après :**
        ```jsx
        import logo from "@/assets/images/logo.png";
        <img src={logo} />
        ```

### Étape 3 : Intégration des Constantes

1.  **Remplacer les chaînes de caractères magiques** par les constantes importées.
    *   **Exemple (Couleurs) :**
        *   **Avant :** `style={{ color: "#57D53B" }}`
        *   **Après :**
            ```jsx
            import { BRAND_COLORS } from "@/constants";
            style={{ color: BRAND_COLORS.PRIMARY }}
            ```
    *   **Exemple (Routes) :**
        *   **Avant :** `<Link to="/solutions">`
        *   **Après :**
            ```jsx
            import { SOLUTION_ROUTES } from "@/constants";
            <Link to={SOLUTION_ROUTES.INDEX}>
            ```

### Étape 4 : Intégration des Utilitaires

1.  **Remplacer la logique de formatage/validation** par les nouvelles fonctions utilitaires.
    *   **Exemple (Formatage de date) :**
        *   **Avant :** `new Date(date).toLocaleDateString("fr-FR")`
        *   **Après :**
            ```jsx
            import { formatDate } from "@/utils";
            formatDate(date, "long");
            ```
    *   **Exemple (Validation d'email) :**
        *   **Avant :** `const isValid = /.../.test(email);`
        *   **Après :**
            ```jsx
            import { isValidEmail } from "@/utils";
            const isValid = isValidEmail(email);
            ```

### Étape 5 : Refactoring des Composants

1.  **Identifier les composants monolithiques** (`Header`, `ProblematiquesSection`, etc.).
2.  **Créer des sous-dossiers** dans `src/components/features` pour ces composants.
3.  **Extraire la logique** dans des hooks personnalisés (`useHeader`, `useProblematiques`).
4.  **Décomposer le JSX** en sous-composants plus petits et réutilisables.

    *   **Exemple (Header) :**
        *   `src/components/features/Header/index.jsx` (composant principal)
        *   `src/components/features/Header/Logo.jsx`
        *   `src/components/features/Header/Navigation.jsx`
        *   `src/components/features/Header/MobileMenu.jsx`
        *   `src/components/features/Header/ThemeToggle.jsx`
        *   `src/components/features/Header/LanguageSwitcher.jsx`
        *   `src/components/features/Header/useHeader.js` (hook personnalisé)

### Étape 6 : Centralisation des Appels API

1.  **Remplacer les appels `fetch` directs** dans les composants par les nouvelles fonctions de service.
    *   **Exemple (Récupération du profil utilisateur) :**
        *   **Avant (dans un `useEffect`) :**
            ```jsx
            useEffect(() => {
              fetch("/api/users/me")
                .then(res => res.json())
                .then(setData);
            }, []);
            ```
        *   **Après (avec un hook `useApi`) :**
            ```jsx
            import { useApi } from "@/hooks";
            import { userService } from "@/services";

            const { data, loading, error } = useApi(userService.getProfile);
            ```

## 4. Exemple de Fichier Refactoré

### `src/components/features/Header/index.jsx` (Après refactoring)

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_ROUTES } from '@/constants';
import { useHeader } from './useHeader';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { 
    isMenuOpen, 
    toggleMenu, 
    navItems, 
    isActive, 
    isScrolled 
  } = useHeader();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <Navigation navItems={navItems} isActive={isActive} />
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>{/* ... */}</button>
          </div>
        </div>
      </div>

      {isMenuOpen && <MobileMenu navItems={navItems} />}
    </header>
  );
};

export default Header;
```

## 5. Recommandations

*   **Procéder par étapes :** Ne pas tout migrer en une seule fois. Commencer par les constantes, puis les utilitaires, et enfin le refactoring des composants.
*   **Utiliser les branches Git :** Créer une branche dédiée pour la restructuration (`feature/project-restructure`).
*   **Communication :** S'assurer que toute l'équipe est informée et formée à la nouvelle structure.
*   **Mettre à jour la documentation :** Documenter les nouveaux composants, hooks et utilitaires au fur et à mesure.

Ce plan de migration, bien que demandant un investissement initial, améliorera considérablement la qualité, la maintenabilité et la scalabilité du projet AgroNoya à long terme.


