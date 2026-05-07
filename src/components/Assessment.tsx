import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, CheckCircle2, XCircle, ChevronRight, ChevronLeft, RefreshCcw, Trophy, Award, Lock, ArrowRight } from 'lucide-react';
import { QuizQuestionSimple } from '@/src/data/mockData';
import { cn } from '@/src/lib/utils';
import { Certificate } from './Certificate';
import { markQuizPassed, markCertificateEarned } from '@/src/lib/progress';
import { useContent } from '@/src/context/ContentContext';

interface AssessmentProps {
  topicTitle: string;
  questions: QuizQuestionSimple[];
}

export const Assessment = ({ topicTitle, questions }: AssessmentProps) => {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const { lessons } = useContent();
  // Find the note ID for progress tracking
  const noteId = lessons.find(t => t.title === topicTitle)?.id || '';

  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correctCount++;
    });
    const finalScore = Math.round((correctCount / questions.length) * 100);
    setScore(finalScore);
    setIsSubmitted(true);
    
    if (finalScore >= 70 && noteId) {
      markQuizPassed(noteId);
    }
  };

  const handleGenerateCertificate = () => {
    setShowCertificate(true);
    const certificateId = `CERT-CS-2026-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
    markCertificateEarned(certificateId);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers(new Array(questions.length).fill(-1));
    setIsSubmitted(false);
    setShowCertificate(false);
  };

  const passed = score >= 70;
  const certificateId = `CERT-CS-2026-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;

  if (!isActive) {
    return (
      <div className="mt-20 p-12 rounded-3xl glass border-white/10 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex p-4 rounded-2xl bg-cyber-cyan/10 text-cyber-cyan mb-6 group-hover:scale-110 transition-transform">
            <Brain className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Knowledge Assessment</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Ready to test your understanding of <span className="text-white font-bold">{topicTitle}</span>? 
            Pass with <span className="text-cyber-cyan font-bold">70%</span> or higher to earn your official certification.
          </p>
          <button 
            onClick={() => setIsActive(true)}
            className="px-12 py-4 bg-cyber-cyan text-cyber-bg font-black rounded-xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all flex items-center justify-center gap-2 mx-auto group"
          >
            START ASSESSMENT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-12 rounded-3xl glass border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className={cn(
                "inline-flex p-8 rounded-full mb-8 shadow-[0_0_40px_rgba(0,0,0,0.3)]",
                passed ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
              )}
            >
              {passed ? <Trophy className="w-16 h-16" /> : <XCircle className="w-16 h-16 animate-pulse" />}
            </motion.div>
            
            <h2 className={cn(
              "text-4xl font-black mb-2 uppercase tracking-tighter",
              passed ? "text-emerald-400" : "text-red-400"
            )}>
              {passed ? "Assessment Passed!" : "Assessment Failed"}
            </h2>
            
            <div className="text-7xl font-black mb-6 flex items-baseline gap-2">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={passed ? "text-emerald-400" : "text-red-400"}
              >
                {score}%
              </motion.span>
              <span className="text-xl text-gray-700 font-mono font-bold">SCORE</span>
            </div>

            <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
              {passed 
                ? "Excellent work! Your knowledge is verified. Please enter your name below to generate your official completion certificate."
                : `You scored ${score}%, which is below the 70% passing threshold. Don't worry—review the material and try again to master the concepts.`}
            </p>

            {passed && !showCertificate ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 w-full max-w-lg p-8 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner"
              >
                <div className="text-center mb-6">
                  <p className="text-[10px] font-mono text-cyber-cyan uppercase tracking-[0.3em] mb-2 font-bold">Identity Verification</p>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Certificate Details</h3>
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="ENTER YOUR FULL NAME"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-cyber-bg/50 border border-white/10 rounded-xl px-1 py-5 text-white focus:border-cyber-cyan transition-all text-center font-bold tracking-widest placeholder:text-gray-800 placeholder:font-normal uppercase focus:ring-4 focus:ring-cyber-cyan/5"
                  />
                  <div className="absolute inset-0 border border-cyber-cyan/20 rounded-xl pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity" />
                </div>
                <button 
                  onClick={handleGenerateCertificate}
                  disabled={!userName.trim()}
                  className="w-full py-5 bg-cyber-cyan text-cyber-bg font-black rounded-xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] disabled:opacity-20 disabled:grayscale transition-all flex items-center justify-center gap-3 uppercase tracking-tighter"
                >
                  <Award className="w-5 h-5" /> GENERATE OFFICIAL CERTIFICATE
                </button>
              </motion.div>
            ) : passed && showCertificate ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-8 mb-4"
              >
                 <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-[0.4em] mx-auto w-fit shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Certificate Verified & Generated
                 </div>
              </motion.div>
            ) : (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetQuiz}
                className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all flex items-center gap-3 mx-auto uppercase tracking-widest text-sm"
              >
                <RefreshCcw className="w-5 h-5" /> RETRY ASSESSMENT
              </motion.button>
            )}
          </div>
        </motion.div>

        {showCertificate && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-12"
          >
            <Certificate 
              userName={userName}
              courseTitle={topicTitle}
              score={score}
              date={new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
              certificateId={certificateId}
            />
          </motion.div>
        )}
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="mt-20 p-8 md:p-12 rounded-3xl glass border-white/10 relative overflow-hidden no-print">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Knowledge Check</h2>
          <div className="flex gap-1">
            {questions.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1 transition-all duration-300",
                  i === currentStep ? "w-8 bg-cyber-cyan" : i < currentStep ? "w-4 bg-emerald-500" : "w-4 bg-white/10"
                )} 
              />
            ))}
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-cyber-cyan font-mono">
            {String(currentStep + 1).padStart(2, '0')}
          </span>
          <span className="text-gray-600 font-mono mx-1">/</span>
          <span className="text-gray-600 font-mono">{questions.length}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-white leading-tight">
            {currentQuestion.question}
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOptionSelect(i)}
                className={cn(
                  "p-6 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group",
                  answers[currentStep] === i 
                    ? "bg-cyber-cyan/10 border-cyber-cyan text-white" 
                    : "bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/30 hover:bg-white/[0.05]"
                )}
              >
                <span className="flex items-center gap-4">
                  <span className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center font-bold font-mono text-sm",
                    answers[currentStep] === i ? "bg-cyber-cyan text-cyber-bg" : "bg-white/5"
                  )}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {option}
                </span>
                {answers[currentStep] === i && (
                  <CheckCircle2 className="w-5 h-5 text-cyber-cyan" />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
        <button
          onClick={() => setCurrentStep(prev => prev - 1)}
          disabled={currentStep === 0}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors disabled:opacity-0"
        >
          <ChevronLeft className="w-5 h-5" /> Previous Question
        </button>

        {currentStep === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={answers.includes(-1)}
            className="px-8 py-3 bg-cyber-pink text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(255,0,193,0.4)] transition-all disabled:opacity-50"
          >
            SUBMIT ASSESSMENT
          </button>
        ) : (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            disabled={answers[currentStep] === -1}
            className="flex items-center gap-2 text-white font-bold hover:text-cyber-cyan transition-colors disabled:opacity-50 group"
          >
            Next Question <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
};
