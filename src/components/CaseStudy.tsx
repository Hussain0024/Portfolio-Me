
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
                A decentralized threat monitoring platform built to enhance transparency 
                and security within blockchain networks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">The Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Blockchain networks face increasing security threats, with limited 
                    real-time monitoring capabilities. Traditional security solutions 
                    lack the transparency and decentralization that blockchain 
                    ecosystems require.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">The Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Blockchain Guardian provides a decentralized monitoring platform 
                    that leverages smart contracts and distributed computing to 
                    detect, analyze, and respond to security threats in real-time.
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
                        <h4 className="font-medium text-gray-900">Real-time Monitoring</h4>
                        <p className="text-sm text-gray-600">Continuous blockchain network surveillance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Threat Detection</h4>
                        <p className="text-sm text-gray-600">AI-powered anomaly detection algorithms</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Decentralized Architecture</h4>
                        <p className="text-sm text-gray-600">Distributed nodes for enhanced security</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">Smart Contracts</h4>
                        <p className="text-sm text-gray-600">Automated response mechanisms</p>
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
                  {['React', 'TypeScript', 'Blockchain', 'Smart Contracts', 'Web3', 'Solidity', 'Node.js', 'MongoDB'].map((tech, index) => (
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
                <CardTitle className="text-xl">Results & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                    <p className="text-sm text-gray-600">Threat Detection Accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">&lt;100ms</div>
                    <p className="text-sm text-gray-600">Response Time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                    <p className="text-sm text-gray-600">Continuous Monitoring</p>
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
