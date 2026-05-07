import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Download, Share2, Printer, Info } from 'lucide-react';
import { NOTE_TOPICS } from '@/src/data/mockData';

export const NotesDetail = () => {
  const { id } = useParams();
  const topic = NOTE_TOPICS.find(t => t.id === id);

  useEffect(() => {
    Prism.highlightAll();
  }, [topic]);

  if (!topic) return <div className="pt-32 text-center h-screen">Topic not found</div>;

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar / Table of Contents */}
        <aside className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
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
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 rounded-lg text-xs font-bold hover:bg-white/10 transition-all">
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-9">
          <Link to="/notes" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyber-cyan transition-colors mb-8 text-sm group">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Notes
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded bg-cyber-pink/20 text-cyber-pink text-[10px] font-bold uppercase tracking-widest border border-cyber-pink/30">Module 01</span>
              <span className="px-3 py-1 rounded bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest border border-white/10">Est. Time: 45m</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{topic.title}</h1>
            <div className="flex items-center justify-between pb-8 border-b border-white/10">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Info className="w-4 h-4" /> Last updated: Oct 2023
              </div>
              <div className="flex gap-4">
                <button className="text-gray-400 hover:text-white transition-colors"><Share2 className="w-5 h-5" /></button>
                <button className="text-gray-400 hover:text-white transition-colors"><Printer className="w-5 h-5" /></button>
              </div>
            </div>
          </header>

          <article className="prose prose-invert prose-cyber max-w-none mb-20 prose-pre:bg-cyber-card prose-pre:border prose-pre:border-white/10">
            <ReactMarkdown>{topic.content}</ReactMarkdown>
          </article>

          {/* Navigation Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10 pt-12">
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
