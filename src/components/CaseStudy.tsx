
import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, ExternalLink, Shield, Upload, Search, Users, CheckCircle, Clock, Trophy, BookOpen, Target, Zap, BarChart, Award } from 'lucide-react';

interface CaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
}

const CaseStudy = ({ isOpen, onClose, projectId }: CaseStudyProps) => {
  if (!isOpen) return null;

  const projectData = {
    'blockchain-guardian': {
      title: 'Blockchain Guardian',
      subtitle: 'A comprehensive blockchain-based evidence management platform that ensures immutable evidence storage with cryptographic verification and real-time tracking capabilities.',
      link: 'https://blockchain-guardian.vercel.app/',
      overview: 'Blockchain Guardian is an advanced evidence management system that leverages blockchain technology to provide secure, tamper-proof evidence storage with comprehensive tracking and verification capabilities.',
      purpose: 'Built to address the critical need for secure evidence management in legal and investigative contexts, ensuring data integrity through blockchain technology and providing seamless collaboration tools.',
      features: [
        {
          icon: Shield,
          title: 'Blockchain Security',
          description: 'Immutable evidence storage with cryptographic verification ensuring data integrity and authenticity.'
        },
        {
          icon: Upload,
          title: 'Easy Upload',
          description: 'Drag-and-drop interface supporting multiple file formats with automatic metadata extraction.'
        },
        {
          icon: Search,
          title: 'Smart Tracking',
          description: 'Real-time evidence tracking with advanced search capabilities and chain of custody documentation.'
        },
        {
          icon: Users,
          title: 'Team Collaboration',
          description: 'Role-based access control with audit trails for secure multi-user evidence management.'
        },
        {
          icon: CheckCircle,
          title: 'Instant Verification',
          description: 'Immediate evidence verification with tamper-proof certificates and compliance reporting.'
        },
        {
          icon: Clock,
          title: 'Real-time Updates',
          description: 'Live status updates and notifications throughout the evidence lifecycle process.'
        }
      ],
      technologies: ['React', 'TypeScript', 'Blockchain', 'Web3', 'Node.js', 'Cryptography', 'Smart Contracts'],
      highlights: [
        { value: '100%', label: 'Tamper-Proof Security', color: 'purple' },
        { value: 'Real-time', label: 'Evidence Tracking', color: 'cyan' },
        { value: 'Multi-user', label: 'Collaboration', color: 'indigo' }
      ]
    },
    'vocab-arena': {
      title: 'Vocab Arena',
      subtitle: 'An interactive vocabulary learning platform with gamified challenges, progress tracking, and competitive elements to make language learning engaging and effective.',
      link: 'https://vocab-arena-ace-up.vercel.app/',
      overview: 'Vocab Arena is a comprehensive vocabulary learning platform that transforms traditional language learning through gamification, interactive challenges, and social competition features.',
      purpose: 'Designed to make vocabulary learning more engaging and effective by incorporating game mechanics, progress tracking, and competitive elements that motivate learners to consistently improve their language skills.',
      features: [
        {
          icon: Trophy,
          title: 'Gamified Learning',
          description: 'Points, badges, and leaderboards that turn vocabulary practice into an engaging game experience.'
        },
        {
          icon: BookOpen,
          title: 'Interactive Lessons',
          description: 'Dynamic vocabulary exercises with multiple learning modes including flashcards, quizzes, and word games.'
        },
        {
          icon: Target,
          title: 'Personalized Goals',
          description: 'Customizable learning targets and daily challenges tailored to individual progress and skill level.'
        },
        {
          icon: Zap,
          title: 'Quick Challenges',
          description: 'Fast-paced vocabulary battles and timed challenges to test knowledge under pressure.'
        },
        {
          icon: BarChart,
          title: 'Progress Tracking',
          description: 'Comprehensive analytics showing learning patterns, strengths, and areas for improvement.'
        },
        {
          icon: Award,
          title: 'Achievement System',
          description: 'Unlockable achievements and milestone rewards that celebrate learning progress and consistency.'
        }
      ],
      technologies: ['React', 'TypeScript', 'Gamification', 'Education', 'Progressive Web App', 'Local Storage', 'Animation'],
      highlights: [
        { value: 'Gamified', label: 'Learning Experience', color: 'purple' },
        { value: 'Interactive', label: 'Vocabulary Challenges', color: 'cyan' },
        { value: 'Progress', label: 'Tracking System', color: 'indigo' }
      ]
    }
  };

  const project = projectData[projectId as keyof typeof projectData];
  if (!project) return null;

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
                  href={project.link} 
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
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {project.overview}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Core Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {project.purpose}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex flex-col items-center text-center space-y-3 p-4">
                        <div className="bg-blue-500 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
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
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-3xl font-bold text-${highlight.color}-600 mb-2`}>
                        {highlight.value}
                      </div>
                      <p className="text-sm text-gray-600">{highlight.label}</p>
                    </div>
                  ))}
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
