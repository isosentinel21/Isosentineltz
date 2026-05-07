import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Terminal, Shield, Lock, Search, ArrowRight, FileQuestion, BookOpen, CheckCircle, Award, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { UserProgress } from '@/src/components/UserProgress';
import { useProgress } from '@/src/lib/progress';
import { useContent } from '@/src/context/ContentContext';

const ICONS = {
  Network: Network,
  Terminal: Terminal,
  Shield: Shield,
  Lock: Lock,
  Scale: Scale,
};

export const Notes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const progress = useProgress();
  const { topics, lessons } = useContent();

  const lessonsCount = useMemo(() => {
    const counts: Record<string, number> = {};
    topics.forEach(cat => {
      counts[cat.id] = lessons.filter(note => note.categoryId === cat.id).length;
    });
    return counts;
  }, [topics, lessons]);

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return topics;

    return topics.filter(cat => 
      cat.title.toLowerCase().includes(query) ||
      cat.description.toLowerCase().includes(query) ||
      lessons.some(note => note.categoryId === cat.id && (
        note.title.toLowerCase().includes(query) ||
        note.tags?.some(tag => tag.toLowerCase().includes(query))
      ))
    );
  }, [searchQuery, topics, lessons]);

  const filteredNotes = useMemo(() => {
    return lessons.filter(note => 
      (!selectedCategory || note.categoryId === selectedCategory) &&
      (note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       note.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [selectedCategory, searchQuery, lessons]);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="max-w-4xl mb-16">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Learning Portal
        </motion.h1>
        <p className="text-gray-400 text-lg">
          Dive deep into curated cybersecurity modules. From networking fundamentals 
          to advanced penetration testing, we cover everything you need to know.
        </p>
      </div>

      <UserProgress />

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-grow group">
          <Search className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors",
            searchQuery ? "text-cyber-cyan" : "text-gray-500"
          )} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics, keywords, or tags..." 
            className="w-full glass border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:border-cyber-cyan/50 focus:outline-none focus:ring-1 focus:ring-cyber-cyan/30 transition-all placeholder:text-gray-600"
          />
        </div>
        {selectedCategory && (
          <button 
            onClick={() => setSelectedCategory(null)}
            className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Categories View */}
      {!selectedCategory && !searchQuery && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {topics.map((cat, i) => {
            const Icon = (ICONS as any)[cat.icon] || Shield;
            const count = lessonsCount[cat.id] || 0;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setSelectedCategory(cat.id)}
                className="cursor-pointer p-8 rounded-2xl glass border-white/10 flex flex-col items-center text-center gap-4 hover:border-cyber-cyan/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-2">
                   <div className="text-[10px] font-black text-cyber-cyan/30 font-mono rotate-12">{cat.id.toUpperCase()}</div>
                </div>
                <div className={cn("p-4 rounded-2xl bg-white/5 transition-all group-hover:scale-110", cat.color === 'cyber-cyan' ? 'text-cyber-cyan glow-cyan' : 'text-cyber-pink glow-pink')}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-white transition-colors">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <BookOpen className="w-3 h-3 text-cyber-cyan" />
                  <span className="text-xs font-black text-white">{count} Lessons</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Lessons List View */}
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
        {selectedCategory ? topics.find(c => c.id === selectedCategory)?.title : "Recent Lessons"}
        <div className="h-[1px] flex-grow bg-white/5" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((topic, i) => {
              const Icon = (ICONS as any)[topic.icon] || Shield;
              const isCompleted = progress.completedNotes.includes(topic.id);
              const isQuizPassed = progress.passedQuizzes.includes(topic.id);

              return (
                <motion.div
                  key={topic.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl glass border-white/10 flex flex-col items-start gap-4 hover:border-cyber-cyan/50 transition-all group relative"
                >
                  {isCompleted && (
                    <div className="absolute top-4 right-4 flex gap-2">
                       {isQuizPassed && (
                         <div className="p-1 px-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> VERIFIED
                         </div>
                       )}
                       <div className="p-1 px-2 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-[10px] font-bold flex items-center gap-1">
                          COMPLETED
                       </div>
                    </div>
                  )}

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
                    {isCompleted ? "Review Module" : "Start Learning"} <ArrowRight className="w-4 h-4" />
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
              <h3 className="text-2xl font-bold text-white mb-2">No matching lessons found</h3>
              <p className="text-gray-400 max-w-sm mx-auto">
                No data packets found for your request. Try broadening your scope.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

