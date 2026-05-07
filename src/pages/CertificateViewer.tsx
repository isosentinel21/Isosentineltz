import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Download, Printer, Share2 } from 'lucide-react';
import { useProgress } from '../lib/progress';
import { Certificate } from '../components/Certificate';

export const CertificateViewer = () => {
  const { id } = useParams<{ id: string }>();
  const { certificatesEarned } = useProgress();
  const navigate = useNavigate();

  const certificate = certificatesEarned.find(c => c.certificateId === id);

  const handlePrint = () => window.print();

  if (!certificate) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Shield className="w-16 h-16 text-cyber-cyan mb-6 opacity-20" />
        <h1 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Credential Not Found</h1>
        <p className="text-gray-500 mb-8 font-mono text-sm uppercase">The requested certificate does not exist in your local vault.</p>
        <Link to="/dashboard" className="px-6 py-3 bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan rounded-xl hover:bg-cyber-cyan hover:text-cyber-bg transition-all font-bold text-xs">
          RETURN TO DASHBOARD
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#010409] flex flex-col items-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Minimalistic Viewer Header */}
      <header className="w-full h-20 border-b border-white/5 bg-black/40 backdrop-blur-md flex items-center justify-between px-8 z-[100] no-print">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-[10px] font-mono uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Dashboard
          </button>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-mono leading-none mb-1">Credential View</span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">{certificate.topicTitle}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrint}
            className="p-3 text-gray-400 hover:text-cyber-cyan hover:bg-cyber-cyan/5 rounded-xl transition-all border border-transparent hover:border-cyber-cyan/20"
            title="Print Certificate"
          >
            <Printer className="w-5 h-5" />
          </button>
          <div className="h-4 w-px bg-white/10" />
          {/* We'll use the internal download function if we can, but since it's inside the component, we might need a ref */}
          <p className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
            {certificate.certificateId}
          </p>
        </div>
      </header>

      {/* Standalone Certificate Container */}
      <main className="flex-grow flex items-center justify-center p-8 w-full">
        <div className="w-full max-w-5xl shadow-[0_0_100px_rgba(0,0,0,0.8)]">
           <Certificate 
              userName={certificate.userName}
              courseTitle={certificate.topicTitle}
              score={certificate.score}
              date={new Date(certificate.dateIssued).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
              certificateId={certificate.certificateId}
              showControls={true} // Keep controls visible for now as the prompt says "instantly download"
           />
        </div>
      </main>

      {/* Persistent Legal Footer */}
      <footer className="w-full py-6 border-t border-white/5 bg-black/20 text-center no-print">
         <p className="text-[8px] font-mono text-gray-600 uppercase tracking-[0.6em]">
            OFFICIAL ISO-SENTINEL PROPERTY • AUTHORIZED REPRODUCTION ONLY
         </p>
      </footer>
    </div>
  );
};
