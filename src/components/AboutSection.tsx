import React from 'react';
import { CheckCircle2, Award, Users, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '100%', label: 'Satisfaction Rate' },
    { icon: Clock, value: '24/7', label: 'Available Service' },
    { icon: Star, value: '5 Star', label: 'Rated Service' }
  ];

  const features = [
    {
      icon: CheckCircle2,
      title: 'Professional Team',
      description: 'Experienced and trained cleaning professionals dedicated to excellence.'
    },
    {
      icon: CheckCircle2,
      title: 'Eco-Friendly Products',
      description: 'Safe, effective, and environmentally responsible cleaning solutions.'
    },
    {
      icon: CheckCircle2,
      title: 'Flexible Scheduling',
      description: 'Service times that work around your busy schedule and needs.'
    },
    {
      icon: CheckCircle2,
      title: 'Affordable Pricing',
      description: 'Competitive rates with transparent pricing and no hidden fees.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-brand-900 font-semibold tracking-wide uppercase text-sm mb-3">
            About Frimz Cleaning
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Creating Clean, Healthy, and Welcoming Spaces
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Frimz Cleaning, we believe a clean environment is the foundation of a healthier, 
            happier, and more productive life.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-900 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-brand-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/image9.jpg"
                  alt="Frimz Cleaning professional service"
                  className="w-full h-[500px] object-cover object-[center_30%]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent" />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-brand-900 to-brand-700 text-white p-8 rounded-2xl shadow-2xl hidden md:block border-4 border-white"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-5xl font-bold text-gold mb-2">100%</div>
                  <div className="text-sm font-semibold">Satisfaction</div>
                  <div className="text-sm font-semibold">Guaranteed</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-slate-700 leading-relaxed"
            >
              We provide professional cleaning services for homes, offices, commercial premises, 
              rental properties, and holiday accommodations, delivering exceptional results with 
              every visit.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-slate-700 leading-relaxed"
            >
              Our experienced team is dedicated to maintaining the highest standards of cleanliness 
              through careful attention to detail, reliable service, and a customer-focused approach.
            </motion.p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-gradient-to-br from-brand-900 to-brand-700 text-white p-6 rounded-2xl shadow-lg"
              >
                <CheckCircle2 className="w-8 h-8 text-gold mb-3" />
                <h4 className="font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  To provide dependable, high-quality cleaning services that create cleaner, 
                  healthier environments.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-gradient-to-br from-gold to-gold-dark text-white p-6 rounded-2xl shadow-lg"
              >
                <CheckCircle2 className="w-8 h-8 text-brand-900 mb-3" />
                <h4 className="font-bold text-lg mb-2">Our Vision</h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  To become a trusted and preferred cleaning company, recognised for 
                  professionalism and excellence.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
            Why Choose Frimz Cleaning?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-50 rounded-xl mb-4">
                  <feature.icon className="w-6 h-6 text-brand-900" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};