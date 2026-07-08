import React, { useState } from 'react';
import ScrollExpandMedia from './components/ScrollExpandMedia';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Preloader } from './components/Preloader';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader onLoadingComplete={() => setIsLoading(false)} />
      <div className="min-h-screen bg-white font-sans text-slate-900 w-full overflow-x-hidden">
      {!isLoading && <Navbar />}

      <main>
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc="/image7.jpg"
          bgImageSrc="/image8.jpg"
          title="Frimz Cleaning"
          scrollToExpand="Scroll to explore our services"
          textBlend={false}>
          
          <div className="max-w-4xl mx-auto text-center py-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Professional Cleaning Services You Can Trust
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              At Frimz Cleaning, we provide reliable, professional, and
              affordable cleaning services for homes, offices, commercial
              properties, and rental accommodations. Whether you need regular
              housekeeping, a one-off deep clean, or end-of-tenancy cleaning,
              our experienced team is dedicated to delivering spotless results
              with exceptional attention to detail.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We understand that every property is unique, which is why we
              tailor our cleaning services to meet your specific requirements.
              Our commitment to quality, reliability, and customer satisfaction
              has made us a trusted choice for clients looking for a cleaner,
              healthier, and more welcoming environment.
            </p>
          </div>
        </ScrollExpandMedia>

        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ServiceAreasSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
    </>
  );
}