import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const AboutUs = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white text-black py-12 px-12">
      <Navbar />
      <section className="container mx-auto px-4">
        <motion.h1
          className="text-4xl mt-10 font-bold text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          About Us
        </motion.h1>

        {/* Who we are */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:w-1/2 md:pl-8">
            <Image
              src="/aboutus/1.png"
              alt="Who we are"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <motion.h2 className="text-2xl font-semibold mb-4">Who we are</motion.h2>
            <motion.p className="text-lg leading-relaxed">
              At MedGuard, we believe in making healthcare accessible, reliable, and comprehensive.
              We are a one-stop destination for all your healthcare needs, providing you with a
              seamless way to access medical services, information, and resources at your fingertips.
            </motion.p>
          </div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:w-1/2 md:pr-8">
            <Image
              src="/aboutus/2.png"
              alt="Our Mission"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <motion.h2 className="text-2xl font-semibold mb-4">Our Mission</motion.h2>
            <motion.p className="text-lg leading-relaxed">
              Our mission is to empower individuals by delivering a holistic healthcare platform that
              bridges the gap between medical services and those who need them.
            </motion.p>
          </div>
        </motion.div>

        {/* Find Nearby Hospitals */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:w-1/2 md:pl-8">
            <Image
              src="/aboutus/3.png"
              alt="Find Nearby Hospitals"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <motion.h2 className="text-2xl font-semibold mb-4">Find Nearby Hospitals</motion.h2>
            <motion.p className="text-lg leading-relaxed">
              Our intuitive hospital locator helps you find nearby hospitals, clinics, and medical
              centers with ease.
            </motion.p>
          </div>
        </motion.div>

        {/* Order Medicines Online */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:w-1/2 md:pr-8">
            <Image
              src="/aboutus/4.png"
              alt="Order Medicines Online"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <motion.h2 className="text-2xl font-semibold mb-4">Order Medicines Online</motion.h2>
            <motion.p className="text-lg leading-relaxed">
              Skip the pharmacy lines with our online medicine ordering service. Simply browse and
              select your required medications, place an order, and have them delivered right to your
              doorstep.
            </motion.p>
          </div>
        </motion.div>

        {/* AI-Powered Disease Prediction */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:w-1/2 md:pl-8">
            <Image
              src="/aboutus/5.png"
              alt="AI-Powered Disease Prediction"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <motion.h2 className="text-2xl font-semibold mb-4">
              AI-Powered Disease Prediction
            </motion.h2>
            <motion.p className="text-lg leading-relaxed">
              Our platform leverages cutting-edge AI technology to analyze health data and predict
              potential health conditions.
            </motion.p>
          </div>
        </motion.div>

        {/* Comprehensive Health Resources */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:w-1/2 md:pr-8">
            <Image
              src="/aboutus/6.png"
              alt="Comprehensive Health Resources"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <motion.h2 className="text-2xl font-semibold mb-4">
              Comprehensive Health Resources
            </motion.h2>
            <motion.p className="text-lg leading-relaxed">
              Stay informed with our extensive library of healthcare resources.
            </motion.p>
          </div>
        </motion.div>

        {/* Why Choose MedGuard */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:w-1/2 md:pl-8">
            <Image
              src="/aboutus/7.png"
              alt="Why Choose MedGuard"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <motion.h2 className="text-2xl font-semibold mb-4">
              Why Choose MedGuard
            </motion.h2>
            <motion.p className="text-lg leading-relaxed">
              <strong>Advanced Technology:</strong> We harness the power of AI and machine learning to bring you
              precise and timely healthcare insights.
            </motion.p>
          </div>
        </motion.div>

        {/* Our Vision */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:w-1/2 md:pr-8">
            <Image
              src="/aboutus/8.png"
              alt="Our Vision"
              width={400}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <motion.h2 className="text-2xl font-semibold mb-4">Our Vision</motion.h2>
            <motion.p className="text-lg leading-relaxed">
              At MedGuard, we envision a world where healthcare is truly accessible to all.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
