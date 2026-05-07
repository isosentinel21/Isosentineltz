import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Download, Printer, Award, Loader2, CheckCircle, Fingerprint, Globe, ShieldCheck } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface CertificateProps {
  userName: string;
  courseTitle: string;
  score: number;
  date: string;
  certificateId: string;
  showControls?: boolean;
}

export const Certificate = ({ userName, courseTitle, score, date, certificateId, showControls = true }: CertificateProps) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    try {
      setIsDownloading(true);
      
      // Ensure the component is fully rendered
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const element = certificateRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 3, // Higher scale for premium quality
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#020617',
        logging: false,
        imageTimeout: 0,
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // Calculate aspect ratio
      const imgWidth = 297; // A4 Landscape width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`ISO-SENTINEL-CERT-${certificateId}.pdf`);
      
    } catch (error) {
      console.error('PDF Generation Error:', error);
      alert('Certificate generation encountered a protocol error. Try using the Print option.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="mt-12 group pb-24 certificate-wrapper flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-5xl"
      >
        <div 
          ref={certificateRef}
          className="relative aspect-[1.414/1] w-full bg-[#020617] text-white overflow-hidden shadow-2xl border-[16px] border-[#0f172a]"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(0, 242, 255, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 40%)'
          }}
        >
          {/* Border Accents - Geometric & Techy */}
          <div className="absolute top-0 right-0 w-64 h-64 border-t-4 border-r-4 border-cyber-cyan/30 mt-[-2px] mr-[-2px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-b-4 border-l-4 border-cyber-cyan/30 mb-[-2px] ml-[-2px]" />
          
          {/* Watermark/Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
            <Shield className="w-1/2 h-1/2" />
          </div>
          
          {/* Main Decorative Frame */}
          <div className="absolute inset-8 border border-cyber-cyan/20 pointer-events-none" />
          <div className="absolute inset-10 border-2 border-white/5 pointer-events-none" />

          {/* Core Content Layout */}
          <div className="relative h-full z-10 flex flex-col items-center justify-between py-16 px-20">
            
            {/* Header Section */}
            <div className="w-full flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-cyber-cyan/10 rounded-xl flex items-center justify-center border border-cyber-cyan/30">
                  <ShieldCheck className="w-10 h-10 text-cyber-cyan shadow-[0_0_15px_rgba(0,242,255,0.4)]" />
                </div>
                <div>
                  <h4 className="text-xl font-black tracking-tighter text-white">ISO-SENTINEL</h4>
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyber-cyan">Cyber Security Academy</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end text-cyber-cyan mb-1">
                  <Globe className="w-3 h-3" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">Verified Global Achievement</span>
                </div>
                <div className="h-px w-32 bg-gradient-to-l from-cyber-cyan/50 to-transparent ml-auto" />
              </div>
            </div>

            {/* Main Citation */}
            <div className="text-center flex-1 flex flex-col justify-center py-8">
              <h1 className="text-xs font-mono uppercase tracking-[0.8em] text-gray-500 mb-8">Certificate of Completion</h1>
              
              <p className="font-serif italic text-xl text-gray-400 mb-4">This high-priority credential is officially granted to</p>
              
              <h2 className="text-6xl font-black text-white uppercase tracking-tight mb-8 relative inline-block">
                {userName || 'Security Professional'}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
              </h2>
              
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
                For demonstrating exceptional technical proficiency and successfully passing the rigorous validation assessment for the vector:
              </p>
              
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-white uppercase mb-8 tracking-wide">
                {courseTitle}
              </h3>
            </div>

            {/* Bottom Section - Seal & Meta */}
            <div className="w-full flex justify-between items-end">
              {/* Left: Validation Meta */}
              <div className="space-y-4">
                <div>
                  <p className="text-[9px] font-mono uppercase text-gray-500 tracking-widest">Protocol Date</p>
                  <p className="text-sm font-bold text-white">{date}</p>
                </div>
                <div>
                  <p className="text-[9px] font-mono uppercase text-gray-500 tracking-widest">Assessment Score</p>
                  <p className="text-sm font-bold text-cyber-cyan">{score}% Proficiency Achieved</p>
                </div>
                <div>
                  <p className="text-[9px] font-mono uppercase text-gray-500 tracking-widest">Certificate Identity</p>
                  <p className="text-xs font-mono text-white/60">{certificateId}</p>
                </div>
              </div>

              {/* Center: Premium Seal */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-40 h-40 bg-cyber-cyan/5 rounded-full animate-pulse" />
                <div className="w-32 h-32 rounded-full border-4 border-double border-cyber-cyan/40 flex flex-col items-center justify-center bg-gray-900 shadow-[0_0_30px_rgba(0,242,255,0.1)] relative">
                  <Award className="w-12 h-12 text-cyber-cyan mb-1" />
                  <span className="text-[8px] font-black uppercase tracking-tighter text-white">Verified</span>
                  <span className="text-[6px] font-mono uppercase text-gray-500">Cyber Sentinel</span>
                  
                  {/* Decorative teeth of seal */}
                  <div className="absolute inset-0 border-2 border-dashed border-cyber-cyan/20 rounded-full animate-spin-slow" />
                </div>
              </div>

              {/* Right: Signature */}
              <div className="text-center group">
                <div className="relative mb-2">
                  <Fingerprint className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-cyber-cyan/10 group-hover:text-cyber-cyan/20 transition-colors" />
                  <p className="text-3xl font-serif italic text-white line-signature">Isosentinel</p>
                </div>
                <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent mx-auto" />
                <p className="text-[9px] font-mono uppercase text-gray-500 mt-2 tracking-widest">Director of Academy Intelligence</p>
              </div>
            </div>
          </div>

          {/* Background Binary Texture */}
          <div className="absolute inset-0 font-mono text-[8px] text-white/[0.02] flex flex-wrap gap-4 p-8 pointer-events-none select-none break-all leading-tight">
            {Array.from({ length: 40 }).map((_, i) => (
              <span key={i}>01011001 01001111 01010101 01010010 01010011 01000101 01001100 01000110 </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Control Panel */}
      {showControls && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6 no-print"
        >
          <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className="relative group overflow-hidden px-10 py-5 bg-cyber-bg border border-cyber-cyan/30 rounded-2xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            <div className="absolute inset-0 bg-cyber-cyan/10 group-hover:bg-cyber-cyan/20 transition-colors" />
            <div className="relative flex items-center gap-3">
              {isDownloading ? (
                <Loader2 className="w-6 h-6 animate-spin text-cyber-cyan" />
              ) : (
                <Download className="w-6 h-6 text-cyber-cyan group-hover:-translate-y-1 transition-transform" /> 
              )}
              <div className="text-left">
                <span className="block text-xs font-mono text-cyber-cyan/60 uppercase leading-none mb-1">Export Result</span>
                <span className="block text-sm font-black text-white uppercase tracking-wider">
                  {isDownloading ? 'Encrypting PDF...' : 'Download Certificate'}
                </span>
              </div>
            </div>
          </button>

          <button 
            onClick={handlePrint}
            className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 group hover:bg-white/10 transition-all font-mono"
          >
            <Printer className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            <div className="text-left">
              <span className="block text-xs text-gray-500 uppercase leading-none mb-1">Local Copy</span>
              <span className="block text-sm font-bold text-white uppercase">Print System</span>
            </div>
          </button>
        </motion.div>
      )}

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .line-signature {
          text-shadow: 0 0 10px rgba(0, 242, 255, 0.2);
        }
        @media print {
          .no-print { display: none !important; }
          .certificate-wrapper { margin: 0; padding: 0; }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
};

