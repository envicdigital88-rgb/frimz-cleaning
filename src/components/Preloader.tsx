import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Spinning outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 w-40 h-40 border-4 border-gold/30 border-t-gold rounded-full"
              />
              
              {/* Logo in center */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center justify-center w-40 h-40"
              >
                <img
                  src="/logo.png"
                  alt="Frimz Cleaning"
                  className="w-32 h-32 object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Frimz Cleaning
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white/80 text-sm tracking-wider uppercase"
            >
              Loading...
            </motion.p>

            {/* Animated dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-gold rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
