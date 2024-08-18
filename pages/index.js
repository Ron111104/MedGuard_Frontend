import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={isMobile ? "/homebg2.png" : "/homebg1.png"}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-white z-10">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="MedGuard Logo"
            width={120}  // Adjusted logo size
            height={40}
          />
        </div>

        {/* Navbar Links */}
        {!isMobile ? (
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black">Home</Link>
            <Link href="/about" className="text-black">About Us</Link>
            <Link href="/hospital" className="text-black">Hospital</Link>
            <Link href="/contact" className="text-black">Contact</Link>
            <div className="flex space-x-4">
              <Link href="/signin" className="text-black">Sign In</Link>
              <Link href="/login" className="text-black">Log In</Link>
            </div>
          </div>
        ) : (
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-black" size="lg" />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && isMobile && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-white flex flex-col justify-between z-20"
          style={{
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '0px 0px 20px 20px',
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 bg-black rounded-full px-2 py-1"
          >
            <FontAwesomeIcon icon={faTimes} className="text-white" size="lg" />
          </button>
          
          {/* Logo */}
          <div className="flex justify-start items-center pl-6 py-4">
            <Image
              src="/logo.png"
              alt="MedGuard Logo"
              width={150} // Slightly increased logo size for better visibility
              height={50}
            />
          </div>

          {/* Menu Links */}
          <div className="text-center flex flex-col items-center space-y-6">
            <Link href="/" className="w-full text-2xl text-black font-semibold hover:bg-gray-100 active:bg-gray-300 py-4">Home</Link>
            <Link href="/about" className="w-full text-2xl text-black font-semibold hover:bg-gray-100 active:bg-gray-300 py-4">About Us</Link>
            <Link href="/hospital" className="w-full text-2xl text-black font-semibold hover:bg-gray-100 active:bg-gray-300 py-4">Hospital</Link>
            <Link href="/contact" className="w-full text-2xl text-black font-semibold hover:bg-gray-100 active:bg-gray-300 py-4">Contact</Link>
          </div>

          {/* Sign In and Log In Buttons */}
          <div className="flex justify-center space-x-4 pb-8">
            <Link href="/signin" className="px-8 py-3 bg-gray-200 text-black rounded-xl text-xl hover:shadow-lg hover:shadow-gray-300">Sign In</Link>
            <Link href="/login" className="px-8 py-3 bg-black text-white rounded-xl text-xl hover:shadow-lg hover:shadow-gray-300">Log In</Link>
          </div>
        </div>
      )}
    </div>
  );
}
