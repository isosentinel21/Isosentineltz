import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, Award, Trophy, Clock, Shield, ArrowRight, Zap, Target, Eye } from 'lucide-react';
import { useProgress } from '../lib/progress';
import { useContent } from '../context/ContentContext';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const Dashboard = () => {
  const { userId, ...progress } = useProgress();
  const { lessons, topics } = useContent();

  const stats = [
    { 
      label: 'Notes Read', 
      value: progress.completedNotes.length, 
      total: lessons.length, 
      icon: BookOpen,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    { 
      label: 'Quizzes Passed', 
      value: progress.passedQuizzes.length, 
      total: lessons.filter(l => l.questions && l.questions.length > 0).length, 
      icon: CheckCircle2,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    },
    { 
      label: 'Certificates', 
      value: progress.certificatesEarned.length, 
      total: progress.certificatesEarned.length, 
      icon: Award,
      color: 'text-cyber-cyan',
      bg: 'bg-cyber-cyan/10'
    }
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold mb-2 uppercase tracking-tighter">Command Center</h1>
            <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">Learning Progress Intelligence Report</p>
          </motion.div>
        </header>

        {/* Real-time Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass border-white/10 relative overflow-hidden group"
            >
              <div className={stat.bg + " absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"} />
              <div className="relative z-10">
                <div className={stat.bg + " " + stat.color + " p-3 rounded-xl inline-flex mb-6"}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-black text-white mb-2 font-mono">
                  {stat.value}
                  {stat.total > 0 && <span className="text-lg text-gray-700 ml-2">/ {stat.total}</span>}
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Recent Activity */}
           <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-3xl border-white/10 p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyber-cyan" />
                  RECENT DEPLOYMENTS
                </h3>
                <div className="space-y-4">
                  {progress.completedNotes.length === 0 ? (
                    <div className="py-12 text-center text-gray-600 italic">
                      No recent activity recorded. Start a lesson to begin your journey.
                    </div>
                  ) : (
                    progress.completedNotes.slice(-5).reverse().map((noteId, i) => {
                      const lesson = lessons.find(l => l.id === noteId);
                      return (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyber-cyan/30 transition-all">
                          <div className="flex items-center gap-4">
                             <div className="p-2 rounded-lg bg-cyber-cyan/10 text-cyber-cyan">
                               <Shield className="w-4 h-4" />
                             </div>
                             <div>
                               <div className="text-sm font-bold">{lesson?.title || 'Unknown Module'}</div>
                               <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Completed</div>
                             </div>
                          </div>
                          <Link to={`/notes/${noteId}`} className="text-gray-500 hover:text-cyber-cyan">
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              <div className="glass rounded-3xl border-white/10 p-8">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Target className="w-5 h-5 text-cyber-pink" />
                    SUGGESTED PATHWAYS
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {topics.slice(0, 2).map((topic, i) => (
                      <Link 
                        key={i} 
                        to="/notes" 
                        state={{ category: topic.id }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group"
                      >
                         <Zap className="w-6 h-6 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                         <div className="font-bold mb-1">{topic.title}</div>
                         <div className="text-xs text-gray-500 uppercase font-mono tracking-widest">
                           {lessons.filter(l => l.categoryId === topic.id).length} Active Targets
                         </div>
                      </Link>
                    ))}
                 </div>
              </div>

              {/* Certificates Verified History */}
              <div className="glass rounded-3xl border-white/10 p-8">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Award className="w-5 h-5 text-cyber-cyan" />
                    CERTIFIED CREDENTIALS
                 </h3>
                 {progress.certificatesEarned.length === 0 ? (
                    <div className="py-12 text-center text-gray-600 italic">
                      No verified certifications on file. Complete assessments with 70%+ score to earn yours.
                    </div>
                 ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {progress.certificatesEarned.map((cert) => (
                          <div key={cert.id} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyber-cyan/30 transition-all flex flex-col justify-between">
                             <div>
                                <div className="flex justify-between items-start mb-4">
                                   <div className="p-2 rounded-lg bg-cyber-cyan/10 text-cyber-cyan">
                                      <Award className="w-5 h-5" />
                                   </div>
                                   <span className="text-[8px] font-mono text-gray-600 bg-white/5 px-2 py-1 rounded">ID: {cert.certificateId}</span>
                                </div>
                                <div className="font-bold text-sm mb-1">{cert.topicTitle}</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-6">Score: {cert.score}% • {new Date(cert.dateIssued).toLocaleDateString()}</div>
                             </div>
                             <Link 
                                to={`/certificate/${cert.certificateId}`}
                                className="w-full py-2 bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-cyber-cyan hover:text-cyber-bg transition-all flex items-center justify-center gap-2"
                             >
                                <Eye className="w-3 h-3" /> VIEW CREDENTIAL
                             </Link>
                          </div>
                       ))}
                    </div>
                 )}
              </div>
           </div>

           {/* Achievements */}
           <div className="space-y-6">
              <div className="glass rounded-3xl border-white/10 p-8 h-full">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  ACHIEVED RANKS
                </h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center border",
                      progress.completedNotes.length >= 1 ? "bg-blue-400/20 border-blue-400 text-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.3)]" : "bg-white/5 border-white/10 text-gray-700"
                    )}>
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Initiate Reader</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">Read first note</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center border",
                      progress.passedQuizzes.length >= 1 ? "bg-emerald-400/20 border-emerald-400 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]" : "bg-white/5 border-white/10 text-gray-700"
                    )}>
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Target Specialist</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">Passed first quiz</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center border",
                      progress.certificatesEarned.length >= 1 ? "bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan shadow-[0_0_15px_rgba(0,242,255,0.3)]" : "bg-white/5 border-white/10 text-gray-700"
                    )}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Sentinel Certified</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">First certification</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-cyber-pink/5 border border-cyber-pink/20">
                   <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-5 h-5 text-cyber-pink" />
                      <span className="font-bold text-xs uppercase tracking-widest">Elite Path</span>
                   </div>
                   <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      Complete 10 assessments and 5 certifications to unlock the Elite Sentinel badge.
                   </p>
                   <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-cyber-pink h-full transition-all duration-1000" 
                        style={{ width: `${Math.min(100, (progress.certificatesEarned.length / 5) * 100)}%` }} 
                      />
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
