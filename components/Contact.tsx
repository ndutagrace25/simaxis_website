"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
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
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need support? Reach out to SI-MAXIS and our team
            will assist you promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl shadow-lg p-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for contacting SI-MAXIS!");
            }}
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </motion.form>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="mb-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary-600" />
                <span className="text-gray-700 font-medium">
                  info@si-maxis.com
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary-600" />
                <span className="text-gray-700 font-medium">
                  +254 700 000 000
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-primary-600" />
                <span className="text-gray-700 font-medium">
                  Nairobi, Kenya
                </span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-100 flex items-center justify-center">
              {/* Map Placeholder */}
              <span className="text-gray-400">[Map Placeholder]</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
