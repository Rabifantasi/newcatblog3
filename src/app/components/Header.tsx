import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-pink-600 text-black shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-white mb-2 sm:mb-0">
          All About Cats
        </Link>
        <nav className="flex flex-col sm:flex-row">
          <Link href="/" className="mx-2 text-black hover:text-blue-800 text-base sm:text-lg">
            Home
          </Link>
          <Link href="/about" className="mx-2 text-black hover:text-blue-800 text-base sm:text-lg">
            About
          </Link>
          <Link href="/contact" className="mx-2 text-black hover:text-blue-800 text-base sm:text-lg">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
