// app/layout.tsx

import './globals.css'; // Import global styles if you have them
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'ForgeAI - App',
  description: 'A forward-thinking approach to AI solutions.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Example navigation - adapt to your existing components */}
        <nav className="p-4 shadow-md">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              ForgeAI
            </Link>
            <div>
              <Link href="/about" className="mr-4">
                About
              </Link>
              <Link href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Main content (children) */}
        <main className="max-w-screen-xl mx-auto p-4">
          {children}
        </main>

        {/* Example footer - adapt as needed */}
        <footer className="mt-8 p-4 border-t">
          <p className="text-center">
            © {new Date().getFullYear()} ForgeAI. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}