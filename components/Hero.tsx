'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on mouse move
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const elements = container.querySelectorAll('.parallax-element');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0');
        const xOffset = (x - 0.5) * speed * 50;
        const yOffset = (y - 0.5) * speed * 50;
        
        (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="parallax-element absolute top-20 left-[10%] w-32 h-32 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl" data-speed="2"></div>
        <div className="parallax-element absolute bottom-20 right-[10%] w-40 h-40 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-xl" data-speed="1.5"></div>
        <div className="parallax-element absolute top-1/3 right-[20%] w-24 h-24 rounded-full bg-gradient-to-r from-pink-600/20 to-purple-600/20 blur-xl" data-speed="1"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Forge</span>
            <span className="gradient-text-blue">AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Transform your business ideas into reality with our AI-powered platform
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our multi-agent AI system automatically generates startup assets, landing pages, 
            brand kits, and workflows from your business ideas.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/demo" className="gradient-bg px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glow-purple">
            Try Demo
          </Link>
          <Link href="/submit" className="glass-effect px-8 py-4 rounded-lg text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
            Submit Your Idea
          </Link>
        </motion.div>
        
        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            {
              title: "AI-Powered",
              description: "Our multi-agent system collaborates to transform your ideas",
              icon: "✨",
              className: "gradient-border glow-purple"
            },
            {
              title: "Full Asset Suite",
              description: "Generate landing pages, brand kits, and workflows",
              icon: "🚀",
              className: "gradient-border glow-blue"
            },
            {
              title: "Instant Deployment",
              description: "Automatically deploy your assets to the web",
              icon: "🌐",
              className: "gradient-border glow-pink"
            }
          ].map((feature, index) => (
            <div key={index} className={`card-3d ${feature.className} p-[1px] rounded-xl`}>
              <div className="glass-effect rounded-xl p-6 h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Floating elements */}
        <div className="parallax-element absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-xl floating" data-speed="0.5"></div>
        <div className="parallax-element absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-xl floating-slow" data-speed="0.7"></div>
      </div>
    </div>
  );
};

export default Hero;