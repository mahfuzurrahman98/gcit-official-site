'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header 
      className={`sticky top-0 transition-all duration-300 z-[999999] ${
        isScrolled || mobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center transition-all duration-300 py-3">
          {/* Logo Section */}
          <Link href="/" className="text-2xl font-bold text-navy-600 relative">
            <Image 
              src="/assets/images/logo.png" 
              alt="Global Creations & IT Logo"
              width={80}
              height={80}
              className="h-16 md:h-20 transition-opacity duration-300"
            />
          </Link>

          <div className="flex items-center gap-x-10">
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/services"
                className={`text-navy-800 hover:text-orange-600 font-medium ${
                  isActive('/services') ? 'border-b-2 border-orange-600' : ''
                }`}
              >
                SERVICES
              </Link>
              <Link
                href="/about"
                className={`text-navy-800 hover:text-orange-600 font-medium ${
                  isActive('/about') ? 'border-b-2 border-orange-600' : ''
                }`}
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className={`text-navy-800 hover:text-orange-600 font-medium ${
                  isActive('/contact') ? 'border-b-2 border-orange-600' : ''
                }`}
              >
                CONTACT
              </Link>
            </nav>

            {/* Call to Action Button */}
            <Link
              href="/start-a-project"
              className="hidden md:block bg-orange-600 hover:bg-blue-950 text-white font-semibold py-2 px-4 rounded"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-navy-800"
          >
            {mobileMenuOpen ? (
              <X className="text-3xl" />
            ) : (
              <Menu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <ul className="container mx-auto px-4 flex flex-col space-y-4">
            <li>
              <Link
                href="/services"
                className={`text-navy-800 hover:text-orange-600 font-medium ${
                  isActive('/services') ? 'border-b-2 border-orange-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-navy-800 hover:text-orange-600 font-medium ${
                  isActive('/about') ? 'border-b-2 border-orange-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-navy-800 hover:text-orange-600 font-medium ${
                  isActive('/contact') ? 'border-b-2 border-orange-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                href="/start-a-project"
                className="bg-orange-600 hover:bg-blue-950 text-white text-center font-semibold py-2 px-4 rounded w-full block"
                onClick={() => setMobileMenuOpen(false)}
              >
                GET STARTED
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
