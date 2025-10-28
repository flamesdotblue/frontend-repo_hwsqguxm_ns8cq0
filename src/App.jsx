import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white selection:bg-fuchsia-400/30 selection:text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg" />
            <span className="text-sm font-semibold tracking-tight">LiquidGlass</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#blog" className="hover:text-white">Blog</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md md:block hover:bg-white/10">Sign in</button>
            <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">Create account</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <Blog />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-xs text-white/60 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} LiquidGlass, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
