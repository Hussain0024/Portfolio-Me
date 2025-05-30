
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a developer passionate about creating useful and scalable software products. 
                With a focus on clean UI and solid backend architecture, I love turning ideas 
                into reliable digital tools.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in software development is driven by curiosity and the desire to 
                build solutions that make a real impact. I believe in writing clean, 
                maintainable code and creating user experiences that are both beautiful and functional.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-semibold text-gray-600">SMH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
