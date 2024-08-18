import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from 'react';


function startCelebration() {
    const confetti = require('canvas-confetti');
    const myConfetti = confetti.create(null, {
      resize: true,
      useWorker: true,
      duration: 500,
    });
    myConfetti();
  }
  
  export default function HomePage() {
    useEffect(() => {
      // This code runs only in the browser after the component has mounted
      startCelebration();
    }, []);

  return (
    <div className="min-h-screen bg-[url('/background.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-950 to-fuchsia/200 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-md rounded-3xl shadow-lg overflow-hidden">
          <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
            <img
              src="/couple-photo.jpeg"
              width={800}
              height={800}
              alt="Wedding Couple"
              className="object-cover w-full h-full"
              style={{ aspectRatio: "800/800", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-600" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-b from-transparent to-black/50">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-fuchsia-200">tiasha & Shahbaz</h1>
              <p className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-fuchsia-200">November xx, 2024</p>
              <div className="mt-6 flex gap-4">
              <Button
                className="flex items-center justify-center flex-1 bg-fuchsia-700 text-white py-2 px-4 rounded-full hover:bg-fuchsia-400 transition-colors"
                onClick={() => (window.location.href = "tel:+8801756839808")}
                >
              <PhoneIcon className="w-5 h-5 mr-2" />
                Call Us
              </Button>
                <Button
                  variant="secondary"
                  className="flex items-center justify-center flex-1 bg-fuchsia-700 text-white py-2 px-4 rounded-full hover:bg-fuchsia-400 transition-colors"
                  onClick={() => (window.location.href = "mailto:example@email.com")}
                >
                  <MailOpenIcon className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-white bg-gradient-to-t from-transparent to-fuchsia-950">
            <h2 className="text-2xl text-fuchsia-200 sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Event Location</h2>
            <p className="mt-4 text-base text-fuchsia-100 sm:text-md md:text-xl lg:text-2xl">123 Main Street, Anytown USA</p>
            <div className="mt-8">
              <h2 className="text-fuchsia-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Videos</h2>
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
          </div>
          <div className="bg-muted py-6 px-6 sm:py-8 sm:px-8 md:py-10 md:px-10 lg:py-12 lg:px-12 flex justify-center gap-4 bg-white">
            <Link href="#" className="text-muted-foreground text-fuchsia-600 hover:text-primary" prefetch={false}>
              <FacebookIcon className="w-8 h-8" />
            </Link>
            <Link href="#" className="text-muted-foreground text-fuchsia-600 hover:text-primary" prefetch={false}>
              <InstagramIcon className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-30">
        <Button
            size="icon"
            className="bg-fuchsia-800 rounded-lg hover:bg-primary-dark text-white hover:text-white"
            onClick={() => (window.location.href = "https://tiasha-shahbaz-reception-card.vercel.app/")}
        >
            <QrCodeIcon className="w-12 h-12" />
            <span className="sr-only">Scan QR Code</span>
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
      <rect width="7" height="7" x="2" y="2" rx="1" ry="1" />
      <rect width="7" height="7" x="15" y="2" rx="1" ry="1" />
      <rect width="7" height="7" x="15" y="15" rx="1" ry="1" />
      <path d="M7 7l3 3m0 4l-3 3" />
      <path d="M14 14l3 3m0-4l-3-3" />
    </svg>
  )
}
