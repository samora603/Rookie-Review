
import React from 'react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Rookie</span>
              <span className="text-green-400">Review</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your ultimate destination for live football scores, news, and everything about the beautiful game.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Live Scores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Fixtures</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Results</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">News</a></li>
            </ul>
          </div>

          {/* Leagues */}
          <div>
            <h3 className="text-white font-semibold mb-4">Leagues</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Premier League</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">La Liga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Bundesliga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Champions League</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-green-500/20" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 RookieReview. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
