
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-12 text-center tracking-wide">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/95 leading-relaxed font-normal">
                I'm a developer passionate about creating useful and scalable software products. 
                With a focus on clean UI and solid backend architecture, I love turning ideas 
                into reliable digital tools.
              </p>
              
              <p className="text-lg text-white/95 leading-relaxed font-normal">
                My journey in software development is driven by curiosity and the desire to 
                build solutions that make a real impact. I believe in writing clean, 
                maintainable code and creating user experiences that are both beautiful and functional.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-xl">
                  <img 
                    src="/lovable-uploads/49167460-d619-4eee-af17-4be6772168d0.png" 
                    alt="Shaik Mohammed Hussain"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-sm opacity-30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
