"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-pink-600 text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-white">
          All About Cats
        </Link>
        <button 
          onClick={toggleMenu} 
          className="sm:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <nav className={`flex-col sm:flex-row sm:flex ${isMenuOpen ? 'flex' : 'hidden'} absolute sm:static bg-pink-600 sm:bg-transparent w-full sm:w-auto z-10`}>
          <Link href="/" className="text-black hover:text-blue-800 text-base sm:text-lg mb-2 sm:mb-0 p-2">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-blue-800 text-base sm:text-lg mb-2 sm:mb-0 p-2">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-blue-800 text-base sm:text-lg mb-2 sm:mb-0 p-2">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
