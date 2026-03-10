import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Zap, Droplets, Brain, CheckCircle } from 'lucide-react';

const DroneSimulatorGame = () => {
  const [selectedMode, setSelectedMode] = useState('NDVI');
  const [isFlying, setIsFlying] = useState(false);
  const [dronePosition, setDronePosition] = useState({ x: 50, y: 50 });
  const [coverage, setCoverage] = useState(0);
  const [showSpectralImage, setShowSpectralImage] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [gridCoverage, setGridCoverage] = useState(Array(400).fill(0));
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const gameAreaRef = useRef(null);

  // Générer des données spectrales réalistes pour tout le champ
  const generateSpectralData = (mode) => {
    const data = [];
    for (let i = 0; i < 400; i++) { // 20x20 grid
      if (mode === 'NDVI') {
        // NDVI: Couleurs réalistes basées sur les vraies images
        const health = Math.random();
        if (health > 0.8) data.push(`hsl(120, 95%, 25%)`); // Vert très foncé - végétation dense
        else if (health > 0.6) data.push(`hsl(100, 85%, 35%)`); // Vert moyen - végétation saine
        else if (health > 0.4) data.push(`hsl(80, 90%, 45%)`); // Vert-jaune - végétation modérée
        else if (health > 0.25) data.push(`hsl(45, 95%, 55%)`); // Jaune - stress léger
        else if (health > 0.1) data.push(`hsl(25, 90%, 50%)`); // Orange - stress modéré
        else data.push(`hsl(0, 85%, 45%)`); // Rouge - végétation en stress/sol nu
      } else {
        // NDWI: Couleurs réalistes basées sur les vraies images
        const moisture = Math.random();
        if (moisture > 0.8) data.push(`hsl(220, 100%, 20%)`); // Bleu très foncé - eau/très humide
        else if (moisture > 0.6) data.push(`hsl(200, 90%, 35%)`); // Bleu moyen - humide
        else if (moisture > 0.4) data.push(`hsl(180, 80%, 50%)`); // Cyan - humidité modérée
        else if (moisture > 0.25) data.push(`hsl(160, 70%, 65%)`); // Vert-cyan - humidité faible
        else if (moisture > 0.1) data.push(`hsl(40, 60%, 70%)`); // Beige clair - sec
        else data.push(`hsl(30, 50%, 80%)`); // Beige très clair - très sec
      }
    }
    return data;
  };

  const [spectralData, setSpectralData] = useState(() => generateSpectralData('NDVI'));

  useEffect(() => {
    setSpectralData(generateSpectralData(selectedMode));
  }, [selectedMode]);

  const handleMouseMove = (e) => {
    if (!isFlying || !gameAreaRef.current) return;
    
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setDronePosition({ x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) });
    
    // Calculer la couverture en grille 20x20
    const gridX = Math.floor(x / 5);
    const gridY = Math.floor(y / 5);
    const gridIndex = gridY * 20 + gridX;
    
    setGridCoverage(prev => {
      const newGrid = [...prev];
      if (gridIndex >= 0 && gridIndex < 400) {
        newGrid[gridIndex] = Math.min(100, newGrid[gridIndex] + 3);
      }
      return newGrid;
    });
    
    // Calculer le pourcentage total de couverture
    const totalCoverage = gridCoverage.reduce((sum, cell) => sum + (cell > 50 ? 1 : 0), 0) / 400 * 100;
    setCoverage(Math.round(totalCoverage));
  };

  const startFlight = () => {
    setIsFlying(true);
    setShowSpectralImage(true);
    setAnalysisComplete(false);
    setAnalysisResults(null);
    setIsAnalyzing(false);
  };

  const resetGame = () => {
    setIsFlying(false);
    setShowSpectralImage(false);
    setAnalysisComplete(false);
    setAnalysisResults(null);
    setIsAnalyzing(false);
    setCoverage(0);
    setGridCoverage(Array(400).fill(0));
    setDronePosition({ x: 50, y: 50 });
  };

  const completeAnalysis = () => {
    if (coverage >= 80) {
      setIsAnalyzing(true);
      
      // Simulation d'analyse IA pendant 3 secondes
      setTimeout(() => {
        setAnalysisComplete(true);
        setIsAnalyzing(false);
        
        // Générer des résultats d'analyse IA réalistes
        const results = selectedMode === 'NDVI' ? {
          title: "Analyse NDVI - Santé Végétale",
          overall: "Bon état général",
          healthScore: 78,
          metrics: [
            { label: "Végétation saine", value: "72%", color: "text-green-400" },
            { label: "Stress modéré", value: "21%", color: "text-yellow-400" },
            { label: "Zones critiques", value: "7%", color: "text-red-400" }
          ],
          recommendations: [
            "Irrigation ciblée dans les zones rouges (secteurs 3, 7, 12)",
            "Surveillance accrue des zones jaunes pour prévenir le stress",
            "Fertilisation recommandée dans 2-3 semaines",
            "Excellent développement dans 72% de la parcelle"
          ]
        } : {
          title: "Analyse NDWI - Humidité du Sol",
          overall: "Humidité variable",
          healthScore: 65,
          metrics: [
            { label: "Humidité optimale", value: "58%", color: "text-blue-400" },
            { label: "Humidité modérée", value: "28%", color: "text-cyan-400" },
            { label: "Zones sèches", value: "14%", color: "text-orange-400" }
          ],
          recommendations: [
            "Irrigation prioritaire dans les zones beiges (secteurs 5, 9, 15)",
            "Optimisation du système d'irrigation goutte-à-goutte",
            "Surveillance météorologique pour les 7 prochains jours",
            "Bonne rétention d'eau dans 58% de la parcelle"
          ]
        };
        
        setAnalysisResults(results);
      }, 3000);
    }
  };

  useEffect(() => {
    if (coverage >= 80 && !analysisComplete && !isAnalyzing) {
      completeAnalysis();
    }
  }, [coverage, analysisComplete, isAnalyzing, completeAnalysis]);

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
      </div>

      {/* Sélection du mode */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-green-400 mb-4">
          Choisissez votre type d'analyse :
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setSelectedMode('NDVI')}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedMode === 'NDVI'
                ? 'border-green-500 bg-green-500/20'
                : 'border-gray-600 bg-gray-700/30 hover:border-green-400'
            }`}
          >
            <div className="flex items-center mb-2">
              <Zap className="w-5 h-5 text-green-400 mr-2" />
              <span className="font-semibold text-white">NDVI</span>
            </div>
            <p className="text-sm text-gray-300">
              Indice de Végétation Normalisé - Analyse de la santé des plantes
            </p>
          </button>
          
          <button
            onClick={() => setSelectedMode('NDWI')}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedMode === 'NDWI'
                ? 'border-blue-500 bg-blue-500/20'
                : 'border-gray-600 bg-gray-700/30 hover:border-blue-400'
            }`}
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
            className="flex-1 bg-[#57D53B] hover:bg-[#6AE649] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300"
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

      {/* Zone de jeu */}
      {isFlying && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-semibold">Mode: {selectedMode}</span>
            <span className="text-white font-semibold">Couverture: {coverage}%</span>
          </div>
          
          <div className="w-full bg-[#cfb989]/20 rounded-lg overflow-hidden border-2 border-gray-600">
            <div className="bg-gray-800 px-4 py-2 text-center">
              <p className="text-green-400 text-sm">
                🎮 Déplacez votre souris pour contrôler le drone
              </p>
              <p className="text-gray-400 text-xs">
                Objectif: Couvrir 80% du champ pour déclencher l'analyse IA
              </p>
            </div>
            
            <div
              ref={gameAreaRef}
              onMouseMove={handleMouseMove}
              className="relative w-full h-96 cursor-crosshair"
            >
              {/* Image spectrale complète en arrière-plan */}
              <div 
                className="absolute inset-0 grid grid-cols-20 gap-0"
                style={{
                  background: showSpectralImage 
                    ? `conic-gradient(from 0deg, ${spectralData.join(', ')})`
                    : 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)'
                }}
              >
                {/* Grille de couverture avec pourcentages */}
                {gridCoverage.map((cellCoverage, index) => (
                  <div
                    key={index}
                    className="border border-gray-600/30 flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: cellCoverage > 50 ? `rgba(255, 255, 255, 0.2)` : 'transparent',
                      color: cellCoverage > 50 ? '#fff' : 'transparent'
                    }}
                  >
                    {cellCoverage > 50 && `${Math.round(cellCoverage)}%`}
                  </div>
                ))}
              </div>

              {/* Drone réaliste avec 4 hélices */}
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 z-20"
                style={{
                  left: `${dronePosition.x}%`,
                  top: `${dronePosition.y}%`
                }}
              >
                {/* Corps du drone */}
                <div className="relative">
                  {/* Hélices avec rotation */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-300/80 rounded-full animate-spin" style={{animationDuration: '0.1s'}}></div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-300/80 rounded-full animate-spin" style={{animationDuration: '0.1s'}}></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gray-300/80 rounded-full animate-spin" style={{animationDuration: '0.1s'}}></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gray-300/80 rounded-full animate-spin" style={{animationDuration: '0.1s'}}></div>
                  
                  {/* Corps central du drone */}
                  <div className="w-12 h-12 bg-gray-800 rounded-xl border-2 border-orange-400 flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Bras du drone */}
                  <div className="absolute top-1/2 left-1/2 w-16 h-2 bg-gray-700 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-16 bg-gray-700 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  
                  {/* Caméra */}
                  <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-black rounded-full transform -translate-x-1/2 translate-y-1"></div>
                </div>
              </div>

              {/* Indicateur de scan */}
              <div
                className="absolute w-20 h-20 border-2 border-orange-400 rounded-full animate-ping opacity-50 z-10"
                style={{
                  left: `${dronePosition.x}%`,
                  top: `${dronePosition.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
            </div>
          </div>
          
          {/* Barre de progression */}
          <div className="mt-4">
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-green-500 to-orange-500 h-4 rounded-full transition-all duration-300 flex items-center justify-end pr-2"
                style={{ width: `${coverage}%` }}
              >
                {coverage > 10 && (
                  <span className="text-white text-xs font-bold">{coverage}%</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Phase d'analyse IA */}
      {isAnalyzing && (
        <div className="text-center space-y-6 mb-6">
          <div className="bg-[#cfb989]/20/50 rounded-xl p-8">
            <Brain className="w-16 h-16 text-orange-400 mx-auto mb-4 animate-pulse" />
            <h4 className="text-2xl font-bold text-white mb-2">Analyse IA en cours...</h4>
            <p className="text-gray-300">
              Notre intelligence artificielle traite les données {selectedMode} collectées
            </p>
            <div className="mt-6">
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Résultats d'analyse IA */}
      {analysisComplete && analysisResults && (
        <div className="bg-[#cfb989]/20/50 rounded-lg p-6 border border-green-500/30">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <h4 className="text-xl font-bold text-green-400">{analysisResults.title}</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Métriques Détectées</h5>
              <div className="space-y-3">
                {analysisResults.metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{metric.label}</span>
                    <span className={`font-bold ${metric.color}`}>{metric.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{analysisResults.healthScore}%</div>
                  <p className="text-green-400 font-semibold">Score de Santé Global</p>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Recommandations IA</h5>
              <ul className="space-y-2">
                {analysisResults.recommendations.map((rec, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DroneSimulatorGame;

