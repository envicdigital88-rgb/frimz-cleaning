import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
  {
    name: 'Home',
    href: '#'
  },
  {
    name: 'About Us',
    href: '#about'
  },
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Gallery',
    href: '#gallery'
  },
  {
    name: 'Service Areas',
    href: '#areas'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center gap-2"
            onClick={(e) => handleNavClick(e, '#')}
          >
            <div className={`relative transition-all duration-300 rounded-full ${
              isScrolled 
                ? 'bg-white border-2 border-gold shadow-lg p-2' 
                : 'bg-white/95 border-2 border-gold shadow-xl p-2'
            }`}>
              {/* Logo */}
              <img 
                src="/logo.png" 
                alt="Frimz Cleaning Logo" 
                className={`transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`}
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium hover:text-brand-700 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'}`}>
              
                {link.name}
              </a>
            )}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg ${isScrolled ? 'bg-brand-900 text-white hover:bg-brand-800' : 'bg-white text-brand-900 hover:bg-brand-50'}`}>
              
              <Phone className="w-4 h-4" />
              <span>Get a Quote</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            
            {isMobileMenuOpen ?
            <X
              className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} /> :


            <Menu
              className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />

            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className="text-slate-700 font-medium py-2 px-4 hover:bg-brand-50 hover:text-brand-900 rounded-lg transition-colors">
          
              {link.name}
            </a>
        )}
          <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="flex items-center justify-center gap-2 px-5 py-3 mt-2 rounded-xl bg-brand-900 text-white font-semibold hover:bg-brand-800 transition-colors">
          
            <Phone className="w-4 h-4" />
            <span>Get a Free Quote</span>
          </a>
        </div>
      }
    </header>);

};