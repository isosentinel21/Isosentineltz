import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, FileText, Video, Users, Settings, Plus, BarChart3, Database, Shield, Trophy, X, Save, Trash2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useContent } from '@/src/context/ContentContext';

export const Admin = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const { topics, lessons, addTopic, addLesson, deleteLesson, deleteTopic } = useContent();
  const [showAddModal, setShowAddModal] = useState<'topic' | 'lesson' | null>(null);

  // Form states
  const [newTopic, setNewTopic] = useState({ title: '', description: '', icon: 'Shield', color: 'cyber-cyan' });
  const [newLesson, setNewLesson] = useState({ title: '', description: '', content: '', categoryId: '', icon: 'FileText' });

  const handleAddTopic = (e: React.FormEvent) => {
    e.preventDefault();
    const id = newTopic.title.toLowerCase().replace(/\s+/g, '-');
    addTopic({ ...newTopic, id });
    setNewTopic({ title: '', description: '', icon: 'Shield', color: 'cyber-cyan' });
    setShowAddModal(null);
  };

  const handleAddLesson = (e: React.FormEvent) => {
    e.preventDefault();
    const id = newLesson.title.toLowerCase().replace(/\s+/g, '-');
    addLesson({ ...newLesson, id });
    setNewLesson({ title: '', description: '', content: '', categoryId: '', icon: 'FileText' });
    setShowAddModal(null);
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Admin Sidebar */}
        <aside className="lg:col-span-3 lg:w-64">
           <div className="glass rounded-2xl border-white/10 p-6 sticky top-32">
             <div className="flex items-center gap-3 mb-10 px-2">
               <div className="w-8 h-8 rounded-lg bg-cyber-cyan/20 flex items-center justify-center">
                 <Shield className="w-5 h-5 text-cyber-cyan" />
               </div>
               <span className="font-bold tracking-tighter">ADMIN CORE</span>
             </div>

             <nav className="space-y-1">
               {[
                 { name: 'Overview', icon: LayoutDashboard },
                 { name: 'Manage Notes', icon: FileText },
                 { name: 'Categories', icon: Database },
                 { name: 'Video Content', icon: Video },
                 { name: 'Analytics', icon: BarChart3 },
               ].map((item) => (
                 <button
                   key={item.name}
                   onClick={() => setActiveTab(item.name)}
                   className={cn(
                     "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                     activeTab === item.name 
                       ? "bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20" 
                       : "text-gray-400 hover:text-white hover:bg-white/5"
                   )}
                 >
                   <item.icon className="w-4 h-4" />
                   {item.name}
                 </button>
               ))}
             </nav>
           </div>
        </aside>

        {/* Admin Main Content */}
        <main className="flex-grow space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold">{activeTab}</h1>
                <p className="text-gray-400 text-sm">Welcome back, Administrator. System is healthy.</p>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowAddModal('topic')}
                  className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                >
                  <Plus className="w-4 h-4" /> NEW CATEGORY
                </button>
                <button 
                  onClick={() => setShowAddModal('lesson')}
                  className="flex items-center gap-2 px-6 py-3 bg-cyber-cyan text-cyber-bg font-bold rounded-xl glow-cyan hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Plus className="w-4 h-4" /> NEW LESSON
                </button>
              </div>
            </div>

            {activeTab === 'Overview' && (
              <>
                {/* Stats Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: 'Total Categories', val: topics.length, change: '+0', icon: Database },
                    { label: 'Published Lessons', val: lessons.length, change: '+2', icon: FileText },
                    { label: 'Learning Modules', val: topics.length + lessons.length, change: '+12%', icon: Trophy },
                  ].map((s, i) => (
                    <div key={i} className="p-6 rounded-2xl glass border-white/10">
                      <div className="flex items-center justify-between mb-4">
                         <div className="p-2 rounded-lg bg-white/5 text-gray-400">
                           <s.icon className="w-4 h-4" />
                         </div>
                         <span className="text-[10px] font-bold text-emerald-400">
                           {s.change}
                         </span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter">{s.val}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="glass rounded-2xl border-white/10 overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Content Stream</span>
                  </div>
                  <div className="divide-y divide-white/5">
                     {lessons.slice(-5).reverse().map((item, i) => (
                       <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                         <div className="flex items-center gap-4">
                           <div className="w-2 h-2 rounded-full bg-cyber-cyan shadow-[0_0_8px_rgba(0,242,255,0.5)]" />
                           <div>
                             <div className="text-sm font-bold text-white mb-1 uppercase tracking-tighter">{item.title}</div>
                             <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">NOTE • Successfully Indexed</div>
                           </div>
                         </div>
                         <button 
                           onClick={() => deleteLesson(item.id)}
                           className="p-2 text-gray-600 hover:text-cyber-pink transition-colors"
                         >
                           <Trash2 className="w-4 h-4" />
                         </button>
                       </div>
                     ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Manage Notes' && (
              <div className="glass rounded-2xl border-white/10 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                      <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Lesson Title</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {lessons.map((lesson) => (
                      <tr key={lesson.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4">
                          <div className="text-sm font-bold text-white">{lesson.title}</div>
                          <div className="text-[10px] text-gray-500">{lesson.id}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded bg-white/5 text-[10px] text-gray-400 border border-white/10 uppercase">
                            {topics.find(t => t.id === lesson.categoryId)?.title || lesson.categoryId}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => deleteLesson(lesson.id)}
                            className="p-2 text-gray-600 hover:text-cyber-pink transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'Categories' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topics.map((cat) => (
                  <div key={cat.id} className="p-6 rounded-2xl glass border-white/10 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/5 text-cyber-cyan">
                        <Database className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{cat.title}</h4>
                        <p className="text-xs text-gray-500">{lessons.filter(l => l.categoryId === cat.id).length} Lessons</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteTopic(cat.id)}
                      className="p-2 text-gray-600 hover:text-cyber-pink transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
        </main>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(null)}
              className="absolute inset-0 bg-cyber-bg/80 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl glass rounded-3xl border-white/10 shadow-2xl overflow-hidden p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Add New {showAddModal === 'topic' ? 'Category' : 'Lesson'}</h3>
                <button onClick={() => setShowAddModal(null)} className="p-2 text-gray-500 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {showAddModal === 'topic' ? (
                <form onSubmit={handleAddTopic} className="space-y-4">
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Category Title</label>
                      <input 
                        required
                        value={newTopic.title}
                        onChange={(e) => setNewTopic({...newTopic, title: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyber-cyan outline-none transition-all"
                        placeholder="e.g. Malware Analysis"
                      />
                   </div>
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Description</label>
                      <textarea 
                        required
                        value={newTopic.description}
                        onChange={(e) => setNewTopic({...newTopic, description: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyber-cyan outline-none transition-all h-24"
                        placeholder="Brief overview..."
                      />
                   </div>
                   <button type="submit" className="w-full py-4 bg-cyber-cyan text-cyber-bg font-black rounded-xl flex items-center justify-center gap-2 mt-4">
                      <Save className="w-5 h-5" /> SAVE CATEGORY
                   </button>
                </form>
              ) : (
                <form onSubmit={handleAddLesson} className="space-y-4">
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Category</label>
                      <select 
                        required
                        value={newLesson.categoryId}
                        onChange={(e) => setNewLesson({...newLesson, categoryId: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyber-cyan outline-none transition-all"
                      >
                         <option value="" className="bg-cyber-bg">Select Category</option>
                         {topics.map(t => <option key={t.id} value={t.id} className="bg-cyber-bg">{t.title}</option>)}
                      </select>
                   </div>
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Lesson Title</label>
                      <input 
                        required
                        value={newLesson.title}
                        onChange={(e) => setNewLesson({...newLesson, title: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyber-cyan outline-none transition-all"
                        placeholder="e.g. Analyzing Ransomware"
                      />
                   </div>
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Description (Snippet)</label>
                      <input 
                        required
                        value={newLesson.description}
                        onChange={(e) => setNewLesson({...newLesson, description: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyber-cyan outline-none transition-all"
                        placeholder="Brief summary..."
                      />
                   </div>
                   <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Content (Markdown)</label>
                      <textarea 
                        required
                        value={newLesson.content}
                        onChange={(e) => setNewLesson({...newLesson, content: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyber-cyan outline-none transition-all h-32 font-mono text-xs"
                        placeholder="# Your markdown content here..."
                      />
                   </div>
                   <button type="submit" className="w-full py-4 bg-cyber-cyan text-cyber-bg font-black rounded-xl flex items-center justify-center gap-2 mt-4">
                      <Save className="w-5 h-5" /> PUBLISH LESSON
                   </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

