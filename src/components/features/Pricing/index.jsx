import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  Star,
  Crown,
  Sparkles,
  ArrowRight,
  ShoppingCart,
  Heart,
  TrendingUp,
  X,
  Plus,
  Minus,
  Package,
  Plane,
  Shield,
  Headphones,
  CreditCard,
  Truck,
  Clock,
  CheckCircle,
  Droplets,
  Cpu,
  BarChart3,
  Settings,
  Zap,
  Leaf,
} from 'lucide-react';

import agroSolImg from '../../../assets/agro_sol.png';
import irrigationImg from '../../../assets/irrigation.png';
import electrovanneImg from '../../../assets/electrovanne.png';
import smartIrrigationImg from '../../../assets/smart_irrigation.png';
import premiumPackImg from '../../../assets/premium_pack.png';
import clientExpansionImg from '../../../assets/client_expansion.png';
import electrovanneExpansionImg from '../../../assets/electrovanne_expansion.png';
import valveControlImg from '../../../assets/valve_control.png';
import sensorsExpansionImg from '../../../assets/sensors_expansion.png';
import droneServiceImg from '../../../assets/drone_service.png';
import placeholderProductImg from '../../../assets/placeholder-product.png';

/* ----------------------------- Payment Modal ----------------------------- */
const PaymentOptionsModal = ({ isOpen, onClose, totalAmount, cartItems, onConfirmOrder }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        onConfirmOrder();
        onClose();
        setSelectedPaymentMethod('');
      }, 1400);
    }, 1300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-700">
          {showSuccess ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Commande confirmée
              </h3>

              <p className="text-slate-600 dark:text-slate-300">
                {selectedPaymentMethod === 'online'
                  ? 'Votre paiement a été validé avec succès.'
                  : 'Votre commande a bien été enregistrée. Notre équipe vous contactera pour la suite.'}
              </p>
            </div>
          ) : isProcessing ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-500 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Traitement en cours...
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {selectedPaymentMethod === 'online'
                  ? 'Validation du paiement en ligne'
                  : 'Confirmation de votre commande'}
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Finaliser la commande
                </h2>

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </button>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Résumé de votre commande
                </h3>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Articles ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                    <span>{totalAmount.toLocaleString()} TND</span>
                  </div>

                  <div className="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-700 font-bold text-lg text-slate-900 dark:text-white">
                    <span>Total</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {totalAmount.toLocaleString()} TND
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Choisissez votre mode de paiement
                </h3>

                <div className="space-y-3">
                  <button
                    onClick={() => handlePaymentSelection('online')}
                    className="w-full p-4 border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 rounded-2xl transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <CreditCard className="w-6 h-6 text-emerald-500" />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          Paiement en ligne
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Carte bancaire ou solution digitale
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs text-emerald-500 font-medium">
                            Traitement immédiat
                          </span>
                        </div>
                      </div>

                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                  </button>

                  <button
                    onClick={() => handlePaymentSelection('delivery')}
                    className="w-full p-4 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 rounded-2xl transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <Truck className="w-6 h-6 text-blue-500" />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          Paiement à la livraison
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Commande confirmée, paiement à réception
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Shield className="w-4 h-4 text-blue-500" />
                          <span className="text-xs text-blue-500 font-medium">
                            Flexible et sécurisé
                          </span>
                        </div>
                      </div>

                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl border border-blue-100 dark:border-blue-400/20">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Note :</strong> pour les commandes nécessitant installation ou configuration,
                    notre équipe vous contacte après validation.
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

/* ----------------------------- Product Card ----------------------------- */
const ProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700 overflow-hidden group">
      <div className="relative h-52 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = placeholderProductImg;
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center border border-slate-200 dark:border-slate-700">
              {product.visual}
            </div>
          </div>
        )}

        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
              product.badge === 'PREMIUM'
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                : product.badge === 'SERVICE'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                : product.badge === 'EXPANSION'
                ? 'bg-gradient-to-r from-purple-500 to-purple-600'
                : 'bg-gradient-to-r from-emerald-500 to-emerald-600'
            }`}
          >
            {product.badge}
          </span>
        </div>

        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-900/90 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${
              isFavorite ? 'text-red-500 fill-current' : 'text-slate-400'
            }`}
          />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-slate-300 dark:text-slate-600'
                }`}
              />
            ))}
          </div>

          <span className="text-sm text-slate-500 dark:text-slate-400">
            {product.rating} ({product.reviews} avis)
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {product.name}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 min-h-[40px]">
          {product.description}
        </p>

        <div className="text-xs text-slate-500 dark:text-slate-400 mb-4 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full inline-block">
          {product.type}
        </div>

        <div className="mb-5">
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">
            Inclus :
          </h4>

          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-5">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {product.priceUnit
                ? `${product.price} TND`
                : `${product.price.toLocaleString()} TND`}
            </span>

            {product.priceUnit && (
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {product.priceUnit}
              </span>
            )}
          </div>

          {product.subscriptionPrice && (
            <div className="text-sm text-slate-500 dark:text-slate-400">
              + {product.subscriptionPrice} TND/{product.subscriptionPeriod} (abonnement)
            </div>
          )}

          {product.impact && (
            <div className="text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg mt-2 inline-block">
              {product.impact}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mb-5">
          <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
          <span className={`text-sm ${product.inStock ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
            {product.inStock ? 'Disponible' : 'Indisponible'}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 ml-auto">
            {product.delivery}
          </span>
        </div>

        <div className="flex gap-2">
          <Link
            to={product.detailLink || `/marketplace/product/${product.id}`}
            className="flex-1 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200 px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm"
          >
            Voir détail
          </Link>

          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed text-white px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------- Pricing -------------------------------- */
const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const categories = [
    { id: 'all', name: 'Toutes les offres', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'catalogue', name: 'Systèmes', icon: <Package className="w-5 h-5" /> },
    { id: 'expansion', name: 'Extensions', icon: <Plus className="w-5 h-5" /> },
    { id: 'drone', name: 'Services Drone', icon: <Plane className="w-5 h-5" /> },
  ];

 const products = [
  {
    id: 1,
    category: 'catalogue',
    name: 'AgroSol',
    description: 'Capteurs et intelligence agronomique pour suivre la fertilité du sol et ajuster les apports.',
    price: 2500,
    subscriptionPrice: 1200,
    subscriptionPeriod: 'an',
    rating: 4.9,
    reviews: 127,
    badge: 'CAPEX',
    type: 'Système de monitoring du sol',
    image: agroSolImg,
    detailLink: '/solutions/agro-sol',
    features: [
      'Capteurs NPK, pH et température',
      'Moteur NoyaSol intégré',
      'Monitoring continu',
      'Alertes intelligentes',
      'Historique des données',
    ],
    inStock: true,
    delivery: 'Installation 7-10 jours',
    impact: '+ rendement / - intrants / décisions localisées',
    visual: <Cpu className="w-12 h-12 text-emerald-500" />,
  },
  {
    id: 2,
    category: 'catalogue',
    name: 'Agro Irrigation Standard',
    description: 'Pilotage hydrique intelligent pour améliorer l’usage de l’eau et stabiliser l’irrigation.',
    price: 1400,
    subscriptionPrice: 600,
    subscriptionPeriod: 'an',
    rating: 4.7,
    reviews: 89,
    badge: 'CAPEX',
    type: 'Système d’irrigation standard',
    image: irrigationImg,
    detailLink: '/services-details/agro-irrigation-standard',
    features: [
      'Contrôle automatisé',
      'Monitoring temps réel',
      'Interface mobile',
      'Alertes hydriques',
      'Gestion plus précise',
    ],
    inStock: true,
    delivery: 'Installation 5-7 jours',
    impact: 'Optimisation eau et stabilité d’exécution',
    visual: <Droplets className="w-12 h-12 text-blue-500" />,
  },
  {
    id: 3,
    category: 'catalogue',
    name: 'Électrovanne',
    description: 'Composant de pilotage pour automatiser et fiabiliser les flux d’irrigation.',
    price: 250,
    rating: 4.8,
    reviews: 156,
    badge: 'CAPEX',
    type: 'Composant matériel',
    image: electrovanneImg,
    detailLink: '/services/agro-irrigation',
    features: [
      'Contrôle précis du débit',
      'Compatibilité système',
      'Installation simple',
      'Résistance terrain',
      'Garantie incluse',
    ],
    inStock: true,
    delivery: 'Livraison 2-3 jours',
    visual: <Settings className="w-12 h-12 text-slate-700 dark:text-slate-200" />,
  },
  {
    id: 4,
    category: 'catalogue',
    name: 'Agro Irrigation Smart',
    description: 'Version avancée avec logique intelligente pour arbitrer les besoins hydriques.',
    price: 3000,
    subscriptionPrice: 1000,
    subscriptionPeriod: 'an',
    rating: 4.9,
    reviews: 67,
    badge: 'CAPEX',
    type: 'Système avancé',
    image: smartIrrigationImg,
    detailLink: '/services-details/agro-irrigation-smart',
    features: [
      'Pilotage plus intelligent',
      'Analyse météo intégrée',
      'Rapports détaillés',
      'Support premium',
      'Optimisation automatisée',
    ],
    inStock: true,
    delivery: 'Installation 10-14 jours',
    impact: 'Plus d’efficience, moins de gaspillage',
    visual: <Zap className="w-12 h-12 text-yellow-500" />,
  },
  {
    id: 5,
    category: 'catalogue',
    name: 'Pack Premium Bundle',
    description: 'Solution complète pour une exploitation connectée, pilotée et plus autonome.',
    price: 4000,
    subscriptionPrice: 2000,
    subscriptionPeriod: 'an',
    rating: 5.0,
    reviews: 34,
    badge: 'PREMIUM',
    type: 'Solution intégrée',
    image: premiumPackImg,
    detailLink: '/services-details/pack-premium',
    features: [
      'AgroSol + Irrigation Smart',
      'Installation complète',
      'Formation incluse',
      'Support prioritaire',
      'Garantie étendue',
    ],
    inStock: true,
    delivery: 'Installation 14-21 jours',
    impact: 'Solution complète optimisée',
    visual: <Crown className="w-12 h-12 text-yellow-500" />,
  },
  {
    id: 6,
    category: 'expansion',
    name: 'Client Supplémentaire',
    description: 'Ajout d’un accès supplémentaire à la plateforme pour équipe ou partenaire.',
    price: 0.2,
    priceUnit: 'par client/mois',
    rating: 4.6,
    reviews: 89,
    badge: 'EXPANSION',
    type: 'Extension d’accès',
    image: clientExpansionImg,
    detailLink: '/solutions/dashboard-agronoya',
    features: [
      'Accès plateforme',
      'Dashboard dédié',
      'Notifications',
      'Support technique',
      'Activation rapide',
    ],
    inStock: true,
    delivery: 'Activation immédiate',
    visual: <Headphones className="w-12 h-12 text-purple-500" />,
  },
  {
    id: 7,
    category: 'expansion',
    name: 'Électrovanne Supplémentaire',
    description: 'Extension matérielle pour faire évoluer votre système d’irrigation.',
    price: 250,
    rating: 4.7,
    reviews: 123,
    badge: 'EXPANSION',
    type: 'Extension matérielle',
    image: electrovanneExpansionImg,
    detailLink: '/services/agro-irrigation',
    features: [
      'Compatible système existant',
      'Ajout plug & play',
      'Monitoring intégré',
      'Contrôle centralisé',
      'Garantie incluse',
    ],
    inStock: true,
    delivery: 'Livraison 2-3 jours',
    visual: <Settings className="w-12 h-12 text-purple-500" />,
  },
  {
    id: 8,
    category: 'expansion',
    name: 'Système de Contrôle des Vannes',
    description: 'Contrôleur central pour orchestrer plusieurs vannes depuis une seule interface.',
    price: 400,
    rating: 4.8,
    reviews: 67,
    badge: 'EXPANSION',
    type: 'Contrôle central',
    image: valveControlImg,
    detailLink: '/services/agro-irrigation',
    features: [
      'Gestion multi-vannes',
      'Programmation avancée',
      'Connectivité intégrée',
      'Pilotage unifié',
      'Sauvegarde cloud',
    ],
    inStock: true,
    delivery: 'Installation 3-5 jours',
    visual: <BarChart3 className="w-12 h-12 text-purple-500" />,
  },
  {
    id: 9,
    category: 'expansion',
    name: 'Capteurs Supplémentaires',
    description: 'Pack additionnel pour étendre la profondeur de mesure sur votre exploitation.',
    price: 200,
    rating: 4.5,
    reviews: 91,
    badge: 'EXPANSION',
    type: 'Pack capteurs',
    image: sensorsExpansionImg,
    detailLink: '/solutions/agro-sol',
    features: [
      'Température / humidité',
      'Débit / pression',
      'Transmission sans fil',
      'Extension terrain',
      'Batterie longue durée',
    ],
    inStock: true,
    delivery: 'Livraison 3-5 jours',
    visual: <Leaf className="w-12 h-12 text-purple-500" />,
  },
  {
    id: 10,
    category: 'drone',
    name: 'Service Drone Professionnel',
    description: 'Intervention drone pour cartographie, surveillance et diagnostic ciblé des cultures.',
    price: 60,
    priceUnit: 'par hectare/intervention',
    rating: 4.9,
    reviews: 156,
    badge: 'SERVICE',
    type: 'Service terrain',
    image: droneServiceImg,
    detailLink: '/services/agro-drone',
    features: [
      'Cartographie haute résolution',
      'Lecture multispectrale',
      'Détection précoce',
      'Rapport détaillé',
      'Intervention rapide',
    ],
    inStock: true,
    delivery: 'Intervention 24-48h',
    visual: <Plane className="w-12 h-12 text-blue-500" />,
  },
];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalSubscription = () => {
    return cart.reduce((total, item) => {
      if (item.subscriptionPrice) {
        return total + item.subscriptionPrice * item.quantity;
      }
      return total;
    }, 0);
  };

  const totalMaterial = useMemo(() => getTotalPrice(), [cart]);
  const totalSubscription = useMemo(() => getTotalSubscription(), [cart]);
  const totalGlobal = totalMaterial + totalSubscription;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.10),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_35%)]"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-200 dark:border-emerald-400/20">
            <Crown className="w-4 h-4" />
            AgroNoya Marketplace & Solutions
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Une offre claire,
            <span className="text-emerald-600 dark:text-emerald-400"> modulaire </span>
            et
            <span className="text-emerald-600 dark:text-emerald-400"> scalable</span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10">
            Explorez notre catalogue de systèmes, extensions et services pour construire
            une exploitation plus connectée, plus pilotée et plus performante.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <Package className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Systèmes
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Offres structurantes pour le sol, l’eau et le pilotage.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <Plus className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Extensions
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Faites évoluer votre installation sans repartir de zéro.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <Plane className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Services Drone
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Interventions terrain à forte valeur de diagnostic.
              </p>
            </div>
          </div>

          {/* Floating Cart */}
          <div className="fixed top-20 right-6 z-50">
            <button
              onClick={() => setShowCart(!showCart)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 relative"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Catalogue AgroNoya
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                {filteredProducts.length} offre{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
            >
              Besoin d’une offre personnalisée ?
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={toggleFavorite}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-[70] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowCart(false)}></div>

          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-700">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Votre panier
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)} article(s)
                  </p>
                </div>

                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-14">
                    <ShoppingCart className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      Votre panier est vide
                    </p>
                    <p className="text-sm text-slate-400 dark:text-slate-500">
                      Ajoutez une offre pour commencer.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                            {item.visual}
                          </div>

                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                              {item.name}
                            </h3>

                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                              {item.priceUnit
                                ? `${item.price} TND ${item.priceUnit}`
                                : `${item.price.toLocaleString()} TND`}
                            </p>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700"
                              >
                                <Minus className="w-3 h-3 text-slate-700 dark:text-slate-200" />
                              </button>

                              <span className="text-sm font-medium w-8 text-center text-slate-900 dark:text-white">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700"
                              >
                                <Plus className="w-3 h-3 text-slate-700 dark:text-slate-200" />
                              </button>

                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="ml-auto text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 p-1.5 rounded-lg transition-colors"
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

              {cart.length > 0 && (
                <div className="border-t border-slate-200 dark:border-slate-700 p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">
                        Matériel / service
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {totalMaterial.toLocaleString()} TND
                      </span>
                    </div>

                    {totalSubscription > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">
                          Abonnements / an
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {totalSubscription.toLocaleString()} TND
                        </span>
                      </div>
                    )}

                    <div className="border-t border-slate-200 dark:border-slate-700 pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-slate-900 dark:text-white">Total</span>
                        <span className="text-emerald-600 dark:text-emerald-400">
                          {totalGlobal.toLocaleString()} TND
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <PaymentOptionsModal
                      isOpen={showPaymentModal}
                      onClose={() => setShowPaymentModal(false)}
                      totalAmount={totalGlobal}
                      cartItems={cart}
                      onConfirmOrder={clearCart}
                    />

                    <button
                      onClick={() => setShowPaymentModal(true)}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-colors"
                    >
                      Procéder au paiement
                    </button>

                    <button
                      onClick={() => setShowCart(false)}
                      className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white py-3 rounded-xl font-semibold transition-colors"
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

      {/* Trust Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pourquoi choisir AgroNoya ?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Une offre conçue pour allier robustesse terrain, logique produit et accompagnement expert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Fiabilité</h4>
              <p className="text-white/80">
                Solutions conçues pour durer en contexte agricole réel.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Déploiement rapide</h4>
              <p className="text-white/80">
                Installation et mise en route avec accompagnement.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Support expert</h4>
              <p className="text-white/80">
                Suivi humain pour cadrer l’usage et les décisions.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Impact mesurable</h4>
              <p className="text-white/80">
                Des offres pensées pour produire des gains concrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Besoin d’un chiffrage plus précis ?
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Contactez notre équipe pour une configuration adaptée à votre type d’exploitation,
            vos contraintes hydriques et votre niveau d’équipement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Demander une consultation
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setShowCart(true)}
              className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
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