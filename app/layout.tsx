// app/layout.tsx

import './globals.css'; // Import global styles
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'ForgeAI – Next-Gen Startup Studio',
  description: 'A forward-thinking approach to AI solutions.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Neuro Interface */}
        <div className="container mx-auto px-4 min-h-screen flex flex-col">

          {/* Holographic Header */}
          <header className="py-6 mb-8 border-b border-purple-400/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
                <h1 className="text-xl font-bold">
                  <Link href="/">ForgeAI Studio</Link>
                </h1>
              </div>
              <nav className="flex space-x-6 text-sm">
                <Link href="/" className="hover:text-purple-300 transition">Dashboard</Link>
                <Link href="/demo" className="hover:text-purple-300 transition">Templates</Link>
                <Link href="/about" className="hover:text-purple-300 transition">Marketplace</Link>
                <Link href="/contact" className="px-3 py-1 bg-purple-600 rounded-full hover:bg-purple-500">New Project</Link>
              </nav>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Neural Console Footer */}
          <div className="my-6 p-4 bg-black/30 rounded-xl backdrop-blur-lg border border-purple-400/20">
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-purple-900/20 rounded-lg p-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="text-green-400">⬤</div>
                  <span>© {new Date().getFullYear()} ForgeAI. All rights reserved.</span>
                </div>
              </div>
              <Link href="/contact" className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-500">Contact Us</Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}