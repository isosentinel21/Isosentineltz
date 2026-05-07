import { Shield, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-gradient-to-b from-cyber-bg to-cyber-card p-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-cyan/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent glow-cyan opacity-30" />
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <Shield className="w-6 h-6 text-cyber-cyan group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              ISO<span className="text-cyber-cyan">SENTINEL</span>
            </span>
          </Link>
          <p className="text-gray-400 max-w-md leading-relaxed mb-8">
            The standard for modern cybersecurity education. We provide high-quality, practical learning resources for aspiring security professionals worldwide. Empowering the next generation of digital sentinels.
          </p>
          <div className="flex gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 hover:border-cyber-cyan hover:text-cyber-cyan hover:bg-cyber-cyan/5 transition-all group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
          <ul className="space-y-4">
            {['Learning Path', 'Cheat Sheets', 'CTF Challenges', 'Community', 'Premium'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm flex items-center gap-2 group">
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
          <ul className="space-y-4">
            {['Documentation', 'Help Center', 'API Reference', 'Status', 'Security'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-gray-500">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span>&copy; Copyright 2026. All Rights Reserved.</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full" />
          <span className="text-cyber-cyan/70 hover:text-cyber-cyan transition-colors cursor-default">Designed by Deogratius J Malingula</span>
          <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full" />
          <span className="text-cyber-pink/50">ENCRYPTED_SESSION_STABLE</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Terms</a>
        </div>
      </div>
    </footer>
  );
};
