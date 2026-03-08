import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, RotateCcw, Zap, Droplets, Brain, CheckCircle, ArrowLeft, ArrowRight, Leaf, Eye } from 'lucide-react';

const DroneSimulatorGameEnhanced = () => {
  const [selectedMode, setSelectedMode] = useState('NDVI');
  const [isFlying, setIsFlying] = useState(false);
  const [dronePosition, setDronePosition] = useState({ x: 10, y: 50 });
  const [coverage, setCoverage] = useState(0);
  const [showSpectralImage, setShowSpectralImage] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [gridCoverage, setGridCoverage] = useState(Array(400).fill(0));
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const gameAreaRef = useRef(null);
  const animationRef = useRef(null);

  // Générer des données spectrales réalistes avec patterns agricoles
  const generateSpectralData = (mode) => {
    const data = [];
    for (let i = 0; i < 400; i++) {
      const row = Math.floor(i / 20);
      const col = i % 20;
      
      if (mode === 'NDVI') {
        // Créer des patterns de plantation réalistes
        const isPlantRow = row % 3 === 0 || row % 3 === 1;
        const health = isPlantRow ? 
          Math.random() * 0.4 + 0.6 : // Lignes de plantation plus saines
          Math.random() * 0.3 + 0.2;  // Espaces entre lignes moins denses
        
        if (health > 0.85) data.push(`hsl(120, 95%, 25%)`); // Vert très foncé
        else if (health > 0.7) data.push(`hsl(100, 85%, 35%)`); // Vert sain
        else if (health > 0.5) data.push(`hsl(80, 90%, 45%)`); // Vert-jaune
        else if (health > 0.3) data.push(`hsl(45, 95%, 55%)`); // Jaune
        else if (health > 0.15) data.push(`hsl(25, 90%, 50%)`); // Orange
        else data.push(`hsl(0, 85%, 45%)`); // Rouge
      } else {
        // NDWI avec patterns d'irrigation
        const distanceFromCenter = Math.abs(col - 10) + Math.abs(row - 10);
        const moisture = Math.max(0, 1 - (distanceFromCenter / 20)) + Math.random() * 0.3;
        
        if (moisture > 0.8) data.push(`hsl(220, 100%, 20%)`); // Bleu très foncé
        else if (moisture > 0.6) data.push(`hsl(200, 90%, 35%)`); // Bleu moyen
        else if (moisture > 0.4) data.push(`hsl(180, 80%, 50%)`); // Cyan
        else if (moisture > 0.25) data.push(`hsl(160, 70%, 65%)`); // Vert-cyan
        else if (moisture > 0.1) data.push(`hsl(40, 60%, 70%)`); // Beige
        else data.push(`hsl(30, 50%, 80%)`); // Beige clair
      }
    }
    return data;
  };

  const [spectralData, setSpectralData] = useState(() => generateSpectralData('NDVI'));

  useEffect(() => {
    setSpectralData(generateSpectralData(selectedMode));
  }, [selectedMode]);

  // Gestion du mouvement du drone avec contraintes horizontales
  const updateDronePosition = useCallback((clientX, clientY) => {
    if (!gameAreaRef.current) return;
    
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = 50; // Maintenir le drone au centre verticalement
    
    const newX = Math.max(5, Math.min(95, x));
    setDronePosition({ x: newX, y });
    
    // Calculer la couverture basée sur la position horizontale
    const progress = (newX - 5) / 90; // Normaliser entre 0 et 1
    setScanProgress(progress * 100);
    
    // Mettre à jour la grille de couverture
    const gridX = Math.floor(newX / 5);
    setGridCoverage(prev => {
      const newGrid = [...prev];
      for (let row = 0; row < 20; row++) {
        for (let col = Math.max(0, gridX - 1); col <= Math.min(19, gridX + 1); col++) {
          const index = row * 20 + col;
          if (index >= 0 && index < 400) {
            newGrid[index] = Math.min(100, newGrid[index] + 5);
          }
        }
      }
      return newGrid;
    });
    
    // Calculer le pourcentage total de couverture
    const totalCoverage = gridCoverage.reduce((sum, cell) => sum + (cell > 30 ? 1 : 0), 0) / 400 * 100;
    setCoverage(Math.round(totalCoverage));
  }, [gridCoverage]);

  // Gestion des événements de souris
  const handleMouseDown = (e) => {
    if (!isFlying) return;
    setIsDragging(true);
    updateDronePosition(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !isFlying) return;
    updateDronePosition(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Gestion des touches fléchées
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isFlying) return;
      
      let newX = dronePosition.x;
      if (e.key === 'ArrowLeft') newX = Math.max(5, dronePosition.x - 5);
      if (e.key === 'ArrowRight') newX = Math.min(95, dronePosition.x + 5);
      
      if (newX !== dronePosition.x) {
        setDronePosition({ x: newX, y: 50 });
        setScanProgress((newX - 5) / 90 * 100);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlying, dronePosition.x]);

  // Gestion des événements globaux de souris
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove]);

  const startFlight = () => {
    setIsFlying(true);
    setShowSpectralImage(true);
    setAnalysisComplete(false);
    setAnalysisResults(null);
    setIsAnalyzing(false);
    setDronePosition({ x: 10, y: 50 });
    setScanProgress(0);
  };

  const resetGame = () => {
    setIsFlying(false);
    setShowSpectralImage(false);
    setAnalysisComplete(false);
    setAnalysisResults(null);
    setIsAnalyzing(false);
    setCoverage(0);
    setScanProgress(0);
    setGridCoverage(Array(400).fill(0));
    setDronePosition({ x: 10, y: 50 });
  };

  const completeAnalysis = () => {
    if (scanProgress >= 80) {
      setIsAnalyzing(true);
      
      setTimeout(() => {
        setAnalysisComplete(true);
        setIsAnalyzing(false);
        
        const results = selectedMode === 'NDVI' ? {
          title: "Analyse NDVI - Santé Végétale",
          overall: "Excellent développement végétatif",
          healthScore: 82,
          metrics: [
            { label: "Végétation dense", value: "68%", color: "text-green-400" },
            { label: "Croissance normale", value: "24%", color: "text-yellow-400" },
            { label: "Zones de stress", value: "8%", color: "text-red-400" }
          ],
          recommendations: [
            "🎯 Fertilisation ciblée recommandée dans les zones rouges (secteurs 3, 7, 12)",
            "💧 Irrigation supplémentaire nécessaire dans 8% de la parcelle",
            "📈 Excellent potentiel de rendement dans 68% du champ",
            "⏰ Surveillance accrue recommandée dans 2 semaines",
            "🌱 Développement optimal détecté dans les lignes de plantation principales"
          ]
        } : {
          title: "Analyse NDWI - Humidité du Sol",
          overall: "Distribution hydrique optimisée",
          healthScore: 75,
          metrics: [
            { label: "Humidité optimale", value: "62%", color: "text-blue-400" },
            { label: "Humidité modérée", value: "26%", color: "text-cyan-400" },
            { label: "Zones sèches", value: "12%", color: "text-orange-400" }
          ],
          recommendations: [
            "💧 Irrigation prioritaire dans les zones périphériques (secteurs 5, 9, 15)",
            "⚙️ Optimisation du système d'irrigation goutte-à-goutte recommandée",
            "🌡️ Surveillance météorologique pour les 7 prochains jours",
            "📊 Excellente rétention d'eau dans la zone centrale",
            "🔄 Ajustement des cycles d'irrigation selon les zones identifiées"
          ]
        };
        
        setAnalysisResults(results);
      }, 3000);
    }
  };

  useEffect(() => {
    if (scanProgress >= 80 && !analysisComplete && !isAnalyzing) {
      completeAnalysis();
    }
  }, [scanProgress, analysisComplete, isAnalyzing]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-800/30 rounded-2xl border border-[#cfb989]/30">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
          <Zap className="w-6 h-6 text-orange-400 mr-2" />
          Simulateur de Drone Multispectral Expert
        </h3>
        <p className="text-gray-300">
          Contrôlez un drone virtuel réaliste et découvrez l'imagerie spectrale complète
        </p>
        <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-400">
          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            Simulation réaliste
          </span>
          <span>•</span>
          <span>Basée sur de vraies données agricoles tunisiennes</span>
        </div>
      </div>

      {/* Sélection du mode pré-vol */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-4">
          Choisissez votre type d'analyse :
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setSelectedMode('NDVI')}
            disabled={isFlying}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedMode === 'NDVI'
                ? 'border-green-500 bg-green-500/20'
                : 'border-gray-600 bg-gray-700/30 hover:border-green-400'
            } ${isFlying ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="flex items-center mb-2">
              <Leaf className="w-5 h-5 text-green-400 mr-2" />
              <span className="font-semibold text-white">NDVI</span>
            </div>
            <p className="text-sm text-gray-300">
              Indice de Végétation Normalisé - Analyse de la santé des plantes
            </p>
          </button>
          
          <button
            onClick={() => setSelectedMode('NDWI')}
            disabled={isFlying}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedMode === 'NDWI'
                ? 'border-blue-500 bg-blue-500/20'
                : 'border-gray-600 bg-gray-700/30 hover:border-blue-400'
            } ${isFlying ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="flex items-center mb-2">
              <Droplets className="w-5 h-5 text-blue-400 mr-2" />
              <span className="font-semibold text-white">NDWI</span>
            </div>
            <p className="text-sm text-gray-300">
              Indice d'Eau Normalisé - Analyse de l'humidité du sol
            </p>
          </button>
        </div>
      </div>

      {/* Contrôles */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {!isFlying ? (
          <button
            onClick={startFlight}
            className="flex-1 bg-[#57D53B] hover:bg-[#6AE649] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Démarrer le Vol
          </button>
        ) : (
          <button
            onClick={resetGame}
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Réinitialiser
          </button>
        )}
      </div>

      {/* Zone de jeu principale */}
      {isFlying && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-semibold">Mode: {selectedMode}</span>
            <span className="text-white font-semibold">Progression: {Math.round(scanProgress)}%</span>
          </div>
          
          <div className="w-full bg-[#cfb989]/20 rounded-lg overflow-hidden border-2 border-gray-600">
            {/* Instructions de contrôle */}
            <div className="bg-gray-800 px-4 py-3 text-center">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center text-green-400">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  <span>Glisser pour scanner</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">Utilisez les flèches ← → ou la souris</span>
              </div>
            </div>
            
            {/* Zone de jeu avec champ agricole */}
            <div
              ref={gameAreaRef}
              onMouseDown={handleMouseDown}
              className="relative w-full h-96 cursor-crosshair select-none"
              style={{
                background: showSpectralImage 
                  ? `linear-gradient(90deg, ${spectralData.join(', ')})`
                  : 'linear-gradient(135deg, #22c55e 0%, #16a34a 30%, #15803d 60%, #166534 100%)'
              }}
            >
              {/* Texture de champ agricole en overlay */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 15px,
                    rgba(0,0,0,0.1) 15px,
                    rgba(0,0,0,0.1) 18px
                  )`
                }}
              ></div>

              {/* Grille de données avec pourcentages */}
              <div className="absolute inset-0 grid grid-cols-20 gap-0 opacity-60">
                {gridCoverage.map((cellCoverage, index) => (
                  <div
                    key={index}
                    className="border border-gray-600/20 flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: cellCoverage > 30 ? `rgba(255, 255, 255, 0.15)` : 'transparent',
                      color: cellCoverage > 30 ? '#fff' : 'transparent'
                    }}
                  >
                    {cellCoverage > 30 && `${Math.round(cellCoverage)}%`}
                  </div>
                ))}
              </div>

              {/* Drone vert stylisé avec 4 hélices */}
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 z-20"
                style={{
                  left: `${dronePosition.x}%`,
                  top: `${dronePosition.y}%`
                }}
              >
                <div className="relative">
                  {/* Hélices avec rotation rapide */}
                  <div className="absolute -top-6 -left-6 w-10 h-10 bg-white/70 rounded-full animate-spin border-2 border-gray-300" style={{animationDuration: '0.05s'}}>
                    <div className="absolute inset-2 bg-gray-600 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-10 h-10 bg-white/70 rounded-full animate-spin border-2 border-gray-300" style={{animationDuration: '0.05s'}}>
                    <div className="absolute inset-2 bg-gray-600 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-white/70 rounded-full animate-spin border-2 border-gray-300" style={{animationDuration: '0.05s'}}>
                    <div className="absolute inset-2 bg-gray-600 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-white/70 rounded-full animate-spin border-2 border-gray-300" style={{animationDuration: '0.05s'}}>
                    <div className="absolute inset-2 bg-gray-600 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  {/* Corps central vert */}
                  <div className="w-16 h-16 bg-green-600 rounded-xl border-3 border-green-400 flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-green-300 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Bras du drone verts */}
                  <div className="absolute top-1/2 left-1/2 w-20 h-3 bg-green-700 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-3 h-20 bg-green-700 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  
                  {/* Caméra multispectrale */}
                  <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 translate-y-2 border-2 border-orange-400"></div>
                </div>
              </div>

              {/* Zone de scan avec effet visuel */}
              <div
                className="absolute w-24 h-24 border-2 border-orange-400 rounded-full animate-ping opacity-40 z-10"
                style={{
                  left: `${dronePosition.x}%`,
                  top: `${dronePosition.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>

              {/* Trail de scan */}
              <div
                className="absolute top-0 bottom-0 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent z-5"
                style={{
                  left: '5%',
                  width: `${scanProgress * 0.9}%`
                }}
              ></div>

              {/* Bouton slide to scan */}
              {scanProgress < 10 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="bg-gray-800/90 text-white px-6 py-2 rounded-full border border-orange-400 flex items-center space-x-2 animate-pulse">
                    <ArrowLeft className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-semibold">Glisser pour scanner</span>
                    <ArrowRight className="w-4 h-4 text-orange-400" />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Barre de progression améliorée */}
          <div className="mt-4">
            <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 via-orange-500 to-red-500 h-6 rounded-full transition-all duration-300 flex items-center justify-end pr-3 relative"
                style={{ width: `${scanProgress}%` }}
              >
                {scanProgress > 15 && (
                  <span className="text-white text-sm font-bold">{Math.round(scanProgress)}%</span>
                )}
                {scanProgress > 5 && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse"></div>
                )}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Début du champ</span>
              <span>Fin du champ</span>
            </div>
          </div>
        </div>
      )}

      {/* Phase d'analyse IA améliorée */}
      {isAnalyzing && (
        <div className="text-center space-y-6 mb-6">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl p-8 border border-orange-400/30">
            <Brain className="w-20 h-20 text-orange-400 mx-auto mb-4 animate-pulse" />
            <h4 className="text-2xl font-bold text-white mb-2">Analyse IA en cours...</h4>
            <p className="text-gray-300 mb-4">
              Notre intelligence artificielle traite les données {selectedMode} collectées
            </p>
            <div className="text-sm text-gray-400 mb-6">
              Traitement de {Math.round(scanProgress)}% du champ scanné
            </div>
            <div className="flex justify-center space-x-2">
              <div className="w-4 h-4 bg-orange-400 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-4 h-4 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      )}

      {/* Résultats d'analyse IA améliorés */}
      {analysisComplete && analysisResults && (
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-lg p-6 border border-green-500/30">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <h4 className="text-xl font-bold text-green-400">{analysisResults.title}</h4>
              <p className="text-gray-300 text-sm">{analysisResults.overall}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Métriques Détectées</h5>
              <div className="space-y-4">
                {analysisResults.metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">{metric.label}</span>
                    <span className={`font-bold text-lg ${metric.color}`}>{metric.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-1">{analysisResults.healthScore}%</div>
                  <p className="text-green-400 font-semibold">Score de Santé Global</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${analysisResults.healthScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Recommandations IA</h5>
              <div className="space-y-3">
                {analysisResults.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-800/30 rounded-lg border-l-4 border-orange-400">
                    <span className="text-orange-400 mr-3 mt-1 text-lg">•</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{rec}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <h6 className="text-blue-400 font-semibold mb-2">Prochaines étapes</h6>
                <p className="text-gray-300 text-sm">
                  Planifiez vos interventions selon les zones identifiées. 
                  Un rapport détaillé sera généré pour votre exploitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DroneSimulatorGameEnhanced;

