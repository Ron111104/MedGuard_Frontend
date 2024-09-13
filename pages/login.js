import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me"
  const router = useRouter();

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      // Storing email and password in localStorage only if "Remember Me" is checked
      if (rememberMe) {
        localStorage.setItem("userEmail", email); // Storing email in localStorage
      }
      localStorage.setItem("isLoggedIn", true); // Track login status
      alert("Logged in successfully!");
      router.push("/");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Background Image */}
      <Image
        src={isMobile ? "/homebg2.png" : "/homebg1.png"}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-white z-10">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo3.jpg"
            alt="MedGuard Logo"
            height={40}
            width={140}
          />
        </div>
      </div>

      {/* Login Form */}
      <div className="flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-90 px-10 py-2 rounded-lg shadow-lg z-10 w-[90%] md:w-[500px]">
          <h2 className="text-2xl font-bold text-center">Login to MedGuard</h2>

          <form onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="mb-2">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="xyz@gmail.com"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center"
              >
                {showPassword ? <FaEye className="h-5 w-5 text-gray-500 mt-8" /> : <FaEyeSlash className="h-5 w-5 text-gray-500 mt-8" />}
              </button>
            </div>

            {/* Remember Me Checkbox */}
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="form-checkbox text-black"
                />
                <span className="ml-2 text-black">Remember Me</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-900"
            >
              Login
            </button>
          </form>

          <div className="text-left mt-4 mb-4">
            <Link href="/forgot-password" className="text-black hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
