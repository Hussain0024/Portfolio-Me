
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Github, ArrowUp, FileText } from 'lucide-react';
import CaseStudy from './CaseStudy';

const Projects = () => {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>('');

  const projects = [
    {
      id: 'blockchain-guardian',
      title: "Blockchain Guardian",
      description: "A decentralized threat monitoring platform built to enhance transparency and security within blockchain networks.",
      link: "https://blockchain-guardian.vercel.app/",
      technologies: ["React", "Blockchain", "Security", "Monitoring"],
      status: "Live",
      hasCaseStudy: true
    },
    {
      id: 'vocab-arena',
      title: "Vocab Arena",
      description: "An interactive vocabulary learning platform with gamified challenges, progress tracking, and competitive elements to make language learning engaging and effective.",
      link: "https://vocab-arena-ace-up.vercel.app/",
      technologies: ["React", "TypeScript", "Gamification", "Education"],
      status: "Live",
      hasCaseStudy: true
    }
  ];

  const handleCaseStudyOpen = (projectId: string) => {
    setSelectedProject(projectId);
    setIsCaseStudyOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center">
              Projects
            </h2>
            
            <p className="text-lg text-white/80 text-center mb-16 max-w-2xl mx-auto">
              A showcase of my work, featuring solutions that combine clean design 
              with robust functionality.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-medium text-white">
                        {project.title}
                      </CardTitle>
                      <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded-full border border-green-400/30">
                        {project.status}
                      </span>
                    </div>
                    <CardDescription className="text-white/70 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-white/10 text-white/90 px-2 py-1 rounded border border-white/20"
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
                        className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
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
                      
                      {project.hasCaseStudy && (
                        <Button 
                          onClick={() => handleCaseStudyOpen(project.id)}
                          variant="outline" 
                          size="sm"
                          className="bg-purple-500/20 border-purple-400/30 text-purple-200 hover:bg-purple-500/30 transition-colors"
                        >
                          <FileText className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Coming Soon Card */}
              <Card className="border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-md">
                <CardContent className="flex items-center justify-center h-full min-h-[200px]">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🚀</div>
                    <p className="text-white/70 font-medium">More projects coming soon</p>
                    <p className="text-sm text-white/50 mt-1">Stay tuned for updates</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CaseStudy 
        isOpen={isCaseStudyOpen} 
        onClose={() => setIsCaseStudyOpen(false)}
        projectId={selectedProject}
      />
    </>
  );
};

export default Projects;
