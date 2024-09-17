// pages/index.js (or your Home component file)
import Navbar from "../components/Navbar"; // Adjust the path based on your folder structure
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={isMobile ? "/homebg2.png" : "/homebg1.png"} // Conditional background rendering
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      {/* Navbar */}
      <Navbar />

      {/* Rest of your home page content */}
    </div>
  );
}
