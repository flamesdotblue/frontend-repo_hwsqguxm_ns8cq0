import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background gradients for liquid glass feel */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-500/30 to-teal-400/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-12 md:px-8">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Live card security for modern fintech
          </span>
          <h1 className="mt-4 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
            Liquid Glass Financial Platform
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
            Build, launch, and scale payments with a minimalist, glassmorphic UI. Secure auth, real-time insights, and a premium 3D experience.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15 border border-white/15 shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
              Get Started
            </button>
            <button className="rounded-xl bg-gradient-to-r from-cyan-400/90 to-fuchsia-500/90 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:from-cyan-400 hover:to-fuchsia-500 shadow-lg">
              Sign in
            </button>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
            <span>SSO + 2FA</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>PCI-DSS Ready</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>99.99% uptime</span>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[50vh] w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md md:h-[70vh] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_80px_-20px_rgba(0,0,0,0.4)]">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-white/0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
