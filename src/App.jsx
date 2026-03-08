import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import './App.css';

const Layout = lazy(() => import('./layouts/Layout'));

const HomePage = lazy(() => import('./pages/HomePage'));
const FieldDetectionPage = lazy(() => import('./pages/FieldDetectionPage'));
const NosSolutionsPage = lazy(() => import('./pages/NosSolutionsPage'));
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const InvestisseursPage = lazy(() => import('./pages/InvestisseursPage'));
const DiseaseDetectionPage = lazy(() => import('./pages/DiseaseDetectionPage'));
const SoilAnalysisPage = lazy(() => import('./pages/SoilAnalysisPage'));
const SatelliteAnalysisPage = lazy(() => import('./pages/SatelliteAnalysisPage'));
const ChatbotPage = lazy(() => import('./pages/ChatbotPage'));
const DroneScanningPage = lazy(() => import('./pages/DroneScanningPage'));
const DroneSprayPage = lazy(() => import('./pages/DroneSprayPage'));
const WeatherForecastPage = lazy(() => import('./pages/WeatherForecastPage'));
const IrrigationPage = lazy(() => import('./pages/IrrigationPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const AgricultureDurablePage = lazy(() => import('./pages/AgricultureDurablePage'));

const AIPage = lazy(() => import('./pages/technologies/AIPage'));
const IoTPage = lazy(() => import('./pages/technologies/IoTPage'));
const ComputerVisionPage = lazy(() => import('./pages/technologies/ComputerVisionPage'));
const BigDataPage = lazy(() => import('./pages/technologies/BigDataPage'));
const CapteurIoTPage = lazy(() => import('./pages/technologies/CapteurIoTPage'));
const ImagerieSatellitePage = lazy(() => import('./pages/technologies/ImagerieSatellitePage'));
const DjiMavic3Page = lazy(() => import('./pages/technologies/DjiMavic3Page'));
const NoyaDiagPage = lazy(() => import('./pages/technologies/NoyaDiagPage'));
const ValidationDonneesPage = lazy(() => import('./pages/technologies/ValidationDonneesPage'));
const AnalyseContextuellePage = lazy(() => import('./pages/technologies/AnalyseContextuellePage'));
const SyntheseStrategiquePage = lazy(() => import('./pages/technologies/SyntheseStrategiquePage'));
const SupabaseSecuritePage = lazy(() => import('./pages/technologies/SupabaseSecuritePage'));
const MoteursAnalysePage = lazy(() => import('./pages/technologies/MoteursAnalysePage'));
const MoteursDialoguePage = lazy(() => import('./pages/technologies/MoteursDialoguePage'));
const NoyaGPTTechPage = lazy(() => import('./pages/technologies/NoyaGPTPage'));
const DashboardPrincipalAgroNoyaPage = lazy(() => import('./pages/technologies/DashboardPrincipalAgroNoyaPage'));
const DashboardIrrigationUnifiePage = lazy(() => import('./pages/technologies/DashboardIrrigationUnifiePage'));
const ApplicationsMobilesPage = lazy(() => import('./pages/technologies/ApplicationsMobilesPage'));
const AutomatisationIntelligentePage = lazy(() => import('./pages/technologies/AutomatisationIntelligentePage'));
const AnalyseDonneesTempsReelPage = lazy(() => import('./pages/technologies/AnalyseDonneesTempsReelPage'));
const EnrichissementIAPage = lazy(() => import('./pages/technologies/EnrichissementIAPage'));
const EnrichissementIARAGPage = lazy(() => import('./pages/technologies/EnrichissementIARAGPage'));
const DroneAgrasPage = lazy(() => import('./pages/technologies/DroneAgrasPage'));
const DroneAgrasExecutionPrecisePage = lazy(() => import('./pages/technologies/DroneAgrasExecutionPrecisePage'));
const EcosystemeEconomiqueDurablePage = lazy(() => import('./pages/technologies/EcosystemeEconomiqueDurablePage'));
const AgroNoyaStorePage = lazy(() => import('./pages/technologies/AgroNoyaStorePage'));
const CarbonTrackPage = lazy(() => import('./pages/technologies/CarbonTrackPage'));
const ImpactDeveloppementPage = lazy(() => import('./pages/technologies/ImpactDeveloppementPage'));

const AgroSolPage = lazy(() => import('./pages/solutions/AgroSolPage'));
const AgroSatPage = lazy(() => import('./pages/solutions/AgroSatPage'));
const DroneMultispectralPage = lazy(() => import('./pages/solutions/DroneMultispectralPage'));
const AgroIrrigationPage = lazy(() => import('./pages/solutions/AgroIrrigationPage'));
const AgroWeatherPage = lazy(() => import('./pages/solutions/AgroWeatherPage'));
const NoyaGPTPage = lazy(() => import('./pages/solutions/NoyaGPTPage'));
const NoyaDiagSolutionPage = lazy(() => import('./pages/solutions/NoyaDiagPage'));
const DashboardAgroNoyaPage = lazy(() => import('./pages/solutions/DashboardAgroNoyaPage'));
const ModuleESGPage = lazy(() => import('./pages/solutions/ModuleESGPage'));
const MarketplaceAgroStorePage = lazy(() => import('./pages/solutions/MarketplaceAgroStorePage'));
const CollectiveAlertSystemPage = lazy(() => import('./pages/solutions/CollectiveAlertSystemPage'));
const IrrigationFailureMonitoringPage = lazy(() => import('./pages/solutions/IrrigationFailureMonitoringPage'));
const CarbonCertificationPage = lazy(() => import('./pages/solutions/CarbonCertificationPage'));

const StrategicConsultationPage = lazy(() => import('./pages/services/StrategicConsultationPage'));
const IoTInstallationPage = lazy(() => import('./pages/services/IoTInstallationPage'));
const DroneSurveillancePage = lazy(() => import('./pages/services/DroneSurveillancePage'));
const SmartWaterManagementPage = lazy(() => import('./pages/services/SmartWaterManagementPage'));
const PhytosanitaryProtectionPage = lazy(() => import('./pages/services/PhytosanitaryProtectionPage'));
const FullAutomationPage = lazy(() => import('./pages/services/FullAutomationPage'));

const AgroSolDetailPage = lazy(() => import('./pages/services-details/AgroSolDetailPage'));
const AgroIrrigationStandardDetailPage = lazy(() => import('./pages/services-details/AgroIrrigationStandardDetailPage'));
const AgroIrrigationSmartDetailPage = lazy(() => import('./pages/services-details/AgroIrrigationSmartDetailPage'));
const PackPremiumDetailPage = lazy(() => import('./pages/services-details/PackPremiumDetailPage'));
const ServiceDroneFertilisationDetailPage = lazy(() => import('./pages/services-details/ServiceDroneFertilisationDetailPage'));
const ServiceDroneGroundTruthDetailPage = lazy(() => import('./pages/services-details/ServiceDroneGroundTruthDetailPage'));
const AgroStoreDetailPage = lazy(() => import('./pages/services-details/AgroStoreDetailPage'));

const ProductDetailPage = lazy(() => import('./pages/marketplace/ProductDetailPage'));

function PageLoader() {
  return (
    <div className="page-loader animate-fade-in">
      Chargement...
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="field-detection" element={<FieldDetectionPage />} />
              <Route path="services" element={<Navigate to="/solutions" replace />} />
              <Route path="solutions" element={<NosSolutionsPage />} />
              <Route path="technologies" element={<TechnologiesPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="marketplace/product/:productId" element={<ProductDetailPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="investisseurs" element={<InvestisseursPage />} />
              <Route path="agriculture-durable" element={<AgricultureDurablePage />} />

              <Route path="solutions/disease-detection" element={<DiseaseDetectionPage />} />
              <Route path="solutions/soil-analysis" element={<SoilAnalysisPage />} />
              <Route path="solutions/satellite-analysis" element={<SatelliteAnalysisPage />} />
              <Route path="solutions/chatbot" element={<ChatbotPage />} />
              <Route path="solutions/drone-scanning" element={<DroneScanningPage />} />
              <Route path="solutions/drone-spray" element={<DroneSprayPage />} />
              <Route path="solutions/weather-forecast" element={<WeatherForecastPage />} />
              <Route path="solutions/irrigation" element={<IrrigationPage />} />
              <Route path="solutions/dashboard" element={<DashboardPage />} />
              <Route path="solutions/agro-sol" element={<AgroSolPage />} />
              <Route path="solutions/agro-sat" element={<AgroSatPage />} />
              <Route path="solutions/drone-multispectral" element={<DroneMultispectralPage />} />
              <Route path="solutions/agro-irrigation" element={<AgroIrrigationPage />} />
              <Route path="solutions/agro-weather" element={<AgroWeatherPage />} />
              <Route path="solutions/noya-gpt" element={<NoyaGPTPage />} />
              <Route path="solutions/noya-diag" element={<NoyaDiagSolutionPage />} />
              <Route path="solutions/dashboard-agronoya" element={<DashboardAgroNoyaPage />} />
              <Route path="solutions/module-esg" element={<ModuleESGPage />} />
              <Route path="solutions/marketplace-agro-store" element={<MarketplaceAgroStorePage />} />
              <Route path="solutions/collective-alert-system" element={<CollectiveAlertSystemPage />} />
              <Route path="solutions/irrigation-failure-monitoring" element={<IrrigationFailureMonitoringPage />} />
              <Route path="solutions/carbon-certification" element={<CarbonCertificationPage />} />

              <Route path="technologies/ai" element={<AIPage />} />
              <Route path="technologies/iot" element={<IoTPage />} />
              <Route path="technologies/computer-vision" element={<ComputerVisionPage />} />
              <Route path="technologies/big-data" element={<BigDataPage />} />
              <Route path="technologies/capteurs-iot" element={<CapteurIoTPage />} />
              <Route path="technologies/imagerie-satellite" element={<ImagerieSatellitePage />} />
              <Route path="technologies/dji-mavic-3-multispectral" element={<DjiMavic3Page />} />
              <Route path="technologies/noyadiag" element={<NoyaDiagPage />} />
              <Route path="technologies/validation-instantane" element={<ValidationDonneesPage />} />
              <Route path="technologies/nettoyage-temps-rel" element={<AnalyseContextuellePage />} />
              <Route path="technologies/prparation-pour-lia" element={<SyntheseStrategiquePage />} />
              <Route path="technologies/architecture-supabase-scurise" element={<SupabaseSecuritePage />} />
              <Route path="technologies/moteurs-danalyse-scientifiques" element={<MoteursAnalysePage />} />
              <Route path="technologies/moteurs-de-dialogue-conseillers" element={<MoteursDialoguePage />} />
              <Route path="technologies/noyagpt" element={<NoyaGPTTechPage />} />
              <Route path="technologies/dashboard-principal-agronoya" element={<DashboardPrincipalAgroNoyaPage />} />
              <Route path="technologies/dashboard-irrigation-unifie" element={<DashboardIrrigationUnifiePage />} />
              <Route path="technologies/applications-mobiles" element={<ApplicationsMobilesPage />} />
              <Route path="technologies/automatisation-intelligente" element={<AutomatisationIntelligentePage />} />
              <Route path="technologies/analyse-donnees-temps-reel" element={<AnalyseDonneesTempsReelPage />} />
              <Route path="technologies/enrichissement-ia" element={<EnrichissementIAPage />} />
              <Route path="technologies/enrichissement-ia-rag" element={<EnrichissementIARAGPage />} />
              <Route path="technologies/drone-agras" element={<DroneAgrasPage />} />
              <Route path="technologies/drone-agras-execution-precise" element={<DroneAgrasExecutionPrecisePage />} />
              <Route path="technologies/ecosysteme-economique-durable" element={<EcosystemeEconomiqueDurablePage />} />
              <Route path="technologies/agronoya-store" element={<AgroNoyaStorePage />} />
              <Route path="technologies/carbontrack" element={<CarbonTrackPage />} />
              <Route path="technologies/impact-developpement" element={<ImpactDeveloppementPage />} />

              <Route path="services/strategic-consultation" element={<StrategicConsultationPage />} />
              <Route path="services/iot-installation" element={<IoTInstallationPage />} />
              <Route path="services/drone-surveillance" element={<DroneSurveillancePage />} />
              <Route path="services/smart-water-management" element={<SmartWaterManagementPage />} />
              <Route path="services/phytosanitary-protection" element={<PhytosanitaryProtectionPage />} />
              <Route path="services/full-automation" element={<FullAutomationPage />} />
              <Route path="services/agro-sol" element={<AgroSolDetailPage />} />
              <Route path="services/agro-irrigation" element={<AgroIrrigationStandardDetailPage />} />
              <Route path="services/noya-gpt" element={<NoyaGPTPage />} />
              <Route path="services/agro-sat" element={<AgroSatPage />} />
              <Route path="services/agro-drone" element={<DroneMultispectralPage />} />
              <Route path="services/agro-store" element={<AgroStoreDetailPage />} />
              <Route path="services/agro-dashboard" element={<DashboardAgroNoyaPage />} />

              <Route path="services-details/agro-sol" element={<AgroSolDetailPage />} />
              <Route path="services-details/agro-irrigation-standard" element={<AgroIrrigationStandardDetailPage />} />
              <Route path="services-details/agro-irrigation-smart" element={<AgroIrrigationSmartDetailPage />} />
              <Route path="services-details/pack-premium" element={<PackPremiumDetailPage />} />
              <Route path="services-details/service-drone-fertilisation" element={<ServiceDroneFertilisationDetailPage />} />
              <Route path="services-details/service-drone-ground-truth" element={<ServiceDroneGroundTruthDetailPage />} />
              <Route path="services-details/agro-store" element={<AgroStoreDetailPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;