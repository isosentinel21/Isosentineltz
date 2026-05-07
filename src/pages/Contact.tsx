import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, MapPin, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Contact = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="max-w-4xl mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Command Center</h1>
        <p className="text-gray-400 text-lg">
          Have questions or want to collaborate? Reach out to our team of security experts. 
          We're here to help you navigate the complex world of cybersecurity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          {[
            { icon: MessageCircle, label: 'WhatsApp', value: '+255 626 425 950', color: 'text-[#25D366]', link: 'https://wa.me/255626425950' },
            { icon: MapPin, label: 'Headquarters', value: 'Arusha, Tanzania', color: 'text-cyber-pink' },
          ].map((item, i) => (
            <motion.a 
              key={i}
              href={(item as any).link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "flex items-start gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all",
                (item as any).link && "cursor-pointer hover:bg-white/[0.05]"
              )}
            >
              <div className={`p-4 rounded-xl bg-white/5 ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                <div className="text-lg font-bold text-white">{item.value}</div>
              </div>
            </motion.a>
          ))}

          <div className="pt-8">
             <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Social Networks</h4>
             <div className="flex gap-4">
                {[
                  { icon: MessageCircle, url: 'https://wa.me/255626425950', color: 'hover:text-[#25D366] hover:border-[#25D366] text-[#25D366]/70' },
                  { icon: Instagram, url: 'https://www.instagram.com/deogratius_malingula?igsh=YmZ5MmFlaHdwOW1m', color: 'hover:text-[#E4405F] hover:border-[#E4405F] text-[#E4405F]/70' },
                  { icon: Facebook, url: 'https://www.facebook.com/share/14fbsZXc6i1/', color: 'hover:text-[#1877F2] hover:border-[#1877F2] text-[#1877F2]/70' },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center glass border-white/10 transition-all",
                      social.color
                    )}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 md:p-10 rounded-3xl border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/5 rounded-full blur-3xl" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full glass border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyber-cyan/50 focus:outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Source</label>
                  <input type="email" placeholder="john@example.com" className="w-full glass border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyber-cyan/50 focus:outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full glass border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyber-cyan/50 focus:outline-none transition-all appearance-none">
                  <option className="bg-cyber-bg">General Inquiry</option>
                  <option className="bg-cyber-bg">Course Support</option>
                  <option className="bg-cyber-bg">Partnership</option>
                  <option className="bg-cyber-bg">Security Report</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Encrypted Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full glass border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyber-cyan/50 focus:outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full py-5 bg-cyber-cyan text-cyber-bg font-bold rounded-xl glow-cyan hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group">
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                ESTABLISH CONNECTION
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-32">
        <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tighter">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { q: 'Is the platform free for beginners?', a: 'Yes, our foundation modules and select labs are completely free. Premium labs require a subscription.' },
            { q: 'Do you offer certifications?', a: 'We provide Certificates of Completion for all full modules which can be verified on our blockchain registry.' },
            { q: 'Can I suggest a new course topic?', a: 'Absolutely! Use the contact form above and select "General Inquiry" to suggest new content.' },
            { q: 'Are the labs safe to run?', a: 'All our lab environments are sandboxed. We follow ethical hacking guidelines and safety protocols.' },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl glass border-white/10">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-pink glow-pink" />
                {item.q}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
