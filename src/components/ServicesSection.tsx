import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
const services = [
{
  title: 'Domestic/Home Cleaning',
  description:
  'Regular and one-off cleaning for houses and apartments. We ensure your living space is consistently fresh and welcoming.',
  imageSrc: '/image1.jpg',
  category: 'Residential'
},
{
  title: 'Deep Cleaning',
  description:
  'Thorough cleaning for kitchens, bathrooms, living areas, and the entire property to remove deep-seated dirt and grime.',
  imageSrc: '/image2.jpg',
  category: 'Specialized'
},
{
  title: 'Commercial & Office',
  description:
  'Professional cleaning services for offices, shops, and business premises to maintain a productive work environment.',
  imageSrc: '/image3.jpg',
  category: 'Commercial'
},
{
  title: 'End of Tenancy',
  description:
  'Comprehensive cleaning for tenants, landlords, and letting agents before or after moving to ensure deposit returns.',
  imageSrc: '/image4.jpg',
  category: 'Moving'
},
{
  title: 'Airbnb & Holiday Let',
  description:
  'Changeover and turnaround cleaning between guest stays to guarantee 5-star reviews for cleanliness.',
  imageSrc: '/image5.jpg',
  category: 'Hospitality'
},
{
  title: 'Carpet & Upholstery',
  description:
  'Deep cleaning of carpets, rugs, sofas, and upholstered furniture to remove stains and refresh fabrics.',
  imageSrc: '/image6.jpg',
  category: 'Specialized'
},
{
  title: 'Oven Cleaning',
  description:
  'Removal of grease, burnt-on residue, and food buildup to restore your oven to a sparkling condition.',
  imageSrc: '/image7.jpg',
  category: 'Specialized'
},
{
  title: 'Window Cleaning',
  description:
  'Interior and exterior window cleaning for a streak-free, crystal-clear finish that lets the light in.',
  imageSrc: '/image8.jpg',
  category: 'Exterior'
},
{
  title: 'Move-In / Move-Out',
  description:
  'Preparing properties for new occupants with a complete, top-to-bottom clean of every room.',
  imageSrc: '/image9.jpg',
  category: 'Moving'
},
{
  title: 'One-Off Cleaning',
  description:
  'Tailored cleaning for special occasions or seasonal requirements, exactly when you need it.',
  imageSrc: '/image1.jpg',
  category: 'Flexible'
},
{
  title: 'Regular Cleaning Plans',
  description:
  'Weekly, fortnightly, or monthly scheduled cleaning visits to keep your space consistently spotless.',
  imageSrc: '/image2.jpg',
  category: 'Recurring'
},
{
  title: 'Property Maintenance',
  description:
  'Cleaning services for landlords, property managers, and managed properties across your portfolio.',
  imageSrc: '/image3.jpg',
  category: 'Commercial'
}];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Professional Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-slate-600"
          >
            We offer a comprehensive range of cleaning solutions tailored to
            meet the specific needs of homes, businesses, and rental properties.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              category={service.category} />
          </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};