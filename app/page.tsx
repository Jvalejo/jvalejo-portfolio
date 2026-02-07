'use client';

import React from 'react';
import ChatWidget from './components/ChatWidget';
import HorizontalScrollPillars from './components/HorizontalScrollPillars';
import { TrendingUp, Target, Lightbulb } from 'lucide-react';

export default function PortfolioApp() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
        <div 
          className="max-w-7xl w-full text-center space-y-8 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-none">
            Jeison Valejo
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-zinc-400 font-light tracking-wide">
            VP of Product Design | Nuno's Father
          </p>
        </div>
      </section>

      {/* Bento KPI Grid */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div 
            className="bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm p-10 md:p-12 lg:p-14 rounded-2xl transition-all duration-600 ease-out hover:border-zinc-700/70 hover:bg-zinc-900/50"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
              +41%
            </div>
            <div className="text-lg md:text-xl text-zinc-300 font-light">
              AI-Augmented Efficiency
            </div>
          </div>
          
          <div 
            className="bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm p-10 md:p-12 lg:p-14 rounded-2xl transition-all duration-600 ease-out hover:border-zinc-700/70 hover:bg-zinc-900/50"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
              29%
            </div>
            <div className="text-lg md:text-xl text-zinc-300 font-light">
              Operational Waste Reduction
            </div>
          </div>
          
          <div 
            className="bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm p-10 md:p-12 lg:p-14 rounded-2xl transition-all duration-600 ease-out hover:border-zinc-700/70 hover:bg-zinc-900/50"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
              750%
            </div>
            <div className="text-lg md:text-xl text-zinc-300 font-light">
              Research Maturity Growth
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Manifesto Section */}
      <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
        <div 
          className="transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '400ms'
          }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-16 text-center tracking-tight">
            The Manifesto
          </h2>
          
          <div className="text-zinc-300 text-lg md:text-xl leading-relaxed space-y-8 md:columns-2 lg:columns-3 gap-12">
            <p className="break-inside-avoid-column">
              In an era where artificial intelligence reshapes every corner of product development, design leadership must evolve beyond aesthetic decisions into strategic orchestration. The modern VP of Product Design is not merely a guardian of pixels and patterns, but an architect of systematic transformation.
            </p>
            
            <p className="break-inside-avoid-column">
              We stand at the intersection of human intuition and machine capability. Our mandate is clear: leverage AI to amplify efficiency while preserving the irreplaceable human elements of creativity, empathy, and strategic thinking. This requires building lean, agile teams that operate with surgical precision.
            </p>
            
            <p className="break-inside-avoid-column">
              Excellence in design is measured not by output volume but by impact depth. By systematically addressing technical debt, optimizing organizational structure, and implementing rigorous quality frameworks, we transform design from a cost center into a strategic differentiator that drives measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Strategic Pillars */}
      <HorizontalScrollPillars />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}