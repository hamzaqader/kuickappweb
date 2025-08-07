"use client";

import React, { useState } from "react";
import ChatbotIcon from "../ChatbotIcon/ChatbotIcon";
import ChatbotModal from "../ChatbotModal/ChatbotModal";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ChatbotIcon onClick={toggleChatbot} isOpen={isOpen} />
      <ChatbotModal isOpen={isOpen} onClose={closeChatbot} />
    </>
  );
}
