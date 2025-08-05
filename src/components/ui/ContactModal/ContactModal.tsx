"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { ButtonSize, ButtonVariant } from "@/types/types";

interface ContactFormData {
  fullName: string;
  jobTitle: string;
  workEmail: string;
  phoneNumber: string;
  companyName: string;
  companySize: string;
  countryRegion: string;
  reasonForContact: string;
  moreDetails: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const companySizes = [
  "1-10 employees",
  "11-50 employees", 
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees"
];

const contactReasons = [
  "Sales Inquiry",
  "Product Demo",
  "Technical Support",
  "Partnership",
  "General Question"
];

const countries = [
  "United States",
  "Pakistan",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Other"
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    jobTitle: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    companySize: "",
    countryRegion: "",
    reasonForContact: "",
    moreDetails: ""
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
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
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Image and Content */}
                <div className="lg:w-2/5 p-8 bg-gray-50 relative">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 hover:bg-gray-200 rounded-full transition-colors z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Sales Team</p>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Now</h2>
                      <p className="text-gray-600 leading-relaxed">
                        Have questions or ready to get started?<br />
                        Our team is here to help 24/7.
                      </p>
                    </div>

                    {/* Company Logos */}
                    <div className="flex items-center space-x-4 opacity-60">
                      <Image
                        src="/assets/images/crescent-logo.png"
                        alt="Crescent"
                        width={60}
                        height={30}
                        className="object-contain"
                      />
                      <Image
                        src="/assets/images/pakoxygen-logo.png"
                        alt="Pak Oxygen"
                        width={60}
                        height={30}
                        className="object-contain"
                      />
                      <Image
                        src="/assets/images/friesland-logo.png"
                        alt="Friesland"
                        width={60}
                        height={30}
                        className="object-contain"
                      />
                    </div>

                    {/* Building Image */}
                    <div className="pt-6">
                      <Image
                        src="/assets/images/pak-oxygen-building.svg"
                        alt="Office Building"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="lg:w-3/5 p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Full Name & Job Title */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ada"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Row 2: Work Email & Phone Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => handleInputChange("workEmail", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(92) 34568971"
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Row 3: Company Name & Company Size */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Lovelace Inc."
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Size <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formData.companySize}
                          onChange={(e) => handleInputChange("companySize", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select...</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Country/Region & Reason for Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country or Region <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formData.countryRegion}
                          onChange={(e) => handleInputChange("countryRegion", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select...</option>
                          {countries.map((country) => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Reason for Contact <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formData.reasonForContact}
                          onChange={(e) => handleInputChange("reasonForContact", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select...</option>
                          {contactReasons.map((reason) => (
                            <option key={reason} value={reason}>{reason}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 5: More Details */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Provide more Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Mathematician"
                        value={formData.moreDetails}
                        onChange={(e) => handleInputChange("moreDetails", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant={ButtonVariant.BTN_PRIMARY}
                        size={ButtonSize.BTN_LARGE}
                        className="w-full"
                      >
                        Send Query
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}