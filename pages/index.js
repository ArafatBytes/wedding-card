import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from 'react';
import anime from 'animejs';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';

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
    <div className="min-h-screen min-w-screen bg-cover bg-center bg-gradient-to-b from-[#DBDBFF] to-fuchsia-700 z-0">
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
            <h3 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-6">Holud Ceremony</h3>
            <div className="p-0.5 rounded-xl relative bg-gradient-to-r from-blue-400 to-pink-400">
              <div className="bg-white rounded-lg p-4">
                <p className="mt-4 mb-4 text-base text-black sm:text-lg md:text-xl lg:text-xl font-semibold">November 22, 2024</p>
                <p className="mt-4 mb-4 text-base text-black sm:text-lg md:text-xl lg:text-xl font-semibold">Time - 11:30 AM</p>
                <p className="mt-4 mb-4 text-base text-black sm:text-lg md:text-xl lg:text-xl font-semibold">Jol Josna, Mirpur Cantonment, Dhaka</p>
                <div className="map-container rounded-xl overflow-hidden border-2 border-red-400">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939455.8596982587!2d90.43159556937425!3d23.106265883831945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c109bf9f2e85%3A0xec0ec96a9cc5607!2sJol%20Josna!5e0!3m2!1sen!2sbd!4v1729525742327!5m2!1sen!2sbd"
                      allowfullscreen="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            <h3 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-4xl font-semibold mt-6 mb-6">Wedding Ceremony</h3>
            <div className="p-0.5 rounded-xl relative bg-gradient-to-r from-pink-400 to-blue-400">
              <div className="bg-white rounded-lg p-4">
                <p className="mt-4 mb-4 text-base text-black sm:text-lg md:text-xl lg:text-xl font-semibold">November 26, 2024</p>
                <p className="mt-4 mb-4 text-base text-black sm:text-lg md:text-xl lg:text-xl font-semibold">Time - 07:00 PM</p>
                <p className="mt-4 mb-4 text-base text-black sm:text-lg md:text-xl lg:text-xl font-semibold">Shena Kunja, Dhaka Cantonment, Dhaka</p>
                <div className="map-container rounded-xl overflow-hidden border-2 border-pink-400">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4263343007624!2d90.3966292756055!3d23.80343418673778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71beb3fd359%3A0xc8e9002577222d3f!2sSenakunja!5e0!3m2!1sen!2sbd!4v1730387935714!5m2!1sen!2sbd"
                      allowfullscreen="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            <h3 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-4xl font-semibold mt-6 mb-6">Wedding Reception</h3>
            <div className="p-0.5 rounded-xl relative bg-gradient-to-r from-blue-400 to-pink-400">
              <div className="bg-white rounded-lg p-4">
                <p className="mt-4 mb-4 text-base text-black sm:text-lg md:text-xl lg:text-xl font-semibold">November 29, 2024</p>
                <p className="mt-4 mb-4 text-base text-black sm:text-lg md:text-xl lg:text-xl font-semibold">Time - 12:00 PM</p>
                <p className="mt-4 mb-4 text-base text-black sm:text-lg md:text-xl lg:text-xl font-semibold">Pouro Community Center, Jashore</p>
                <div className="map-container rounded-xl overflow-hidden border-2 border-pink-400">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.1239552399243!2d89.20256447559028!3d23.165675610972254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff11991a869225%3A0xf02eefcd3b149be5!2sPouro%20Community%20Center%2C%20Jashore!5e0!3m2!1sen!2sbd!4v1730388044277!5m2!1sen!2sbd"
                      allowfullscreen="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
            <h4 className="text-black sm:text-xl md:text-2xl lg:text-3xl font-base mt-10">We are beyond excited to invite you to our wedding reception.</h4>
          </div>
        </div>
      </div>
      <footer className="bg-transparent py-4">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm sm:text-xl">
            Tiasha & Shahbaz Wedding Invitation @ 2024
          </p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-30">
        <Button
            size="icon"
            className="text-white hover:text-blue-500"
            onClick={() => window.location.href = "tel:+8801745582595"}
        >
            <CallTwoToneIcon className="w-8 h-8" />
            <span className="sr-only">Call +88 01745582595</span>
        </Button>
      </div>

      <div className="fixed bottom-4 left-4 z-30">
        <Button
          size="icon"
          className="text-white hover:text-blue-500"
          onClick={() => {
            const title = encodeURIComponent("Tiasha and Shahbaz Wedding Reception");
            const location = encodeURIComponent("Pouro Community Center, Jashore");
            const startDate = "20241129T000000Z"; // UTC time format
            const endDate = "20241129T235900Z"; // UTC time format

            const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&location=${location}&sf=true&output=xml`;

            window.open(calendarUrl, "_blank");
          }}
        >
          <CalendarMonthSharpIcon className="w-8 h-8" />
          <span className="sr-only">Add to Calendar</span>
        </Button>
      </div>
    </div>
  )
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
