
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface CaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudy = ({ isOpen, onClose }: CaseStudyProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
            <div className="flex gap-3">
              <Button asChild variant="outline" size="sm">
                <a 
                  href="https://blockchain-guardian.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-light text-gray-900 mb-4">
                Blockchain Guardian
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A web application designed to provide insights and monitoring 
                capabilities for blockchain networks with a focus on user-friendly interface.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Blockchain Guardian serves as a monitoring dashboard that provides 
                    users with blockchain network information and insights through 
                    an intuitive web interface.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Development Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Built with modern web technologies, focusing on responsive design, 
                    clean user interface, and efficient data presentation for 
                    blockchain-related information.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Dashboard Interface</h4>
                        <p className="text-sm text-gray-600">Clean and intuitive user interface</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Responsive Design</h4>
                        <p className="text-sm text-gray-600">Works seamlessly across devices</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Modern Architecture</h4>
                        <p className="text-sm text-gray-600">Built with React and TypeScript</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Data Visualization</h4>
                        <p className="text-sm text-gray-600">Clear presentation of blockchain data</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'CSS3', 'HTML5', 'JavaScript', 'Web3 Concepts'].map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gradient-to-r from-purple-100 to-cyan-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Development Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                    <p className="text-sm text-gray-600">Responsive Design</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">Clean</div>
                    <p className="text-sm text-gray-600">User Interface</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">Modern</div>
                    <p className="text-sm text-gray-600">Tech Stack</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
