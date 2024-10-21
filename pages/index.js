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
              {/* <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold text-pink-400">Tiasha & Shahbaz</h1>
              <p className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-xl text-blue-300">November 16th, 2024</p> */}
              <div className="mt-6 mb-2">
              {/* <Button
                className="flex items-center justify-center flex-1 bg-fuchsia-600 font-semibold py-2 px-4 rounded-2xl button-shine-effect hover:bg-fuchsia-400"
                onClick={() => (window.location.href = "tel:+8801756839808")}
                >
              <PhoneIcon className="w-5 h-5" />
              </Button>
                <Button
                  variant="secondary"
                  className="flex items-center justify-center flex-1 bg-fuchsia-600 font-semibold py-2 px-4 rounded-2xl button-shine-effect hover:bg-fuchsia-400"
                  onClick={() => (window.location.href = "mailto:example@email.com")}
                >
                  <MailOpenIcon className="w-5 h-5" />
                </Button> */}
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-t to-pink-100 from-blue-100 text-center">
            <h2 className="text-2xl text-blue-400 sm:text-3xl md:text-4xl lg:text-4xl font-semibold">Event Date & Time</h2>
            <p className="mt-4 mb-4 text-base text-pink-400 sm:text-md md:text-xl lg:text-xl font-medium">Nov 22, 2024 - 11:30 AM</p>
            <h2 className="text-2xl text-blue-400 sm:text-3xl md:text-4xl lg:text-4xl font-semibold">Event Location</h2>
            <p className="mt-4 mb-4 text-base text-pink-400 sm:text-md md:text-xl lg:text-xl font-medium">Jol Josna, Mirpur Cantonment, Dhaka</p>
              <div className="map-container rounded-xl overflow-hidden border-4 border-pink-400">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939455.8596982587!2d90.43159556937425!3d23.106265883831945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c109bf9f2e85%3A0xec0ec96a9cc5607!2sJol%20Josna!5e0!3m2!1sen!2sbd!4v1729525742327!5m2!1sen!2sbd"
                    allowfullscreen="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    className="w-full h-full"
                ></iframe>
              </div>
            {/* <div className="bg-muted py-6 px-6 sm:py-8 sm:px-8 md:py-10 md:px-10 lg:py-12 lg:px-12 flex justify-center gap-5">
              <Link href="#" className="text-muted-foreground text-white hover:text-primary" prefetch={false}>
                <FacebookIcon className="w-8 h-8" />
              </Link>
              <Link href="#" className="text-muted-foreground text-white hover:text-primary" prefetch={false}>
                <InstagramIcon className="w-8 h-8" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <footer className="bg-transparent py-4">
        <div className="container mx-auto text-center">
          <p className="text-red-400 text-sm sm:text-base">
            Tiasha & Shahbaz Wedding Invitation @ 2024
          </p>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4 z-30">
        <Button
            size="icon"
            className="border-pink-400 border-4 rounded-lg hover:bg-primary-dark text-pink-400 hover:text-blue-500"
            onClick={() => (window.location.href = "https://tiasha-shahbaz-reception-card.vercel.app/",  "_blank")}
        >
            <QrCodeIcon className="w-8 h-8" />
            <span className="sr-only">Scan QR Code</span>
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

// function AddToCalendarButton() {
//   return (
//     <Button
//       size="icon"
//       className="border-fuchsia-700 border-4 rounded-lg hover:bg-primary-dark text-fuchsia-700 hover:text-white absolute top-4 right-4 z-30"
//       onClick={() => {/* Implement calendar addition logic here */}}
//     >
//       <CalendarIcon className="w-12 h-12" />
//       <span className="sr-only">Add to Calendar</span>
//     </Button>
//   );
// }

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

