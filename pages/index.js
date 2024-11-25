import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { CalendarMonthSharp, AccessTimeFilledRounded, LocationOnRounded, MapRounded, CallRounded } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamically import ReactConfetti to avoid SSR issues
const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showCallMenu, setShowCallMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showBlast, setShowBlast] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

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
      setShowBlast(false);
    }, 3000); // Blast effect duration

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
    <div className="min-h-screen overflow-hidden" style={gradientStyle}>
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
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: 2,
                  }}
                  className="text-4xl md:text-6xl font-dancing text-purple-600"
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
          <div className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Jagoron & Samiha
          </div>
          <p className="text-gray-700 italic mt-4">Join us in celebrating our love story</p>
        </div>

        {/* Animated Illustration Section */}
        <div className="content-section relative w-full max-w-md mx-auto mb-24 animate-fade-in">
          <div className="relative min-h-[600px] rounded-[2rem] overflow-hidden">
            {mounted && (
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                {/* Content Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-[2rem]"></div>
                
                {/* Text Overlay */}
                <div className="relative flex items-center justify-center p-8 mt-8">
                  <div className="w-full max-w-3xl">
                    <div className="relative z-10">
                      <p className="text-center animate-fade-in space-y-8">
                        <span className="block font-dancing text-4xl text-purple-800">
                          With Joy and Gratitude
                        </span>
                        
                        <span className="block font-playfair text-gray-800 leading-relaxed text-2xl">
                          We,{" "}
                          <span className="font-semibold text-purple-800/90 font-cormorant text-2xl">Sk. Masuduzzaman & Shahanaj Begum</span>,
                          <br />
                          request your blessings and kind company on this momentous day 
                          <br />of the wedding reception of our beloved son,
                        </span>
                        
                        {/* Names section with background illustration */}
                        <div className="relative">
                          {/* SVG Wedding Illustration */}
                          <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-20" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Bride */}
                            <g className="bride-animation">
                              <path d="M160,180 C160,150 180,120 180,90 C180,60 160,30 140,0" 
                                    stroke="rgba(147, 51, 234, 0.8)" 
                                    strokeWidth="3" 
                                    fill="none" 
                                    className="animate-pulse" />
                              <circle cx="160" cy="20" r="20" fill="rgba(147, 51, 234, 0.6)" />
                              {/* Dress */}
                              <path d="M140,50 Q160,150 180,180 L140,180 Z" 
                                    fill="rgba(147, 51, 234, 0.4)" />
                            </g>

                            {/* Groom */}
                            <g className="groom-animation">
                              <path d="M240,180 C240,150 220,120 220,90 C220,60 240,30 260,0" 
                                    stroke="rgba(147, 51, 234, 0.8)" 
                                    strokeWidth="3" 
                                    fill="none" 
                                    className="animate-pulse" />
                              <circle cx="240" cy="20" r="20" fill="rgba(147, 51, 234, 0.6)" />
                              {/* Suit */}
                              <path d="M220,50 Q240,150 260,180 L220,180 Z" 
                                    fill="rgba(147, 51, 234, 0.4)" />
                            </g>

                            {/* Hearts */}
                            <g className="hearts-animation">
                              <path d="M200,80 C215,65 235,65 250,80 C265,95 265,115 250,130 L200,180 L150,130 C135,115 135,95 150,80 C165,65 185,65 200,80" 
                                    fill="rgba(147, 51, 234, 0.3)"
                                    className="animate-bounce" />
                            </g>
                          </svg>

                          <span className="block text-5xl text-purple-800/90 my-6 relative z-10">
                            Alvi Masud Jagoron
                          </span>
                          
                          <span className="block text-gray-800 text-3xl my-4 relative z-10">
                            with
                          </span>
                          
                          <span className="block text-5xl text-purple-800/90 my-6 relative z-10">
                            Nahian Samiha
                          </span>
                        </div>
                        
                        <div className="mt-8">
                          <span className="block text-4xl text-purple-800 font-greatVibes">
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
          <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-b from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
            {/* Content container */}
            <div className="relative z-10 p-8">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-gray-800 text-center bg-gradient-to-r from-purple-800 to-pink-700 bg-clip-text text-transparent">
                Wedding Reception
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <CalendarMonthSharp className="text-purple-600" />
                  <span className="text-gray-700 font-medium">28th December, 2024 (Saturday)</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <AccessTimeFilledRounded className="text-purple-600" />
                  <span className="text-gray-700 font-medium">1:00 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <LocationOnRounded className="text-purple-600" />
                  <span className="text-gray-700 font-medium">Pouro Community Center, Jashore</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <CallRounded className="text-purple-600" />
                  <span className="text-gray-700 font-medium">+880 1711-326981</span>
                </div>
              </div>

              {/* Maps Link with elegant styling */}
              <div className="mt-6 text-center">
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Pouro+Community+Center+Jessore+Bangladesh"
                  target="_blank"
                  className="inline-flex items-center space-x-2 text-purple-700 hover:text-purple-800 transition-colors duration-300 group"
                >
                  <span className="relative flex items-center space-x-2">
                    <MapRounded className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">View on Google Maps</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section text-center mt-12 animate-fade-in">
          <p className="text-gray-700 italic">We look forward to celebrating with you</p>
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
