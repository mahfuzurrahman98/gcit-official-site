import Link from 'next/link';
import Image from 'next/image';
import { Mail, MessageCircle, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 items-start">
        {/* Logo and Company Description */}
        <div className="">
          <Image 
            src="/assets/images/logo-footer.png" 
            alt="Company Logo" 
            width={200}
            height={56}
            className="w-auto h-14"
          />
          <p className="text-md text-gray-200 mt-5">
            A trusted UK-based company providing graphic design, web design, and data services.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="md:flex md:justify-center pl-5 md:pl-0 mt-5 md:mt-0">
          <ul className="list-disc">
            <li>
              <Link href="/" className="text-navy-800 hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-navy-800 hover:text-orange-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-navy-800 hover:text-orange-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-navy-800 hover:text-orange-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/start-a-project" className="text-navy-800 hover:text-orange-600">
                Start a Project
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media and Contact Links */}
        <div className="flex md:justify-center mt-5 md:mt-0">
          <div className="flex flex-col gap-y-1 md:gap-y-3">
            <a 
              href="mailto:info@globalcreationsit.co.uk" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-white flex items-center mb-4 md:mb-0"
            >
              <Mail className="text-lg mr-1" />
              info@globalcreationsit.co.uk
            </a>

            <a 
              href="https://wa.me/447438481790" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-white flex items-center mb-4 md:mb-0"
            >
              <MessageCircle className="text-xl mr-1" />
              WhatsApp
            </a>

            <a 
              href="tel:+441234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-white flex items-center mb-4 md:mb-0"
            >
              <Phone className="text-lg mr-1" />
              +44 743 8481790
            </a>
          </div>
        </div>

        <div className="flex md:justify-center mt-2 md:mt-0">
          <div className="flex flex-col gap-y-1 md:gap-y-3">
            <a 
              href="https://www.facebook.com/globalcreationsit" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-white flex items-center mb-4 md:mb-0"
            >
              <Facebook className="text-lg mr-1" />
              Facebook
            </a>

            <a 
              href="https://www.instagram.com/globalcreationsit" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-white flex items-center mb-4 md:mb-0"
            >
              <Instagram className="text-lg mr-1" />
              Instagram
            </a>

            <a 
              href="https://www.linkedin.com/company/globalcreationsit" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-white flex items-center"
            >
              <Linkedin className="text-lg mr-1" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center mt-6 pt-6 border-t border-[#D2D2D2]">
        <p>&copy; {currentYear}, Global Creations & IT</p>
      </div>
    </footer>
  );
}
