import { motion } from 'motion/react';

export const Marquee = () => {
  return (
    <div className="w-full bg-cyber-bg border-y border-white/5 py-3 overflow-hidden whitespace-nowrap relative z-40">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cyber-bg to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cyber-bg to-transparent z-10" />
      
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block"
      >
        {[...Array(10)].map((_, i) => (
          <span 
            key={i} 
            className="inline-flex items-center mx-8 text-sm font-bold tracking-[0.2em] uppercase"
          >
            <span className="text-white hover:text-cyber-cyan transition-colors cursor-default">
              Welcome To Cyber Security Platform
            </span>
            <span className="ml-8 text-gray-800">ISO-SENTINEL-SYSTEM-ACTIVE</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
