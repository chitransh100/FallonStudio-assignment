"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Navbar({ currentView, setView }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight text-blue-700 dark:text-blue-300">
          Fallon Studio
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-3 items-center">
          {["form", "admin"].map((view) => (
            <button
              key={view}
              onClick={() => setView(view)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                currentView === view
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-white/10"
              }`}
            >
              {view === "form" ? "Feedback Form" : "View Feedback"}
            </button>
          ))}
          

          {/* Theme Toggle */}
          {/* Theme toggle with DaisyUI */}
          <input type="checkbox" value="synthwave" className="toggle theme-controller" />



        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <label className="swap swap-rotate cursor-pointer">
            <input type="checkbox" className="theme-controller hidden" value="synthwave" />
            <svg
              className="swap-off fill-current w-6 h-6 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1..." />
            </svg>
            <svg
              className="swap-on fill-current w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0..." />
            </svg>
          </label>

          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="w-7 h-7 text-blue-600" />
            ) : (
              <Menu className="w-7 h-7 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {["form", "admin"].map((view) => (
            <button
              key={view}
              onClick={() => {
                setView(view);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition ${
                currentView === view
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-white/10"
              }`}
            >
              {view === "form" ? "Feedback Form" : "View Feedback"}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
