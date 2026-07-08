import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  category?: string;
}
export const ServiceCard = ({
  title,
  description,
  imageSrc,
  category = 'Cleaning Service'
}: ServiceCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full max-w-sm bg-white text-slate-900 rounded-2xl shadow-lg border border-slate-100 overflow-hidden group cursor-pointer"
    >
      <div className="relative -mt-px overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={imageSrc}
          alt={title}
          className="h-[270px] w-full object-cover object-center" 
        />
        
        <div className="absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t pointer-events-none from-white to-transparent"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1 }}
        className="px-6 pb-6 pt-2 relative z-20 bg-white"
      >
        <h3 className="text-xl font-bold mb-3 text-brand-900">{title}</h3>
        <p className="font-medium text-slate-600 border-b border-slate-200 pb-5 text-sm leading-relaxed">
          {description}
        </p>
        <motion.p 
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          className="mt-4 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-900 to-brand-700 text-transparent bg-clip-text"
        >
          {category}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};