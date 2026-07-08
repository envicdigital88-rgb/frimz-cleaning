import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600">
            Have a project in mind or need reliable property maintenance
            support? Frimz Cleaning is here to help with Professional Cleaning
            services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {[
                { icon: Phone, bg: 'bg-brand-100', text: 'text-brand-700', title: 'Phone', content: '+44 7570946109' },
                { icon: MessageCircle, bg: 'bg-green-100', text: 'text-green-600', title: 'WhatsApp', content: '+44 7570946109' },
                { icon: MapPin, bg: 'bg-brand-100', text: 'text-brand-700', title: 'Location', content: 'Stratton, Swindon, United Kingdom' },
                { icon: Clock, bg: 'bg-gold/20', text: 'text-gold-dark', title: 'Operating Hours', content: 'Always Open - 24/7 Service' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`${item.bg} p-3 rounded-full ${item.text} shrink-0 transition-colors group-hover:bg-brand-900 group-hover:text-white`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 mt-1">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 pt-8 border-t border-slate-200"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://web.facebook.com/profile.php?id=61577504291194"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-brand-900 text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl">
                
                Visit our Facebook Page
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Request a Free Quote
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-slate-700">
                    
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none transition-all"
                    placeholder="John" />
                  
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-slate-700">
                    
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none transition-all"
                    placeholder="Doe" />
                  
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-2"
              >
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700">
                  
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com" />
                
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-2"
              >
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-slate-700">
                  
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none transition-all bg-white">
                  
                  <option value="">Select a service...</option>
                  <option value="domestic">Domestic/Home Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="commercial">
                    Commercial & Office Cleaning
                  </option>
                  <option value="end-tenancy">End of Tenancy Cleaning</option>
                  <option value="airbnb">Airbnb & Holiday Let</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-2"
              >
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your cleaning needs...">
                </textarea>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-brand-900 text-white font-semibold py-4 rounded-xl hover:bg-brand-800 transition-colors shadow-lg hover:shadow-xl mt-2">
                
                Send Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};