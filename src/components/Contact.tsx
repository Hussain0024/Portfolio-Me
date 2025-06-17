
import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center">
            Let's Connect
          </h2>
          
          <p className="text-lg text-white/80 text-center mb-16 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, 
            interesting projects, or just having a chat about technology.
          </p>
          
          <div className="text-center mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 border-0"
            >
              <a href="mailto:smhussain0904@gmail.com">
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
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <a 
                href="https://github.com/Hussain0024" 
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
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <a 
                href="https://www.linkedin.com/in/shaikmohammedhussain/" 
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
      <footer className="border-t border-white/10 pt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Shaik Mohammed Hussain. Built with passion and attention to detail.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Simple. Scalable. Smart.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
