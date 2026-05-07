import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CyberGrid } from './components/CyberGrid';
import { Home } from './pages/Home';
import { Notes } from './pages/Notes';
import { NotesDetail } from './pages/NotesDetail';
import { Videos } from './pages/Videos';
import { Quizzes } from './pages/Quizzes';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

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
  return (
    <Router>
      <div className="min-h-screen bg-cyber-bg text-gray-100 selection:bg-cyber-cyan selection:text-cyber-bg flex flex-col">
        <CyberGrid />
        <Navbar />
        <PageTransition>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/notes/:id" element={<NotesDetail />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
}
