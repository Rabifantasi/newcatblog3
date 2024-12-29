// components/Header.js

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-pink-600 text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          All About Cats
        </Link>
        <nav>
          <Link href="/" className="mx-2 text-black hover:text-blue-800">
            Home
          </Link>
          <Link href="/about" className="mx-2 text-black hover:text-blue-800">
            About
          </Link>
          <Link href="/contact" className="mx-2 text-black hover:text-blue-800">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
