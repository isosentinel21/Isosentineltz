import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Terminal, Shield, Lock, Search, ArrowRight, FileQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NOTE_TOPICS } from '@/src/data/mockData';
import { cn } from '@/src/lib/utils';
import { UserProgress } from '@/src/components/UserProgress';

const ICONS = {
  Network: Network,
  Terminal: Terminal,
  Shield: Shield,
  Lock: Lock,
};

export const Notes = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return NOTE_TOPICS;

    return NOTE_TOPICS.filter(topic => 
      topic.title.toLowerCase().includes(query) ||
      topic.description.toLowerCase().includes(query) ||
      topic.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Portal</h1>
        <p className="text-gray-400 text-lg">
          Dive deep into curated cybersecurity modules. From networking fundamentals 
          to advanced penetration testing, we cover everything you need to know.
        </p>
      </div>

      <UserProgress />

      <div className="relative mb-12 group">
        <Search className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors",
          searchQuery ? "text-cyber-cyan" : "text-gray-500"
        )} />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search topics, keywords, or tags (e.g. #linux)..." 
          className="w-full glass border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:border-cyber-cyan/50 focus:outline-none focus:ring-1 focus:ring-cyber-cyan/30 transition-all placeholder:text-gray-600"
        />
        {searchQuery && (
          <div className="absolute top-0 right-0 h-full flex items-center pr-4">
            <div className="w-2 h-2 rounded-full bg-cyber-cyan glow-cyan animate-pulse" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, i) => {
              const Icon = (ICONS as any)[topic.icon] || Shield;
              return (
                <motion.div
                  key={topic.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl glass border-white/10 flex flex-col items-start gap-4 hover:border-cyber-cyan/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyber-cyan/10 text-cyber-cyan glow-cyan">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-cyber-cyan transition-colors">{topic.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {topic.description}
                  </p>
                  
                  {topic.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">#{tag}</span>
                      ))}
                    </div>
                  )}

                  <Link 
                    to={`/notes/${topic.id}`} 
                    className="inline-flex items-center gap-2 text-cyber-cyan font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all"
                  >
                    Start Learning <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center"
            >
              <div className="inline-flex p-6 rounded-3xl bg-white/[0.02] border border-white/5 mb-6">
                <FileQuestion className="w-12 h-12 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No matching notes found</h3>
              <p className="text-gray-400 max-w-sm mx-auto">
                Your search for "<span className="text-cyber-cyan">{searchQuery}</span>" did not return any encrypted data. Try different keywords.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
