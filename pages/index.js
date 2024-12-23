import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { CalendarMonthSharp, AccessTimeFilledRounded, LocationOnRounded, MapRounded, CallRounded } from '@mui/icons-material';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Dynamically import ReactConfetti to avoid SSR issues
const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showCallMenu, setShowCallMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showBlast, setShowBlast] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    [
      'rgb(251, 207, 171)',
      'rgb(219, 154, 109)'
    ]
  );

  // Handle window resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      // Set initial size
      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    // Initialize animations
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        try {
          const anime = (await import('animejs')).default;
          
          // Animation for fade-in elements
          anime({
            targets: '.animate-fade-in',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: (el, i) => i * 200,
            easing: 'easeOutQuad',
            duration: 1000
          });

          // Animation for message
          anime({
            targets: '.animated-message',
            translateX: [-3, 3],
            direction: 'alternate',
            easing: 'easeInOutSine',
            duration: 1000,
            loop: true
          });

          // Animation for couple illustration
          anime({
            targets: '.couple-hearts path',
            scale: [0, 1],
            opacity: [0, 1],
            delay: (el, i) => i * 100,
            duration: 2000,
            easing: 'easeOutElastic(1, .5)',
            loop: true
          });

          // Animation for floral elements
          anime({
            targets: '.floral-design path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 3000,
            delay: (el, i) => i * 250,
            direction: 'alternate',
            loop: true
          });
        } catch (error) {
          console.error('Failed to load animations:', error);
        }
      }
    };

    // Initialize confetti
    if (typeof window !== 'undefined') {
      const confetti = require('canvas-confetti');
      const myConfetti = confetti.create(document.createElement('canvas'), {
        resize: true,
        useWorker: true,
      });

      // Function to start celebration
      window.startCelebration = () => {
        myConfetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      };
    }

    // Handle scroll position for gradient changes
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    initializeAnimations();

    const timer = setTimeout(() => {
      setShowBlast(true);
    }, 1000); // Blast effect duration

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.call-menu-container')) {
        setShowCallMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Calculate gradient colors based on scroll position
  const gradientStyle = {
    background: `linear-gradient(180deg, 
      rgba(254, 205, 211, ${1 - scrollPosition * 0.001}) 0%,
      rgba(230, 210, 250, ${1 - scrollPosition * 0.001}) 100%)`,
    transition: 'background 0.3s ease-out'
  };

  const addToCalendar = () => {
    const title = encodeURIComponent("Jagoron and Samiha Wedding Reception");
    const location = encodeURIComponent("Pouro Community Center, Jashore");
    // For Bangladesh timezone (UTC+6), subtract 6 hours from local time to get UTC
    const startDate = "20241228T070000Z"; // December 28, 2024, 1:00 PM BDT (7:00 AM UTC)
    const endDate = "20241228T100000Z";   // December 28, 2024, 4:00 PM BDT (10:00 AM UTC)
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&location=${location}&sf=true&output=xml`;
    window.open(calendarUrl, "_blank");
  };

  // Only render content after mounting
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Background with gradient */}
      <motion.div 
        className="fixed inset-0"
        style={{
          backgroundColor
        }}
      ></motion.div>
      <AnimatePresence>
        {showBlast && mounted && (
          <>
            <ReactConfetti
              width={windowSize.width}
              height={windowSize.height}
              numberOfPieces={200}
              recycle={false}
              colors={['#C084FC', '#E879F9', '#F0ABFC', '#F5D0FE']}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 bg-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 1, type: "spring" }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: 2,
                  }}
                  className="text-4xl md:text-6xl font-dancing bg-gradient-to-r from-amber-900 to-yellow-900 bg-clip-text text-transparent"
                >
                  Welcome to Our
                  <br />
                  Wedding Reception
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="relative z-20 container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="content-section text-center mb-24 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-serif mb-4 text-gray-800">
            The Wedding Reception of
          </h1>
          <div className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-900 to-yellow-900 bg-clip-text text-transparent">
            Jagoron & Samiha
          </div>
          <p className="text-gray-700 italic mt-4 text-2xl">Join us in celebrating our love story</p>
        </div>

        {/* Animated Illustration Section */}
        <div className="content-section relative w-full max-w-md mx-auto mb-24 animate-fade-in shadow-[0_0_20px_rgba(216,180,254,0.3),0_0_40px_rgba(192,132,252,0.15)] border border-brown-300/50 hover:shadow-[0_0_25px_rgba(216,180,254,0.4),0_0_50px_rgba(192,132,252,0.2)] transition-shadow duration-300 rounded-xl">
          <div className="relative min-h-[600px] overflow-hidden">
            {mounted && (
              <div className="relative w-full h-full overflow-hidden">
                {/* Content Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-brown-500/10 to-brown-500/10 backdrop-blur-sm"></div>
                
                {/* Text Overlay */}
                <div className="relative flex items-center justify-center p-8 mt-8">
                  <div className="w-full max-w-3xl">
                    <div className="relative z-10">
                      <p className="text-center animate-fade-in space-y-8">
                        <span className="block font-dancing text-4xl font-semibold bg-gradient-to-r from-amber-900 to-yellow-900 bg-clip-text text-transparent">
                          With Joy and Gratitude
                        </span>
                        
                        <span className="block font-playfair text-gray-800 leading-relaxed text-2xl">
                          We,{" "}
                          <span className="font-semibold font-cormorant text-2xl bg-gradient-to-r from-amber-900 to-yellow-900 bg-clip-text text-transparent">Sk. Masuduzzaman & Shahanaj Begum</span>,
                          <br />
                          request your blessings and kind company on this momentous day 
                          <br />of the wedding reception of our beloved son,
                        </span>
                        
                        <div className="relative my-8">
                          {/* SVG Wedding Illustration */}
                          <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-20" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Bride */}
                            <g className="bride-animation">
                              <path d="M160,180 C160,150 180,120 180,90 C180,60 160,30 140,0" 
                                    stroke="rgba(165, 42, 42, 0.8)" 
                                    strokeWidth="3" 
                                    fill="none" 
                                    className="animate-pulse" />
                              <circle cx="160" cy="20" r="20" fill="rgba(165, 42, 42, 0.6)" />
                              {/* Dress */}
                              <path d="M140,50 Q160,150 180,180 L140,180 Z" 
                                    fill="rgba(165, 42, 42, 0.4)" />
                            </g>

                            {/* Groom */}
                            <g className="groom-animation">
                              <path d="M240,180 C240,150 220,120 220,90 C220,60 240,30 260,0" 
                                    stroke="rgba(165, 42, 42, 0.8)" 
                                    strokeWidth="3" 
                                    fill="none" 
                                    className="animate-pulse" />
                              <circle cx="240" cy="20" r="20" fill="rgba(165, 42, 42, 0.6)" />
                              {/* Suit */}
                              <path d="M220,50 Q240,150 260,180 L220,180 Z" 
                                    fill="rgba(165, 42, 42, 0.4)" />
                            </g>

                            {/* Hearts */}
                            <g className="hearts-animation">
                              <path d="M200,80 C215,65 235,65 250,80 C265,95 265,115 250,130 L200,180 L150,130 C135,115 135,95 150,80 C165,65 185,65 200,80" 
                                    fill="rgba(165, 42, 42, 0.3)"
                                    className="animate-bounce" />
                            </g>
                          </svg>

                          <span className="block text-5xl bg-gradient-to-r from-amber-900 to-yellow-900 bg-clip-text text-transparent my-6 relative z-10">
                            Alvi Masud Jagoron
                          </span>
                          
                          <span className="block text-gray-800 text-3xl my-4 relative z-10">
                            with
                          </span>
                          
                          <span className="block text-5xl bg-gradient-to-r from-amber-900 to-yellow-900 bg-clip-text text-transparent my-6 relative z-10">
                            Nahian Samiha
                          </span>
                        </div>
                        
                        <div className="mt-8">
                          <span className="block text-4xl bg-gradient-to-r from-amber-900 to-yellow-900 bg-clip-text text-transparent font-greatVibes">
                            You all are cordially invited
                          </span>
                        </div>
                        
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Removed the corner images */}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Event Details Section */}
        <div className="content-section space-y-8 mb-12 animate-fade-in">
          {/* Reception Card */}
          <div className="relative w-full max-w-md mx-auto overflow-hidden bg-gradient-to-b from-brown-500/10 to-brown-500/10 backdrop-blur-sm shadow-[0_0_20px_rgba(216,180,254,0.3),0_0_40px_rgba(192,132,252,0.15)] border border-brown-300/50 hover:shadow-[0_0_25px_rgba(216,180,254,0.4),0_0_50px_rgba(192,132,252,0.2)] transition-shadow duration-300 rounded-xl">
            <div className="relative z-10 p-8">
              <h2 className="font-greatVibes font-extrabold text-3xl md:text-4xl mb-6 text-center bg-gradient-to-r from-amber-950 to-yellow-950 bg-clip-text text-transparent">
                Wedding Reception
              </h2>
              <div className="font-serif space-y-4 text-center">
                <p className="text-xl font-normal">28th December, 2024 (Saturday)</p>
                <p className="text-xl font-normal">1:00 PM</p>
                <p className="text-xl font-normal">
                  +880 1711-326981
                </p>
                <p className="text-xl font-normal">
                  Pouro Community Center, Jashore
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section text-center mt-12 animate-fade-in">
          <p className="text-gray-700 italic text-2xl">We look forward to celebrating with you</p>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 2v4M8 2v4M4 6h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" />
      <path d="M4 10h16M4 14h16M4 18h16" />
    </svg>
  );
}
