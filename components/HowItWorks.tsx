"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  CreditCard,
  MessageSquare,
  Zap,
  CheckCircle,
  Shield,
  Clock,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "1. Dial M-Pesa",
      description: 'Go to M-Pesa menu and select "Pay Bill"',
      details:
        "Navigate to your M-Pesa menu and choose the Pay Bill option to start your token purchase.",
    },
    {
      icon: CreditCard,
      title: "2. Enter Paybill",
      description: "Enter paybill number: 444440",
      details:
        "Use our dedicated paybill number 444440 for all SI-MAXIS token purchases.",
    },
    {
      icon: MessageSquare,
      title: "3. Account Number",
      description: "Enter your meter number as account number",
      details:
        "Your meter number serves as your unique account identifier for token delivery.",
    },
    {
      icon: Zap,
      title: "4. Enter Amount",
      description: "Choose your token amount (KES 100 - 50,000)",
      details:
        "Select the amount you want to purchase. Tokens are available from KES 100 to KES 50,000.",
    },
    {
      icon: CheckCircle,
      title: "5. Receive Token",
      description: "Get your token instantly via SMS",
      details:
        "Your electricity token will be delivered to your phone via SMS within seconds of payment confirmation.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your electricity tokens in just 5 simple steps. The entire
            process takes less than 2 minutes!
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400 transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div className="bg-gray-50 rounded-xl p-6 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-medium">
                    {step.description}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12 border border-primary-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust SI-MAXIS for their
              electricity token needs. Start your purchase now and experience
              the convenience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
              <button className="btn-outline">Download Guide</button>
            </div>
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Instant Delivery
            </h4>
            <p className="text-gray-600">
              Tokens delivered via SMS within seconds
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              100% Secure
            </h4>
            <p className="text-gray-600">
              Bank-grade security for all transactions
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              24/7 Available
            </h4>
            <p className="text-gray-600">
              Purchase tokens anytime, day or night
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
