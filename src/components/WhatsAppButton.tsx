import React from 'react';
import { motion } from 'motion/react';

const WhatsAppButton = () => {
  const phoneNumber = '8801752330084';
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse effect */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-40 group-hover:opacity-60 animate-pulse transition-opacity" />
      
      {/* Main button */}
      <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] border border-white/20 backdrop-blur-sm overflow-hidden group-hover:border-white/40 transition-all">
        {/* Subtle glass effect reflection */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 -skew-y-12 transform-gpu" />
        
        {/* WhatsApp Icon SVG */}
        <svg 
          className="w-8 h-8 text-white fill-current relative z-10" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.559 4.191 1.613 6.06L0 24l6.105-1.602a11.82 11.82 0 005.937 1.605h.005c6.637 0 12.032-5.396 12.035-12.032a11.762 11.762 0 00-3.489-8.492" />
        </svg>
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-xl">
          Chat with us
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
