import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Brain, Trophy, ChevronRight, CheckCircle2, XCircle, Info, Timer, Loader2, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

export const Quizzes = () => {
  const { lessons, topics, isLoading } = useContent();
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 h-screen flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-cyber-cyan animate-spin mb-4" />
        <p className="text-gray-500 uppercase tracking-widest font-mono">Syncing Lab Environments...</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cyber Practice Labs</h1>
        <p className="text-gray-400 text-lg">
          Validate your knowledge with our industry-level quizzes and CTF challenges linked to each lesson.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/notes/${lesson.id}`}
            className="glass p-8 rounded-3xl border-white/10 hover:border-cyber-cyan/30 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="px-3 py-1 rounded bg-cyber-pink/20 text-cyber-pink text-[10px] font-bold uppercase tracking-widest border border-cyber-pink/30">
                  LAB ACTIVE
                </div>
                <div className="text-[10px] text-gray-500 font-mono">6 MCQs</div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-cyan transition-colors">{lesson.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-6">
                Test your mastery of {lesson.title}. Earn your certificate by scoring 70% or more.
              </p>
            </div>
            <div className="flex items-center gap-2 text-cyber-cyan font-bold text-xs uppercase tracking-widest">
              INITIALIZE LAB <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
