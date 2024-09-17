import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // For profile dropdown
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const router = useRouter();

  // Check if the user is logged in on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Initial check for mobile view
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    router.push("/login");
  };

  // Toggle profile dropdown for large screens
  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-white z-10">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo3.jpg"
            alt="MedGuard Logo"
            height={40}
            width={140}
          />
        </div>

        {/* Navbar Links */}
        {!isMobile ? (
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-black">Home</Link>
            <Link href="/about" className="text-black">About Us</Link>
            <Link href="/hospital" className="text-black">Hospital</Link>
            <Link href="/contact" className="text-black">Contact</Link>

            {/* Conditional Profile Component */}
            {isLoggedIn ? (
              <div className="relative">
                <button onClick={toggleProfileDropdown} className="flex items-center space-x-2">
                  {/* Profile image */}
                  <img
                    src="https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-260nw-1433809418.jpg"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {/* Dropdown arrow */}
                  <FontAwesomeIcon icon={faChevronDown} className="text-black" size="sm" />
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-lg">
                    <Link href="/profile" className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 active:bg-gray-200 transition-all duration-150 ease-in-out">Profile</Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 active:bg-gray-200 transition-all duration-150 ease-in-out"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link href="/signin" className="text-black">Sign In</Link>
                <Link href="/login" className="text-black">Log In</Link>
              </div>
            )}
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
              src="/logo3.jpg"
              alt="MedGuard Logo"
              width={150}
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

          {/* Conditional rendering based on login status */}
          {isLoggedIn ? (
            <div className="flex justify-center space-x-4 pb-8">
              <button onClick={handleLogout} className="px-8 py-3 bg-black text-white rounded-xl text-xl hover:shadow-lg hover:shadow-gray-300">Logout</button>
            </div>
          ) : (
            <div className="flex justify-center space-x-4 pb-8">
              <Link href="/signin" className="px-8 py-3 bg-gray-200 text-black rounded-xl text-xl hover:shadow-lg hover:shadow-gray-300">Sign In</Link>
              <Link href="/login" className="px-8 py-3 bg-black text-white rounded-xl text-xl hover:shadow-lg hover:shadow-gray-300">Log In</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
