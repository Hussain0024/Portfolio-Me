
import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResumePage = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/fb30b041-9018-4fb8-b5bb-c3295dc048b3.png';
    link.download = 'Shaik_Mohammed_Hussain_Resume.png';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
          
          <Button 
            onClick={handleDownload}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-4 max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/fb30b041-9018-4fb8-b5bb-c3295dc048b3.png" 
            alt="Shaik Mohammed Hussain Resume" 
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
