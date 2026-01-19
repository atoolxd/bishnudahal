import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Heart } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS, FOCUS_AREAS } from '@/lib/utils/constants';

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white pt-16 pb-8 mt-24">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-serif font-bold mb-4 block hover:text-blue-400 transition-colors"
            >
              Bishnu<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              Dedicated to driving positive social change through leadership,
              service, and community empowerment.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social, index) => {
                const IconComponent = social.icon === 'Facebook' ? Facebook :
                                    social.icon === 'Twitter' ? Twitter :
                                    social.icon === 'Linkedin' ? Linkedin :
                                    social.icon === 'Instagram' ? Instagram : Facebook;

                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-all hover:-translate-y-1"
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm font-light transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6">
              Focus Areas
            </h3>
            <ul className="space-y-3">
              {FOCUS_AREAS.map((area, index) => (
                <li key={index} className="text-slate-400 text-sm font-light flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  {area}
                </li>
              ))}
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
                <span>{SITE_CONFIG.email}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm font-light">
                <Phone size={16} className="mt-0.5 text-blue-500 shrink-0" />
                <span>{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm font-light">
                <MapPin size={16} className="mt-0.5 text-blue-500 shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm font-light">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm font-light flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" />{' '}
            for a better world
          </p>
        </div>
      </div>
    </footer>
  );
}