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

      {/* Two Column Layout - Stacks on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image Placeholder - Top on Mobile */}
        <div className="relative min-h-[400px] md:min-h-[700px] border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-950 order-1 md:order-1">
          <div 
            className="absolute inset-0 bg-zinc-800"
            style={{
              filter: 'grayscale(1) contrast(1.2)',
              backgroundImage: 'linear-gradient(135deg, #18181b 25%, #27272a 25%, #27272a 50%, #18181b 50%, #18181b 75%, #27272a 75%, #27272a)',
              backgroundSize: '60px 60px'
            }}
          >
            <div className="absolute inset-0 border-2 border-zinc-800 m-6 md:m-8" />
            
            <div className="absolute top-6 md:top-8 left-6 md:left-8 w-10 md:w-12 h-10 md:h-12 border-l-2 border-t-2 border-white opacity-20" />
            <div className="absolute top-6 md:top-8 right-6 md:right-8 w-10 md:w-12 h-10 md:h-12 border-r-2 border-t-2 border-white opacity-20" />
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 w-10 md:w-12 h-10 md:h-12 border-l-2 border-b-2 border-white opacity-20" />
            <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 w-10 md:w-12 h-10 md:h-12 border-r-2 border-b-2 border-white opacity-20" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="border border-zinc-700 inline-block px-4 md:px-6 py-2 md:py-3 bg-black/50 backdrop-blur-sm">
                  <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
                    Portrait / High Contrast
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Content - Below Image on Mobile */}
        <div className="relative p-6 md:p-12 xl:p-20 bg-black flex flex-col justify-center order-2 md:order-2">
          <div className="mb-8 md:mb-12">
            <div className="border-l-2 border-l-yellow-500 pl-4">
              <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                About / 2026
              </span>
            </div>
          </div>

          <blockquote className="text-3xl md:text-4xl xl:text-6xl font-serif font-light leading-tight mb-4 tracking-tight">
            "Designing for the next generation of trust."
          </blockquote>
          
          <div className="text-2xl md:text-3xl xl:text-4xl font-serif font-light text-zinc-600 mb-8 md:mb-12 tracking-tight">
            For Nuno.
          </div>

          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              As VP of Product Design at <span className="text-white font-medium">Uphold</span>, I lead a 16-person team with a $1.05M budget. My work sits at the intersection where AI serves as the multiplier and human empathy remains the compass. The 2026 Strategy is not about replacing human judgment—it is about amplifying it systematically.
            </p>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              <span className="text-yellow-500 font-mono">AI handles the scale.</span> I handle the strategy, the ethics, and the leadership. Together, we design for <span className="text-white font-medium">human agency</span>—empowering users to make informed decisions in complex, high-stakes environments. The results speak: <span className="text-emerald-400 font-mono">+41% efficiency</span>, <span className="text-blue-400 font-mono">29% waste reduction</span>, and <span className="text-violet-400 font-mono">750% research maturity growth</span>.
            </p>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Beyond the metrics and frameworks, I am <span className="text-white font-medium">Nuno's father</span>. That role anchors every decision in long-term thinking and ethical responsibility. The trust architectures we build today define the world he inherits tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-0 border border-zinc-800 mb-8 md:mb-0">
            <div className="border-r border-b border-zinc-800 p-4 md:p-6 bg-zinc-950">
              <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-2">
                Role
              </div>
              <div className="text-white text-xs md:text-sm">
                VP Product Design
              </div>
            </div>
            <div className="border-b border-zinc-800 p-4 md:p-6 bg-zinc-950">
              <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-2">
                Company
              </div>
              <div className="text-white text-xs md:text-sm">
                Uphold
              </div>
            </div>
            <div className="border-r border-zinc-800 p-4 md:p-6 bg-zinc-950">
              <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-2">
                Location
              </div>
              <div className="text-white font-mono text-xs md:text-sm">
                Portugal
              </div>
            </div>
            <div className="p-4 md:p-6 bg-zinc-950">
              <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-2">
                Focus
              </div>
              <div className="text-white font-mono text-xs md:text-sm">
                Strategy / AI / Empathic Design
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="w-12 md:w-16 h-px bg-zinc-800" />
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