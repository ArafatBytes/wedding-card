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
      rgba(${Math.min(255, 200 + scrollPosition * 0.1)}, ${Math.max(0, 200 - scrollPosition * 0.1)}, 255, 1) 0%,
      rgba(255, 240, 255, 1) 100%)`,
    transition: 'background 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
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

      {/* Enhanced Decorative Floral Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/floral-pattern.png')] opacity-10"></div>
        
        {/* Top Left Corner Enhanced Floral */}
        <svg className="absolute top-0 left-0 w-72 h-72 floral-design" viewBox="0 0 200 200">
          {/* Main vine */}
          <path d="M10,100 Q50,50 100,100 T190,100" fill="none" stroke="rgba(147,51,234,0.3)" strokeWidth="2" />
          <path d="M100,10 Q50,50 100,100 T100,190" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="2" />
          {/* Decorative curves */}
          <path d="M20,80 C40,10 110,10 130,80 S160,150 180,80" fill="none" stroke="rgba(147,51,234,0.2)" strokeWidth="2" />
          {/* Small flowers group */}
          <g className="flower-group">
            <path d="M80,90 C85,85 95,85 100,90 S115,95 120,90 S135,85 140,90" fill="none" stroke="rgba(219,39,119,0.4)" strokeWidth="1.5" />
            <circle cx="100" cy="90" r="3" fill="rgba(147,51,234,0.5)" />
          </g>
          {/* Additional decorative elements */}
          <path d="M40,60 Q60,40 80,60 T120,60" fill="none" stroke="rgba(147,51,234,0.25)" strokeWidth="1.5" className="animate-pulse" />
          <path d="M60,140 Q80,120 100,140 T140,140" fill="none" stroke="rgba(219,39,119,0.25)" strokeWidth="1.5" className="animate-pulse" />
          {/* Flower petals */}
          <g className="flower-petals">
            <path d="M70,70 Q75,65 80,70 T90,70" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="1" />
            <path d="M70,72 Q75,77 80,72 T90,72" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="1" />
            <circle cx="80" cy="71" r="1" fill="rgba(147,51,234,0.5)" />
          </g>
          <g className="flower-petals" transform="translate(40,40)">
            <path d="M70,70 Q75,65 80,70 T90,70" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="1" />
            <path d="M70,72 Q75,77 80,72 T90,72" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="1" />
            <circle cx="80" cy="71" r="1" fill="rgba(147,51,234,0.5)" />
          </g>
        </svg>

        {/* Top Right Corner Enhanced Floral */}
        <svg className="absolute top-0 right-0 w-72 h-72 floral-design" style={{ transform: 'scaleX(-1)' }} viewBox="0 0 200 200">
          {/* Mirror of top left design */}
          <path d="M10,100 Q50,50 100,100 T190,100" fill="none" stroke="rgba(147,51,234,0.3)" strokeWidth="2" />
          <path d="M100,10 Q50,50 100,100 T100,190" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="2" />
          <path d="M20,80 C40,10 110,10 130,80 S160,150 180,80" fill="none" stroke="rgba(147,51,234,0.2)" strokeWidth="2" />
          <g className="flower-group">
            <path d="M80,90 C85,85 95,85 100,90 S115,95 120,90 S135,85 140,90" fill="none" stroke="rgba(219,39,119,0.4)" strokeWidth="1.5" />
            <circle cx="100" cy="90" r="3" fill="rgba(147,51,234,0.5)" />
          </g>
          <path d="M40,60 Q60,40 80,60 T120,60" fill="none" stroke="rgba(147,51,234,0.25)" strokeWidth="1.5" className="animate-pulse" />
          <path d="M60,140 Q80,120 100,140 T140,140" fill="none" stroke="rgba(219,39,119,0.25)" strokeWidth="1.5" className="animate-pulse" />
          <g className="flower-petals">
            <path d="M70,70 Q75,65 80,70 T90,70" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="1" />
            <path d="M70,72 Q75,77 80,72 T90,72" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="1" />
            <circle cx="80" cy="71" r="1" fill="rgba(147,51,234,0.5)" />
          </g>
        </svg>

        {/* Decorative Dividers */}
        <svg className="absolute left-1/2 transform -translate-x-1/2 w-full h-24 floral-design opacity-30" viewBox="0 0 400 50">
          <path d="M0,25 Q100,0 200,25 T400,25" fill="none" stroke="rgba(147,51,234,0.4)" strokeWidth="1" />
          <path d="M0,25 Q100,50 200,25 T400,25" fill="none" stroke="rgba(219,39,119,0.4)" strokeWidth="1" />
          <g className="flower-accents">
            <circle cx="200" cy="25" r="3" fill="rgba(147,51,234,0.5)" />
            <circle cx="100" cy="25" r="2" fill="rgba(219,39,119,0.5)" />
            <circle cx="300" cy="25" r="2" fill="rgba(219,39,119,0.5)" />
          </g>
        </svg>

        {/* Bottom Decorative Frame */}
        <svg className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 floral-design opacity-30" viewBox="0 0 400 100">
          <path d="M0,50 Q100,0 200,50 T400,50" fill="none" stroke="rgba(147,51,234,0.3)" strokeWidth="1.5" />
          <path d="M0,50 Q100,100 200,50 T400,50" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="1.5" />
          <g className="flower-accents">
            <circle cx="200" cy="50" r="4" fill="rgba(147,51,234,0.4)" />
            <circle cx="100" cy="50" r="3" fill="rgba(219,39,119,0.4)" />
            <circle cx="300" cy="50" r="3" fill="rgba(219,39,119,0.4)" />
          </g>
        </svg>

        {/* Side Decorative Elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-96">
          <svg className="w-full h-full floral-design opacity-30" viewBox="0 0 50 200">
            <path d="M25,0 Q0,50 25,100 T25,200" fill="none" stroke="rgba(147,51,234,0.3)" strokeWidth="1.5" />
            <path d="M25,0 Q50,50 25,100 T25,200" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-96">
          <svg className="w-full h-full floral-design opacity-30" viewBox="0 0 50 200">
            <path d="M25,0 Q0,50 25,100 T25,200" fill="none" stroke="rgba(147,51,234,0.3)" strokeWidth="1.5" />
            <path d="M25,0 Q50,50 25,100 T25,200" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Center Medallion */}
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 floral-design opacity-20" viewBox="0 0 200 200">
          <g className="medallion">
            <path d="M100,10 C140,10 140,90 100,90 S60,170 100,170" fill="none" stroke="rgba(147,51,234,0.3)" strokeWidth="2" />
            <path d="M10,100 C10,140 90,140 90,100 S170,60 170,100" fill="none" stroke="rgba(219,39,119,0.3)" strokeWidth="2" />
            <circle cx="100" cy="100" r="5" fill="rgba(147,51,234,0.5)" />
            {/* Additional medallion details */}
            <path d="M70,100 Q100,70 130,100 T70,100" fill="none" stroke="rgba(147,51,234,0.2)" strokeWidth="1.5" />
            <path d="M100,70 Q130,100 100,130 T100,70" fill="none" stroke="rgba(219,39,119,0.2)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

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
          <div className="relative min-h-[600px] bg-white/5 rounded-3xl">
            {mounted && (
              <div className="relative w-full h-full">
                {/* SVG Animation Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl"></div>
                
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

                          <span className="block font-cinzel text-5xl text-purple-800/90 my-6 relative z-10">
                            Alvi Masud Jagoron
                          </span>
                          
                          <span className="block font-playfair text-gray-800 text-3xl my-4 relative z-10">
                            with
                          </span>
                          
                          <span className="block font-cinzel text-5xl text-purple-800/90 my-6 relative z-10">
                            Nahian Samiha
                          </span>
                        </div>
                        
                        <span className="block font-playfair text-gray-800 leading-relaxed text-2xl">
                          Daughter of{" "}
                          <span className="font-semibold text-purple-800/90 font-cormorant text-2xl">Nazmul Arefin & Laila Arzuman Banu</span>
                        </span>
                        
                        <span className="block mt-8 font-dancing text-4xl text-purple-800">
                          You all are cordially invited
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <img src="/floral-corner.svg" className="absolute top-0 left-0 w-24 h-24 opacity-20" />
                  <img src="/floral-corner.svg" className="absolute top-0 right-0 w-24 h-24 opacity-20 transform rotate-90" />
                  <img src="/floral-corner.svg" className="absolute bottom-0 left-0 w-24 h-24 opacity-20 transform -rotate-90" />
                  <img src="/floral-corner.svg" className="absolute bottom-0 right-0 w-24 h-24 opacity-20 transform rotate-180" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Event Details Section */}
        <div className="content-section space-y-8 mb-12 animate-fade-in">
          {/* Reception Card */}
          <div className="relative backdrop-blur-md rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 w-full max-w-md mx-auto overflow-hidden group">
            {/* Elegant gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-purple-50/30 to-pink-50/40 backdrop-blur-md"></div>
            
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-300/20 to-purple-400/20 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Subtle animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shine-effect"></div>

            {/* Content container */}
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center bg-gradient-to-r from-purple-800 to-pink-700 bg-clip-text text-transparent">
                Wedding Reception
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3 hover:transform hover:scale-105 transition-transform duration-300">
                  <CalendarMonthSharp className="text-purple-600" />
                  <span className="text-gray-700 font-medium">28th December, 2024 (Saturday)</span>
                </div>
                <div className="flex items-center justify-center space-x-3 hover:transform hover:scale-105 transition-transform duration-300">
                  <AccessTimeFilledRounded className="text-purple-600" />
                  <span className="text-gray-700 font-medium">1:00 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 hover:transform hover:scale-105 transition-transform duration-300">
                  <LocationOnRounded className="text-purple-600" />
                  <span className="text-gray-700 font-medium">Pouro Community Center, Jashore</span>
                </div>
              </div>

              {/* Maps Link with elegant styling */}
              <div className="mt-6 text-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pouro+Community+Center+Jessore+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-700 hover:text-purple-800 transition-colors duration-300 group"
                >
                  <span className="relative flex items-center space-x-2">
                    <MapRounded className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">View on Google Maps</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section text-center mt-12 animate-fade-in">
          <p className="text-gray-700 italic">We look forward to celebrating with you</p>
        </div>

        {/* Fixed Buttons */}
        <div className="fixed bottom-8 left-8">
          <button
            onClick={addToCalendar}
            className="flex items-center space-x-2 px-6 py-3 rounded-full 
            bg-white/20 backdrop-blur-md border border-white/30 
            text-purple-900 hover:bg-white/30 transition-all duration-300"
          >
            <CalendarMonthSharp />
            <span>Add to Calendar</span>
          </button>
        </div>

        <div className="fixed bottom-8 right-8 call-menu-container">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowCallMenu(!showCallMenu);
            }}
            className="flex items-center space-x-2 px-6 py-3 rounded-full 
            bg-white/20 backdrop-blur-md border border-white/30 
            text-purple-900 hover:bg-white/30 transition-all duration-300"
          >
            <CallRounded />
            <span>Call Us</span>
          </button>

          {/* Popup Menu */}
          {showCallMenu && (
            <div className="absolute bottom-full right-0 mb-2 w-48 rounded-xl overflow-hidden bg-white/90 backdrop-blur-md shadow-xl border border-white/30">
              <a
                href="tel:+8801711326981"
                className="flex items-center space-x-2 px-4 py-3 hover:bg-purple-50 transition-colors"
              >
                <CallRounded className="text-purple-600" />
                <span className="text-purple-900">+880 1711-326981</span>
              </a>
              <a
                href="tel:+8801771741628"
                className="flex items-center space-x-2 px-4 py-3 hover:bg-purple-50 transition-colors"
              >
                <CallRounded className="text-purple-600" />
                <span className="text-purple-900">+880 1771-741628</span>
              </a>
            </div>
          )}
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
