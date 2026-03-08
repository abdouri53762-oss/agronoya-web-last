import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Sparkles, 
  ArrowRight, 
  ShoppingCart, 
  Heart, 
  TrendingUp, 
  X,
  Plus,
  Minus,
  Eye,
  Package,
  Cpu,
  Droplets,
  Plane,
  Settings,
  BarChart3,
  Shield,
  Headphones,
  CreditCard,
  Truck,
  Clock,
  CheckCircle
} from 'lucide-react';

// Composant Modal pour les options de paiement
const PaymentOptionsModal = ({ isOpen, onClose, totalAmount, cartItems }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
    setIsProcessing(true);
    
    // Simulation du traitement du paiement
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      
      // Fermer la modal après 2 secondes
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setSelectedPaymentMethod('');
      }, 2000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-background rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          
          {showSuccess ? (
            // Écran de succès
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-bright-green rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Commande confirmée !
              </h3>
              <p className="text-text-secondary">
                {selectedPaymentMethod === 'online' 
                  ? 'Votre paiement a été traité avec succès.'
                  : 'Votre commande sera livrée et facturée à réception.'
                }
              </p>
            </div>
          ) : isProcessing ? (
            // Écran de traitement
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-bright-green mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Traitement en cours...
              </h3>
              <p className="text-text-secondary">
                {selectedPaymentMethod === 'online' 
                  ? 'Traitement du paiement en ligne'
                  : 'Confirmation de votre commande'
                }
              </p>
            </div>
          ) : (
            // Écran de sélection du mode de paiement
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border-light">
                <h2 className="text-xl font-bold text-foreground">Mode de paiement</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-bg-secondary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Résumé de la commande */}
              <div className="p-6 bg-bg-secondary">
                <h3 className="font-semibold text-foreground mb-3">Résumé de votre commande</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Articles ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                    <span className="font-medium text-foreground">{totalAmount.toLocaleString()} TND</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-border-light">
                    <span className="text-foreground">Total</span>
                    <span className="text-bright-green">{totalAmount.toLocaleString()} TND</span>
                  </div>
                </div>
              </div>

              {/* Options de paiement */}
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Choisissez votre mode de paiement</h3>
                
                <div className="space-y-3">
                  {/* Paiement en ligne */}
                  <button
                    onClick={() => handlePaymentSelection('online')}
                    className="w-full p-4 border-2 border-border-default hover:border-bright-green rounded-lg transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-bright-green/10 rounded-lg flex items-center justify-center group-hover:bg-bright-green/20 transition-colors">
                        <CreditCard className="w-6 h-6 text-bright-green" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">Paiement en ligne</h4>
                        <p className="text-sm text-text-secondary">Carte bancaire ou D17</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4 text-bright-green" />
                          <span className="text-xs text-bright-green font-medium">Traitement immédiat</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-bright-green transition-colors" />
                    </div>
                  </button>

                  {/* Paiement après livraison */}
                  <button
                    onClick={() => handlePaymentSelection('delivery')}
                    className="w-full p-4 border-2 border-border-default hover:border-bright-green rounded-lg transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <Truck className="w-6 h-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">Paiement après livraison</h4>
                        <p className="text-sm text-text-secondary">Payez à la réception de votre commande</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Shield className="w-4 h-4 text-blue-500" />
                          <span className="text-xs text-blue-500 font-medium">Sécurisé et flexible</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-blue-500 transition-colors" />
                    </div>
                  </button>
                </div>

                {/* Note informative */}
                <div className="mt-6 p-4 bg-info-light rounded-lg">
                  <p className="text-sm text-info">
                    <strong>Note :</strong> Pour les commandes avec paiement après livraison, 
                    notre équipe vous contactera pour confirmer les détails de livraison et d'installation.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const categories = [
    { id: 'all', name: 'Tous les produits', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'catalogue', name: 'Catalogue', icon: <Package className="w-5 h-5" /> },
    { id: 'expansion', name: 'Extensions', icon: <Plus className="w-5 h-5" /> },
    { id: 'drone', name: 'Services Drone', icon: <Plane className="w-5 h-5" /> }
  ];

  // Données des produits basées sur les images fournies
  const products = [
    // CATALOGUE
    {
      id: 1,
      category: 'catalogue',
      name: 'AgroSol',
      description: 'Système complet de capteurs NPK/pH/température avec IA intégrée pour l\'analyse des sols',
      price: 2500,
      subscriptionPrice: 1200,
      subscriptionPeriod: 'an',
      rating: 4.9,
      reviews: 127,
      image: "/src/assets/agro_sol.png",
      badge: 'CAPEX',
      type: 'Prix initial matériel',
      features: [
        'Capteurs NPK/pH/température',
        'IA NoyaSol intégrée',
        'Connectivité LoRaWAN',
        'Batterie longue durée',
        'Installation incluse'
      ],
      inStock: true,
      delivery: 'Installation sous 7-10 jours',
      impact: '+15% rendement, -30% intrants'
    },
    {
      id: 2,
      category: 'catalogue',
      name: 'Agro Irrigation Standard',
      description: 'Système d\'irrigation intelligent avec contrôle automatisé et monitoring en temps réel',
      price: 1400,
      subscriptionPrice: 600,
      subscriptionPeriod: 'an',
      rating: 4.7,
      reviews: 89,
      image: "/src/assets/irrigation.png",
      badge: 'CAPEX',
      type: 'Hors électrovannes',
      features: [
        'Contrôle automatisé',
        'Monitoring temps réel',
        'Interface mobile',
        'Alertes intelligentes',
        'Économie d\'eau 40%'
      ],
      inStock: true,
      delivery: 'Installation sous 5-7 jours',
      impact: '-40% consommation eau'
    },
    {
      id: 3,
      category: 'catalogue',
      name: 'Électrovanne',
      description: 'Électrovanne haute qualité pour système d\'irrigation automatisé',
      price: 250,
      rating: 4.8,
      reviews: 156,
      image: "/src/assets/electrovanne.png",
      badge: 'CAPEX',
      type: 'Ajout par électrovanne',
      features: [
        'Résistante aux intempéries',
        'Contrôle précis du débit',
        'Compatible IoT',
        'Installation facile',
        'Garantie 3 ans'
      ],
      inStock: true,
      delivery: 'Livraison sous 2-3 jours'
    },
    {
      id: 4,
      category: 'catalogue',
      name: 'Agro Irrigation Smart',
      description: 'Version avancée avec IA prédictive et optimisation automatique des ressources',
      price: 3000,
      subscriptionPrice: 1000,
      subscriptionPeriod: 'an',
      rating: 4.9,
      reviews: 67,
      image: "/src/assets/smart_irrigation.png",
      badge: 'CAPEX',
      type: 'Contrôle avancé',
      features: [
        'IA prédictive',
        'Optimisation automatique',
        'Analyse météo intégrée',
        'Rapports détaillés',
        'Support premium'
      ],
      inStock: true,
      delivery: 'Installation sous 10-14 jours',
      impact: '+25% efficacité, -50% gaspillage'
    },
    {
      id: 5,
      category: 'catalogue',
      name: 'Pack Premium Bundle',
      description: 'Solution complète IoT + Irrigation avec tous les équipements inclus',
      price: 4000,
      subscriptionPrice: 2000,
      subscriptionPeriod: 'an',
      rating: 5.0,
      reviews: 34,
      image: "/src/assets/premium_pack.png",
      badge: 'PREMIUM',
      type: 'IoT + Irrigation (remise incluse)',
      features: [
        'AgroSol + Irrigation Smart',
        'Installation complète',
        'Formation incluse',
        'Support 24/7',
        'Garantie étendue 5 ans'
      ],
      inStock: true,
      delivery: 'Installation sous 14-21 jours',
      impact: 'Solution complète optimisée'
    },

    // EXTENSIONS
    {
      id: 6,
      category: 'expansion',
      name: 'Client Supplémentaire (Upsell)',
      description: 'Extension pour client supplémentaire avec accès complet à la plateforme',
      price: 0.2,
      priceUnit: 'par client/mois',
      rating: 4.6,
      reviews: 89,
      image: "/src/assets/client_expansion.png",
      badge: 'EXPANSION',
      type: 'Abonnement mensuel',
      features: [
        'Accès plateforme complète',
        'Dashboard personnalisé',
        'Notifications en temps réel',
        'Support technique',
        'Formation incluse'
      ],
      inStock: true,
      delivery: 'Activation immédiate'
    },
    {
      id: 7,
      category: 'expansion',
      name: 'Électrovanne Supplémentaire',
      description: 'Ajout d\'électrovannes pour étendre votre système d\'irrigation',
      price: 250,
      rating: 4.7,
      reviews: 123,
      image: "/src/assets/electrovanne_expansion.png",
      badge: 'EXPANSION',
      type: 'Matériel additionnel',
      features: [
        'Compatible système existant',
        'Installation plug & play',
        'Contrôle centralisé',
        'Monitoring intégré',
        'Garantie 3 ans'
      ],
      inStock: true,
      delivery: 'Livraison sous 2-3 jours'
    },
    {
      id: 8,
      category: 'expansion',
      name: 'Système de Contrôle des Vannes',
      description: 'Contrôleur avancé pour gestion centralisée de multiples vannes',
      price: 400,
      rating: 4.8,
      reviews: 67,
      image: "/src/assets/valve_control.png",
      badge: 'EXPANSION',
      type: 'Contrôleur central',
      features: [
        'Gestion jusqu\'à 16 vannes',
        'Interface tactile',
        'Programmation avancée',
        'Connectivité WiFi/LoRa',
        'Sauvegarde cloud'
      ],
      inStock: true,
      delivery: 'Installation sous 3-5 jours'
    },
    {
      id: 9,
      category: 'expansion',
      name: 'Capteurs Supplémentaires',
      description: 'Pack de capteurs additionnels pour monitoring étendu',
      price: 200,
      rating: 4.5,
      reviews: 91,
      image: "/src/assets/sensors_expansion.png",
      badge: 'EXPANSION',
      type: 'Pack capteurs',
      features: [
        'Capteurs température/humidité',
        'Capteurs de débit',
        'Capteurs de pression',
        'Transmission sans fil',
        'Batterie 2 ans'
      ],
      inStock: true,
      delivery: 'Livraison sous 3-5 jours'
    },

    // SERVICES DRONE
    {
      id: 10,
      category: 'drone',
      name: 'Service Drone Professionnel',
      description: 'Intervention drone pour cartographie, surveillance et traitement des cultures',
      price: 60,
      priceUnit: 'par hectare/intervention',
      rating: 4.9,
      reviews: 156,
      image: "/src/assets/drone_service.png",
      badge: 'SERVICE',
      type: 'Prix par hectare/intervention',
      features: [
        'Cartographie haute résolution',
        'Analyse multispectrale',
        'Détection précoce maladies',
        'Rapport détaillé',
        'Intervention rapide'
      ],
      inStock: true,
      delivery: 'Intervention sous 24-48h'
    }
  ];

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.priceUnit ? item.price : item.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getTotalSubscription = () => {
    return cart.reduce((total, item) => {
      if (item.subscriptionPrice) {
        return total + (item.subscriptionPrice * item.quantity);
      }
      return total;
    }, 0);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-bg-secondary to-bg-tertiary">
      {/* Header Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            Solutions AgroNoya Premium
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nos <span className="text-primary">Solutions</span> & <span className="text-primary">Tarifs</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Découvrez notre gamme complète de solutions agricoles intelligentes. 
            Des capteurs IoT aux services drone, tout pour optimiser votre exploitation.
          </p>
          
          {/* Cart Button */}
          <div className="fixed top-20 right-6 z-50">
            <button
              onClick={() => setShowCart(!showCart)}
              className="bg-bright-green hover:bg-bright-green-hover dark:bg-primary dark:hover:bg-primary-hover text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-error text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-bright-green hover:bg-bright-green-hover dark:bg-primary dark:hover:bg-primary-hover text-white shadow-lg scale-105'
                    : 'bg-bg-secondary text-text-secondary hover:bg-bg-accent hover:text-foreground'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border-light overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-primary-light/5 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/src/assets/placeholder-product.png';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      product.badge === 'PREMIUM' 
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
                        : product.badge === 'SERVICE'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                        : product.badge === 'EXPANSION'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                        : 'bg-gradient-to-r from-primary to-primary-hover text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        favorites.includes(product.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-gray-400'
                      }`} 
                    />
                  </button>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-text-muted">
                      {product.rating} ({product.reviews} avis)
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="text-xs text-text-muted mb-4 bg-bg-accent px-3 py-1 rounded-full inline-block">
                    {product.type}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Caractéristiques :</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-text-secondary">
                          <Check className="w-3 h-3 text-success flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-primary">
                        {product.priceUnit ? `${product.price} TND` : `${product.price.toLocaleString()} TND`}
                      </span>
                      {product.priceUnit && (
                        <span className="text-sm text-text-muted">
                          {product.priceUnit}
                        </span>
                      )}
                    </div>
                    
                    {product.subscriptionPrice && (
                      <div className="text-sm text-text-secondary">
                        + {product.subscriptionPrice} TND/{product.subscriptionPeriod} (abonnement)
                      </div>
                    )}

                    {product.impact && (
                      <div className="text-xs text-success bg-success-light px-2 py-1 rounded mt-2">
                        💡 {product.impact}
                      </div>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${
                      product.inStock ? 'bg-success' : 'bg-error'
                    }`}></div>
                    <span className={`text-sm ${
                      product.inStock ? 'text-success' : 'text-error'
                    }`}>
                      {product.inStock ? 'En stock' : 'Rupture de stock'}
                    </span>
                    <span className="text-xs text-text-muted ml-auto">
                      {product.delivery}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className="w-full bg-bright-green hover:bg-bright-green-hover dark:bg-primary dark:hover:bg-primary-hover disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowCart(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-xl">
            <div className="flex flex-col h-full">
              {/* Cart Header */}
              <div className="flex items-center justify-between p-6 border-b border-border-light">
                <h2 className="text-xl font-bold text-foreground">Panier</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-bg-secondary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-text-muted mx-auto mb-4" />
                    <p className="text-text-muted">Votre panier est vide</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-bg-secondary rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                            onError={(e) => {
                              e.target.src = '/src/assets/placeholder-product.png';
                            }}
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground text-sm">
                              {item.name}
                            </h3>
                            <p className="text-xs text-text-muted mb-2">
                              {item.priceUnit ? `${item.price} TND ${item.priceUnit}` : `${item.price.toLocaleString()} TND`}
                            </p>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 bg-bg-accent hover:bg-border-light rounded flex items-center justify-center transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 bg-bg-accent hover:bg-border-light rounded flex items-center justify-center transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="ml-auto text-error hover:bg-error-light p-1 rounded transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="border-t border-border-light p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Total matériel :</span>
                      <span className="font-semibold text-foreground">
                        {getTotalPrice().toLocaleString()} TND
                      </span>
                    </div>
                    {getTotalSubscription() > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Abonnements/an :</span>
                        <span className="font-semibold text-foreground">
                          {getTotalSubscription().toLocaleString()} TND
                        </span>
                      </div>
                    )}
                    <div className="border-t border-border-light pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-foreground">Total :</span>
                        <span className="text-primary">
                          {(getTotalPrice() + getTotalSubscription()).toLocaleString()} TND
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <PaymentOptionsModal 
                      isOpen={showPaymentModal}
                      onClose={() => setShowPaymentModal(false)}
                      totalAmount={getTotalPrice() + getTotalSubscription()}
                      cartItems={cart}
                    />
                    <button 
                      onClick={() => setShowPaymentModal(true)}
                      className="w-full bg-bright-green hover:bg-bright-green-hover dark:bg-primary dark:hover:bg-primary-hover text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Procéder au paiement
                    </button>
                    <button 
                      onClick={() => setShowCart(false)}
                      className="w-full bg-bg-secondary hover:bg-bg-accent text-foreground py-3 rounded-lg font-semibold transition-colors"
                    >
                      Continuer les achats
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary-hover">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pourquoi choisir AgroNoya ?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Des solutions éprouvées, un support expert et des résultats mesurables
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Garantie & Fiabilité</h4>
              <p className="text-white/80">Solutions testées et approuvées par des milliers d'agriculteurs.</p>
            </div>
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Installation Rapide</h4>
              <p className="text-white/80">Nos équipes assurent une mise en place efficace et rapide.</p>
            </div>
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Support Premium</h4>
              <p className="text-white/80">Assistance dédiée 24/7 pour toutes vos questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Prêt à révolutionner votre agriculture ?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Contactez nos experts pour une consultation personnalisée et un devis sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Demander une consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setShowCart(true)}
              className="bg-bg-secondary hover:bg-bg-accent text-foreground px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Voir le panier ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
