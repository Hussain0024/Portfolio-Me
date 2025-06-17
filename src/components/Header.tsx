
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    window.open('/resume', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-xl font-heading font-semibold text-white tracking-wide">
            Shaik Mohammed Hussain
          </h1>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-white transition-colors font-medium tracking-wide"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white/90 hover:text-white transition-colors font-medium tracking-wide"
            >
              Projects
            </button>
            <button 
              onClick={handleResumeClick}
              className="text-white/90 hover:text-white transition-colors font-medium tracking-wide"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-white transition-colors font-medium tracking-wide"
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-medium px-6 py-2 rounded-lg transition-colors border-0 shadow-lg"
          >
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
