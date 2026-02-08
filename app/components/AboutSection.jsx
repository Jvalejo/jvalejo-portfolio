'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative bg-black border-t-2 border-zinc-800">
      {/* Section Label */}
      <div className="px-6 md:px-12 py-12 border-b border-zinc-800">
        <div className="border border-zinc-800 inline-block px-4 py-2 bg-zinc-950">
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            The Human Core
          </span>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left: Image Placeholder */}
        <div className="relative min-h-[500px] md:min-h-[700px] border-r-0 md:border-r border-zinc-800 bg-zinc-950">
          {/* Placeholder Image with High Contrast Filter */}
          <div 
            className="absolute inset-0 bg-zinc-800"
            style={{
              filter: 'grayscale(1) contrast(1.2)',
              backgroundImage: 'linear-gradient(135deg, #18181b 25%, #27272a 25%, #27272a 50%, #18181b 50%, #18181b 75%, #27272a 75%, #27272a)',
              backgroundSize: '60px 60px'
            }}
          >
            {/* Image Overlay Frame */}
            <div className="absolute inset-0 border-2 border-zinc-800 m-8" />
            
            {/* Corner Markers */}
            <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-white opacity-20" />
            <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-white opacity-20" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-white opacity-20" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-white opacity-20" />
            
            {/* Placeholder Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="border border-zinc-700 inline-block px-6 py-3 bg-black/50 backdrop-blur-sm">
                  <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
                    Portrait / High Contrast
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Bio Content */}
        <div className="relative p-8 md:p-16 xl:p-20 bg-black flex flex-col justify-center">
          {/* Label */}
          <div className="mb-12">
            <div className="border-l-2 border-l-yellow-500 pl-4">
              <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                About / 2026
              </span>
            </div>
          </div>

          {/* Large Serif Quote */}
          <blockquote className="text-4xl md:text-5xl xl:text-6xl font-serif font-light leading-tight mb-12 tracking-tight">
            "Designing for the next generation of trust."
          </blockquote>

          {/* Bio Content */}
          <div className="space-y-6 mb-12">
            <p className="text-zinc-400 text-lg leading-relaxed">
              As VP of Product Design at <span className="text-white font-medium">Uphold</span>, I architect systematic transformation at the intersection of human intuition and machine capability. The 2026 Strategy represents a fundamental shift: moving from assistive AI tools to agentic systems that autonomously execute strategic initiatives.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              My approach is data-driven and ruthlessly efficient—<span className="text-emerald-400 font-mono">+41% AI-augmented efficiency</span>, <span className="text-blue-400 font-mono">29% operational waste reduction</span>, and <span className="text-violet-400 font-mono">750% research maturity growth</span>. These aren't just metrics; they're proof that design, when treated as a strategic function, drives measurable business outcomes.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              But beyond the spreadsheets and systems, I'm <span className="text-white font-medium">Nuno's father</span>—a role that grounds every decision in long-term thinking and ethical responsibility. The products we build today shape the trust architectures of tomorrow.
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-2 gap-0 border border-zinc-800">
            <div className="border-r border-b border-zinc-800 p-6 bg-zinc-950">
              <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-2">
                Role
              </div>
              <div className="text-white font-mono text-sm">
                VP Product Design
              </div>
            </div>
            <div className="border-b border-zinc-800 p-6 bg-zinc-950">
              <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-2">
                Company
              </div>
              <div className="text-white font-mono text-sm">
                Uphold
              </div>
            </div>
            <div className="border-r border-zinc-800 p-6 bg-zinc-950">
              <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-2">
                Location
              </div>
              <div className="text-white font-mono text-sm">
                Porto, PT
              </div>
            </div>
            <div className="p-6 bg-zinc-950">
              <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-2">
                Focus
              </div>
              <div className="text-white font-mono text-sm">
                AI / Strategy
              </div>
            </div>
          </div>

          {/* Signature Element */}
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-zinc-800" />
              <span className="text-zinc-700 font-mono text-xs tracking-widest">
                JEISON VALEJO / 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;