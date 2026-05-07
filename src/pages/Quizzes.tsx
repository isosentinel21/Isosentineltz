import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Brain, Trophy, ChevronRight, CheckCircle2, XCircle, Info, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QUIZ_QUESTIONS } from '@/src/data/mockData';

export const Quizzes = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOption(idx);
  };

  const handleNext = () => {
    if (selectedOption === currentQ.correctAnswer) {
      setScore(s => s + 1);
    }
    
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(c => c + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cyber Practice Labs</h1>
        <p className="text-gray-400 text-lg">
          Validate your knowledge with our industry-level quizzes and CTF challenges.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {!isFinished ? (
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyber-pink/10 text-cyber-pink">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">
                  Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 glass rounded-full border-white/10 text-xs text-cyber-cyan">
                <Timer className="w-3 h-3" /> 30s remaining
              </div>
            </div>

            <div className="glass p-8 md:p-12 rounded-3xl border-white/10 mb-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-1 bg-cyber-cyan glow-cyan transition-all duration-500" style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }} />
               
               <div className="flex items-center gap-3 mb-8">
                 <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    currentQ.difficulty === 'Beginner' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 
                    currentQ.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 
                    'bg-red-500/20 text-red-400 border border-red-500/30'
                 }`}>
                   {currentQ.difficulty}
                 </span>
               </div>

               <h2 className="text-2xl md:text-3xl font-bold mb-10 leading-tight">
                 {currentQ.question}
               </h2>

               <div className="space-y-4">
                 {currentQ.options.map((option, idx) => (
                   <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className={`w-full p-5 rounded-2xl border transition-all text-left group flex items-center justify-between ${
                      selectedOption === idx 
                        ? 'bg-cyber-cyan/10 border-cyber-cyan text-white glow-cyan' 
                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:bg-white/10'
                    }`}
                   >
                     <span className="font-semibold">{option}</span>
                     {selectedOption === idx && <CheckCircle2 className="w-5 h-5 text-cyber-cyan" />}
                   </button>
                 ))}
               </div>

               <AnimatePresence>
                 {showResult && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <Info className="w-5 h-5 text-cyber-cyan shrink-0 mt-1" />
                        <div>
                          <div className="font-bold text-sm text-white mb-1 uppercase tracking-widest">Explanation</div>
                          <p className="text-gray-400 text-sm leading-relaxed">{currentQ.explanation}</p>
                        </div>
                      </div>
                    </motion.div>
                 )}
               </AnimatePresence>
            </div>

            <div className="flex justify-between items-center">
              <button 
                onClick={() => setShowResult(!showResult)}
                className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 px-6 py-3"
              >
                {showResult ? 'HIDE ANSWER' : 'REVEAL ANSWER'}
              </button>
              <button
                disabled={selectedOption === null}
                onClick={handleNext}
                className="px-8 py-4 bg-cyber-pink text-white font-bold rounded-xl glow-pink disabled:opacity-50 disabled:glow-none transition-all flex items-center gap-2 group shadow-xl"
              >
                {currentIdx + 1 === QUIZ_QUESTIONS.length ? 'FINISH LAB' : 'NEXT CHALLENGE'} 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-12 md:p-20 rounded-3xl border-white/10 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/10 to-transparent pointer-events-none" />
            <Trophy className="w-20 h-20 text-cyber-cyan mx-auto mb-8 glow-cyan animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Lab Completed!</h2>
            <p className="text-gray-400 text-lg mb-12">System evaluation complete. Your score reflects your current security clearance level.</p>
            
            <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto mb-16">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-mono">Accuracy</div>
                <div className="text-4xl font-bold text-cyber-cyan">{Math.round((score / QUIZ_QUESTIONS.length) * 100)}%</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-mono">XP Earned</div>
                <div className="text-4xl font-bold text-cyber-pink">+{score * 100}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setCurrentIdx(0);
                  setScore(0);
                  setSelectedOption(null);
                  setShowResult(false);
                  setIsFinished(false);
                }}
                className="px-8 py-4 bg-cyber-cyan text-cyber-bg font-bold rounded-xl glow-cyan hover:scale-105 transition-all"
              >
                RESTART LAB
              </button>
              <Link 
                to="/notes"
                className="px-8 py-4 glass border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                BACK TO NOTES
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
