import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CyberGrid } from './components/CyberGrid';
import { Marquee } from './components/Marquee';
import { Home } from './pages/Home';
import { Notes } from './pages/Notes';
import { NotesDetail } from './pages/NotesDetail';
import { Videos } from './pages/Videos';
import { Quizzes } from './pages/Quizzes';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';
import { CertificateViewer } from './pages/CertificateViewer';
import { triggerWelcomeConfetti } from './lib/celebration';
import { ContentProvider } from './context/ContentContext';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-10"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default function App() {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      triggerWelcomeConfetti();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <ContentProvider>
      <Router>
        <AppContent />
      </Router>
    </ContentProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const isCertificateView = location.pathname.startsWith('/certificate/');

  return (
    <div className="min-h-screen bg-cyber-bg text-gray-100 selection:bg-cyber-cyan selection:text-cyber-bg flex flex-col">
      {!isCertificateView && (
        <>
          <CyberGrid />
          <Navbar />
          <div className="pt-20">
            <Marquee />
          </div>
        </>
      )}
      
      <PageTransition>
        <div className={isCertificateView ? "" : "flex-grow"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/:id" element={<NotesDetail />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificate/:id" element={<CertificateViewer />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </PageTransition>

      {!isCertificateView && <Footer />}
    </div>
  );
}
