import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password && password === confirmPassword) {
      // Storing email and password in localStorage for now (unsafe, just for demo)
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      alert("Signed in successfully!");
      router.push("/");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      alert("Please fill in all fields.");
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

      {/* Sign In Form */}
      <div className="flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-90 px-10 py-2 rounded-lg shadow-lg z-10 w-[90%] md:w-[500px]">
          <h2 className="text-2xl font-bold text-center">Sign In to MedGuard</h2>

          <form onSubmit={handleSignIn}>
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
            <div className="relative mb-4">
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

            {/* Confirm Password Field */}
            <div className="relative mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-2 flex items-center"
              >
                {showConfirmPassword ? <FaEye className="h-5 w-5 text-gray-500 mt-8" /> : <FaEyeSlash className="h-5 w-5 mt-8 text-gray-500" />}
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-black text-white mb-5 font-bold py-2 px-4 rounded-md hover:bg-gray-900"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
