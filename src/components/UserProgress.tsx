import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Zap, BookOpen } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const UserProgress = () => {
  const [stats, setStats] = useState({
    completed: 0,
    certificates: 0,
    points: 0
  });

  useEffect(() => {
    // In a real app, this would fetch from Firebase
    // For now, we simulate with random/local values to show the UI
    const timer = setTimeout(() => {
      setStats({
        completed: 2,
        certificates: 1,
        points: 450
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const progressItems = [
    { label: 'Notes Read', value: stats.completed, total: 10, icon: BookOpen, color: 'text-cyber-cyan' },
    { label: 'Quizzes Passed', value: stats.completed, total: 10, icon: CheckCircle2, color: 'text-emerald-400' },
    { label: 'Certificates', value: stats.certificates, total: 10, icon: Award, color: 'text-cyber-pink' }
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
          <div className={cn("p-3 rounded-xl bg-white/5", item.color)}>
            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</span>
              <span className="text-xs font-mono text-white">
                {item.value}<span className="text-gray-700">/{item.total}</span>
              </span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / item.total) * 100}%` }}
                className={cn("h-full", item.color.replace('text', 'bg'))}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
