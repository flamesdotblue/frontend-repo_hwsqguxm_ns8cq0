import React from 'react';

const posts = [
  {
    title: 'Designing with Liquid Glass: A Fintech UI Guide',
    excerpt:
      'How to craft premium, low-noise interfaces using blur, transparency, and subtle light. Best practices and pitfalls to avoid.',
  },
  {
    title: 'Modern Auth: SSO, Passkeys, and Beyond',
    excerpt:
      'We break down today\'s authentication stack and how to ship secure flows without friction.',
  },
  {
    title: 'Scaling Payments: Events, Webhooks, and Idempotency',
    excerpt:
      'A practical approach to building resilient payment pipelines from day one.',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="relative mx-auto max-w-7xl px-6 py-20 md:px-8">
      <div className="text-center">
        <h2 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
          From our blog
        </h2>
        <p className="mt-3 text-white/70">Insights and playbooks from the team.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_40px_-10px_rgba(0,0,0,0.4)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-3 text-sm text-white/70">{p.excerpt}</p>
            <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300/90 hover:text-cyan-300">
              Read article <span aria-hidden>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
