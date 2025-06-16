
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Live Football
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your ultimate destination for live scores, fixtures, news, and everything football. 
            Join millions of fans worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 text-lg"
            >
              View Live Scores
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Highlights
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
