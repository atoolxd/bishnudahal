import React from 'react';
import Image from 'next/image';
import { ArrowRight, Twitter, Linkedin, Mail, Facebook, Instagram, Users, Award, Heart, Globe, TrendingUp, BookOpen } from 'lucide-react';
import Link from 'next/link';
import HeroSection from '@/components/hero/HeroSection';
import DynamicHugeicon from '@/components/DynamicHugeicon';
import FeaturedInitiatives from '@/components/hero/FeaturedInitiatives';
import MakeImpact from '@/components/hero/Make-impact';
// import bishnu from "@/assets/images/bishnudahal.png"; // import the file

export default function HomePage() {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-h-screen pt-32 px-6 relative overflow-hidden flex items-center">
  <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
  <div
    className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse-slow"
    style={{ animationDelay: '1s' }}
  ></div>

 <HeroSection/>
</section>

      {/* Impact Stats Section */}
    <MakeImpact/>
      {/* Featured Work Section */}
          <FeaturedInitiatives/>
      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Heart className="text-orange-400" size={32} />
            </div>
          </div>

          <blockquote className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-8">
            "Service to humanity is the best work of life. Every small action
            creates ripples of positive change in our communities."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <p className="text-sm uppercase tracking-widest text-slate-400">
              Bishnu Dahal
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 md:p-16 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -z-10"></div>

            <h2 className="text-3xl md:text-4xl font-serif text-slate-50 mb-6">
              Let's Create Change Together
            </h2>
            <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto mb-10">
              Whether you're interested in collaboration, have a project idea,
              or want to learn more about our initiatives, I'd love to connect.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1 flex items-center gap-2 group">
                Start a Conversation{' '}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/timeline" className="px-8 py-4 bg-slate-800 border border-slate-700 text-slate-100 rounded-full text-sm font-medium hover:border-blue-500/50 hover:bg-slate-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                View My Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
}