// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/next.svg"
              alt="Logo"
              width={120}
              height={24}
              className="dark:invert"
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} 
            />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/demo" className="text-foreground/80 hover:text-foreground transition-colors">
            Demo
          </Link>
          <Link href="/features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-foreground/80 hover:text-foreground transition-colors">
            Blog
          </Link>
        </nav>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Sign up
          </Link>
        </div>
        
        {/* Mobile navigation */}
        <div className={cn(
          "absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}>
          <nav className="flex flex-col p-4">
            <Link 
              href="/" 
              className="py-2 px-4 hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/demo" 
              className="py-2 px-4 hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </Link>
            <Link 
              href="/features" 
              className="py-2 px-4 hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="py-2 px-4 hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/blog" 
              className="py-2 px-4 hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="border-t border-border my-2"></div>
            <Link 
              href="/login" 
              className="py-2 px-4 hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="mt-2 py-2 px-4 bg-primary text-primary-foreground text-center rounded-md hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}