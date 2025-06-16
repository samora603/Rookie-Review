
import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-green-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-white">Rookie</span>
              <span className="text-green-400">Review</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-green-400 transition-colors duration-200">Home</Link>
            <Link to="/fixtures" className="text-white hover:text-green-400 transition-colors duration-200">Fixtures</Link>
            <Link to="/results" className="text-white hover:text-green-400 transition-colors duration-200">Results</Link>
            <Link to="/news" className="text-white hover:text-green-400 transition-colors duration-200">News</Link>
            <Link to="/players" className="text-white hover:text-green-400 transition-colors duration-200">Players</Link>
            <Link to="/fanzone" className="text-white hover:text-green-400 transition-colors duration-200">Fanzone</Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-green-400">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-500/20">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-white hover:text-green-400 transition-colors duration-200 py-2">Home</Link>
              <Link to="/fixtures" className="text-white hover:text-green-400 transition-colors duration-200 py-2">Fixtures</Link>
              <Link to="/results" className="text-white hover:text-green-400 transition-colors duration-200 py-2">Results</Link>
              <Link to="/news" className="text-white hover:text-green-400 transition-colors duration-200 py-2">News</Link>
              <Link to="/players" className="text-white hover:text-green-400 transition-colors duration-200 py-2">Players</Link>
              <Link to="/fanzone" className="text-white hover:text-green-400 transition-colors duration-200 py-2">Fanzone</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
