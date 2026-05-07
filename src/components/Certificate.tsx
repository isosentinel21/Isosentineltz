import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Download, Printer, Share2, Award, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface CertificateProps {
  userName: string;
  courseTitle: string;
  score: number;
  date: string;
  certificateId: string;
}

export const Certificate = ({ userName, courseTitle, score, date, certificateId }: CertificateProps) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    try {
      setIsDownloading(true);
      
      // Select the element to capture
      const element = certificateRef.current;
      
      // Capture the element as a canvas
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        backgroundColor: '#0a0a0b', // Match bg-cyber-bg
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      // Create a PDF with landscape orientation
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`Certificate-${courseTitle.replace(/\s+/g, '-')}-${userName.replace(/\s+/g, '-')}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try the Print option instead.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="mt-12 group pb-20">
      <div 
        ref={certificateRef}
        style={{ 
          backgroundColor: '#030712', 
          borderColor: '#0f172a',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
        className="relative aspect-[1.414/1] w-full max-w-4xl mx-auto border-[12px] p-12 overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'radial-gradient(circle at center, rgba(0, 242, 255, 0.2), transparent, transparent)' }} />
          <div className="grid grid-cols-12 h-full w-full">
             {[...Array(144)].map((_, i) => (
               <div key={i} style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} className="border-[0.5px]" />
             ))}
          </div>
        </div>

        {/* Certificate Content */}
        <div className="relative h-full flex flex-col items-center justify-between border-2 p-8" style={{ borderColor: 'rgba(0, 242, 255, 0.3)' }}>
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full border" style={{ backgroundColor: 'rgba(0, 242, 255, 0.1)', borderColor: 'rgba(0, 242, 255, 0.2)' }}>
                <Shield className="w-12 h-12" style={{ color: '#00f2ff' }} />
              </div>
            </div>
            <h1 className="text-3xl font-black tracking-[0.2em] uppercase mb-2" style={{ color: '#ffffff' }}>
              Certificate of Achievement
            </h1>
            <p className="font-mono text-sm tracking-widest uppercase" style={{ color: '#00f2ff' }}>
              ISOSENTINEL CYBER SECURITY ACADEMY
            </p>
          </div>

          {/* Recipient */}
          <div className="text-center">
            <p className="font-serif italic text-lg mb-4" style={{ color: '#9ca3af' }}>This is to certify that</p>
            <h2 className="text-5xl font-bold mb-4 border-b-2 pb-2 inline-block px-12 uppercase tracking-wide" style={{ color: '#ffffff', borderBottomColor: 'rgba(0, 242, 255, 0.5)' }}>
              {userName || 'VALUED LEARNER'}
            </h2>
            <p className="text-lg" style={{ color: '#9ca3af' }}>
              has successfully completed the assessment for
            </p>
            <h3 className="text-2xl font-bold mt-2 uppercase tracking-wide" style={{ color: '#00f2ff' }}>
              {courseTitle}
            </h3>
          </div>

          {/* Appreciation Message */}
          <div className="max-w-2xl text-center">
             <p className="text-sm leading-relaxed mb-6 font-medium" style={{ color: '#6b7280' }}>
                Congratulations! You have successfully completed this Cyber Security assessment with an excellent performance of <span style={{ color: '#00f2ff', fontWeight: 'bold' }}>{score}%</span>. 
                Your dedication and commitment to learning are highly appreciated. 
                Keep advancing your Cyber Security skills and continue protecting the digital world.
             </p>
          </div>

          {/* Footer Info */}
          <div className="w-full flex justify-between items-end mt-8">
            <div className="text-left">
              <p className="text-[10px] font-mono uppercase tracking-tighter mb-1" style={{ color: '#6b7280' }}>Date of Completion</p>
              <p className="text-sm font-bold" style={{ color: '#ffffff' }}>{date}</p>
            </div>
            
            <div className="flex flex-col items-center">
               <div className="flex flex-col items-center mb-2">
                  <p className="text-xl font-serif italic mb-1" style={{ color: '#ffffff' }}>Isosentinel</p>
                  <div className="h-[1px] w-32" style={{ backgroundColor: 'rgba(0, 242, 255, 0.5)' }} />
                  <p className="text-[10px] font-mono mt-1 uppercase" style={{ color: '#4b5563' }}>Official Signature</p>
               </div>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-mono uppercase tracking-tighter mb-1" style={{ color: '#6b7280' }}>Certificate ID</p>
              <p className="text-sm font-bold" style={{ color: '#00f2ff' }}>{certificateId}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 no-print relative z-20">
        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2 px-8 py-4 bg-cyber-cyan text-cyber-bg font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all group disabled:opacity-70"
        >
          {isDownloading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> 
          )}
          {isDownloading ? 'GENERATING PDF...' : 'DOWNLOAD CERTIFICATE'}
        </button>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all font-mono text-xs"
        >
          <Printer className="w-5 h-5" /> PRINT
        </button>
      </div>
    </div>
  );
};
