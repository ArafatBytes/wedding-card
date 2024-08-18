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
    <div className="min-h-screen min-w-screen bg-cover bg-center bg-gradient-to-b from-fuchsia-700 to-fuchsia-200 z-0">
      <div className="absolute inset-0" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-md rounded-3xl shadow-lg overflow-hidden">
          <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
            <img
              src="/couple-photo.jpeg"
              width={800}
              height={800}
              alt="Wedding Couple"
              className="object-cover w-full h-full"
              style={{ aspectRatio: "800/800", borderRadius: "5%", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fuchsia-300 rounded-b-2xl"/>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-b from-transparent to-fuchsia-400">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-200">Tiasha & Shahbaz</h1>
              <p className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-200">November 16th, 2024</p>
              <div className="mt-6 flex gap-4">
              <Button
                className="flex items-center justify-center flex-1 bg-fuchsia-600 font-semibold text-yellow-300 py-2 px-4 rounded-2xl button-shine-effect hover:bg-fuchsia-400"
                onClick={() => (window.location.href = "tel:+8801756839808")}
                >
              <PhoneIcon className="w-5 h-5 mr-2" />
                Call Us
              </Button>
                <Button
                  variant="secondary"
                  className="flex items-center justify-center flex-1 bg-fuchsia-600 font-semibold text-yellow-300 py-2 px-4 rounded-2xl button-shine-effect hover:bg-fuchsia-400"
                  onClick={() => (window.location.href = "mailto:example@email.com")}
                >
                  <MailOpenIcon className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 inner-border card-shine-effect">
            <h2 className="text-2xl text-center text-fuchsia-600 sm:text-3xl md:text-4xl lg:text-5xl font-semibold animated-message">Our Message</h2>
            <p className="mt-4 text-base bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-orange-500 sm:text-xl md:text-xl lg:text-2xl text-justify animated-message font-cursive">As we step into this new chapter of our lives together, we find ourselves surrounded by the love and warmth of those who mean the most to us. Your presence in our journey has always been a blessing, and we would be honored to have you join us as we celebrate our union.</p>
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-fuchsia-500 mt-4 text-base sm:text-xl md:text-xl lg:text-2xl text-justify animated-message font-cursive">Please join us for our wedding reception as we celebrate our love, laughter, and the beginning of our forever.</p>
          </div>
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-t from-fuchsia-700 to-fuchsia-50">
            <h2 className="text-2xl text-fuchsia-800 sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Event Date & Time</h2>
            <p className="mt-4 mb-4 text-base text-fuchsia-700 sm:text-md md:text-xl lg:text-2xl">Nov 16, 2024 - 08:00 PM</p>
            <h2 className="text-2xl text-fuchsia-800 sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Event Location</h2>
            <p className="mt-4 mb-4 text-base text-fuchsia-700 sm:text-md md:text-xl lg:text-2xl">Senakunja, Dhaka Cantonment, Dhaka</p>
              <div className="map-container rounded-xl overflow-hidden border-4 border-yellow-300">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.426334298274!2d90.39663464019388!3d23.80343418682632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71beb3fd359%3A0xc8e9002577222d3f!2sSenakunja!5e0!3m2!1sen!2sbd!4v1724014394082!5m2!1sen!2sbd"
                    allowfullscreen="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    className="w-full h-full"
                    ></iframe>
              </div>
            <div className="mt-8">
              <h2 className="text-fuchsia-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Videos</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="video-container aspect-video rounded-xl overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    className="w-full h-full"
                ></iframe>
                </div>
                <div className="video-container aspect-video rounded-xl overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    className="w-full h-full"
                ></iframe>
                </div>
                <div className="video-container aspect-video rounded-xl overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    className="w-full h-full"
                ></iframe>
                </div>
                <div className="video-container aspect-video rounded-xl overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    className="w-full h-full"
                ></iframe>
                </div>
            </div>
            </div>
            <div className="bg-muted py-6 px-6 sm:py-8 sm:px-8 md:py-10 md:px-10 lg:py-12 lg:px-12 flex justify-center gap-5">
            <Link href="#" className="text-muted-foreground text-yellow-300 hover:text-primary" prefetch={false}>
              <FacebookIcon className="w-8 h-8" />
            </Link>
            <Link href="#" className="text-muted-foreground text-yellow-300 hover:text-primary" prefetch={false}>
              <InstagramIcon className="w-8 h-8" />
            </Link>
          </div>
          </div>
        </div>
      </div>
      <footer className="bg-transparent py-4">
        <div className="container mx-auto text-center">
          <p className="text-fuchsia-700 text-sm sm:text-base">
            Tiasha & Shahbaz Reception Card @ 2024
          </p>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4 z-30">
        <Button
            size="icon"
            className="border-fuchsia-800 border-4 rounded-lg hover:bg-primary-dark text-fuchsia-800 hover:text-yellow-500"
            onClick={() => (window.location.href = "https://tiasha-shahbaz-reception-card.vercel.app/",  "_blank")}
        >
            <QrCodeIcon className="w-8 h-8" />
            <span className="sr-only">Scan QR Code</span>
        </Button>
      </div>

      <div className="fixed bottom-4 left-4 z-30">
        <Button
          size="icon"
          className="border-fuchsia-800 border-4 rounded-lg hover:bg-primary-dark text-fuchsia-800 hover:text-yellow-500"
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

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MailOpenIcon(props) {
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
      <path d="M2 8l10 6 10-6" />
      <path d="M22 8v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8l10 6z" />
      <path d="M22 8L12 2 2 8" />
    </svg>
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