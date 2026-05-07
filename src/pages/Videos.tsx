import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Clock, Tag, Search, Filter, Share2, ThumbsUp, MessageSquare } from 'lucide-react';
import { TUTORIAL_VIDEOS } from '@/src/data/mockData';
import { Link } from 'react-router-dom';

export const Videos = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web Security', 'Networking', 'Malware', 'Cryptography'];

  const filteredVideos = activeCategory === 'All' 
    ? TUTORIAL_VIDEOS 
    : TUTORIAL_VIDEOS.filter(v => v.category === activeCategory);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Video Tutorials</h1>
        <p className="text-gray-400 text-lg">
          Practical demonstrations and walk-throughs of modern security vulnerabilities and tools.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search tutorials..." 
            className="w-full glass border-white/10 rounded-xl py-3 pl-12 pr-6 text-white"
          />
        </div>
        <div className="flex gap-2 p-1 glass rounded-xl overflow-x-auto border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === cat ? 'bg-cyber-cyan text-cyber-bg glow-cyan' : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group glass border-white/10 rounded-2xl overflow-hidden hover:border-cyber-cyan/50 transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={video.thumbnail} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                alt={video.title} 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-12 h-12 rounded-full bg-cyber-cyan flex items-center justify-center text-cyber-bg glow-cyan">
                  <Play className="w-6 h-6 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-[10px] font-bold text-white tracking-widest backdrop-blur-md">
                {video.duration}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold text-cyber-cyan border border-cyber-cyan/30 px-2 py-0.5 rounded uppercase tracking-wider">
                  {video.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-cyber-cyan transition-colors line-clamp-1">{video.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">{video.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-4 text-gray-500">
                   <div className="flex items-center gap-1 text-[10px]">
                     <ThumbsUp className="w-3 h-3" /> 1.2K
                   </div>
                   <div className="flex items-center gap-1 text-[10px]">
                     <MessageSquare className="w-3 h-3" /> 48
                   </div>
                </div>
                <Link 
                  to={`/video/${video.id}`}
                  className="text-white hover:text-cyber-cyan transition-colors p-2"
                >
                   <Play className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
