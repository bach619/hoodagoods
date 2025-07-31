import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import DisclaimerPopup from './components/ui/DisclaimerPopup';

// Lazy load all page components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const ReviewPage = React.lazy(() => import('./pages/ReviewPage'));
const ComparisonPage = React.lazy(() => import('./pages/ComparisonPage'));
const SearchResultsPage = React.lazy(() => import('./pages/SearchResultsPage'));
const TrendingProductsPage = React.lazy(() => import('./pages/TrendingProductsPage'));
const LatestProductsPage = React.lazy(() => import('./pages/LatestProductsPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Loading component for Suspense fallback
const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      <p className="text-gray-600 animate-pulse">Loading...</p>
    </div>
  </div>
);

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const hasAcceptedDisclaimer = localStorage.getItem('disclaimerAccepted');
    if (!hasAcceptedDisclaimer) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowDisclaimer(false);
  };

  const handleDeclineDisclaimer = () => {
    // You might want to redirect to a different page or show limited content
    setShowDisclaimer(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {showDisclaimer && (
        <DisclaimerPopup
          onAccept={handleAcceptDisclaimer}
          onDecline={handleDeclineDisclaimer}
        />
      )}
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/review/:reviewSlug" element={<ReviewPage />} />
            <Route path="/compare" element={<ComparisonPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/trending" element={<TrendingProductsPage />} />
            <Route path="/latest" element={<LatestProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;