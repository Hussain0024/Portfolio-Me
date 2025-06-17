
import React, { useState, useRef } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Download, Wand2, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { removeBackground, loadImage, enhanceImageContrast } from '../utils/imageEnhancement';
import { useToast } from '../components/ui/use-toast';

const ResumePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [enhancedImageUrl, setEnhancedImageUrl] = useState<string | null>(null);
  const originalImageUrl = '/lovable-uploads/fb30b041-9018-4fb8-b5bb-c3295dc048b3.png';
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = enhancedImageUrl || originalImageUrl;
    link.download = enhancedImageUrl ? 'Shaik_Mohammed_Hussain_Resume_Enhanced.png' : 'Shaik_Mohammed_Hussain_Resume.png';
    link.click();
  };

  const handleEnhanceImage = async () => {
    if (isEnhancing) return;
    
    setIsEnhancing(true);
    try {
      toast({
        title: "Enhancing Resume",
        description: "Removing background and improving image quality...",
      });

      // Load the original image
      const response = await fetch(originalImageUrl);
      const blob = await response.blob();
      const imageElement = await loadImage(blob);
      
      // Remove background
      const enhancedBlob = await removeBackground(imageElement);
      
      // Create enhanced image URL
      const enhancedUrl = URL.createObjectURL(enhancedBlob);
      setEnhancedImageUrl(enhancedUrl);
      
      toast({
        title: "Enhancement Complete",
        description: "Your resume has been enhanced with background removal!",
      });
    } catch (error) {
      console.error('Enhancement failed:', error);
      toast({
        title: "Enhancement Failed",
        description: "Could not enhance the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleReset = () => {
    if (enhancedImageUrl) {
      URL.revokeObjectURL(enhancedImageUrl);
      setEnhancedImageUrl(null);
    }
  };

  const currentImageUrl = enhancedImageUrl || originalImageUrl;

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
          
          <div className="flex gap-2">
            {!enhancedImageUrl ? (
              <Button 
                onClick={handleEnhanceImage}
                disabled={isEnhancing}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
              >
                <Wand2 className="h-4 w-4 mr-2" />
                {isEnhancing ? 'Enhancing...' : 'Enhance Resume'}
              </Button>
            ) : (
              <Button 
                onClick={handleReset}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset to Original
              </Button>
            )}
            
            <Button 
              onClick={handleDownload}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-4 max-w-4xl mx-auto">
          <div className="relative">
            <img 
              src={currentImageUrl}
              alt="Shaik Mohammed Hussain Resume" 
              className="w-full h-auto rounded"
            />
            {enhancedImageUrl && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Enhanced
              </div>
            )}
          </div>
        </div>

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default ResumePage;
