// pages/_app.js
import "@/styles/globals.css";
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
import { AuthProvider } from "../context/AuthContext";
import { components, formFields, theme } from '../components/customizations';
import { useState, useEffect } from "react";
import Image from "next/image";

Amplify.configure(config);

export default function App({ Component, pageProps }) {
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
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src={isMobile ? "/homebg2.png" : "/homebg1.png"}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute top-0 left-0 z-[-1]" // Set z-index to ensure it's behind other content
      />

      <Authenticator 
        components={components} 
        formFields={formFields}
        theme={theme}
        className="flex items-center justify-center min-h-screen p-6"  // Added padding for consistency
        onSignIn={() => window.location.href = '/'}
      >
        {({ signOut, user }) => (
          <AuthProvider user={user} signOut={signOut}>
            <Component {...pageProps} />
          </AuthProvider>
        )}
      </Authenticator>
    </div>
  );
}
