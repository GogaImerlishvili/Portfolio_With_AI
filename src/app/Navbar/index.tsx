// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          My Portfolio
        </Link>
        <div className="flex space-x-4">
          <Link href="/about" className="text-gray-800 dark:text-white">About</Link>
          <Link href="/projects" className="text-gray-800 dark:text-white">Projects</Link>
          <Link href="/contact" className="text-gray-800 dark:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}