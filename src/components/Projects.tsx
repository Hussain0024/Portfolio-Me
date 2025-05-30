
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Blockchain Guardian",
      description: "A decentralized threat monitoring platform built to enhance transparency and security within blockchain networks.",
      link: "https://blockchain-guardian.vercel.app/",
      technologies: ["React", "Blockchain", "Security", "Monitoring"],
      status: "Live"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center">
            Projects
          </h2>
          
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            A showcase of my work, featuring solutions that combine clean design 
            with robust functionality.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-medium text-gray-900">
                      {project.title}
                    </CardTitle>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="flex-1 group-hover:bg-gray-900 group-hover:text-white transition-colors"
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        View Live
                        <ArrowUp className="ml-1 h-3 w-3 rotate-45" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Coming Soon Card */}
            <Card className="border-2 border-dashed border-gray-200 bg-gray-50">
              <CardContent className="flex items-center justify-center h-full min-h-[200px]">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <p className="text-gray-500 font-medium">More projects coming soon</p>
                  <p className="text-sm text-gray-400 mt-1">Stay tuned for updates</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
