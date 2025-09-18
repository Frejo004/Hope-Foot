import React from 'react';
import HeroSection from '../../features/matches/components/HeroSection/HeroSection';
import FeaturedMatches from '../../features/matches/components/FeaturedMatches/FeaturedMatches';
import QuickStats from '../../features/analytics/components/QuickStats/QuickStats';
import RecentPredictions from '../../features/predictions/components/RecentPredictions/RecentPredictions';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <QuickStats />
      <FeaturedMatches />
      <RecentPredictions />
    </div>
  );
};

export default Home;