// app/layout.tsx

import './globals.css'; // Import global styles
import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'ForgeAI – Next-Gen Startup Studio',
  description: 'Transform your business ideas into reality with our AI-powered platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        <Navbar />
        
        {/* Main content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="py-16 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 md:col-span-1">
                <div className="mb-6">
                  <span className="text-2xl font-bold">
                    <span className="gradient-text">Forge</span>
                    <span className="gradient-text-blue">AI</span>
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  Transform your business ideas into reality with our AI-powered platform
                </p>
                <div className="flex space-x-4">
                  {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, i) => (
                    <a 
                      key={i}
                      href={`#${social}`} 
                      className="w-10 h-10 rounded-full glass-effect flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5 bg-white/80 rounded-full"></div>
                    </a>
                  ))}
                </div>
              </div>
              
              {[
                {
                  title: "Product",
                  links: [
                    { label: "Features", href: "/features" },
                    { label: "Pricing", href: "/pricing" },
                    { label: "Demo", href: "/demo" },
                    { label: "Roadmap", href: "/roadmap" }
                  ]
                },
                {
                  title: "Resources",
                  links: [
                    { label: "Documentation", href: "/docs" },
                    { label: "Blog", href: "/blog" },
                    { label: "Tutorials", href: "/tutorials" },
                    { label: "Case Studies", href: "/case-studies" }
                  ]
                },
                {
                  title: "Company",
                  links: [
                    { label: "About", href: "/about" },
                    { label: "Careers", href: "/careers" },
                    { label: "Contact", href: "/contact" },
                    { label: "Privacy Policy", href: "/privacy" }
                  ]
                }
              ].map((column, i) => (
                <div key={i} className="col-span-1">
                  <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
                  <ul className="space-y-4">
                    {column.links.map((link, j) => (
                      <li key={j}>
                        <Link 
                          href={link.href} 
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} ForgeAI. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/cookies" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-xl"></div>
        </footer>
      </body>
    </html>
  );
}