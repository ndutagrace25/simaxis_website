"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Droplets,
  Gauge,
  Wifi,
  Battery,
  Settings,
  Star,
} from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Smart Electricity Token Meter",
      category: "Electricity",
      icon: Zap,
      price: "KES 15,000",
      description:
        "Advanced token meter with real-time monitoring and automatic token validation.",
      features: [
        "Real-time consumption display",
        "Automatic token validation",
        "Energy efficiency monitoring",
        "Tamper detection",
        "LCD display with backlight",
        "Prepaid token system",
      ],
      specs: {
        Voltage: "220-240V AC",
        Current: "Up to 100A",
        Accuracy: "Class 1.0",
        Display: "LCD with backlight",
        Communication: "GSM/SMS enabled",
      },
      color: "from-primary-400 to-primary-600",
      popular: true,
    },
    {
      name: "Smart Water Meter",
      category: "Water",
      icon: Droplets,
      price: "KES 12,000",
      description:
        "High-precision water meter with leak detection and usage analytics.",
      features: [
        "Leak detection system",
        "Usage analytics dashboard",
        "Automatic shut-off capability",
        "Water quality monitoring",
        "Mobile app integration",
        "Battery backup system",
      ],
      specs: {
        "Flow Rate": "0.1-15 m³/h",
        Accuracy: "Class B",
        Pressure: "Up to 16 bar",
        Temperature: "-10°C to +50°C",
        Communication: "LoRaWAN enabled",
      },
      color: "from-primary-500 to-secondary-500",
      popular: false,
    },
    {
      name: "Hybrid Token Meter",
      category: "Multi-Utility",
      icon: Gauge,
      price: "KES 18,000",
      description:
        "Combined electricity and water token meter for comprehensive utility management.",
      features: [
        "Dual utility monitoring",
        "Integrated billing system",
        "Smart home integration",
        "Energy & water optimization",
        "Advanced reporting",
        "Cloud data storage",
      ],
      specs: {
        Electricity: "220-240V AC, 100A max",
        Water: "0.1-15 m³/h flow rate",
        Connectivity: "WiFi + GSM",
        Battery: "10-year lifespan",
        Installation: "Plug & play",
      },
      color: "from-secondary-500 to-primary-500",
      popular: false,
    },
  ];

  return (
    <section id="products" className="py-20 bg-[#fefffe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#424242] mb-6">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            State-of-the-art meters and smart devices designed for modern
            utility management. Built with reliability and user convenience in
            mind.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card p-8 h-full">
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-400 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                  </div>
                )}

                {/* Product Header */}
                <div className="text-center mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <product.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm text-primary-400 font-medium mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-bold text-[#424242] mb-2">
                    {product.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary-400 mb-4">
                    {product.price}
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-[#424242] mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-[#424242] text-sm"
                      >
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="font-bold text-[#424242] mb-3">
                    Specifications:
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-500">{key}:</span>
                        <span className="text-[#424242] font-medium">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full btn-primary">Get Quote</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#424242] mb-4">
              Installation & Support
            </h3>
            <p className="text-lg text-gray-500">
              We provide comprehensive installation and ongoing support for all
              our products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#424242] mb-2">
                Professional Installation
              </h4>
              <p className="text-gray-500">
                Certified technicians ensure proper setup
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#424242] mb-2">
                Smart Integration
              </h4>
              <p className="text-gray-500">
                Seamless connection to your smart home
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#424242] mb-2">Warranty</h4>
              <p className="text-gray-500">2-year warranty on all products</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#424242] mb-2">
                24/7 Support
              </h4>
              <p className="text-gray-500">Round-the-clock customer support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
