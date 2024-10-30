// Custom components for header, footer, sign-in, sign-up
import { useAuthenticator } from '@aws-amplify/ui-react';
import Image from 'next/image';

export const components = {
  Header() {
    return (
      <div className="w-full p-6 flex justify-center items-center bg-white shadow-md">
        <Image
          src="/logo3.jpg"
          alt="MedGuard Logo"
          height={40}
          width={140}
          className="inline-block"
        />
      </div>
    );
  },
  Footer() {
    return (
      <div className="text-center p-6 text-gray-600 text-sm">
        <span>&copy; 2024 MedGuard, All Rights Reserved</span>
      </div>
    );
  },
  SignIn: {
    Header() {
      return <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>;
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();
      return (
        <div className="text-center mt-6">
          <button 
            onClick={toForgotPassword} 
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Forgot Password?
          </button>
        </div>
      );
    },
  },
  SignUp: {
    Header() {
      return <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>;
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <div className="text-center mt-6">
          <button 
            onClick={toSignIn} 
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Already have an account? Sign in
          </button>
        </div>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      return <h2 className="text-2xl font-bold text-center mb-4">Confirm Your Account</h2>;
    },
    Footer() {
      return (
        <p className="text-center mt-6 text-gray-600 text-sm">
          Please check your email for the confirmation code
        </p>
      );
    },
  }
};


// Custom form fields configuration
export const formFields = {
    signIn: {
      username: {
        label: 'Email',
        placeholder: 'xyz@gmail.com',
        isRequired: true,
        type: 'email',
      },
      password: {
        label: 'Password',
        placeholder: 'Enter Password',
        isRequired: true,
        type: 'password',
      },
    },
    signUp: {
      email: {
        label: 'Email',
        placeholder: 'xyz@gmail.com',
        isRequired: true,
        type: 'email',
      },
      password: {
        label: 'Password',
        placeholder: 'Enter Password',
        isRequired: true,
        type: 'password',
      },
      confirm_password: {
        label: 'Confirm Password',
        placeholder: 'Enter Password',
        isRequired: true,
        type: 'password',
      },
      phone_number: {
        label: 'Phone Number',
        placeholder: 'Enter your Phone Number',
        isRequired: true,
        type: 'tel',
      },
    },
  };
  

// Custom Amplify theme
export const theme = {
    name: 'medguard-theme',
    tokens: {
      colors: {
        brand: {
          primary: {
            10: '{colors.teal.10}',
            20: '{colors.teal.20}',
            40: '{colors.teal.40}',
            60: '{colors.teal.60}',
            80: '{colors.teal.80}',
            90: '{colors.teal.90}',
            100: '{colors.teal.100}',
          },
        },
      },
      components: {
        authenticator: {
          router: {
            borderWidth: '0',
            boxShadow: 'none',
            backgroundColor: 'transparent',
          },
          container: {
            width: '100%',
            maxWidth: '100%',
            margin: '0',
            padding: '0',
            '@media (min-width: 640px)': {
              maxWidth: '400px',
              margin: 'auto',
            },
          },
          form: {
            padding: '2rem',  // Increased padding for better spacing
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
        },
        button: {
          backgroundColor: '{colors.teal.600}',
          color: '{colors.white}',
          borderRadius: '0.375rem',
          fontSize: '1rem',
          fontWeight: '600',
          height: '2.75rem',
          marginTop: '1rem',  // Added margin for spacing from input fields
          _hover: {
            backgroundColor: '{colors.teal.700}',
          },
        },
        field: {
          input: {
            padding: '0.75rem 1rem',  // Added padding for comfort
            borderRadius: '0.375rem',
            borderColor: '{colors.gray.300}',
            fontSize: '1rem',
            height: '2.75rem',
            _focus: {
              borderColor: '{colors.teal.500}',
              boxShadow: '0 0 0 2px {colors.teal.200}',
            },
          },
          label: {
            color: '{colors.gray.700}',
            fontSize: '1rem',
            fontWeight: '400',
            marginBottom: '0.5rem',
          },
        },
        tabs: {
          item: {
            _focus: {
              color: '{colors.teal.600}',
              borderColor: '{colors.teal.600}',
            },
            _active: {
              color: '{colors.teal.600}',
              borderColor: '{colors.teal.600}',
            },
            _hover: {
              color: '{colors.teal.600}',
            },
          },
        },
      },
    },
  };
  