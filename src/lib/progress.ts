import { useState, useEffect } from 'react';

export interface UserProgressStat {
  completedNotes: string[];
  passedQuizzes: string[];
  certificatesEarned: string[];
}

const STORAGE_KEY = 'cyber_security_progress';

export const getProgress = (): UserProgressStat => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse progress', e);
    }
  }
  return {
    completedNotes: [],
    passedQuizzes: [],
    certificatesEarned: []
  };
};

export const saveProgress = (progress: UserProgressStat) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  // Dispatch custom event for real-time updates across components
  window.dispatchEvent(new Event('progressupdate'));
};

export const markNoteComplete = (noteId: string) => {
  const progress = getProgress();
  if (!progress.completedNotes.includes(noteId)) {
    progress.completedNotes.push(noteId);
    saveProgress(progress);
  }
};

export const markQuizPassed = (noteId: string) => {
  const progress = getProgress();
  if (!progress.passedQuizzes.includes(noteId)) {
    progress.passedQuizzes.push(noteId);
    saveProgress(progress);
  }
};

export const markCertificateEarned = (certificateId: string) => {
  const progress = getProgress();
  if (!progress.certificatesEarned.includes(certificateId)) {
    progress.certificatesEarned.push(certificateId);
    saveProgress(progress);
  }
};

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgressStat>(getProgress());

  useEffect(() => {
    const handleUpdate = () => {
      setProgress(getProgress());
    };
    window.addEventListener('progressupdate', handleUpdate);
    return () => window.removeEventListener('progressupdate', handleUpdate);
  }, []);

  return progress;
};
