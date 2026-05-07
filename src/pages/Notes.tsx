import React from 'react';
import { motion } from 'motion/react';
import { Network, Terminal, Shield, Lock, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NOTE_TOPICS } from '@/src/data/mockData';

const ICONS = {
  Network: Network,
  Terminal: Terminal,
  Shield: Shield,
  Lock: Lock,
};

export const Notes = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Portal</h1>
        <p className="text-gray-400 text-lg">
          Dive deep into curated cybersecurity modules. From networking fundamentals 
          to advanced penetration testing, we cover everything you need to know.
        </p>
      </div>

      <div className="relative mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search for topics, tools, or techniques..." 
          className="w-full glass border-white/10 rounded-xl py-4 pl-12 pr-6 text-white focus:border-cyber-cyan/50 focus:outline-none focus:ring-1 focus:ring-cyber-cyan/30 transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NOTE_TOPICS.map((topic, i) => {
          const Icon = (ICONS as any)[topic.icon] || Shield;
          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl glass border-white/10 flex flex-col items-start gap-4 hover:border-cyber-cyan/50 transition-all group"
            >
              <div className="p-3 rounded-xl bg-cyber-cyan/10 text-cyber-cyan glow-cyan">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{topic.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {topic.description}
              </p>
              <Link 
                to={`/notes/${topic.id}`} 
                className="inline-flex items-center gap-2 text-cyber-cyan font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all"
              >
                Start Learning <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
