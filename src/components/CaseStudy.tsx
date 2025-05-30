
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, ExternalLink, Shield, Upload, Search, Users, CheckCircle, Clock } from 'lucide-react';

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
                A comprehensive blockchain-based evidence management platform that ensures immutable 
                evidence storage with cryptographic verification and real-time tracking capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Blockchain Guardian is an advanced evidence management system that leverages 
                    blockchain technology to provide secure, tamper-proof evidence storage with 
                    comprehensive tracking and verification capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Core Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Built to address the critical need for secure evidence management in legal 
                    and investigative contexts, ensuring data integrity through blockchain 
                    technology and providing seamless collaboration tools.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Blockchain Security</h4>
                        <p className="text-sm text-gray-600">Immutable evidence storage with cryptographic verification ensuring data integrity and authenticity.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <Upload className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Easy Upload</h4>
                        <p className="text-sm text-gray-600">Drag-and-drop interface supporting multiple file formats with automatic metadata extraction.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <Search className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Smart Tracking</h4>
                        <p className="text-sm text-gray-600">Real-time evidence tracking with advanced search capabilities and chain of custody documentation.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Team Collaboration</h4>
                        <p className="text-sm text-gray-600">Role-based access control with audit trails for secure multi-user evidence management.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Instant Verification</h4>
                        <p className="text-sm text-gray-600">Immediate evidence verification with tamper-proof certificates and compliance reporting.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Real-time Updates</h4>
                        <p className="text-sm text-gray-600">Live status updates and notifications throughout the evidence lifecycle process.</p>
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
                  {['React', 'TypeScript', 'Blockchain', 'Web3', 'Node.js', 'Cryptography', 'Smart Contracts'].map((tech, index) => (
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
                    <p className="text-sm text-gray-600">Tamper-Proof Security</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">Real-time</div>
                    <p className="text-sm text-gray-600">Evidence Tracking</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">Multi-user</div>
                    <p className="text-sm text-gray-600">Collaboration</p>
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
