import React, { createContext, useContext, useState, ReactNode } from 'react';
import { NoteTopic, TopicCategory, NOTE_TOPICS, CATEGORIES } from '../data/mockData';

interface ContentContextType {
  topics: TopicCategory[];
  lessons: NoteTopic[];
  addTopic: (topic: TopicCategory) => void;
  addLesson: (lesson: NoteTopic) => void;
  deleteLesson: (lessonId: string) => void;
  deleteTopic: (topicId: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [topics, setTopics] = useState<TopicCategory[]>(CATEGORIES);
  const [lessons, setLessons] = useState<NoteTopic[]>(NOTE_TOPICS);

  const addTopic = (topic: TopicCategory) => {
    setTopics(prev => [...prev, topic]);
  };

  const addLesson = (lesson: NoteTopic) => {
    setLessons(prev => [...prev, lesson]);
  };

  const deleteLesson = (lessonId: string) => {
    setLessons(prev => prev.filter(l => l.id !== lessonId));
  };

  const deleteTopic = (topicId: string) => {
    setTopics(prev => prev.filter(t => t.id !== topicId));
    // Also cleanup lessons belonging to that topic?
    // setLessons(prev => prev.filter(l => l.categoryId !== topicId));
  };

  return (
    <ContentContext.Provider value={{ topics, lessons, addTopic, addLesson, deleteLesson, deleteTopic }}>
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
