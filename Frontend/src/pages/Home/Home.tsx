import React from 'react';
import HeroSection from '../../features/matches/components/HeroSection/HeroSection';
import FeaturedMatches from '../../features/matches/components/FeaturedMatches/FeaturedMatches';
import QuickStats from '../../features/analytics/components/QuickStats/QuickStats';
import RecentPredictions from '../../features/predictions/components/RecentPredictions/RecentPredictions';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse-custom"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse-custom animate-delay-200"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-200/30 rounded-full blur-xl animate-pulse-custom animate-delay-400"></div>
      
      <div className="relative z-10">
        <div className="animate-fadeIn">
          <HeroSection />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          <div className="animate-scaleIn animate-delay-200">
            <QuickStats />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-slideInLeft animate-delay-300">
              <FeaturedMatches />
            </div>
            <div className="animate-slideInRight animate-delay-400">
              <RecentPredictions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;