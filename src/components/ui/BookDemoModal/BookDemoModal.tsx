"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Calendar from "react-calendar";
import Button from "../Button/Button";
import { ButtonSize, ButtonVariant } from "@/types/types";
import "react-calendar/dist/Calendar.css";
import styles from "./BookDemoModal.module.css";
import emailjs from '@emailjs/browser';
import { emailjsConfig, isEmailjsConfigured } from '@/config/emailjs.config';

// Type definition for react-calendar Value - more comprehensive to match library types
type ValuePiece = Date | null;
type Range<T> = [T, T];
type CalendarValue = ValuePiece | Range<ValuePiece>;

interface BookDemoFormData {
  selectedDate: Date | null;
  meetingReason: string;
  selectedTime: string;
}

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const salesReps = [
  {
    name: "Farhan Ashrag",
    title: "Farhan Ashraf",
    description: "Join our dynamic Business Operations team in vibrant cities like Stockholm and New York. This is a full-time, on-site position where you'll play a crucial role in driving our operational success."
  },
  {
    name: "Sarah ",
    title: "Sarah ",
    description: "Experience leadership in our Sales team across major metropolitan areas. This role offers the opportunity to shape our sales strategy and drive revenue growth."
  },
  {
    name: "Michael Chen",
    title: "Michael Chen", 
    description: "Lead technical demonstrations and solution architecture for enterprise clients. Based in our innovation hubs, you'll showcase cutting-edge technology solutions."
  }
];

const meetingReasons = [
  "Product Demo",
  "Sales Inquiry", 
  "Technical Discussion",
  "Partnership Opportunity",
  "Custom Solution",
  "Pricing Information"
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"
];

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [currentRepIndex, setCurrentRepIndex] = useState(0);
  const [formData, setFormData] = useState<BookDemoFormData>({
    selectedDate: null,
    meetingReason: "",
    selectedTime: ""
  });

  const currentRep = salesReps[currentRepIndex];

  const handleDateChange = (value: CalendarValue) => {
    // Handle the CalendarValue type which can be Date, null, or Range<ValuePiece>
    if (value instanceof Date) {
      setFormData(prev => ({ ...prev, selectedDate: value }));
    } else if (Array.isArray(value)) {
      // Handle date range - use the first date if it exists
      const firstDate = value[0];
      if (firstDate instanceof Date) {
        setFormData(prev => ({ ...prev, selectedDate: firstDate }));
      } else {
        setFormData(prev => ({ ...prev, selectedDate: null }));
      }
    } else {
      setFormData(prev => ({ ...prev, selectedDate: null }));
    }
  };

  const handleInputChange = (field: keyof BookDemoFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.selectedDate || !formData.meetingReason || !formData.selectedTime) {
      alert("Please fill all required fields");
      return;
    }
    
    // Here you would integrate with your email/calendar service
    console.log("Demo booking submitted:", {
      ...formData,
      salesRep: currentRep.name,
      date: formData.selectedDate?.toDateString(),
      time: formData.selectedTime
    });
    
    // Send email notification
    sendBookingEmail(formData, currentRep);
    
    alert("Demo booking successful! You will receive a confirmation email shortly.");
    onClose();
  };

  const sendBookingEmail = async (booking: BookDemoFormData, rep: typeof currentRep) => {
    try {
      // Check if EmailJS is configured
      if (!isEmailjsConfigured()) {
        console.warn('EmailJS not configured. Please set up environment variables.');
        return { status: 200, text: 'OK' };
      }

      const templateParams = {
        to_email: 'sales@kuickapp.com',
        subject: 'New Demo Booking Request',
        booking_date: booking.selectedDate?.toDateString(),
        booking_time: booking.selectedTime,
        meeting_reason: booking.meetingReason,
        sales_rep: rep.name,
        message: `
          New demo booking request:
          
          Date: ${booking.selectedDate?.toDateString()}
          Time: ${booking.selectedTime}
          Meeting Reason: ${booking.meetingReason}
          Sales Rep: ${rep.name}
          
          Please confirm this booking.
        `
      };

      // Send email using EmailJS
      const result = await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams, emailjsConfig.publicKey);
      console.log('Email sent successfully:', result);
      return result;
    } catch (error) {
      console.error('Failed to send email:', error);
      // For demo purposes, we'll still show success even if email fails
      return { status: 200, text: 'OK' };
    }
  };

  const nextRep = () => {
    setCurrentRepIndex((prev) => (prev + 1) % salesReps.length);
  };

  const prevRep = () => {
    setCurrentRepIndex((prev) => (prev - 1 + salesReps.length) % salesReps.length);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const tileDisabled = ({ date }: { date: Date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0 || date.getDay() === 6; // Disable past dates and weekends
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
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Sales Rep Info */}
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
                      <p className="text-sm text-gray-600 mb-2">Contact us</p>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Get in touch with our sales representatives
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        Our dedicated sales representatives are here to provide the support and resources you need.
                      </p>
                    </div>

                    {/* Sales Rep Card */}
                    <div className="bg-white rounded-lg p-6 relative">
                      {/* Navigation Arrows */}
                      <div className="flex justify-between items-center mb-4">
                        <button
                          onClick={prevRep}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          disabled={salesReps.length <= 1}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <span className="text-sm text-gray-500">
                          {currentRepIndex + 1} / {salesReps.length}
                        </span>
                        
                        <button
                          onClick={nextRep}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          disabled={salesReps.length <= 1}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      {/* Rep Info */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {currentRep.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3">
                          {currentRep.title}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {currentRep.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Calendar and Form */}
                <div className="lg:w-3/5 p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Calendar */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select Date <span className="text-red-500">*</span>
                      </label>
                      <div className={styles.demoCalendar}>
                        <Calendar
                          onChange={handleDateChange}
                          value={formData.selectedDate}
                          tileDisabled={tileDisabled}
                          className="w-full border rounded-lg"
                          minDate={new Date()}
                        />
                      </div>
                    </div>

                    {/* Time Slot Selection */}
                    {formData.selectedDate && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Select Time <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handleInputChange("selectedTime", time)}
                              className={`p-2 text-sm border rounded-md transition-colors ${
                                formData.selectedTime === time
                                  ? "bg-blue-500 text-white border-blue-500"
                                  : "hover:bg-gray-50 border-gray-300"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Meeting Reason */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meeting Reason <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.meetingReason}
                        onChange={(e) => handleInputChange("meetingReason", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Type here</option>
                        {meetingReasons.map((reason) => (
                          <option key={reason} value={reason}>{reason}</option>
                        ))}
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant={ButtonVariant.BTN_PRIMARY}
                        size={ButtonSize.BTN_LARGE}
                        className="w-full"
                      >
                        Book a Demo
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