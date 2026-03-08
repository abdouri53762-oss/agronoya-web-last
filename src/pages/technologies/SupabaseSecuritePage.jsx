import React from 'react';
import { ArrowLeft, Shield, Lock, Key, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SupabaseSecuritePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <button
            onClick={() => navigate('/technologies')}
            className="flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux Technologies
          </button>
          
          <div className="text-center">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 mb-6">
              <Shield className="w-12 h-12 text-gray-900 dark:text-slate-50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Architecture <span className="text-emerald-400">Supabase</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sécurité au repos et en transit - La dernière ligne de défense
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 mb-12 border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Couche de Protection de la Donnée</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            C'est la dernière ligne de défense, qui protège l'information elle-même. Notre architecture Supabase garantit 
            une sécurité maximale à tous les niveaux, de la transmission au stockage, en passant par la gestion des accès 
            et la continuité de service.
          </p>
          <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-emerald-500/20">
            <p className="text-emerald-300 font-semibold text-lg">
              Quatre couches de sécurité pour une protection absolue de vos données agricoles.
            </p>
          </div>
        </div>

        {/* Security Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Chiffrement */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-emerald-500/30">
            <div className="flex items-center mb-6">
              <Lock className="w-8 h-8 text-emerald-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">Chiffrement (Encryption)</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-300 mb-3">En Transit :</h4>
                <p className="text-gray-300 leading-relaxed">
                  Toutes les communications entre le client et les serveurs Supabase sont obligatoirement chiffrées via SSL/TLS. 
                  Chaque donnée qui voyage sur le réseau est protégée par un tunnel sécurisé.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-300 mb-3">Au Repos :</h4>
                <p className="text-gray-300 leading-relaxed">
                  Les données stockées dans la base de données, y compris les sauvegardes, sont chiffrées sur les serveurs d'infrastructure. 
                  Même en cas d'accès physique aux serveurs, vos données restent illisibles.
                </p>
              </div>
            </div>
          </div>

          {/* Gestion des Secrets */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-teal-500/30">
            <div className="flex items-center mb-6">
              <Key className="w-8 h-8 text-teal-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">Gestion des Secrets</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Toutes les clés d'API tierces (services météo, etc.) ou autres informations sensibles ne sont jamais stockées 
                dans le code de l'application.
              </p>
              <div className="p-4 bg-teal-900/30 rounded-lg">
                <p className="text-teal-200 text-sm">
                  <strong>Sécurité renforcée :</strong> Elles sont stockées de manière sécurisée et chiffrée via le gestionnaire 
                  de secrets de Supabase et ne sont accessibles que par nos Edge Functions.
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Cette approche garantit qu'aucune information critique ne peut être compromise, même en cas d'accès au code source.
              </p>
            </div>
          </div>

          {/* Sauvegardes */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-blue-500/30">
            <div className="flex items-center mb-6">
              <Database className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">Sauvegardes et Reprise d'Activité</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Nous activons les sauvegardes automatiques et la fonctionnalité Point-in-Time Recovery (PITR) de Supabase.
              </p>
              <div className="p-4 bg-blue-900/30 rounded-lg">
                <p className="text-blue-200 text-sm">
                  <strong>Capacité de récupération :</strong> Nous pouvons restaurer la base de données à n'importe quelle seconde 
                  des derniers jours en cas d'incident majeur.
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Cette fonctionnalité garantit une continuité de service maximale et une protection contre la perte de données.
              </p>
            </div>
          </div>

          {/* Architecture Globale */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-purple-500/30">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-50">Écosystème Sécurisé</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                En combinant ces quatre couches de sécurité, nous nous assurons que l'écosystème AgroNoya est non seulement 
                puissant et intelligent, mais aussi robuste, résilient et digne de la confiance de nos utilisateurs.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Protection multicouche des données
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Chiffrement de bout en bout
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Gestion sécurisée des accès
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Continuité de service garantie
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Stats */}
        <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-emerald-500/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Garanties de Sécurité</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-emerald-900/30 rounded-xl">
              <Lock className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-emerald-400 mb-1">SSL/TLS</div>
              <p className="text-gray-300 text-sm">Chiffrement transit</p>
            </div>
            <div className="text-center p-6 bg-teal-900/30 rounded-xl">
              <Key className="w-8 h-8 text-teal-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-teal-400 mb-1">AES-256</div>
              <p className="text-gray-300 text-sm">Chiffrement repos</p>
            </div>
            <div className="text-center p-6 bg-blue-900/30 rounded-xl">
              <Database className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-400 mb-1">PITR</div>
              <p className="text-gray-300 text-sm">Récupération seconde</p>
            </div>
            <div className="text-center p-6 bg-purple-900/30 rounded-xl">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
              <p className="text-gray-300 text-sm">Disponibilité</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupabaseSecuritePage;

