import React from 'react';
import { MessageCircle } from 'lucide-react';
export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/447570946109"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Frimz Cleaning on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300">
      
      <MessageCircle className="w-7 h-7" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping" />
    </a>);

};