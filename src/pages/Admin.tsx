import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, FileText, Video, Users, Settings, Plus, BarChart3, Database, Shield, Trophy } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Admin = () => {
  const [activeTab, setActiveTab] = useState('Overview');

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
                 { name: 'Video Content', icon: Video },
                 { name: 'User Database', icon: Users },
                 { name: 'Analytics', icon: BarChart3 },
                 { name: 'Settings', icon: Settings },
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

             <div className="mt-20 px-2">
               <div className="p-4 rounded-xl bg-cyber-pink/5 border border-cyber-pink/20">
                 <div className="text-[10px] font-bold text-cyber-pink uppercase tracking-widest mb-2">Security Note</div>
                 <p className="text-[10px] text-gray-500">Root access granted. Session expires in 42m.</p>
               </div>
             </div>
           </div>
        </aside>

        {/* Admin Main Content */}
        <main className="flex-grow space-y-8">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
             <div>
               <h1 className="text-3xl font-bold">{activeTab}</h1>
               <p className="text-gray-400 text-sm">Welcome back, Administrator. System is healthy.</p>
             </div>
             <button className="flex items-center gap-2 px-6 py-3 bg-cyber-cyan text-cyber-bg font-bold rounded-xl glow-cyan hover:scale-[1.02] active:scale-95 transition-all">
               <Plus className="w-4 h-4" /> NEW CONTENT
             </button>
           </div>

           {/* Stats Overview */}
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             {[
               { label: 'Active Learners', val: '12,402', change: '+12%', icon: Users },
               { label: 'Bandwidth Saved', val: '4.2 TB', change: '-4%', icon: Database },
               { label: 'Lab Completion', val: '84.2%', change: '+5%', icon: Trophy },
             ].map((s, i) => (
               <div key={i} className="p-6 rounded-2xl glass border-white/10">
                 <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-white/5 text-gray-400">
                      <s.icon className="w-4 h-4" />
                    </div>
                    <span className={cn("text-[10px] font-bold", s.change.startsWith('+') ? "text-emerald-400" : "text-cyber-pink")}>
                      {s.change}
                    </span>
                 </div>
                 <div className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter">{s.val}</div>
                 <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">{s.label}</div>
               </div>
             ))}
           </div>

           {/* Content List Placeholder */}
           <div className="glass rounded-2xl border-white/10 overflow-hidden">
             <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recent Activity</span>
               <button className="text-cyber-cyan text-[10px] font-bold uppercase tracking-widest">View All</button>
             </div>
             <div className="divide-y divide-white/5">
                {[
                  { type: 'NOTE', title: 'Zero Trust Architecture Deep Dive', date: '2 hours ago', status: 'Published' },
                  { type: 'VIDEO', title: 'MITM Attacks Practical Lab', date: '5 hours ago', status: 'Processing' },
                  { type: 'NOTE', title: 'Advanced OSINT Techniques', date: '1 day ago', status: 'Published' },
                  { type: 'USER', title: 'Bulk Certification Import', date: '2 days ago', status: 'Completed' },
                ].map((item, i) => (
                  <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        item.type === 'NOTE' ? "bg-cyber-cyan shadow-[0_0_8px_rgba(0,242,255,0.5)]" :
                        item.type === 'VIDEO' ? "bg-cyber-pink shadow-[0_0_8px_rgba(255,0,193,0.5)]" : "bg-gray-500"
                      )} />
                      <div>
                        <div className="text-sm font-bold text-white mb-1 uppercase tracking-tighter">{item.title}</div>
                        <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">{item.type} • {item.date}</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-gray-400 border border-white/10">
                      {item.status}
                    </span>
                  </div>
                ))}
             </div>
           </div>
        </main>
      </div>
    </div>
  );
};
