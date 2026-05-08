import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, CheckCircle2, XCircle, ChevronRight, ChevronLeft, RefreshCcw, Trophy, Award, Lock, ArrowRight, Loader2, Eye } from 'lucide-react';
import { QuizQuestionSimple, NOTE_TOPICS } from '@/src/data/mockData';
import { cn } from '@/src/lib/utils';
import { Certificate } from './Certificate';
import { markQuizPassed, markCertificateEarned, getDeviceId } from '@/src/lib/progress';
import { useContent } from '@/src/context/ContentContext';
import { useNavigate } from 'react-router-dom';

interface AssessmentProps {
  topicTitle: string;
  lessonId: string;
  initialQuestions?: QuizQuestionSimple[];
}

export const Assessment = ({ topicTitle, lessonId, initialQuestions }: AssessmentProps) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestionSimple[]>(initialQuestions || []);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const [showResultsReview, setShowResultsReview] = useState(false);
  const [generatedId, setGeneratedId] = useState('');
  const [loading, setLoading] = useState(!initialQuestions);

  useEffect(() => {
    if (!initialQuestions && lessonId) {
      setLoading(true);
      // Find quiz from static data
      const lesson = NOTE_TOPICS.find(l => l.id === lessonId);
      if (lesson && lesson.questions) {
        setQuestions(lesson.questions);
        setAnswers(new Array(lesson.questions.length).fill(-1));
      }
      setLoading(false);
    } else if (questions.length > 0 && answers.length === 0) {
      setAnswers(new Array(questions.length).fill(-1));
    }
  }, [lessonId, initialQuestions]);

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
    const certificateId = `CERT-CS-2026-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
    setGeneratedId(certificateId);
    setShowCertificate(true);
    
    markCertificateEarned({
      id: Math.random().toString(36).substring(2, 11),
      certificateId: certificateId,
      topicTitle: topicTitle,
      score: score,
      dateIssued: new Date().toISOString(),
      userName: userName
    });
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers(new Array(questions.length).fill(-1));
    setIsSubmitted(false);
    setShowCertificate(false);
    setShowResultsReview(false);
    setGeneratedId('');
  };

  const passed = score >= 70;
  const certificateId = `CERT-CS-2026-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;

  if (loading) {
    return (
      <div className="mt-20 p-12 rounded-3xl glass border-white/10 text-center flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-cyber-cyan animate-spin mb-4" />
        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Calibrating Assessment Data...</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return null; // Or show "No assessment available"
  }

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

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {!passed && (
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all flex items-center gap-3 uppercase tracking-widest text-xs"
                >
                  <RefreshCcw className="w-4 h-4" /> RETRY ASSESSMENT
                </motion.button>
              )}
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowResultsReview(!showResultsReview)}
                className={cn(
                  "px-8 py-4 border font-black rounded-xl transition-all flex items-center gap-3 uppercase tracking-widest text-xs",
                  showResultsReview 
                    ? "bg-cyber-cyan text-cyber-bg border-cyber-cyan" 
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                )}
              >
                <Eye className="w-4 h-4" /> {showResultsReview ? "HIDE REVIEW" : "REVIEW ANSWERS"}
              </motion.button>
            </div>

            <AnimatePresence>
              {showResultsReview && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full max-w-2xl mx-auto space-y-4 mb-12 overflow-hidden"
                >
                  <div className="text-left font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                    Correct Answer Protocols
                  </div>
                  {questions.map((q, idx) => {
                    const isCorrect = answers[idx] === q.correctAnswer;
                    return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={cn(
                          "p-6 rounded-2xl border text-left",
                          isCorrect ? "bg-emerald-500/5 border-emerald-500/20" : "bg-red-500/5 border-red-500/20"
                        )}
                      >
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-black",
                            isCorrect ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                          )}>
                            {idx + 1}
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-bold text-white leading-tight">{q.question}</h4>
                            <div className="space-y-1">
                              <p className={cn(
                                "text-sm flex items-center gap-2",
                                isCorrect ? "text-emerald-400" : "text-red-400"
                              )}>
                                {isCorrect ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                                Your Answer: {q.options[answers[idx]] || 'No answer'}
                              </p>
                              {!isCorrect && (
                                <p className="text-sm text-emerald-400 flex items-center gap-2 font-bold">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Correct Answer: {q.options[q.correctAnswer]}
                                </p>
                              )}
                            </div>
                            {q.explanation && (
                              <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-gray-400 leading-relaxed italic">
                                <span className="text-cyber-cyan font-bold not-italic mr-2">LOGIC:</span>
                                {q.explanation}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 w-full max-w-lg p-10 rounded-2xl bg-cyber-cyan/5 border border-cyber-cyan/20 shadow-[0_0_50px_rgba(0,242,255,0.1)] text-center"
              >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30">
                      <Award className="w-12 h-12 text-cyber-cyan" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Credential Ready</h3>
                  <p className="text-gray-400 text-sm mb-8">
                    Your official ISO-SENTINEL certification has been cryptographically signed and stored in your vault.
                  </p>
                  <button 
                    onClick={() => navigate(`/certificate/${generatedId}`)}
                    className="w-full py-5 bg-cyber-cyan text-cyber-bg font-black rounded-xl hover:shadow-[0_0_40px_rgba(0,242,255,0.5)] transition-all flex items-center justify-center gap-3 uppercase tracking-wider scale-105"
                  >
                    <Eye className="w-6 h-6" /> VIEW OFFICIAL CREDENTIAL
                  </button>
              </motion.div>
            ) : null}
          </div>
        </motion.div>
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
