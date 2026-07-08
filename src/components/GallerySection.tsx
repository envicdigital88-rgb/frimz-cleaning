import React from 'react';
import { motion } from 'framer-motion';
const galleryImages = [
{
  src: '/image1.jpg',
  alt: 'Professional cleaning service',
  span: 'md:row-span-2'
},
{
  src: '/image2.jpg',
  alt: 'Quality cleaning results',
  span: ''
},
{
  src: '/image3.jpg',
  alt: 'Detailed cleaning work',
  span: ''
},
{
  src: '/image4.jpg',
  alt: 'Professional cleaning team',
  span: 'md:col-span-2'
},
{
  src: '/image5.jpg',
  alt: 'Expert cleaning service',
  span: ''
},
{
  src: '/image6.jpg',
  alt: 'Thorough cleaning standards',
  span: ''
}];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-700 font-semibold tracking-wide uppercase text-sm mb-2">
            Our Gallery
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The quality and attention to detail behind every job
          </h3>
          <p className="text-lg text-slate-600">
            Take a look at some of our recent projects and see the standards our
            clients can expect from Frimz Cleaning — from domestic deep cleans
            to complete property turnarounds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:auto-rows-[240px]">
          {galleryImages.map((image, index) =>
          <motion.figure
            key={index}
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.08
            }}
            className={`relative overflow-hidden rounded-2xl group ${image.span}`}>
            
              <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {image.alt}
              </figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </section>);

};