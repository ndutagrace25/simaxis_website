"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Droplets,
  Smartphone,
  Shield,
  Clock,
  CreditCard,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Electricity Tokens",
      description:
        "Purchase electricity tokens instantly via paybill 4444400. Receive tokens via SMS within seconds.",
      features: [
        "Instant SMS delivery",
        "24/7 availability",
        "Secure transactions",
        "Multiple payment options",
      ],
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Droplets,
      title: "Water Meters",
      description:
        "High-quality water meters with advanced monitoring capabilities for residential and commercial use.",
      features: [
        "Smart monitoring",
        "Leak detection",
        "Usage analytics",
        "Easy installation",
      ],
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Token Meters",
      description:
        "Smart token meters that provide real-time consumption data and automatic token validation.",
      features: [
        "Real-time monitoring",
        "Auto-validation",
        "Energy efficiency",
        "User-friendly interface",
      ],
      color: "from-green-400 to-emerald-500",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security for all transactions",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Available round the clock for your convenience",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Pay via M-Pesa, bank transfer, or card",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your electricity and water token
            needs. From instant token purchases to smart meter installations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">SI-MAXIS</span>?
            </h3>
            <p className="text-lg text-gray-600">
              We provide the most reliable and convenient token purchasing
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
