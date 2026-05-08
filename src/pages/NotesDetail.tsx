import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Download, Share2, Printer, Info, Check, Copy, Facebook, Send, MessageCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { triggerCyberCelebration } from '@/src/lib/celebration';
import { markNoteComplete } from '@/src/lib/progress';
import { useContent } from '@/src/context/ContentContext';

import { Assessment } from '@/src/components/Assessment';

export const NotesDetail = () => {
  const { id } = useParams();
  const { lessons } = useContent();
  const topic = lessons.find(t => t.id === id);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    let cleanup: (() => void) | undefined;
    if (topic) {
      cleanup = triggerCyberCelebration();
      markNoteComplete(topic.id);
    }
    return () => cleanup?.();
  }, [topic]);

  if (!topic) return <div className="pt-32 text-center h-screen">Topic not found</div>;

  const handlePrint = () => {
    window.print();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${topic.title} - ISOSENTINEL: ${window.location.href}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(topic.title)}`,
  };

  const formatDate = (dateString?: string) => {
    const date = dateString ? new Date(dateString) : new Date();
    
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    
    // Add ordinal suffix (st, nd, rd, th)
    const suffix = (d: number) => {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
      }
    };

    return `${day}${suffix(day)} ${month} ${year}`;
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar / Table of Contents */}
        <aside className="lg:col-span-3 hidden lg:block sticky top-32 h-fit no-print">
          <div className="glass rounded-xl p-6 border-white/10">
            <h4 className="text-xs font-bold text-cyber-cyan uppercase tracking-widest mb-6">Contents</h4>
            <nav className="space-y-4">
              {['Overview', 'Key Concepts', 'Methodology', 'Tools', 'Practical Labs', 'Challenges'].map((item) => (
                <a key={item} href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-8 pt-8 border-t border-white/5">
              <button 
                onClick={handlePrint}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg text-xs font-bold text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg transition-all duration-300"
              >
                <Download className="w-4 h-4" /> Print as PDF
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-9 print:col-span-12">
          <Link to="/notes" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyber-cyan transition-colors mb-8 text-sm group no-print">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Notes
          </Link>

          <header className="mb-16">
            <div className="flex flex-wrap items-center gap-4 mb-8 no-print">
              <span className="px-4 py-1.5 rounded-full bg-cyber-pink/20 text-cyber-pink text-[10px] font-black uppercase tracking-[0.2em] border border-cyber-pink/30 shadow-[0_0_20px_rgba(255,0,193,0.1)]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-pink animate-pulse mr-2" />
                Module Active
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">Estimated Time: 45m</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 print:text-5xl print:mb-8 text-white uppercase tracking-tighter italic scale-y-110 origin-left">
              {topic.title}
            </h1>
            <div className="flex items-center justify-between pb-8 border-b border-white/5 print:mb-12">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Info className="w-4 h-4" /> Last updated: {formatDate(topic.lastUpdated)}
              </div>
              <div className="flex gap-4 relative no-print">
                <div className="relative">
                  <button 
                    onClick={() => setShowShare(!showShare)}
                    className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/30 transition-all flex items-center gap-2 group"
                  >
                    <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline text-xs font-bold">SHARE</span>
                  </button>
                  
                  <AnimatePresence>
                    {showShare && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowShare(false)} />
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute right-0 top-full mt-2 w-56 glass border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 p-2"
                        >
                          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-all">
                            <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp
                          </a>
                          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-all">
                            <Facebook className="w-4 h-4 text-[#1877F2]" /> Facebook
                          </a>
                          <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-all">
                            <Send className="w-4 h-4 text-[#0088cc]" /> Telegram
                          </a>
                          <button onClick={copyToClipboard} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-sm text-gray-300 hover:text-white transition-all">
                            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyber-cyan" />}
                            {copied ? 'Copied Link' : 'Copy Link'}
                          </button>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                <button 
                  onClick={handlePrint}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/30 transition-all group"
                  title="Print as PDF"
                >
                  <Printer className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </header>

          <article className="prose prose-invert prose-cyber max-w-none mb-12 prose-pre:bg-cyber-card prose-pre:border prose-pre:border-white/10">
            <ReactMarkdown>{topic.content}</ReactMarkdown>
          </article>

          {/* Knowledge Assessment Section */}
          <Assessment 
            topicTitle={topic.title} 
            lessonId={topic.id}
          />

          {/* Tags Section */}
          <div className="mb-20">
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Subject Meta Tags</h4>
            <div className="flex flex-wrap gap-3">
              {topic.tags?.map((tag) => (
                <motion.span 
                  key={tag}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-4 py-2 rounded-full glass border-white/10 text-xs font-medium text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan/30 cursor-default transition-all shadow-lg"
                >
                  #{tag}
                </motion.span>
              )) || (
                ['CyberSecurity', 'Networking', 'Learning'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full glass border-white/10 text-xs text-gray-400">#{tag}</span>
                ))
              )}
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10 pt-12 no-print">
            <Link to="#" className="p-6 rounded-2xl glass border-white/10 hover:border-white/20 transition-all flex items-center justify-between group">
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Previous Topic</div>
                <div className="font-bold group-hover:text-cyber-cyan transition-colors">None</div>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link to="#" className="p-6 rounded-2xl glass border-white/10 hover:border-white/20 transition-all flex items-center justify-between group text-right">
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform" />
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Next Topic</div>
                <div className="font-bold group-hover:text-cyber-cyan transition-colors">Linux Fundamentals</div>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};
