// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "glass-effect border-b border-white/10 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="gradient-text">Forge</span>
              <span className="gradient-text-blue">AI</span>
            </span>
          </Link>
        </motion.div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 z-50 relative" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={cn(
              "w-full h-0.5 bg-white transition-all duration-300 absolute",
              isMenuOpen ? "top-2 rotate-45" : "top-0 rotate-0"
            )}></span>
            <span className={cn(
              "w-full h-0.5 bg-white transition-all duration-300",
              isMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              "w-full h-0.5 bg-white transition-all duration-300 absolute",
              isMenuOpen ? "bottom-2 -rotate-45" : "bottom-0 rotate-0"
            )}></span>
          </div>
        </button>
        
        {/* Desktop navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {[
            { href: "/", label: "Home" },
            { href: "/demo", label: "Demo" },
            { href: "/submit", label: "Submit Idea" },
            { href: "/features", label: "Features" },
            { href: "/pricing", label: "Pricing" },
            { href: "/blog", label: "Blog" }
          ].map((item, index) => (
            <Link 
              key={index}
              href={item.href} 
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </motion.nav>
        
        {/* Desktop CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-4"
        >
          <Link 
            href="/login" 
            className="text-white/90 hover:text-white transition-colors px-4 py-2"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="gradient-bg px-5 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Sign up
          </Link>
        </motion.div>
        
        {/* Mobile navigation */}
        <div className={cn(
          "fixed inset-0 glass-effect z-40 flex flex-col justify-center items-center transition-all duration-500 md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <nav className="flex flex-col items-center gap-6 p-8">
            {[
              { href: "/", label: "Home" },
              { href: "/demo", label: "Demo" },
              { href: "/submit", label: "Submit Idea" },
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/blog", label: "Blog" }
            ].map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="text-2xl font-medium text-white hover:text-white/80 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="w-16 h-px bg-white/20 my-4"></div>
            <div className="flex flex-col gap-4 w-full items-center">
              <Link 
                href="/login" 
                className="text-xl font-medium text-white/90 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="gradient-bg w-full text-center py-3 rounded-lg text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}