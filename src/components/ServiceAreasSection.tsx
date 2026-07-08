import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const areas = [
'Swindon',
'Royal Wootton Bassett',
'Highworth',
'Wroughton',
'Purton',
'Cricklade',
'Shrivenham',
'Marlborough',
'Lyneham',
'Chiseldon',
'Wanborough',
'Blunsdon',
'Haydon Wick',
'Stratton',
'Watchfield'];

export const ServiceAreasSection = () => {
  return (
    <section id="areas" className="py-20 bg-brand-900 text-white w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold">
              Our Service Areas
            </h2>
            <p className="text-brand-100 text-lg">
              Primary Coverage:{' '}
              <span className="font-semibold text-white">
                Stratton, Swindon, United Kingdom
              </span>
            </p>
            <p className="text-brand-200">
              We proudly serve Stratton and the surrounding towns and villages
              across Wiltshire, bringing our professional cleaning services
              right to your doorstep.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map((area, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-2 bg-brand-800/50 p-3 rounded-lg border border-brand-700/50 cursor-pointer">
                
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-medium text-sm md:text-base">
                    {area}
                  </span>
                </motion.div>
              )}
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 text-center lg:text-left"
            >
              <p className="text-brand-300 text-sm italic">
                And surrounding towns and villages across Wiltshire.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};