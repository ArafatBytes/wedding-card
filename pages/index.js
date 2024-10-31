import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from 'react';
import anime from 'animejs';

  function startCelebration() {
    const confetti = require('canvas-confetti');
    const myConfetti = confetti.create(null, {
      resize: true,
      useWorker: true,
      duration: 500,
    });
    myConfetti();
  }

  function movingStyle() {
    anime({
      targets: '.animated-message',
      translateX: [-3, 3],  // Moves up and down
      direction: 'alternate',
      easing: 'easeInOutSine',
      duration: 1000,  // Duration of one cycle (in ms)
      loop: true,  // Keep looping the animation
    });
  }
  
  export default function HomePage() {
    useEffect(() => {
      // This code runs only in the browser after the component has mounted
      startCelebration();
      movingStyle();
    }, []);

  return (
    <div className="min-h-screen min-w-screen bg-cover bg-center bg-gradient-to-b from-orange-400 to-yellow-200 z-0">
      <div className="absolute inset-0" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-md rounded-3xl shadow-lg overflow-hidden">
          <div className="relative aspect-[9/16] w-full">
            <video
              src="/profile.MOV"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="mt-0 mb-0">
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-t to-pink-100 from-blue-100 text-center">
            <h3 className="text-2xl text-orange-500 sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6">Holud Ceremony</h3>
            <div className="p-0.5 rounded-xl relative bg-gradient-to-r from-yellow-400 to-red-400">
              <div className="bg-white rounded-lg p-4">
                <p className="mt-4 mb-4 text-base text-orange-700 sm:text-lg md:text-xl lg:text-xl font-semibold">November 22, 2024</p>
                <p className="mt-4 mb-4 text-base text-orange-700 sm:text-lg md:text-xl lg:text-xl font-semibold">Time - 11:30 AM</p>
                <p className="mt-4 mb-4 text-base text-orange-700 sm:text-lg md:text-xl lg:text-xl font-semibold">Jol Josna, Mirpur Cantonment, Dhaka</p>
                <div className="map-container rounded-xl overflow-hidden border-2 border-red-400">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939455.8596982587!2d90.43159556937425!3d23.106265883831945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c109bf9f2e85%3A0xec0ec96a9cc5607!2sJol%20Josna!5e0!3m2!1sen!2sbd!4v1729525742327!5m2!1sen!2sbd"
                      allowfullscreen="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            <h3 className="text-2xl text-purple-800 sm:text-3xl md:text-4xl lg:text-4xl font-bold mt-6 mb-6">Wedding Ceremony</h3>
            <div className="p-0.5 rounded-xl relative bg-gradient-to-r from-blue-400 to-pink-400">
              <div className="bg-white rounded-lg p-4">
                <p className="mt-4 mb-4 text-base text-purple-700 sm:text-lg md:text-xl lg:text-xl font-semibold">November 26, 2024</p>
                <p className="mt-4 mb-4 text-base text-purple-700 sm:text-lg md:text-xl lg:text-xl font-semibold">Time - 07:00 PM</p>
                <p className="mt-4 mb-4 text-base text-purple-700 sm:text-lg md:text-xl lg:text-xl font-semibold">Shena Kunja, Dhaka Cantonment, Dhaka</p>
                <div className="map-container rounded-xl overflow-hidden border-2 border-pink-400">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4263343007624!2d90.3966292756055!3d23.80343418673778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71beb3fd359%3A0xc8e9002577222d3f!2sSenakunja!5e0!3m2!1sen!2sbd!4v1730387935714!5m2!1sen!2sbd"
                      allowfullscreen="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            <h3 className="text-2xl text-blue-400 sm:text-3xl md:text-4xl lg:text-4xl font-bold mt-6 mb-6">Wedding Ceremony</h3>
            <div className="p-0.5 rounded-xl relative bg-gradient-to-r from-blue-400 to-pink-400">
              <div className="bg-white rounded-lg p-4">
                <p className="mt-4 mb-4 text-base text-pink-400 sm:text-lg md:text-xl lg:text-xl font-semibold">November 29, 2024</p>
                <p className="mt-4 mb-4 text-base text-pink-400 sm:text-lg md:text-xl lg:text-xl font-semibold">Time - 12:00 PM</p>
                <p className="mt-4 mb-4 text-base text-pink-400 sm:text-lg md:text-xl lg:text-xl font-semibold">Pouro Community Center, Jashore</p>
                <div className="map-container rounded-xl overflow-hidden border-2 border-pink-400">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1239552399243!2d89.20256447559028!3d23.165675610972254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff11991a869225%3A0xf02eefcd3b149be5!2sPouro%20Community%20Center%2C%20Jashore!5e0!3m2!1sen!2sbd!4v1730388044277!5m2!1sen!2sbd"
                      allowfullscreen="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            <h4 className="text-purple-800 sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-10">We are beyond excited to invite you to our wedding reception.</h4>
          </div>
        </div>
      </div>
      <footer className="bg-transparent py-4">
        <div className="container mx-auto text-center">
          <p className="text-red-400 text-sm sm:text-xl">
            Tiasha & Shahbaz Wedding Invitation @ 2024
          </p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-30">
        <Button
            size="icon"
            className="text-pink-400 hover:text-blue-500"
            onClick={() => window.location.href = "tel:+8801745582595"}
        >
            <PhoneIcon className="w-8 h-8" />
            <span className="sr-only">Call +88 01745582595</span>
        </Button>
      </div>

      <div className="fixed bottom-4 left-4 z-30">
        <Button
          size="icon"
          className="border-pink-400 border-4 rounded-lg hover:bg-primary-dark text-pink-400 hover:text-blue-500"
          onClick={() => {
            const title = encodeURIComponent("Tiasha and Shahbaz Wedding Reception");
            const location = encodeURIComponent("Dhaka Cantonment Sena Kunja");
            const startDate = "20241116T000000Z"; // UTC time format
            const endDate = "20241116T235900Z"; // UTC time format

            const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&location=${location}&sf=true&output=xml`;

            window.open(calendarUrl, "_blank");
          }}
        >
          <CalendarIcon className="w-8 h-8" />
          <span className="sr-only">Add to Calendar</span>
        </Button>
      </div>
    </div>
  )
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-2.91A19.51 19.51 0 0 1 3 12.81a19.79 19.79 0 0 1-2.91-8.63A2 2 0 0 1 2.05 2h3a2 2 0 0 1 2 1.72c.12.81.31 1.61.55 2.38a2 2 0 0 1-.45 1.94l-1.27 1.27a16 16 0 0 0 6.55 6.55l1.27-1.27a2 2 0 0 1 1.94-.45c.77.24 1.57.43 2.38.55a2 2 0 0 1 1.72 2z" />
    </svg>
  )
}

function QrCodeIcon(props) {
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
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}

function MapIcon(props) {
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
      <path d="M12 2C8.69 2 6 5.13 6 8.5 6 12.43 12 21 12 21s6-8.57 6-12.5C18 5.13 15.31 2 12 2zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
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

