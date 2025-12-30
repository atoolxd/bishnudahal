import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };
  return <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-50 mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-400 font-light text-lg max-w-xl mx-auto">
            Interested in collaborating or have a project in mind? I'd love to
            hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 animate-slide-up">
          {/* Contact Info Cards */}
          <div className="md:col-span-1 space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
                Contact Info
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 mb-0.5">
                      Email
                    </span>
                    <span className="text-slate-200 font-medium text-sm">
                      hello@bishnudahal.com
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 mb-0.5">
                      Phone
                    </span>
                    <span className="text-slate-200 font-medium text-sm">
                      +977 980 000 0000
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 mb-0.5">
                      Location
                    </span>
                    <span className="text-slate-200 font-medium text-sm">
                      Kathmandu, Nepal
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
                Connect
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => <a key={social} href="#" className="px-3 py-1.5 bg-slate-700 hover:bg-blue-600 hover:text-white text-slate-300 text-xs font-medium rounded-md transition-colors border border-slate-600">
                      {social}
                    </a>)}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              {submitted ? <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-serif text-2xl text-slate-50 mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-light text-slate-300 max-w-xs mx-auto mb-8">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-xs uppercase tracking-widest font-bold text-slate-100 border-b-2 border-slate-100 pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
                    Send another message
                  </button>
                </div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-widest text-slate-400 font-bold ml-1">
                        Name
                      </label>
                      <input type="text" id="name" required className="input-field" placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-slate-400 font-bold ml-1">
                        Email
                      </label>
                      <input type="email" id="email" required className="input-field" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs uppercase tracking-widest text-slate-400 font-bold ml-1">
                      Subject
                    </label>
                    <select id="subject" className="input-field appearance-none">
                      <option>General Inquiry</option>
                      <option>Collaboration</option>
                      <option>Speaking Opportunity</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-slate-400 font-bold ml-1">
                      Message
                    </label>
                    <textarea id="message" required rows={5} className="input-field resize-none" placeholder="How can we work together?"></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto px-8 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </form>}
            </div>
          </div>
        </div>
      </div>
    </main>;
}