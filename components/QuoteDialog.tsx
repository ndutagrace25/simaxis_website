"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

interface QuoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

const QuoteDialog = ({ isOpen, onClose, defaultProduct = "" }: QuoteDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: defaultProduct || "",
    quantity: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        await Swal.fire({
          title: "Quote Request Sent!",
          text: "Thank you for your interest. We will get back to you soon with a quote.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#3fb6bf",
        });

        // Reset form and close dialog
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: defaultProduct || "",
          quantity: "",
          location: "",
          message: "",
        });
        onClose();
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      console.error("Error sending quote request:", error);
      await Swal.fire({
        title: "Error Sending Request",
        text: `Sorry, there was an error sending your quote request. Error: ${error.message}`,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-[#424242]">Request a Quote</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#424242] font-semibold mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-[#424242] font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#424242] font-semibold mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-[#424242] font-semibold mb-2">
                      Product <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition"
                    >
                      <option value="">Select a product</option>
                      <option value="Electricity Token Meter">Electricity Token Meter</option>
                      <option value="Water Meter">Water Meter</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#424242] font-semibold mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition"
                      placeholder="Enter quantity"
                    />
                  </div>

                  <div>
                    <label className="block text-[#424242] font-semibold mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition"
                      placeholder="Enter your location"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#424242] font-semibold mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition"
                    placeholder="Any additional information or requirements..."
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-[#424242] font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 rounded-lg bg-primary-400 hover:bg-primary-500 text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Quote Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteDialog;

