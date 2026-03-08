#!/bin/bash

# Problématique 5
sed -i '/contenu_complet: `L.agriculture tunisienne est fortement dépendante du climat, mais les prévisions disponibles restent essentiellement globales et souvent peu adaptées aux microclimats locaux. Le pays est marqué par une diversité climatique importante : zones côtières humides, régions intérieures semi-arides et zones du Sud arides, avec parfois des écarts de températures de plus de 10 °C entre deux localités voisines./c\      contenu_complet: `Avec parfois des écarts de températures de plus de 10 °C entre deux localités voisines.' ProblematiquesSection.jsx

# Problématique 6
sed -i '/contenu_complet: `Dans l.agriculture tunisienne, le diagnostic des maladies des plantes et des carences nutritionnelles se fait souvent trop tard, lorsque les symptômes deviennent visibles à l.œil nu. À ce stade, les dégâts sont déjà largement installés et, dans la majorité des cas, irréversibles./c\      contenu_complet: `À ce stade, les dégâts sont déjà largement installés et, dans la majorité des cas, irréversibles.' ProblematiquesSection.jsx

echo "Corrections appliquées"
