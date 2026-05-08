import { motion } from 'motion/react';

export const CyberGrid = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-cyber-bg">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000" 
          alt="" 
          className="w-full h-full object-cover"
          style={{ 
            opacity: 0.18,
            filter: 'grayscale(100%) brightness(0.4) contrast(1.1)' 
          }}
        />
        {/* Overlays for contrast and theme integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg via-transparent to-cyber-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030712_80%)]" />
      </div>

      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyber-cyan/10 to-transparent blur-3xl"
      />
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-cyber-pink/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[150px]" />
    </div>
  );
};
