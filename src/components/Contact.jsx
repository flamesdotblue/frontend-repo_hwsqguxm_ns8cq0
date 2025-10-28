import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks, ${name || 'friend'} — we\'ll be in touch shortly!`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-20 md:px-8">
      <div className="text-center">
        <h2 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
          Get in touch
        </h2>
        <p className="mt-3 text-white/70">We\'ll get back within 1 business day.</p>
      </div>

      <form onSubmit={onSubmit} className="mt-10 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_40px_-10px_rgba(0,0,0,0.4)]">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm text-white/70">Name</label>
            <input
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-white placeholder-white/40 outline-none backdrop-blur-md focus:ring-2 focus:ring-cyan-400/60"
              placeholder="Ada Lovelace"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-white placeholder-white/40 outline-none backdrop-blur-md focus:ring-2 focus:ring-cyan-400/60"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-white/70">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-white placeholder-white/40 outline-none backdrop-blur-md focus:ring-2 focus:ring-cyan-400/60"
            placeholder="Tell us about your project..."
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-white/60">By submitting, you agree to our privacy policy.</p>
          <button type="submit" className="rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-cyan-400 hover:to-fuchsia-500">
            Send message
          </button>
        </div>
        {status && (
          <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
            {status}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
