
import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 text-center">
            Let's Connect
          </h2>
          
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, 
            interesting projects, or just having a chat about technology.
          </p>
          
          <div className="text-center mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <a href="mailto:your.email@example.com">
                Get in Touch
                <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="hover:bg-gray-900 hover:text-white transition-colors"
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="hover:bg-gray-900 hover:text-white transition-colors"
            >
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-gray-100 pt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Shaik Mohammed Hussain. Built with passion and attention to detail.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Simple. Scalable. Smart.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
