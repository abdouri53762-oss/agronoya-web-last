import React, { Suspense, lazy } from 'react';
import LazySection from '../components/common/LazySection';
import SectionLoader from '../components/common/SectionLoader';

const Hero = lazy(() => import('../components/features/Hero'));
const AboutAgroNoya = lazy(() => import('../components/AboutAgroNoya'));
const ProblematiquesSection = lazy(() => import('../components/features/ProblematiquesSection'));
const Gallery = lazy(() => import('../components/features/Gallery'));
const FeedbackSection = lazy(() => import('../components/FeedbackSection'));

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground animate-fade-in">
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      <LazySection fallback={<SectionLoader />} minHeight="420px">
        <Suspense fallback={<SectionLoader />}>
          <AboutAgroNoya />
        </Suspense>
      </LazySection>

      <LazySection fallback={<SectionLoader />} minHeight="500px">
        <Suspense fallback={<SectionLoader />}>
          <ProblematiquesSection />
        </Suspense>
      </LazySection>

      <LazySection fallback={<SectionLoader />} minHeight="500px">
        <Suspense fallback={<SectionLoader />}>
          <Gallery />
        </Suspense>
      </LazySection>

      <LazySection fallback={<SectionLoader />} minHeight="380px">
        <Suspense fallback={<SectionLoader />}>
          <FeedbackSection />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default HomePage;