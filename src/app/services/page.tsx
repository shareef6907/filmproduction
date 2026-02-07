'use client';

import Link from 'next/link';
import { Building2, Video, PartyPopper, Film, Camera, Palette, ChevronRight, CheckCircle, Play } from 'lucide-react';
import Footer from '@/components/Footer';

const services = [
  {
    id: 'corporate',
    title: 'Corporate Video Production',
    icon: Building2,
    description: 'Elevate your brand with professional corporate videos that communicate your message with clarity and impact.',
    link: '/services/corporate-video-bahrain',
    features: [
      'Company profile films',
      'CEO & executive interviews',
      'Training & onboarding videos',
      'Internal communications',
      'Annual report videos',
      'Investor presentations',
    ],
    price: 'From BHD 800',
  },
  {
    id: 'commercial',
    title: 'Commercial & Advertising',
    icon: Film,
    description: 'High-impact commercials and advertising content designed to drive awareness, engagement, and conversions.',
    features: [
      'TV commercials (TVC)',
      'Social media ads',
      'Product videos',
      'Brand campaigns',
      'Promotional content',
      'Digital advertising',
    ],
    price: 'From BHD 1,200',
  },
  {
    id: 'events',
    title: 'Event Filming & Photography',
    icon: PartyPopper,
    description: 'Capture every moment of your events with multi-camera coverage and professional editing.',
    features: [
      'Corporate events & conferences',
      'Gala dinners & awards',
      'Product launches',
      'Trade shows & exhibitions',
      'Same-day highlight edits',
      'Live streaming',
    ],
    price: 'From BHD 500',
  },
  {
    id: 'wedding',
    title: 'Wedding Videography',
    icon: Video,
    description: 'Cinematic wedding films that tell your love story with emotion, artistry, and timeless elegance.',
    link: '/services/wedding-videography-bahrain',
    features: [
      'Full-day coverage',
      'Cinematic highlight reel',
      'Multi-camera setup',
      'Drone aerial shots',
      'Same-day edits available',
      'Raw footage delivery',
    ],
    price: 'From BHD 600',
  },
  {
    id: 'drone',
    title: 'Drone Videography',
    icon: Camera,
    description: 'Stunning aerial perspectives using professional DJI drone systems for breathtaking footage.',
    features: [
      'Real estate & property',
      'Construction progress',
      'Tourism & hospitality',
      'Event aerial coverage',
      '4K & 6K resolution',
      'Licensed drone operators',
    ],
    price: 'From BHD 300',
  },
  {
    id: 'post',
    title: 'Post-Production & Editing',
    icon: Palette,
    description: 'Transform raw footage into polished, professional content with our editing and color grading services.',
    features: [
      'Video editing & assembly',
      'Color grading (DaVinci Resolve)',
      'Motion graphics & titles',
      'Sound design & mixing',
      'Subtitles & captions',
      'Format conversion',
    ],
    price: 'From BHD 200',
  },
];

const equipment = [
  { name: 'RED Komodo 6K', category: 'Camera' },
  { name: 'Blackmagic Pocket 6K Pro', category: 'Camera' },
  { name: 'Sony FX6', category: 'Camera' },
  { name: 'DJI Inspire 3', category: 'Drone' },
  { name: 'DJI Ronin 4D', category: 'Stabilizer' },
  { name: 'Aputure 600D Pro', category: 'Lighting' },
  { name: 'DaVinci Resolve Studio', category: 'Software' },
  { name: 'Adobe Creative Suite', category: 'Software' },
];

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black" />
          <div className="relative text-center px-6">
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              Our <span className="text-red-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Full-service video production for businesses in Bahrain and the GCC. From concept to delivery.
            </p>
          </div>
        </section>

        {/* Services */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-700">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-red-400 font-bold">{service.price}</span>
                  {service.link ? (
                    <Link href={service.link} className="text-white/60 hover:text-white text-sm flex items-center gap-1">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      href={`https://wa.me/97339007750?text=Hi, I'm interested in ${service.title}`}
                      className="text-white/60 hover:text-white text-sm flex items-center gap-1"
                    >
                      Get Quote <ChevronRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Equipment */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Equipment</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We use cinema-grade cameras and professional gear to ensure every project looks its absolute best.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {equipment.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-xs text-red-400 mb-1">{item.category}</p>
                  <p className="font-bold">{item.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A streamlined production process that delivers exceptional results on time and on budget.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'We discuss your goals, audience, and vision for the project.' },
                { step: '02', title: 'Pre-Production', desc: 'Scripting, storyboarding, location scouting, and planning.' },
                { step: '03', title: 'Production', desc: 'Professional filming with our cinema-grade equipment.' },
                { step: '04', title: 'Delivery', desc: 'Editing, color grading, and delivery in your required formats.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-5xl font-black text-red-500/30 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-red-900/30 to-red-600/30 border border-red-500/30 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Project Today</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Tell us about your video production needs and get a free quote within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/97339007750"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors flex items-center gap-2"
              >
                Get a Free Quote <ChevronRight className="w-4 h-4" />
              </a>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-colors flex items-center gap-2"
              >
                <Play className="w-4 h-4" /> View Portfolio
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Film Production Bahrain',
            description: 'Professional video production company in Bahrain offering corporate videos, commercials, event filming, and wedding videography.',
            url: 'https://filmproductionbahrain.com',
            telephone: '+97339007750',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Manama',
              addressCountry: 'BH',
            },
            priceRange: 'BHD 300 - BHD 5000+',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Video Production Services',
              itemListElement: services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.description,
                },
              })),
            },
          }),
        }}
      />
    </>
  );
}
