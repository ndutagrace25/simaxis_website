"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  Smartphone,
  Shield,
  ArrowRight,
  Play,
  FileText,
  Gauge,
  CreditCard,
  Heart,
} from "lucide-react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/assets/meter_one.png", "/assets/meter_two.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 mt-4 sm:mt-0"
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Smart Metering Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[24px] font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              Solve Kenya's Meter Shortage. Get Reliable Prepaid Meters,
              Installed
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[16px] text-white/90 mb-6 sm:mb-8 leading-relaxed"
            >
              We provide property managers and home owners with 24/7 smart
              metering solutions, eliminating tenant debts, quarrels, and bill
              payment delays.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group text-sm sm:text-base">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>Get Your Meter Quote</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImage]}
                    alt={`Meter ${currentImage + 1}`}
                    fill
                    className="object-contain rounded-xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Features Bar - Bottom of Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative z-10 mt-12 lg:mt-16"
        >
          <div className="backdrop-blur-sm pt-4 sm:pt-6 pb-2 sm:pb-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
                >
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium text-center text-shadow">
                    Fast Installation
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
                >
                  <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium text-center text-shadow">
                    Accurate Metering
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
                >
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium text-center text-shadow">
                    Easy Token Buying
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
                >
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium text-center text-shadow">
                    Friendly Support
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
