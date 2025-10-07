import Link from 'next/link';
import Image from 'next/image';
import { services, processSteps } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Global Creations & IT',
};

export default function Services() {
  return (
    <>
      {/* Introduction Section */}
      <section className="max-w-[1280px] mx-auto px-4 py-16">
        <h1 className="text-blue-950 text-3xl md:text-5xl font-bold mb-6 text-center">Empowering Your Digital Presence</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          We are a digital media company, specialized in crafting, promoting, and growing your business in the digital
          realm. Our goal is to bring innovative solutions that drive your brand&apos;s success online and offline.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white overflow-hidden">
              {/* Image container with a fixed height to avoid layout shifts */}
              <div className="w-full h-60 bg-gray-200 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={240}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-2xl text-blue-950 font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-red-600 italic">{service.tagline}</p>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-r from-blue-200 to-orange-200 py-16 px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-950">
            Our Proven Process
          </h2>
          <div className="relative">
            <div className="absolute top-0 left-1/2 w-1 h-full bg-blue-500 transform -translate-x-1/2"></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const getIcon = (iconName: string) => {
                  switch (iconName) {
                    case 'Search': return require('lucide-react').Search;
                    case 'Map': return require('lucide-react').Map;
                    case 'Palette': return require('lucide-react').Palette;
                    case 'Code': return require('lucide-react').Code;
                    case 'TestTube': return require('lucide-react').TestTube;
                    case 'Rocket': return require('lucide-react').Rocket;
                    case 'Headphones': return require('lucide-react').Headphones;
                    case 'TrendingUp': return require('lucide-react').TrendingUp;
                    default: return require('lucide-react').Search;
                  }
                };
                
                const IconComponent = getIcon(step.icon);
                
                return (
                  <div key={index} className="relative">
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                      <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-3' : 'pl-3'}`}>
                        <div className={`bg-white rounded-lg shadow-lg p-6 inline-block ${index % 2 === 0 ? 'border-orange-500 border-r-4' : 'border-blue-500 border-l-4'} relative z-10`}>
                          <h3 className={`text-xl font-semibold mb-2 flex items-center ${index % 2 === 0 ? 'justify-end' : ''}`}>
                            {index % 2 !== 0 && (
                              <>
                                <IconComponent className="mr-2 text-orange-500 w-5 h-5" />
                                <span className="text-blue-900">{step.name}</span>
                              </>
                            )}
                            {index % 2 === 0 && (
                              <>
                                <span className="text-orange-500">{step.name}</span>
                                <IconComponent className="ml-2 text-blue-900 w-5 h-5" />
                              </>
                            )}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 transform transition duration-500 hover:scale-110 shadow-lg relative z-20">
                        <span className="text-white text-2xl font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-6 leading-normal">
          Let&apos;s collaborate to build something <span className="text-orange-600">extraordinary</span> together.
        </h1>
        <div className="mt-10">
          <Link 
            href="/start-a-project" 
            className="bg-orange-600 hover:bg-blue-950 text-white font-semibold py-3 px-5 rounded"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
