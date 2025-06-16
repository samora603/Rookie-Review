
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { LiveScores } from '@/components/LiveScores';
import { LatestNews } from '@/components/LatestNews';
import { TopPlayers } from '@/components/TopPlayers';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <LiveScores />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-12">
          <LatestNews />
          <TopPlayers />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
