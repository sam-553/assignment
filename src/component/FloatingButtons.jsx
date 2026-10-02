import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <>
      <a
        href="https://wa.me/918683828646"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Xntrova on WhatsApp"
        className="fixed bottom-4 left-4 z-40 grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 sm:bottom-6 sm:left-6"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        <FaWhatsapp size={40} />
      </a>

      <button
        type="button"
        aria-label="Open chat with Xntrova"
        className="fixed bottom-[82px] right-4 z-40 h-[70px] w-14 animate-bounce rounded-full transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075a2] sm:bottom-[100px] sm:right-6"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        <svg
          viewBox="0 0 64 80"
          className="h-full w-full"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M10 80 V62 C10 46 20 36 32 36 C44 36 54 46 54 62 V80 Z"
            fill="#0075a2"
          />

          <path
            d="M26 40 L32 50 L38 40"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />

          <rect
            x="27"
            y="30"
            width="10"
            height="10"
            rx="4"
            fill="#E8B08A"
          />

          <circle
            cx="32"
            cy="20"
            r="15"
            fill="#F0C29B"
          />

          <path
            d="M16 20 C16 9 23 2 32 2 C41 2 48 9 48 20 C48 15 44 12 40 12 C40 17 36 19 32 19 C28 19 24 17 24 12 C20 12 16 15 16 20 Z"
            fill="#3A2C24"
          />

          <path
            d="M17 18 C17 27 19 33 19 33 C16 29 15 22 16 18 Z"
            fill="#3A2C24"
          />

          <path
            d="M47 18 C47 27 45 33 45 33 C48 29 49 22 48 18 Z"
            fill="#3A2C24"
          />

          <circle
            cx="27"
            cy="21"
            r="1.4"
            fill="#2A2A2A"
          />

          <circle
            cx="37"
            cy="21"
            r="1.4"
            fill="#2A2A2A"
          />

          <path
            d="M27 27 Q32 30 37 27"
            fill="none"
            stroke="#8A5A3A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <path
            d="M46 60 C54 56 56 48 52 42"
            fill="none"
            stroke="#0075a2"
            strokeWidth="9"
            strokeLinecap="round"
          />

          <circle
            cx="51"
            cy="41"
            r="5.5"
            fill="#F0C29B"
          />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Chat with Xntrova"
        className="pointer-events-auto fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#001720] text-white shadow-[0_8px_24px_rgba(0,23,32,0.28)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075a2] sm:bottom-6 sm:right-6"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        <FaRegCommentDots size={24} />
      </button>
    </>
  );
};

export default FloatingButtons;