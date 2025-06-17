
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ThreeBackground from '../components/ThreeBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ThreeBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
