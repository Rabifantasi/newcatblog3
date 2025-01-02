import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-pink-600 text-black shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-white mb-2 sm:mb-0">
          All About Cats
        </Link>
        <nav className="flex flex-col sm:flex-row sm:space-x-4">
          <Link href="/" className="text-black hover:text-blue-800 text-base sm:text-lg mb-2 sm:mb-0">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-blue-800 text-base sm:text-lg mb-2 sm:mb-0">
            About
          </Link>
          <Link href="/contact" className="text-black hover:text-blue-800 text-base sm:text-lg mb-2 sm:mb-0">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
