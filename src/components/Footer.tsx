import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Heart } from 'lucide-react';
export function Footer() {
  return <footer className="relative bg-slate-950 text-white pt-16 pb-8 mt-24">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold mb-4 block hover:text-blue-400 transition-colors">
              Bishnu<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              Dedicated to driving positive social change through leadership,
              service, and community empowerment.
            </p>
            <div className="flex items-center gap-3">
              {[{
              icon: Facebook,
              href: '#',
              label: 'Facebook'
            }, {
              icon: Twitter,
              href: '#',
              label: 'Twitter'
            }, {
              icon: Linkedin,
              href: '#',
              label: 'LinkedIn'
            }, {
              icon: Instagram,
              href: '#',
              label: 'Instagram'
            }].map((social, index) => <a key={index} href={social.href} aria-label={social.label} className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all hover:-translate-y-1">
                  <social.icon size={16} />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[{
              to: '/',
              label: 'Home'
            }, {
              to: '/about',
              label: 'About'
            }, {
              to: '/timeline',
              label: 'Timeline'
            }, {
              to: '/blog',
              label: 'Blog'
            }, {
              to: '/contact',
              label: 'Contact'
            }].map(link => <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 hover:text-white text-sm font-light transition-colors hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6">
              Focus Areas
            </h3>
            <ul className="space-y-3">
              {['Youth Empowerment', 'Education & Literacy', 'Community Development', 'Rotary Service', 'Social Entrepreneurship'].map((area, index) => <li key={index} className="text-slate-400 text-sm font-light flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  {area}
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm font-light">
                <Mail size={16} className="mt-0.5 text-blue-500 shrink-0" />
                <span>hello@bishnudahal.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm font-light">
                <Phone size={16} className="mt-0.5 text-blue-500 shrink-0" />
                <span>+977 980 000 0000</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm font-light">
                <MapPin size={16} className="mt-0.5 text-blue-500 shrink-0" />
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm font-light">
            © {new Date().getFullYear()} Bishnu Dahal. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm font-light flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" />{' '}
            for a better world
          </p>
        </div>
      </div>
    </footer>;
}