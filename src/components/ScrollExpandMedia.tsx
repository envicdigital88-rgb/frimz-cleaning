import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
  customFirstWord?: ReactNode;
}
const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
  customFirstWord
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const [allowBypass, setAllowBypass] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);
  
  // Listen for hash changes (navigation clicks)
  useEffect(() => {
    const handleBypassScroll = () => {
      // User clicked a navigation link, bypass the scroll animation
      setMediaFullyExpanded(true);
      setShowContent(true);
      setScrollProgress(1);
      setAllowBypass(true);
    };
    
    const handleCollapseScroll = () => {
      // User clicked Home, trigger collapse animation
      setMediaFullyExpanded(false);
      setShowContent(false);
      setScrollProgress(0);
      setAllowBypass(false);
    };
    
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash !== '#') {
        handleBypassScroll();
      }
    };
    
    window.addEventListener('bypassHeroScroll', handleBypassScroll);
    window.addEventListener('collapseHeroScroll', handleCollapseScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('bypassHeroScroll', handleBypassScroll);
      window.removeEventListener('collapseHeroScroll', handleCollapseScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if we're at the top of the page and scrolling up
      if (window.scrollY <= 10 && e.deltaY < 0 && mediaFullyExpanded) {
        e.preventDefault();
        // Start collapsing animation
        setMediaFullyExpanded(false);
        setAllowBypass(false);
        setScrollProgress(0.99); // Start near full to begin reverse animation
        return;
      }
      
      if (allowBypass) return; // Allow normal scrolling if bypassed and not at top
      
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
          setAllowBypass(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      
      // Check if we're at the top and pulling down
      if (window.scrollY <= 10 && deltaY < -20 && mediaFullyExpanded) {
        e.preventDefault();
        setMediaFullyExpanded(false);
        setAllowBypass(false);
        setScrollProgress(0.99);
        setTouchStartY(touchY);
        return;
      }
      
      if (allowBypass) return; // Allow normal scrolling if bypassed and not at top
      
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
          setAllowBypass(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };
    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };
    const handleScroll = (): void => {
      if (!mediaFullyExpanded && !allowBypass) {
        window.scrollTo(0, 0);
      }
      
      // If user scrolled down past the hero, set bypass
      if (window.scrollY > 100 && !allowBypass) {
        setMediaFullyExpanded(true);
        setShowContent(true);
        setScrollProgress(1);
        setAllowBypass(true);
      }
    };
    window.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener(
      'touchstart',
      handleTouchStart as unknown as EventListener,
      {
        passive: false
      }
    );
    window.addEventListener(
      'touchmove',
      handleTouchMove as unknown as EventListener,
      {
        passive: false
      }
    );
    window.addEventListener('touchend', handleTouchEnd as EventListener);
    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY, allowBypass]);
  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);
  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';
  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1 - scrollProgress
            }}
            transition={{
              duration: 0.1
            }}>
            
            <img
              src={bgImageSrc}
              alt="Background"
              className="w-screen h-screen"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }} />
            
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)'
                }}>
                
                {mediaType === 'video' ?
                mediaSrc.includes('youtube.com') ?
                <div className="relative w-full h-full pointer-events-none">
                      <iframe
                    width="100%"
                    height="100%"
                    src={
                    mediaSrc.includes('embed') ?
                    mediaSrc + (
                    mediaSrc.includes('?') ? '&' : '?') +
                    'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1' :
                    mediaSrc.replace('watch?v=', 'embed/') +
                    '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                    mediaSrc.split('v=')[1]
                    }
                    className="w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
                  
                      <div
                    className="absolute inset-0 z-10"
                    style={{
                      pointerEvents: 'none'
                    }}>
                  </div>
                      <motion.div
                    className="absolute inset-0 bg-black/30 rounded-xl"
                    initial={{
                      opacity: 0.7
                    }}
                    animate={{
                      opacity: 0.5 - scrollProgress * 0.3
                    }}
                    transition={{
                      duration: 0.2
                    }} />
                  
                    </div> :

                <div className="relative w-full h-full pointer-events-none">
                      <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover rounded-xl"
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback />
                  
                      <div
                    className="absolute inset-0 z-10"
                    style={{
                      pointerEvents: 'none'
                    }}>
                  </div>
                      <motion.div
                    className="absolute inset-0 bg-black/30 rounded-xl"
                    initial={{
                      opacity: 0.7
                    }}
                    animate={{
                      opacity: 0.5 - scrollProgress * 0.3
                    }}
                    transition={{
                      duration: 0.2
                    }} />
                  
                    </div> :


                <div className="relative w-full h-full">
                    <img
                    src={mediaSrc}
                    alt={title || 'Media content'}
                    className="w-full h-full object-cover rounded-xl" />
                  
                    <motion.div
                    className="absolute inset-0 bg-black/50 rounded-xl"
                    initial={{
                      opacity: 0.7
                    }}
                    animate={{
                      opacity: 0.7 - scrollProgress * 0.3
                    }}
                    transition={{
                      duration: 0.2
                    }} />
                  
                  </div>
                }

                <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                  {date &&
                  <p
                    className="text-2xl text-gold"
                    style={{
                      transform: `translateX(-${textTranslateX}vw)`
                    }}>
                    
                      {date}
                    </p>
                  }
                  {scrollToExpand &&
                  <p
                    className="text-gold font-medium text-center"
                    style={{
                      transform: `translateX(${textTranslateX}vw)`
                    }}>
                    
                      {scrollToExpand}
                    </p>
                  }
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'}`}>
                
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-white transition-none"
                  style={{
                    transform: `translateX(-${textTranslateX}vw)`
                  }}>
                  
                  {customFirstWord || firstWord}
                </motion.h2>
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-gold-light transition-none"
                  style={{
                    transform: `translateX(${textTranslateX}vw)`
                  }}>
                  
                  {restOfTitle}
                </motion.h2>
                
                {/* Text that appears after animation completes - highly visible */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: mediaFullyExpanded ? 1 : 0,
                    y: mediaFullyExpanded ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3
                  }}
                  className="mt-12 px-8 py-4 bg-brand-900/90 backdrop-blur-sm rounded-full border-2 border-gold shadow-2xl">
                  <p className="text-gold font-bold text-xl md:text-2xl lg:text-3xl tracking-wide animate-pulse">
                    Scroll to know more about us
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.section
              className="flex flex-col w-full px-4 md:px-8 lg:px-16 py-10 lg:py-20 bg-white"
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: showContent ? 1 : 0
              }}
              transition={{
                duration: 0.7
              }}>
              
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>);

};
export default ScrollExpandMedia;