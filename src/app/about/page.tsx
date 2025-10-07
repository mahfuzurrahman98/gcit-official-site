import Link from 'next/link';
import Image from 'next/image';
import { Check, Lightbulb, Users, Rocket, Handshake } from 'lucide-react';
import { visionPoints, whyChooseUs } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Global Creations & IT',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r to-orange-500 from-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Building Digital Futures, <br />Connecting Global Minds
          </h1>
          <p className="text-xl md:text-2xl opacity-80">Empowering your digital journey with custom, cutting-edge solutions.</p>
        </div>
      </section>

      {/* 5S Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-950">Our <span className="text-orange-600">5S</span> Vision</h2>
          <p className="text-gray-700 mb-10 text-lg">
            Discover the pillars that define our approach to delivering superior digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">
            {Object.entries(visionPoints).map(([point, value], index) => (
              <div key={index} className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 bg-blue-200 text-blue-950 rounded-full flex items-center justify-center shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-semibold">
                    <span className="text-orange-600">{point.charAt(0)}</span>{point.slice(1)}
                  </h4>
                  <p className="text-lg text-gray-600">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start justify-between b-20">
            <div className="w-full">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-blue-950">Why Choose Us?</h3>
              <p className="text-gray-700 mb-6 text-lg">
                We believe in building strong partnerships, and here&apos;s how we&apos;ll work together to achieve your goals.
              </p>
              <ul className="text-gray-700 space-y-3 text-lg flex flex-col gap-y-3">
                <ul className="space-y-6">
                  {whyChooseUs.map((point, index) => {
                    const getIcon = (iconName: string) => {
                      switch (iconName) {
                        case 'Lightbulb': return Lightbulb;
                        case 'Users': return Users;
                        case 'Rocket': return Rocket;
                        case 'Handshake': return Handshake;
                        default: return Lightbulb;
                      }
                    };
                    
                    const IconComponent = getIcon(point.icon);
                    
                    return (
                      <li key={index} className="flex items-start">
                        <IconComponent className="text-blue-950 w-12 h-12 p-2 mr-4 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-blue-950 mb-2">{point.title}</h3>
                          <p className="text-gray-600">{point.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ul>
            </div>
            <div className="w-full h-auto bg-gray-200 relative">
              <Image
                src="/assets/images/why-choose-us.webp"
                alt="Digital Experience Showcase"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Start Growing Section */}
      <section 
        className="bg-gray-200 px-4 py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/images/bg-grow.jpg)' }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-blue-950 font-bold mb-6">
            Let&apos;s Grow Together
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-8">
            Partner with us for innovative solutions that drive your business forward. Our team is ready to help you
            achieve your goals with cutting-edge technology and expert support.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-950 text-white hover:bg-orange-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
