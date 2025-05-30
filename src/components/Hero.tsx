
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
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
          Shaik Mohammed Hussain
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Aspiring Software Developer | SaaS & Web Projects Enthusiast
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          I build simple, scalable, and smart solutions — one project at a time.
        </p>
        
        <Button 
          onClick={scrollToProjects}
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
        >
          View My Work
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
