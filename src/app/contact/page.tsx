import Link from 'next/link';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Global Creations & IT',
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r to-blue-900 from-orange-500 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">
            Let&apos;s collaborate to build something extraordinary together.
          </h1>
          <p className="text-xl mb-8">
            We&apos;re a digital agency specializing in web development, data services, and creative design solutions.
          </p>
          <Link
            href="/start-a-project"
            className="bg-blue-950 text-white hover:bg-white hover:text-blue-950 px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-950">
            We&apos;d Love to Hear From You
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Whether you have a question, want to discuss a new project, or just want to say hello,
            feel free to get in touch with us. <br />We&apos;re always excited to connect!
          </p>

          {/* Contact Info Icons */}
          <div className="flex flex-col md:flex-row md:justify-center gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <Phone className="w-12 h-12 text-orange-600" />
              <p className="text-lg font-semibold text-navy-600">Call Us</p>
              <a 
                href="tel:+447438481790" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition duration-300"
              >
                +447438481790
              </a>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Mail className="w-12 h-12 text-orange-600" />
              <p className="text-lg font-semibold text-navy-600">Email Us</p>
              <a 
                href="mailto:info@globalcreationsit.co.uk"
                className="text-gray-600 hover:text-orange-500 transition duration-300"
              >
                info@globalcreationsit.co.uk
              </a>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <MessageCircle className="w-12 h-12 text-orange-600" />
              <p className="text-lg font-semibold text-navy-600">WhatsApp</p>
              <a 
                href="https://wa.me/447438481790" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition duration-300"
              >
                +447438481790
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-12">
            <MapPin className="w-12 h-12 text-orange-600" />
            <p className="text-lg font-semibold text-navy-600">Visit Us</p>
            <p className="text-gray-600">21 THE BOUNDARY, BRADFORD BD8 OBQ, UK</p>
          </div>
        </div>
      </section>
    </>
  );
}
