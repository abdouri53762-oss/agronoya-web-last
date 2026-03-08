# 🎨 Guide du Système de Thèmes Unifié AgroNoya

**Version :** 2.0 - Système Unifié  
**Date :** Septembre 2025  
**Statut :** ✅ PRODUCTION READY

---

## 🎯 RÈGLES PRINCIPALES

### ✅ **1. Source Unique de Vérité**

**RÈGLE D'OR :** Toute nouvelle couleur ou variable → ajouter uniquement dans `src/styles/variables.css`

```css
/* ✅ CORRECT - Dans variables.css */
--agronoya-secondary-rgb: 245, 158, 11;
--agronoya-secondary: rgb(var(--agronoya-secondary-rgb));

/* ❌ INTERDIT - Hex codes directs dans composants */
.button {
  background-color: #f59e0b; /* ❌ NON ! */
}

/* ✅ CORRECT - Utiliser les variables */
.button {
  background-color: var(--agronoya-secondary); /* ✅ OUI ! */
}
```

### ✅ **2. Classes Tailwind avec Variables**

**RÈGLE :** Toutes les classes Tailwind doivent pointer vers des variables CSS

```html
<!-- ✅ CORRECT - Classes basées sur variables -->
<button class="bg-primary text-white hover:bg-primary-hover">
<div class="text-text-primary bg-bg-secondary border-border-default">
<h1 class="text-primary font-bold">

<!-- ❌ INTERDIT - Classes Tailwind figées -->
<button class="bg-green-500 text-white hover:bg-green-600"> <!-- ❌ NON ! -->
<div class="text-gray-800 bg-gray-100 border-gray-300"> <!-- ❌ NON ! -->
```

### ✅ **3. Thème Sombre/Clair Unifié**

**RÈGLE :** Changement uniquement via classe `.dark` - Pas de !important ni duplication

```css
/* ✅ CORRECT - Variables dans .dark */
.dark {
  --text-primary-rgb: 249, 250, 251;
  --bg-primary-rgb: 17, 24, 39;
}

/* ❌ INTERDIT - !important et duplication */
.dark .button {
  background-color: #1f2937 !important; /* ❌ NON ! */
}
```

### ✅ **4. Ajout de Nouvelles Couleurs**

**PROCESSUS EN 3 ÉTAPES :**

1. **Déclarer dans variables.css**
2. **Ajouter dans tailwind.config.js**
3. **Utiliser dans les composants**

---

## 🚀 BONNES PRATIQUES

### **Test de Cohérence Instantané**

Pour vérifier que le système fonctionne :

```css
/* Dans src/styles/variables.css */
--agronoya-primary-rgb: 87, 213, 59; /* Vert AgroNoya */

/* Changer temporairement pour test */
--agronoya-primary-rgb: 59, 130, 246; /* Bleu test */
```

**→ Résultat attendu :** TOUS les éléments changent instantanément :
- ✅ Boutons primaires
- ✅ Headers et logos
- ✅ Liens et accents
- ✅ Bordures d'accent
- ✅ Ombres colorées

### **Structure Organisée à Maintenir**

```
src/styles/
├── variables.css      # 🎯 SOURCE UNIQUE DE VÉRITÉ
├── design-system.css  # Composants et utilitaires
├── globals.css        # Styles globaux
└── themes/
    ├── light.css      # Variables mode clair
    └── dark.css       # Variables mode sombre
```

**RÈGLE :** Jamais toucher aux autres fichiers pour les couleurs !

---

## 📋 EXEMPLES PRATIQUES

### **✅ Exemple 1 : Ajouter une Couleur d'Accent**

**Besoin :** Ajouter une couleur orange pour les alertes

```css
/* 1. Dans src/styles/variables.css */
--agronoya-orange-rgb: 245, 158, 11;
--agronoya-orange: rgb(var(--agronoya-orange-rgb));
--agronoya-orange-light-rgb: 254, 243, 199;
--agronoya-orange-light: rgb(var(--agronoya-orange-light-rgb));
```

```javascript
// 2. Dans tailwind.config.js
colors: {
  // ... couleurs existantes
  orange: 'rgb(var(--agronoya-orange-rgb) / <alpha-value>)',
  'orange-light': 'rgb(var(--agronoya-orange-light-rgb) / <alpha-value>)',
}
```

```html
<!-- 3. Utilisation dans les composants -->
<div class="bg-orange text-white p-4 rounded-lg">
  <p class="font-semibold">Attention !</p>
</div>

<div class="bg-orange-light border border-orange p-3">
  <p class="text-orange">Message d'alerte</p>
</div>
```

### **✅ Exemple 2 : Créer un Nouveau Composant**

**Besoin :** Créer un composant Card avec le système unifié

```css
/* Dans src/components/Card/Card.module.css */
.card {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--space-lg);
  transition: all 0.2s ease-in-out;
}

.card:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
}

.cardTitle {
  color: var(--text-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-md);
}

.cardContent {
  color: var(--text-tertiary);
  line-height: var(--leading-relaxed);
}

/* Variante avec accent AgroNoya */
.cardAccent {
  border-left: 4px solid var(--agronoya-primary);
  background-color: var(--bg-accent);
}
```

### **✅ Exemple 3 : Modifier le Thème Sombre**

**Besoin :** Ajuster les couleurs du mode sombre

```css
/* Dans src/styles/themes/dark.css */
.dark {
  /* Ajuster la couleur primaire en mode sombre */
  --agronoya-primary-rgb: 110, 224, 73; /* Plus clair pour contraste */
  
  /* Fond plus sombre pour meilleur contraste */
  --bg-primary-rgb: 15, 23, 42;
  --bg-secondary-rgb: 30, 41, 59;
  
  /* Texte plus contrasté */
  --text-primary-rgb: 248, 250, 252;
}
```

---

## ❌ ERREURS À ÉVITER

### **❌ Erreur 1 : Hex Codes Directs**

```css
/* ❌ MAUVAIS */
.button {
  background-color: #57D53B;
  border: 1px solid #e5e7eb;
}

/* ✅ CORRECT */
.button {
  background-color: var(--agronoya-primary);
  border: 1px solid var(--border-default);
}
```

### **❌ Erreur 2 : Classes Tailwind Figées**

```html
<!-- ❌ MAUVAIS -->
<div class="bg-green-500 text-gray-800 border-gray-300">

<!-- ✅ CORRECT -->
<div class="bg-primary text-text-primary border-border-default">
```

### **❌ Erreur 3 : Duplication de Variables**

```css
/* ❌ MAUVAIS - Redéfinir dans un composant */
.header {
  --primary-color: #57D53B; /* ❌ Duplication ! */
  background-color: var(--primary-color);
}

/* ✅ CORRECT - Utiliser la variable globale */
.header {
  background-color: var(--agronoya-primary);
}
```

### **❌ Erreur 4 : !important dans Thèmes**

```css
/* ❌ MAUVAIS */
.dark .button {
  background-color: #1f2937 !important;
}

/* ✅ CORRECT */
.dark {
  --bg-secondary-rgb: 31, 41, 55;
}
.button {
  background-color: var(--bg-secondary);
}
```

---

## 🔧 MAINTENANCE QUOTIDIENNE

### **Checklist Avant Chaque Commit**

- [ ] ✅ Aucun hex code direct dans les composants
- [ ] ✅ Toutes les nouvelles couleurs dans variables.css
- [ ] ✅ Classes Tailwind pointent vers variables
- [ ] ✅ Pas de !important dans les thèmes
- [ ] ✅ Test de changement de couleur primaire

### **Test Rapide de Validation**

```bash
# 1. Chercher les hex codes interdits
grep -r "#[0-9a-fA-F]\{6\}" src/components/ src/pages/

# 2. Vérifier les classes Tailwind figées
grep -r "bg-green-\|text-gray-\|border-blue-" src/

# 3. Compilation sans erreurs
npm run build
```

### **Commandes de Vérification**

```bash
# Vérifier la structure des fichiers CSS
find src/styles -name "*.css" | sort

# Compter les variables définies
grep -c "^  --" src/styles/variables.css

# Tester la compilation
npm run dev
```

---

## 🎯 RÉSULTATS ATTENDUS

### **✅ Avec le Système Unifié**

1. **1 ligne modifiée** dans variables.css = **mise à jour instantanée** sur tout le site
2. **Plus aucune incohérence** de couleurs entre les pages
3. **Maintenance simplifiée** : -80% de temps pour les modifications
4. **Thème sombre/clair** : Basculement parfait sans conflit
5. **Évolutivité** : Ajout facile de nouvelles couleurs et thèmes

### **🎨 Test de Démonstration**

Pour impressionner l'équipe ou les clients :

```css
/* Changer cette ligne dans variables.css */
--agronoya-primary-rgb: 87, 213, 59;   /* Vert AgroNoya */
--agronoya-primary-rgb: 239, 68, 68;   /* Rouge */
--agronoya-primary-rgb: 59, 130, 246;  /* Bleu */
--agronoya-primary-rgb: 168, 85, 247;  /* Violet */
```

**→ Tout le site change de couleur instantanément !** 🎨

---

## 📚 RESSOURCES RAPIDES

### **Variables Principales à Connaître**

```css
/* Couleurs AgroNoya */
--agronoya-primary          /* Vert principal #57D53B */
--agronoya-primary-hover    /* Vert hover */
--agronoya-primary-light    /* Vert clair */
--agronoya-primary-dark     /* Vert foncé */

/* Textes */
--text-primary              /* Texte principal */
--text-secondary            /* Texte secondaire */
--text-tertiary             /* Texte tertiaire */
--text-muted                /* Texte atténué */

/* Fonds */
--bg-primary                /* Fond principal */
--bg-secondary              /* Fond secondaire */
--bg-accent                 /* Fond accent */

/* Bordures */
--border-default            /* Bordure par défaut */
--border-accent             /* Bordure accent */
```

### **Classes Tailwind Principales**

```html
<!-- Couleurs principales -->
bg-primary, text-primary, border-primary

<!-- Couleurs de texte -->
text-text-primary, text-text-secondary, text-text-muted

<!-- Couleurs de fond -->
bg-bg-primary, bg-bg-secondary, bg-bg-accent

<!-- Couleurs de bordure -->
border-border-default, border-border-accent
```

---

**🚀 Le système de thèmes AgroNoya est maintenant votre allié pour un développement rapide, cohérent et maintenable !**

