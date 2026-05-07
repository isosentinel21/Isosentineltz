import { useState, useEffect } from 'react';

export interface CertificateData {
  id: string;
  certificateId: string;
  topicTitle: string;
  score: number;
  dateIssued: string;
  userName: string;
}

export interface UserProgressStat {
  completedNotes: string[];
  passedQuizzes: string[];
  certificatesEarned: CertificateData[];
  name?: string;
}

const STORAGE_KEY = 'cyber_sentinel_progress_v2'; // Versioning to avoid schema conflicts
const DEVICE_ID_KEY = 'cyber_sentinel_device_id';

export const getDeviceId = () => {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = 'user_' + Math.random().toString(36).substring(2, 11);
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
};

const getRawProgress = (): UserProgressStat => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    // Check old version first optionally, but let's just start fresh for v2 if needed or migrate
    const oldData = localStorage.getItem('cyber_sentinel_progress');
    let initial: UserProgressStat = {
      completedNotes: [],
      passedQuizzes: [],
      certificatesEarned: []
    };
    
    if (oldData) {
      try {
        const parsedOld = JSON.parse(oldData);
        initial.completedNotes = parsedOld.completedNotes || [];
        initial.passedQuizzes = parsedOld.passedQuizzes || [];
        // certificatesEarned in v1 was string[], in v2 it's CertificateData[]
      } catch (e) {}
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  return JSON.parse(data);
};

const saveProgress = (progress: UserProgressStat) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event('storage-update'));
};

export const getProgress = async (): Promise<UserProgressStat> => {
  return getRawProgress();
};

export const markNoteComplete = async (noteId: string) => {
  const p = getRawProgress();
  if (!p.completedNotes.includes(noteId)) {
    p.completedNotes.push(noteId);
    saveProgress(p);
  }
};

export const markQuizPassed = async (noteId: string) => {
  const p = getRawProgress();
  if (!p.passedQuizzes.includes(noteId)) {
    p.passedQuizzes.push(noteId);
    saveProgress(p);
  }
};

export const markCertificateEarned = async (certData: CertificateData) => {
  const p = getRawProgress();
  if (!p.certificatesEarned.find(c => c.certificateId === certData.certificateId)) {
    p.certificatesEarned.push(certData);
    saveProgress(p);
  }
};

export const updateUserName = async (name: string) => {
  const p = getRawProgress();
  p.name = name;
  saveProgress(p);
};

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgressStat>(getRawProgress());

  useEffect(() => {
    const handleUpdate = () => {
      setProgress(getRawProgress());
    };

    window.addEventListener('storage-update', handleUpdate);
    window.addEventListener('storage', handleUpdate); // For cross-tab updates

    return () => {
      window.removeEventListener('storage-update', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return { ...progress, userId: getDeviceId() };
};
