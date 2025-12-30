import React from 'react';
import { ArrowRight, Twitter, Linkedin, Mail, Facebook, Instagram, Users, Award, Heart, Globe, TrendingUp, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
export function HomePage() {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
  <div
    className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl -z-10 animate-pulse-slow"
    style={{ animationDelay: '1s' }}
  ></div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* LEFT: Text Content */}
    <div className="space-y-10 text-center lg:text-left animate-fade-in">
      <div className="space-y-3">
        <h2 className="text-sm uppercase tracking-[0.2em] text-blue-400 font-semibold">
          Social Activist & Entrepreneur
        </h2>

        <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif font-medium text-slate-50 leading-tight">
          Bishnu{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-400">
            Dahal
          </span>
        </h1>
      </div>

      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mx-auto lg:mx-0"></div>

      <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
        Dedicated to community development, youth empowerment, and driving
        sustainable social change through leadership and service.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Link
          to="/about"
          className="px-8 py-4 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2 group"
        >
          About Me
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          to="/contact"
          className="px-8 py-4 bg-slate-800 border border-slate-700 text-slate-100 rounded-full text-sm font-medium hover:bg-slate-700 transition-all"
        >
          Get in Touch
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex gap-5 justify-center lg:justify-start pt-6">
        {[Facebook, Twitter, Linkedin, Instagram, Mail].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="text-slate-500 hover:text-blue-400 transition transform hover:-translate-y-1 p-2 rounded-full hover:bg-slate-800"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>

    {/* RIGHT: Portrait */}
    <div className="relative mx-auto lg:ml-auto max-w-md">
      <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
        <img
          src="/bishnudahal.png"
          alt="Bishnu Dahal"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <p className="font-bold text-xl">Bishnu Dahal</p>
          <p className="text-blue-100">Social Activist & Entrepreneur</p>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
    </div>

  </div>
</section>

      {/* Impact Stats Section */}
      <section className="py-24 px-6 bg-slate-800/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-50 mb-4">
              Making an Impact
            </h2>
            <p className="text-slate-400 font-light max-w-2xl mx-auto">
              Through dedication and collaboration, we've achieved meaningful
              milestones in community development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{
            icon: Users,
            number: '5000+',
            label: 'Lives Impacted',
            color: 'blue'
          }, {
            icon: Award,
            number: '50+',
            label: 'Projects Completed',
            color: 'orange'
          }, {
            icon: Heart,
            number: '10+',
            label: 'Years of Service',
            color: 'red'
          }, {
            icon: Globe,
            number: '15+',
            label: 'Communities Served',
            color: 'green'
          }].map((stat, index) => <div key={index} className="glass-card p-6 rounded-2xl text-center group hover:-translate-y-2 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 bg-${stat.color}-500/10 text-${stat.color}-400 group-hover:scale-110 transition-transform`}>
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-50 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-50 mb-4">
              Featured Initiatives
            </h2>
            <p className="text-slate-400 font-light max-w-2xl mx-auto">
              Key projects that demonstrate our commitment to sustainable
              community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: 'Clean Water Initiative',
            description: 'Providing access to clean drinking water for 5,000+ rural villagers through sustainable infrastructure.',
            icon: Globe,
            color: 'blue'
          }, {
            title: 'Youth Leadership Program',
            description: 'Mentoring 500+ young leaders through workshops and hands-on community service projects.',
            icon: TrendingUp,
            color: 'orange'
          }, {
            title: 'Literacy Drive',
            description: 'Establishing libraries and reading programs in underserved communities across Nepal.',
            icon: BookOpen,
            color: 'purple'
          }].map((project, index) => <div key={index} className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${project.color}-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>

                <div className={`inline-flex p-3 rounded-xl mb-6 bg-${project.color}-500/10 text-${project.color}-400 relative z-10`}>
                  <project.icon size={24} />
                </div>

                <h3 className="text-xl font-serif text-slate-50 mb-3 relative z-10">
                  {project.title}
                </h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed relative z-10">
                  {project.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

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
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1 flex items-center gap-2 group">
                Start a Conversation{' '}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/timeline" className="px-8 py-4 bg-slate-800 border border-slate-700 text-slate-100 rounded-full text-sm font-medium hover:border-blue-500/50 hover:bg-slate-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                View My Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
}