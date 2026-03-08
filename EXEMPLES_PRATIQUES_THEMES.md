# 🛠️ Exemples Pratiques - Système de Thèmes Unifié AgroNoya

**Guide pratique avec exemples concrets pour développeurs**

---

## 🎯 SCÉNARIOS COURANTS

### **Scénario 1 : Créer un Nouveau Composant Button**

**Besoin :** Créer un composant bouton réutilisable avec variantes

#### **✅ Étape 1 : Créer le fichier CSS du composant**

```css
/* src/components/ui/NewButton/NewButton.module.css */

.button {
  /* Utiliser les variables pour tout */
  font-family: var(--font-family-primary);
  font-weight: var(--font-medium);
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-lg);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  
  /* Taille de base */
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

/* Variante primaire - Couleur AgroNoya */
.primary {
  background-color: var(--agronoya-primary);
  color: white;
  box-shadow: var(--shadow-sm);
}

.primary:hover {
  background-color: var(--agronoya-primary-hover);
  box-shadow: var(--shadow-accent);
  transform: translateY(-1px);
}

.primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

/* Variante secondaire */
.secondary {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-default);
}

.secondary:hover {
  background-color: var(--bg-secondary);
  border-color: var(--agronoya-primary);
  color: var(--agronoya-primary);
}

/* Variante outline */
.outline {
  background-color: transparent;
  color: var(--agronoya-primary);
  border: 2px solid var(--agronoya-primary);
}

.outline:hover {
  background-color: var(--agronoya-primary);
  color: white;
}

/* Variante ghost */
.ghost {
  background-color: transparent;
  color: var(--text-muted);
  border: none;
}

.ghost:hover {
  background-color: var(--bg-accent);
  color: var(--agronoya-primary);
}

/* Tailles */
.small {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-sm);
}

.large {
  padding: var(--space-lg) var(--space-xl);
  font-size: var(--text-lg);
}

/* États */
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

.loading {
  position: relative;
  color: transparent;
}

.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
```

#### **✅ Étape 2 : Composant React**

```jsx
// src/components/ui/NewButton/NewButton.jsx
import React from 'react';
import styles from './NewButton.module.css';

const NewButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  ...props 
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    loading && styles.loading
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default NewButton;
```

#### **✅ Étape 3 : Utilisation**

```jsx
// Dans n'importe quel composant
import NewButton from '@/components/ui/NewButton/NewButton';

function ExamplePage() {
  return (
    <div className="space-y-4">
      {/* Bouton primaire AgroNoya */}
      <NewButton variant="primary">
        Découvrir AgroNoya
      </NewButton>
      
      {/* Bouton secondaire */}
      <NewButton variant="secondary" size="large">
        En savoir plus
      </NewButton>
      
      {/* Bouton outline */}
      <NewButton variant="outline" size="small">
        Télécharger
      </NewButton>
      
      {/* Bouton avec état loading */}
      <NewButton variant="primary" loading>
        Chargement...
      </NewButton>
    </div>
  );
}
```

---

### **Scénario 2 : Ajouter une Couleur de Statut (Success)**

**Besoin :** Ajouter une couleur verte pour les messages de succès

#### **✅ Étape 1 : Ajouter dans variables.css**

```css
/* src/styles/variables.css - Ajouter à la section couleurs d'état */

/* ===== COULEURS D'ÉTAT ===== */
/* ... couleurs existantes ... */

/* Couleur de succès */
--success-rgb: 34, 197, 94;
--success: rgb(var(--success-rgb));
--success-hover-rgb: 22, 163, 74;
--success-hover: rgb(var(--success-hover-rgb));
--success-light-rgb: 220, 252, 231;
--success-light: rgb(var(--success-light-rgb));
--success-dark-rgb: 21, 128, 61;
--success-dark: rgb(var(--success-dark-rgb));

/* Opacités pour success */
--success-50: rgba(var(--success-rgb), 0.05);
--success-100: rgba(var(--success-rgb), 0.1);
--success-200: rgba(var(--success-rgb), 0.2);
```

#### **✅ Étape 2 : Ajouter dans tailwind.config.js**

```javascript
// tailwind.config.js - Ajouter dans colors
export default {
  theme: {
    extend: {
      colors: {
        // ... couleurs existantes ...
        
        // Couleurs de succès
        success: 'rgb(var(--success-rgb) / <alpha-value>)',
        'success-hover': 'rgb(var(--success-hover-rgb) / <alpha-value>)',
        'success-light': 'rgb(var(--success-light-rgb) / <alpha-value>)',
        'success-dark': 'rgb(var(--success-dark-rgb) / <alpha-value>)',
      },
    },
  },
}
```

#### **✅ Étape 3 : Ajouter dans les thèmes sombres**

```css
/* src/styles/themes/dark.css */
.dark {
  /* ... variables existantes ... */
  
  /* Ajuster success pour mode sombre */
  --success-light-rgb: 6, 95, 70;
  --success-light: rgb(var(--success-light-rgb));
}
```

#### **✅ Étape 4 : Créer un composant Alert**

```css
/* src/components/ui/Alert/Alert.module.css */
.alert {
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  font-family: var(--font-family-primary);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
}

.success {
  background-color: var(--success-light);
  border-color: var(--success);
  color: var(--success-dark);
}

.successIcon {
  color: var(--success);
}
```

#### **✅ Étape 5 : Utilisation avec Tailwind**

```jsx
// Utilisation directe avec classes Tailwind
function SuccessMessage() {
  return (
    <div className="bg-success-light border border-success text-success-dark p-4 rounded-md">
      <div className="flex items-center space-x-2">
        <CheckIcon className="text-success w-5 h-5" />
        <p className="font-medium">Opération réussie !</p>
      </div>
      <p className="mt-2 text-sm">
        Votre configuration a été sauvegardée avec succès.
      </p>
    </div>
  );
}
```

---

### **Scénario 3 : Créer une Page avec Thème Cohérent**

**Besoin :** Créer une page de dashboard avec le système unifié

#### **✅ Composant Dashboard**

```jsx
// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard AgroNoya</h1>
        <div className={styles.actions}>
          <button className={styles.primaryButton}>
            Nouvelle Analyse
          </button>
          <button className={styles.secondaryButton}>
            Exporter
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>Champs Analysés</h3>
          <p className={styles.statValue}>24</p>
          <p className={styles.statChange}>+12% ce mois</p>
        </div>
        
        <div className={styles.statCard}>
          <h3 className={styles.statTitle}>Alertes Actives</h3>
          <p className={styles.statValue}>3</p>
          <p className={styles.statChangeNegative}>-2 depuis hier</p>
        </div>
      </div>

      {/* Content */}
      <main className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Analyse Récente</h2>
          <div className={styles.cardContent}>
            <p>Dernière analyse effectuée il y a 2 heures</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
```

#### **✅ Styles CSS avec Variables**

```css
/* src/pages/Dashboard/Dashboard.module.css */

.dashboard {
  min-height: 100vh;
  background-color: var(--bg-secondary);
  padding: var(--space-lg);
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-primary);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--space-xl);
}

.title {
  color: var(--text-primary);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  margin: 0;
}

.actions {
  display: flex;
  gap: var(--space-md);
}

.primaryButton {
  background-color: var(--agronoya-primary);
  color: white;
  border: none;
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.primaryButton:hover {
  background-color: var(--agronoya-primary-hover);
  box-shadow: var(--shadow-accent);
  transform: translateY(-1px);
}

.secondaryButton {
  background-color: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border-default);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.secondaryButton:hover {
  border-color: var(--agronoya-primary);
  color: var(--agronoya-primary);
  background-color: var(--bg-accent);
}

/* Stats Grid */
.statsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.statCard {
  background-color: var(--bg-primary);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  transition: all 0.2s ease-in-out;
}

.statCard:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border-accent);
}

.statTitle {
  color: var(--text-muted);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  margin: 0 0 var(--space-sm) 0;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}

.statValue {
  color: var(--text-primary);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  margin: 0 0 var(--space-sm) 0;
}

.statChange {
  color: var(--success);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  margin: 0;
}

.statChangeNegative {
  color: var(--error);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  margin: 0;
}

/* Content */
.content {
  display: grid;
  gap: var(--space-lg);
}

.card {
  background-color: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  overflow: hidden;
}

.cardTitle {
  color: var(--text-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin: 0;
  padding: var(--space-lg) var(--space-lg) 0;
}

.cardContent {
  padding: var(--space-lg);
  color: var(--text-tertiary);
  line-height: var(--leading-relaxed);
}

/* Responsive */
@media (max-width: 768px) {
  .dashboard {
    padding: var(--space-md);
  }
  
  .header {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }
  
  .actions {
    width: 100%;
    justify-content: center;
  }
  
  .statsGrid {
    grid-template-columns: 1fr;
  }
}
```

---

### **Scénario 4 : Personnaliser pour un Client**

**Besoin :** Adapter les couleurs pour un client avec sa charte graphique

#### **✅ Étape 1 : Créer un thème client**

```css
/* src/styles/themes/client-agricorp.css */

/* Thème personnalisé pour AgriCorp */
:root[data-theme="agricorp"] {
  /* Couleur primaire du client */
  --agronoya-primary-rgb: 34, 139, 34;  /* Vert forêt */
  --agronoya-primary: rgb(var(--agronoya-primary-rgb));
  
  /* Couleur secondaire */
  --agronoya-secondary-rgb: 255, 140, 0;  /* Orange */
  --agronoya-secondary: rgb(var(--agronoya-secondary-rgb));
  
  /* Ajuster les couleurs dérivées */
  --agronoya-primary-hover-rgb: 46, 125, 50;
  --agronoya-primary-hover: rgb(var(--agronoya-primary-hover-rgb));
  
  /* Fond accent adapté */
  --bg-accent-rgb: 232, 245, 233;
  --bg-accent: rgb(var(--bg-accent-rgb));
}
```

#### **✅ Étape 2 : Appliquer le thème**

```jsx
// src/App.jsx ou composant racine
function App() {
  const [theme, setTheme] = useState('default');
  
  useEffect(() => {
    // Appliquer le thème client
    if (theme === 'agricorp') {
      document.documentElement.setAttribute('data-theme', 'agricorp');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  return (
    <div className="app">
      {/* Sélecteur de thème pour demo */}
      <select onChange={(e) => setTheme(e.target.value)}>
        <option value="default">AgroNoya Default</option>
        <option value="agricorp">AgriCorp Theme</option>
      </select>
      
      {/* Le reste de l'app utilise automatiquement le bon thème */}
      <Header />
      <main>
        <Routes>
          {/* ... routes ... */}
        </Routes>
      </main>
    </div>
  );
}
```

---

## 🔧 OUTILS DE DÉVELOPPEMENT

### **Script de Validation**

```bash
#!/bin/bash
# scripts/validate-theme-system.sh

echo "🔍 Validation du système de thèmes AgroNoya..."

# Vérifier les hex codes interdits
echo "Recherche de hex codes directs..."
HEXCODES=$(grep -r "#[0-9a-fA-F]\{6\}" src/components/ src/pages/ 2>/dev/null || true)
if [ -n "$HEXCODES" ]; then
  echo "❌ Hex codes trouvés (interdits) :"
  echo "$HEXCODES"
  exit 1
else
  echo "✅ Aucun hex code direct trouvé"
fi

# Vérifier les classes Tailwind figées
echo "Recherche de classes Tailwind figées..."
FIXED_CLASSES=$(grep -r "bg-green-\|text-gray-\|border-blue-" src/ 2>/dev/null || true)
if [ -n "$FIXED_CLASSES" ]; then
  echo "⚠️  Classes Tailwind figées trouvées :"
  echo "$FIXED_CLASSES"
fi

# Vérifier la compilation
echo "Test de compilation..."
if npm run build > /dev/null 2>&1; then
  echo "✅ Compilation réussie"
else
  echo "❌ Erreur de compilation"
  exit 1
fi

echo "🎉 Validation terminée avec succès !"
```

### **Extension VSCode pour Variables**

```json
// .vscode/snippets/agronoya-variables.json
{
  "AgroNoya Primary Color": {
    "prefix": "agro-primary",
    "body": "var(--agronoya-primary)",
    "description": "Couleur primaire AgroNoya"
  },
  "AgroNoya Text Primary": {
    "prefix": "agro-text",
    "body": "var(--text-primary)",
    "description": "Couleur de texte primaire"
  },
  "AgroNoya Background": {
    "prefix": "agro-bg",
    "body": "var(--bg-primary)",
    "description": "Couleur de fond primaire"
  },
  "AgroNoya Border": {
    "prefix": "agro-border",
    "body": "var(--border-default)",
    "description": "Couleur de bordure par défaut"
  }
}
```

---

## 🎯 RÉSULTATS ATTENDUS

Avec ces exemples, vous devriez pouvoir :

1. **✅ Créer n'importe quel composant** en utilisant uniquement les variables
2. **✅ Ajouter de nouvelles couleurs** en 3 étapes simples
3. **✅ Maintenir la cohérence** sur tout le site automatiquement
4. **✅ Personnaliser pour des clients** sans casser le système
5. **✅ Développer plus rapidement** avec les bonnes pratiques

**🚀 Le système de thèmes unifié AgroNoya vous fait gagner du temps et garantit la qualité !**

