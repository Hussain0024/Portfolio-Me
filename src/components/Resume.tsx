import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { FileText } from 'lucide-react';

const Resume = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "Python", "Git", "Docker", "AWS", "MongoDB", "PostgreSQL"
  ];

  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center">
            Resume
          </h2>
          
          <p className="text-lg text-white/80 text-center mb-16 max-w-2xl mx-auto">
            View my complete resume or see a summary of my skills and experience below.
          </p>
          
          <div className="text-center mb-12">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 border-0"
            >
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                View Resume
                <FileText className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-sm text-white/60 mt-2">Opens in new tab</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-white">
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-white">
                  Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Full-Stack Web Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    SaaS Product Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                    Blockchain & Security
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                    UI/UX Implementation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
