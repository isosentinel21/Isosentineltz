import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { NoteTopic, TopicCategory, NOTE_TOPICS, CATEGORIES } from '../data/mockData';

interface ContentContextType {
  topics: TopicCategory[];
  lessons: NoteTopic[];
  addTopic: (topic: TopicCategory) => void;
  updateTopic: (topic: TopicCategory) => void;
  updateLesson: (lesson: NoteTopic) => void;
  addLesson: (lesson: NoteTopic) => void;
  deleteLesson: (lessonId: string) => void;
  deleteTopic: (topicId: string) => void;
  isLoading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [topics, setTopics] = useState<TopicCategory[]>(CATEGORIES);
  const [lessons, setLessons] = useState<NoteTopic[]>(NOTE_TOPICS);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-update counters logic if needed
  useEffect(() => {
    // In a static setup, topics and lessons are already in sync with mockData.ts
    // We just ensure they are set initially
    setTopics(CATEGORIES);
    setLessons(NOTE_TOPICS);
  }, []);

  // No-op functions to maintain compatibility with existing components
  const addTopic = (topic: TopicCategory) => console.warn('Manual addition not supported in static mode');
  const updateTopic = (topic: TopicCategory) => console.warn('Manual update not supported in static mode');
  const addLesson = (lesson: NoteTopic) => console.warn('Manual addition not supported in static mode');
  const updateLesson = (lesson: NoteTopic) => console.warn('Manual update not supported in static mode');
  const deleteLesson = (lessonId: string) => console.warn('Manual deletion not supported in static mode');
  const deleteTopic = (topicId: string) => console.warn('Manual deletion not supported in static mode');

  return (
    <ContentContext.Provider value={{ 
      topics, 
      lessons, 
      addTopic, 
      updateTopic, 
      addLesson, 
      updateLesson, 
      deleteLesson, 
      deleteTopic,
      isLoading 
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
