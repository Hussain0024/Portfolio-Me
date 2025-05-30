
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowDown } from 'lucide-react';

const Resume = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "Python", "Git", "Docker", "AWS", "MongoDB", "PostgreSQL"
  ];

  return (
    <section id="resume" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center">
            Resume
          </h2>
          
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Download my complete resume or view a summary of my skills and experience below.
          </p>
          
          <div className="text-center mb-12">
            <Button 
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                // This will be implemented when resume file is uploaded
                console.log('Resume download - file to be uploaded');
              }}
            >
              Download Resume
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-gray-500 mt-2">PDF format, updated recently</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-900">
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-900">
                  Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Full-Stack Web Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    SaaS Product Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Blockchain & Security
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
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
