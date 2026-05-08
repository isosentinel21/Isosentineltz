import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Cpu, Lock, ArrowRight, Zap, Globe, Users, Trophy, BookOpen, CheckCircle2, Award, Scale, Network, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useContent } from '../context/ContentContext';
import { useProgress } from '../lib/progress';

const ICONS = {
  Network: Network,
  Terminal: Terminal,
  Shield: Shield,
  Lock: Lock,
  Scale: Scale,
  Cpu: Cpu,
  Layout: Layout,
};

export const Home = () => {
  const { topics, lessons } = useContent();
  const progress = useProgress();

  const stats = [
    { label: 'Notes Read', value: progress.completedNotes.length, total: lessons.length, icon: BookOpen },
    { label: 'Quizzes Passed', value: progress.passedQuizzes.length, total: lessons.filter(l => l.questions && l.questions.length > 0).length, icon: CheckCircle2 },
    { label: 'Certificates', value: progress.certificatesEarned.length, total: progress.certificatesEarned.length, icon: Award }
  ];
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan text-xs font-bold tracking-widest uppercase mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
            </span>
            System Status: Operational
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Master the Art of <br />
            <span className="text-gradient">Cyber Security</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Access premium learning resources, hands-on tutorials, and real-world scenarios. 
            ISOSENTINEL is your gateway to becoming a professional security expert.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/notes" 
              className="w-full sm:w-auto px-8 py-4 bg-cyber-cyan text-cyber-bg font-bold rounded-lg hover:scale-105 active:scale-95 transition-all glow-cyan flex items-center justify-center gap-2 group"
            >
              Learn Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/videos" 
              className="w-full sm:w-auto px-8 py-4 glass border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Watch Tutorials
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-white/5 mb-4">
                  <stat.icon className="w-6 h-6 text-cyber-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}{stat.total ? <span className="text-sm text-gray-600">/{stat.total}</span> : ''}</div>
                <div className="text-gray-500 text-xs font-mono uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-white/5 mb-4">
                  <Globe className="w-6 h-6 text-cyber-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">82</div>
                <div className="text-gray-500 text-xs font-mono uppercase tracking-widest">Countries</div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Educational Pillars</h2>
            <p className="text-gray-400">Comprehensive curriculum covering the entire security spectrum.</p>
          </div>
          <Link to="/notes" className="text-cyber-cyan font-semibold flex items-center gap-2 group">
            View All Notes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((cat, i) => {
            const Icon = (ICONS as any)[cat.icon] || Shield;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl glass border-white/10 hover:border-cyber-cyan/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="p-3 rounded-xl bg-white/5 inline-flex mb-6 group-hover:scale-110 group-hover:text-cyber-cyan transition-all">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">{cat.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{cat.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest">{lessons.filter(l => l.categoryId === cat.id).length} MODULES</span>
                  </div>
                  <Link to="/notes" className="flex items-center gap-2 text-xs font-bold tracking-widest text-cyber-cyan opacity-0 group-hover:opacity-100 transition-all">
                    EXPLORE VECTOR <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-32 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Professionals</h2>
          <p className="text-gray-400">Join thousands of students who have advanced their careers through our platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Alex Rivera",
              role: "Security Analyst at TechGuard",
              text: "The labs and notes on ISOSENTINEL are top-notch. It helped me clear my Security+ certification with ease.",
              avatar: "https://i.pravatar.cc/150?u=1"
            },
            {
              name: "Sarah Chen",
              role: "Bounty Hunter",
              text: "The web security section is one of the best I've seen. Clear, practical, and highly updated techniques.",
              avatar: "https://i.pravatar.cc/150?u=2"
            }
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] relative">
               <div className="flex items-center gap-4 mb-6">
                 <img src={t.avatar} className="w-12 h-12 rounded-full border border-cyber-cyan/30" alt="" />
                 <div>
                   <div className="font-bold">{t.name}</div>
                   <div className="text-cyber-cyan text-xs font-mono">{t.role}</div>
                 </div>
               </div>
               <p className="text-gray-400 italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
