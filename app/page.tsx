'use client';

import React from 'react';
import ChatWidget from './components/ChatWidget';
import HorizontalScrollPillars from './components/HorizontalScrollPillars';
import MouseCursorLights from './components/MouseCursorLights';
import AboutSection from './components/AboutSection';

export default function PortfolioApp() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mouse Cursor Light Orbs */}
      <MouseCursorLights />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 py-20 border-b-2 border-zinc-800">
        <div 
          className="max-w-7xl w-full text-center space-y-12 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <div className="border-2 border-zinc-800 inline-block p-8 md:p-12 bg-zinc-950">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter leading-none uppercase">
              Jeison<br/>Valejo
            </h1>
          </div>

          <div className="border-2 border-zinc-800 inline-block px-6 md:px-8 py-3 md:py-4 bg-black">
            <p className="text-xs md:text-sm text-zinc-400 font-mono uppercase tracking-widest">
              VP of Product Design | Nuno's Father
            </p>
          </div>
        </div>
      </section>

      {/* Bento KPI Grid */}
      <section className="px-6 md:px-8 py-12 md:py-20 max-w-7xl mx-auto border-b-2 border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-zinc-800">
          <div 
            className="border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-zinc-800 p-8 md:p-12 lg:p-16 bg-zinc-950 hover:bg-black transition-colors group"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            <div className="border-t-4 border-t-emerald-400 mb-6 w-16" />
            <div className="text-6xl md:text-7xl lg:text-8xl font-black font-mono mb-4 text-white group-hover:text-emerald-400 transition-colors">
              +41%
            </div>
            <div className="text-xs md:text-sm text-zinc-400 font-mono uppercase tracking-wider">
              AI-Augmented Efficiency
            </div>
          </div>
          
          <div 
            className="border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-zinc-800 p-8 md:p-12 lg:p-16 bg-zinc-950 hover:bg-black transition-colors group"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            <div className="border-t-4 border-t-blue-500 mb-6 w-16" />
            <div className="text-6xl md:text-7xl lg:text-8xl font-black font-mono mb-4 text-white group-hover:text-blue-500 transition-colors">
              29%
            </div>
            <div className="text-xs md:text-sm text-zinc-400 font-mono uppercase tracking-wider">
              Operational Waste Reduction
            </div>
          </div>
          
          <div 
            className="p-8 md:p-12 lg:p-16 bg-zinc-950 hover:bg-black transition-colors group"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            <div className="border-t-4 border-t-violet-500 mb-6 w-16" />
            <div className="text-6xl md:text-7xl lg:text-8xl font-black font-mono mb-4 text-white group-hover:text-violet-500 transition-colors">
              750%
            </div>
            <div className="text-xs md:text-sm text-zinc-400 font-mono uppercase tracking-wider">
              Research Maturity Growth
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Manifesto Section */}
      <section className="px-6 md:px-8 py-20 md:py-32 max-w-7xl mx-auto border-b-2 border-zinc-800">
        <div 
          className="transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '400ms'
          }}
        >
          <div className="border-2 border-zinc-800 inline-block p-6 md:p-8 mb-12 md:mb-16 bg-zinc-950">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black tracking-tighter uppercase">
              The Manifesto
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-zinc-800">
            <div className="p-8 md:p-10 border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-zinc-800 bg-black">
              <div className="border-l-4 border-l-yellow-400 pl-6">
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                  <span className="text-yellow-500 font-mono">AI handles the scale.</span> It accelerates research, automates repetition, and multiplies creative output. But artificial intelligence remains exactly that—artificial. The machine processes; the strategist decides. Human judgment is irreplaceable.
                </p>
              </div>
            </div>
            
            <div className="p-8 md:p-10 border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-zinc-800 bg-black">
              <div className="border-l-4 border-l-red-500 pl-6">
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                  <span className="text-red-600 font-mono">I handle the strategy, the ethics, and the leadership.</span> Understanding user anxiety, regulatory pressure, and trust dynamics is not soft—it is strategic. Empathy becomes the compass that guides every decision toward human agency and empowerment.
                </p>
              </div>
            </div>
            
            <div className="p-8 md:p-10 bg-black">
              <div className="border-l-4 border-l-blue-500 pl-6">
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                  The synthesis of AI-amplified efficiency and human-led strategy creates sustainable competitive advantage. This balance transforms design from cost center to business driver, measured in reduced waste, accelerated maturity, and enduring trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <AboutSection />

      {/* Horizontal Scroll Strategic Pillars */}
      <HorizontalScrollPillars />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}