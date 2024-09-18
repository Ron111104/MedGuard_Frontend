import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const AboutUs = () => {
  // Animation variants with ease-in and out transitions
  const slideInFromLeft = {
    hidden: { opacity: 0.2, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } },
    exit: { opacity: 0.2, x: -100, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0.2, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } },
    exit: { opacity: 0.2, x: 100, transition: { duration: 1, ease: 'easeInOut' } },
  };

  return (
    <div className="bg-white text-gray-900 py-12 px-6 md:px-12 overflow-x-hidden">
      <Navbar />
      <section className="container mx-auto px-4 mt-14">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideInFromLeft}
        >
          About Us
        </motion.h1>

        {/* Who we are */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInFromRight}
        >
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <Image
              src="/aboutus/1.png"
              alt="Who we are"
              width={500}
              height={350}
              className="mx-auto rounded-md"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <h2 className="text-xl md:text-4xl font-semibold mb-8 text-center">Who we are</h2>
            <p className="text-base md:text-xl leading-relaxed text-left">
            At MedGuard, we believe in making healthcare accessible, reliable, and comprehensive. We are a one-stop destination for all your healthcare needs, providing you with a seamless way to access medical services, information, and resources at your fingertips.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInFromLeft}
        >
          <motion.div
            className="md:w-1/2 md:pr-12"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <Image
              src="/aboutus/2.png"
              alt="Our Mission"
              width={500}
              height={350}
              className="mx-auto rounded-md"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <h2 className="text-xl md:text-4xl font-semibold mb-8 text-center ">Our Mission</h2>
            <p className="text-base md:text-xl leading-relaxed text-left">
            Our mission is to empower individuals by delivering a holistic healthcare platform that bridges the gap between medical services and those who need them. Whether you are looking to find nearby hospitals, order medicines, or seek health advice, our platform is designed to cater to all your healthcare requirements.
            </p>
          </motion.div>
        </motion.div>

        {/* Find Nearby Hospitals */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInFromRight}
        >
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <Image
              src="/aboutus/3.png"
              alt="Find Nearby Hospitals"
              width={500}
              height={350}
              className="mx-auto rounded-md"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <h2 className="text-xl md:text-4xl font-semibold mb-8 text-center ">Find Nearby Hospitals</h2>
            <p className="text-base md:text-xl leading-relaxed text-left">
            Our intuitive hospital locator helps you find nearby hospitals, clinics, and medical centers with ease. Use the interactive map to view detailed information, including contact numbers, services offered, hours of operation, and real-time directions. Accessing quality healthcare has never been this simple.            </p>
          </motion.div>
        </motion.div>

        {/* Order Medicines Online */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInFromLeft}
        >
          <motion.div
            className="md:w-1/2 md:pr-12"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <Image
              src="/aboutus/4.png"
              alt="Order Medicines Online"
              width={500}
              height={350}
              className="mx-auto rounded-md"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <h2 className="text-xl md:text-4xl font-semibold mb-8 text-center">Order Medicines Online</h2>
            <p className="text-base md:text-xl leading-relaxed text-left">
            Skip the pharmacy lines with our online medicine ordering service. Simply browse and select your required medications, place an order, and have them delivered right to your doorstep. Our reliable and fast delivery ensures you receive your medications safely and on time, giving you more time to focus on your health.            </p>
          </motion.div>
        </motion.div>

        {/* Add more sections following the same pattern */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInFromRight}
        >
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <Image
              src="/aboutus/5.png"
              alt="Who we are"
              width={500}
              height={350}
              className="mx-auto rounded-md"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <h2 className="text-xl md:text-4xl font-semibold mb-8 text-center">AI-Powered Disease Prediction</h2>
            <p className="text-base md:text-xl leading-relaxed text-left">
            Our platform leverages cutting-edge AI technology to analyze health data and predict potential health conditions. Just enter your symptoms, and our AI-powered model provides a detailed health report with personalized recommendations. Experience healthcare that’s smarter, faster, and tailored to your needs.            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center mb-16"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInFromLeft}
        >
          <motion.div
            className="md:w-1/2 md:pr-12"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <Image
              src="/aboutus/6.png"
              alt="Our Mission"
              width={500}
              height={350}
              className="mx-auto rounded-md"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <h2 className="text-xl md:text-4xl font-semibold mb-8 text-center ">Comprehensive Health Resources</h2>
            <p className="text-base md:text-xl leading-relaxed text-left">
            Stay informed with our extensive library of healthcare resources. Access well-researched medical articles, health tips, and guides curated by healthcare professionals. Our knowledge base empowers you to make informed decisions about your health and well-being, all in one convenient location.            </p>
          </motion.div>
        </motion.div>

        {/* Why Choose MedGuard */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInFromRight}
        >
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <Image
              src="/aboutus/7.png"
              alt="Why Choose MedGuard"
              width={500}
              height={350}
              className="mx-auto rounded-md"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <h2 className="text-xl md:text-4xl font-semibold mb-8 text-center ">Why Choose MedGuard</h2>
            <p className="text-base md:text-xl leading-relaxed text-left">
            Advanced Technology: We harness the power of AI and machine learning to bring you precise and timely healthcare insights.
User-Friendly Interface: Our platform is designed with you in mind, offering an intuitive and seamless experience across all healthcare services.
Trusted Healthcare Partners: We collaborate with reputable hospitals, pharmacies, and medical experts to ensure the highest quality of service.
Your Privacy Matters: Your health data is secure with us. We prioritize your privacy and maintain the highest standards of data protection.            </p>
          </motion.div>
        </motion.div>

        {/*Our Vision */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInFromLeft}
        >
          <motion.div
            className="md:w-1/2 md:pr-12"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <Image
              src="/aboutus/8.png"
              alt="Our Vision"
              width={500}
              height={350}
              className="mx-auto rounded-md"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <h2 className="text-xl md:text-4xl font-semibold mb-8 text-center">Our Vision</h2>
            <p className="text-base md:text-xl leading-relaxed text-left">
            At MedGuard, we envision a world where healthcare is accessible to everyone, regardless of location or background. We are committed to utilizing technology to simplify and improve healthcare access for all.            </p>
          </motion.div>
        </motion.div>


        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideInFromRight}
        >
        <motion.div
            className="md:w-1/2 md:pl-12"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromRight}
          >
            <Image
              src="/aboutus/9.png"
              alt="Get in Touch"
              width={500}
              height={350}
              className="mx-auto rounded-md"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideInFromLeft}
          >
            <h2 className="text-xl md:text-4xl font-semibold mb-8 text-center ">Why Choose MedGuard</h2>
            <p className="text-base md:text-xl leading-relaxed text-left">
           We are here to assist you on your health journey. If you have any questions, feedback, or need support, feel free to contact us through our platform. Your health is our priority, and we are dedicated to providing you with the care you deserve.</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
