import React from 'react';
import HeroFieldDetection from '../components/HeroFieldDetection';
import StatsSection from '../components/StatsSection';
import FeaturesGrid from '../components/FeaturesGrid';
import ApplicationsSection from '../components/ApplicationsSection';
import VisualExamples from '../components/VisualExamples';

const FieldDetectionPage = () => {
  return (
    <>
      <HeroFieldDetection />
      <StatsSection />
      <FeaturesGrid />
      <ApplicationsSection />
      <VisualExamples />
    </>
  );
};

export default FieldDetectionPage;

