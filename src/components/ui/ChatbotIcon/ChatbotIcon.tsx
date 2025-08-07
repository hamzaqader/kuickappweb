"use client";

import React from "react";
import { motion } from "framer-motion";

interface ChatbotIconProps {
  onClick: () => void;
  isOpen?: boolean;
}

export default function ChatbotIcon({ onClick, isOpen = false }: ChatbotIconProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <button
        onClick={onClick}
        className={`w-16 h-16 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-[#0069D5] hover:bg-[#0056b3]"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          // Close icon (X)
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        ) : (
          // Chat icon
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
            />
          </svg>
        )}
      </button>
      
      {/* Notification dot for new messages */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
        />
      )}
    </motion.div>
  );
}
