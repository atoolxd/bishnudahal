import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [{
    to: '/',
    label: 'Home'
  }, {
    to: '/about',
    label: 'About'
  }, {
    to: '/timeline',
    label: 'Timeline'
  },
  { to: '/gallery', label: 'Gallery' }, {
    to: '/blog',
    label: 'Blog'
  }, {
    to: '/contact',
    label: 'Contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-serif font-bold text-slate-100 tracking-tight hover:text-blue-400 transition-colors relative group">
          Bishnu<span className="text-blue-500">.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <NavLink key={link.to} to={link.to} className={({
          isActive
        }) => `text-xs uppercase tracking-widest font-medium transition-all duration-200 hover:-translate-y-0.5 ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-slate-100'}`}>
              {link.label}
            </NavLink>)}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-100 p-2 hover:bg-slate-800 rounded-full transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col gap-6 shadow-xl animate-slide-up">
          {navLinks.map(link => <NavLink key={link.to} to={link.to} className={({
        isActive
      }) => `text-sm uppercase tracking-widest font-medium transition-colors py-2 border-b border-slate-800 ${isActive ? 'text-blue-400' : 'text-slate-400 hover:text-slate-100'}`}>
              {link.label}
            </NavLink>)}
        </div>}
    </nav>;
}