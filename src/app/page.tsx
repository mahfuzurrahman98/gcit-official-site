import Link from 'next/link';
import Image from 'next/image';
import { Check, Lightbulb, Users, Rocket, Search, PenTool, TestTube } from 'lucide-react';
import { homeProcessSteps, approachSteps } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Global Creations & IT',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="text-white py-12 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/images/bg.jpg)' }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Let&apos;s collaborate to build something extraordinary together.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            We&apos;re a digital agency specializing in web development, data services, and creative design solutions.
          </p>
          <Link
            href="/start-a-project"
            className="bg-orange-600 text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Tagline and Approach */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl text-blue-950 font-semibold mb-4">
            Building Digital <span className="text-orange-600">Futures</span>, Connecting Global <span className="text-orange-600">Minds</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-medium text-gray-700">
            We design digital experiences that transform brands and captivate audiences.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start justify-between b-20">
          <div className="w-full">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-blue-950">Our Approach</h3>
            <p className="text-gray-700 mb-6 text-lg">
              At our core, we are passionate about delivering exceptional digital solutions. We focus on
              crafting user-centered designs and leveraging the latest technology to achieve your business
              objectives. Here&apos;s how we do it:
            </p>
            <ul className="text-gray-700 space-y-3 text-lg flex flex-col gap-y-3">
              {approachSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-x-3">
                  <Check className="rounded-full p-2 bg-blue-200 text-blue-950 h-8 w-8 flex items-center justify-center" />
                  <div>
                    <strong>{step.title}:</strong> {step.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-auto bg-gray-200 relative">
            <Image
              src="/assets/images/banner.webp"
              alt="Digital Experience Showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-950 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Why Choose Us?</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
          {/* Card 1: Innovative Ideas */}
          <div className="bg-white rounded-lg shadow-xl px-6 py-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <Lightbulb className="text-orange-600 w-8 h-8" />
              </div>
            </div>
            <h4 className="text-xl text-center font-semibold mb-2 text-gray-800">Innovative Ideas</h4>
            <p className="text-gray-700">We bring fresh perspectives and creative solutions to every project, ensuring your brand stands out.</p>
          </div>
          
          {/* Card 2: Collaborative Approach */}
          <div className="bg-white rounded-lg shadow-xl px-6 py-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <Users className="text-orange-600 w-8 h-8" />
              </div>
            </div>
            <h4 className="text-xl text-center font-semibold mb-2 text-gray-800">Collaborative Approach</h4>
            <p className="text-gray-700">We work hand-in-hand with you to understand your vision and goals, ensuring your needs are met.</p>
          </div>
          
          {/* Card 3: Fast Turnaround */}
          <div className="bg-white rounded-lg shadow-xl px-6 py-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <Rocket className="text-orange-600 w-8 h-8" />
              </div>
            </div>
            <h4 className="text-xl text-center font-semibold mb-2 text-gray-800">Fast Turnaround</h4>
            <p className="text-gray-700">We deliver high-quality results quickly, ensuring you achieve your goals within the desired timeframe.</p>
          </div>
        </div>
      </section>

      {/* How We Serve You Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-4">How We Serve You</h2>
          <p className="text-xl text-center text-gray-700 mb-12">
            We believe in building strong partnerships, and here&apos;s how we&apos;ll work together to achieve your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeProcessSteps.map((step, index) => {
              const getIcon = (iconName: string) => {
                switch (iconName) {
                  case 'Search': return Search;
                  case 'PenTool': return PenTool;
                  case 'TestTube': return TestTube;
                  case 'Rocket': return Rocket;
                  default: return Search;
                }
              };
              
              const IconComponent = getIcon(step.icon);
              
              return (
                <div key={index} className="bg-blue-100 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-950 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-950 mb-2">{step.name}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              );
            })}
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
