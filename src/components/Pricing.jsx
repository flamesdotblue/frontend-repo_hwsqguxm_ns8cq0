import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    features: ['Auth + SSO', 'Basic analytics', 'Up to 1,000 API calls/mo'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$29',
    period: 'per month',
    features: ['Everything in Starter', 'Advanced fraud shield', '100,000 API calls/mo'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$99',
    period: 'per month',
    features: ['Priority support', 'Webhooks + events', 'Unlimited API calls'],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20 md:px-8">
      <div className="text-center">
        <h2 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-3 text-white/70">Pay as you grow. Cancel anytime.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_40px_-10px_rgba(0,0,0,0.4)] ${
              tier.highlight ? 'ring-2 ring-cyan-400/60' : ''
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white">{tier.price}</span>
              <span className="text-sm text-white/60">{tier.period}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-xl px-5 py-3 text-sm font-semibold transition ${
              tier.highlight
                ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white shadow-lg'
                : 'bg-white/10 text-white border border-white/15 backdrop-blur-md hover:bg-white/15'
            }`}>
              {tier.highlight ? 'Start free trial' : 'Choose plan'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
