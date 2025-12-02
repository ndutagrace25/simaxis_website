"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, Shield, ArrowRight, Play } from "lucide-react";

const Hero = () => {
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
            className="text-left order-1"
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <a
                href="#services"
                className="btn-secondary group text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-400 group text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              <div className="flex items-center text-white/90 text-xs sm:text-sm">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-400 flex-shrink-0" />
                <span>Instant SMS Delivery</span>
              </div>
              <div className="flex items-center text-white/90 text-xs sm:text-sm">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-400 flex-shrink-0" />
                <span>Secure Transactions</span>
              </div>
              <div className="flex items-center text-white/90 text-xs sm:text-sm">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-400 flex-shrink-0" />
                <span>24/7 Availability</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl"
              >
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    Buy Tokens Now
                  </h3>
                  <div className="space-y-3 sm:space-y-4 text-left">
                    <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                      <p className="text-white/80 text-xs sm:text-sm">
                        Paybill Number
                      </p>
                      <p className="text-white font-bold text-base sm:text-lg">
                        4444400
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                      <p className="text-white/80 text-xs sm:text-sm">
                        Account Number
                      </p>
                      <p className="text-white font-bold text-base sm:text-lg">
                        Your Meter Number
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                      <p className="text-white/80 text-xs sm:text-sm">Amount</p>
                      <p className="text-white font-bold text-base sm:text-lg">
                        KES 100 - 50,000
                      </p>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="w-full mt-4 sm:mt-6 bg-primary-400 hover:bg-primary-500 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-center block text-sm sm:text-base"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary-400/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary-400/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
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
