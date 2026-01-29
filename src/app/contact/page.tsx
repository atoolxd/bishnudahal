'use client';

import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
if (!API_BASE) throw new Error('NEXT_PUBLIC_API_BASE is not defined');

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

async function submitContact(data: ContactPayload) {
  const res = await fetch(`${API_BASE}/contacts/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.message || 'Failed to submit contact form');
  }

  return res.json();
}

export default function Contact() {
  const [form, setForm] = useState<ContactPayload>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-50 mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-400 font-light text-lg max-w-xl mx-auto">
            Interested in collaborating or have a project in mind? I'd love to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 animate-slide-up">
          {/* Contact Info */}
          <div className="space-y-6">
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
                    <span className="block text-xs text-slate-500 mb-0.5">Email</span>
                    <span className="text-slate-200 font-medium text-sm">hello@bishnudahal.com</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 mb-0.5">Phone</span>
                    <span className="text-slate-200 font-medium text-sm">+977 980 000 0000</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 mb-0.5">Location</span>
                    <span className="text-slate-200 font-medium text-sm">Kathmandu, Nepal</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
                Connect
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-3 py-1.5 bg-slate-700 hover:bg-blue-600 hover:text-white text-slate-300 text-xs font-medium rounded-md transition-colors border border-slate-600"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="glass-card p-8 rounded-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl text-slate-50 mb-2">Message Sent!</h3>
                  <p className="text-slate-300 mb-8">Thank you for reaching out.</p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase font-bold border-b"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Name"
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Email"
                  />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Phone"
                  />
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option>General Inquiry</option>
                    <option>Collaboration</option>
                    <option>Speaking Opportunity</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field"
                    placeholder="Your message..."
                  />

                  <button
  type="submit"
  disabled={mutation.status === 'pending'}
  className="btn-primary w-full sm:w-auto px-8 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
>
  {mutation.status === 'pending' ? 'Sending...' : 'Send Message'}
  <Send size={16} />
</button>

                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
