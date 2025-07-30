"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send SMS via our local API route
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        await Swal.fire({
          title: "Message Sent Successfully!",
          text: "Thank you for contacting SI-MAXIS. We will get back to you soon.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#3b82f6",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      console.error("Error sending message:", error);

      // Show error message
      await Swal.fire({
        title: "Error Sending Message",
        text: `Sorry, there was an error sending your message. Error: ${error.message}`,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
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
                  info@simaxis.co.ke, simaxismeter@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary-600" />
                <span className="text-gray-700 font-medium">
                  +254722164408, +254721863405, +254732863405
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
