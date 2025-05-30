
import React from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
          Shaik Mohammed Hussain
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-8 font-medium tracking-wide">
          Aspiring Software Developer | SaaS & Web Projects Enthusiast
        </p>
        
        <p className="text-lg text-white/85 mb-12 max-w-2xl mx-auto leading-relaxed font-normal">
          I build simple, scalable, and smart solutions — one project at a time.
        </p>
        
        <Button 
          onClick={scrollToProjects}
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 border-0 shadow-xl"
        >
          View My Work
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
