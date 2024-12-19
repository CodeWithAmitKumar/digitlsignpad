import React from 'react';
import SignaturePad from './components/SignaturePad';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Digital Signature Pad
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Create, customize, and download your digital signature
            </p>
          </header>

          <SignaturePad />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}