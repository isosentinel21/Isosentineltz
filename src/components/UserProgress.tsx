import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, BookOpen } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useProgress } from '@/src/lib/progress';
import { useContent } from '@/src/context/ContentContext';

export const UserProgress = () => {
  const progress = useProgress();
  const { lessons } = useContent();

  const stats = {
    completed: progress.completedNotes.length,
    quizzes: progress.passedQuizzes.length,
    certificates: progress.certificatesEarned.length,
    totalNotes: lessons.length,
    totalQuizzes: lessons.filter(t => t.questions && t.questions.length > 0).length
  };

  const progressItems = [
    { 
      label: 'Notes Read', 
      value: stats.completed, 
      total: stats.totalNotes, 
      icon: BookOpen, 
      color: 'text-cyber-cyan' 
    },
    { 
      label: 'Quizzes Passed', 
      value: stats.quizzes, 
      total: stats.totalQuizzes, 
      icon: CheckCircle2, 
      color: 'text-emerald-400' 
    },
    { 
      label: 'Certificates Earned', 
      value: stats.certificates, 
      total: stats.totalQuizzes, 
      icon: Award, 
      color: 'text-cyber-pink' 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      {progressItems.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-6 rounded-2xl glass border-white/10 flex items-center gap-4 group"
        >
          <div className={cn("p-3 rounded-xl bg-white/5 shadow-inner", item.color)}>
            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{item.label}</span>
              <span className="text-xs font-mono text-white">
                {item.value}<span className="text-gray-700">/{item.total}</span>
              </span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / Math.max(item.total, 1)) * 100}%` }}
                className={cn("h-full transition-all duration-1000", item.color.replace('text', 'bg'))}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

