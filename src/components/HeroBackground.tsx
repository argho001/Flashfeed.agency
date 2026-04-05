import React from 'react';
import { motion } from 'motion/react';

interface HeroBackgroundProps {
  seed?: string;
  opacity?: number;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ seed = 'data-stream-fiber-optic', opacity = 0.4 }) => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Futuristic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} 
      />
      
      {/* Blurred Futuristic Image */}
      <div className="absolute inset-0">
        <img
          src={`https://picsum.photos/seed/${seed}/1920/1080`}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover mix-blend-screen"
          style={{ opacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
      </div>

      {/* Animated Glows */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[150px] rounded-full"
      />
    </div>
  );
};

export default HeroBackground;
