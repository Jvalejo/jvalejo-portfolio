'use client';

import React, { useRef } from 'react';
import { TrendingUp, Target, Lightbulb } from 'lucide-react';

const HorizontalScrollPillars = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const start = 0;
      const end = window.innerHeight;
      
      if (rect.top <= start && rect.bottom >= end) {
        const progress = Math.min(Math.max((start - rect.top) / (rect.height - window.innerHeight), 0), 1);
        setScrollProgress(progress);
      } else if (rect.top > start) {
        setScrollProgress(0);
      } else if (rect.bottom < end) {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateX = -(scrollProgress * 75);

  const pillars = [
    {
      icon: TrendingUp,
      title: 'AI-Amplified Roadmap',
      subtitle: 'ASSISTIVE TO AGENTIC EVOLUTION',
      description: 'Progressively embedding AI capabilities across the product ecosystem. Moving from assistive tools that augment human decision-making to agentic systems that autonomously execute strategic initiatives. This transformation represents a fundamental shift in how design teams leverage artificial intelligence.',
      kpi: '+41%',
      kpiLabel: 'EFFICIENCY',
      metrics: [
        { label: 'Automation', value: '73%' },
        { label: 'Time Saved', value: '420H' },
        { label: 'Models', value: '12' }
      ],
      borderClass: 'border-t-2 border-t-yellow-500',
      accentColor: 'yellow-500'
    },
    {
      icon: Target,
      title: 'The Quality Plan',
      subtitle: '150+ UX DEBT ITEMS AS STRATEGIC RISK',
      description: 'Systematic remediation of accumulated design and experience debt through prioritized sprints. Transforming technical liabilities into opportunities for product excellence and user satisfaction. Every debt item is tracked, measured, and resolved with engineering precision.',
      kpi: '29%',
      kpiLabel: 'WASTE REDUCTION',
      metrics: [
        { label: 'Debt Items', value: '150+' },
        { label: 'Resolution', value: '85%' },
        { label: 'NPS Gain', value: '+4.7' }
      ],
      borderClass: 'border-t-2 border-t-red-600',
      accentColor: 'red-600'
    },
    {
      icon: Lightbulb,
      title: 'Lean Org Design',
      subtitle: '$1.05M BUDGET OPTIMIZATION',
      description: 'Strategic restructuring that eliminates redundancy and maximizes impact per dollar. Creating a nimble organization capable of rapid iteration while maintaining exceptional output quality. Every role is optimized, every process streamlined for maximum efficiency.',
      kpi: '750%',
      kpiLabel: 'RESEARCH GROWTH',
      metrics: [
        { label: 'Budget Opt', value: '$1.05M' },
        { label: 'Efficiency', value: '2.3X' },
        { label: 'Cost Down', value: '-42%' }
      ],
      borderClass: 'border-t-2 border-t-blue-500',
      accentColor: 'blue-500'
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      {/* Fixed Grid Pattern Background */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Fixed Vertical Line with Label - "Nuno Signature" */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-6">
        <div className="w-px h-32 bg-zinc-800" />
        <div className="writing-mode-vertical text-zinc-600 font-mono text-[10px] uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          STRATEGIC PILLARS / 2026
        </div>
        <div className="w-px h-32 bg-zinc-800" />
      </div>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Horizontal Track */}
        <div 
          className="flex gap-8 pl-24 will-change-transform"
          style={{ 
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.05s linear'
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 min-w-[90vw] h-[90vh] border border-zinc-800 ${pillar.borderClass} bg-black relative overflow-hidden`}
            >
              {/* Content Container */}
              <div className="relative h-full p-16 xl:p-20 flex flex-col">
                {/* Card Number Badge - Top Left */}
                <div className="absolute top-8 left-8 border border-zinc-800 px-4 py-2">
                  <span className="text-zinc-700 font-mono text-xs tracking-widest">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icon - Top Right */}
                <div className={`absolute top-8 right-8 text-${pillar.accentColor}`}>
                  <pillar.icon className="w-16 h-16" strokeWidth={0.75} />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto">
                  {/* Title */}
                  <h3 className="text-8xl xl:text-9xl font-serif font-extralight tracking-tighter mb-8 leading-[0.9] uppercase">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <div className="mb-12">
                    <div className="inline-block border border-zinc-800 px-6 py-3 bg-zinc-950">
                      <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xl xl:text-2xl leading-relaxed font-light max-w-4xl mb-16">
                    {pillar.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="flex gap-8">
                    {pillar.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="border border-zinc-800 px-6 py-4 bg-zinc-950">
                        <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-2">
                          {metric.label}
                        </div>
                        <div className={`text-3xl font-black font-mono text-${pillar.accentColor}`}>
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* KPI Box - Bottom Left */}
                <div className="absolute bottom-8 left-8 border-2 border-zinc-800 bg-black p-8">
                  <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-3">
                    {pillar.kpiLabel}
                  </div>
                  <div className={`text-7xl font-black font-mono text-${pillar.accentColor}`}>
                    {pillar.kpi}
                  </div>
                </div>

                {/* Large Watermark Number - Bottom Right */}
                <div className="absolute bottom-0 right-0 text-[20rem] font-black leading-none opacity-[0.02] pointer-events-none font-mono">
                  {idx + 1}
                </div>
              </div>
            </div>
          ))}

          {/* End Card */}
          <div className="flex-shrink-0 min-w-[50vw] h-[90vh] border border-zinc-800 bg-black flex items-center justify-center">
            <div className="text-center">
              <div className="border-2 border-zinc-800 inline-block p-12">
                <div className="text-zinc-700 text-8xl font-black font-mono mb-4">
                  —
                </div>
                <div className="text-zinc-700 font-mono text-xs uppercase tracking-widest">
                  END OF FRAMEWORK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress Indicator */}
      <div className="fixed bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="border-t border-zinc-800 bg-black/80 backdrop-blur-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
              Scroll Progress
            </div>
            <div className="text-zinc-500 font-mono text-xs font-bold">
              {Math.round(scrollProgress * 100)}%
            </div>
          </div>
          <div 
            className="h-1 bg-gradient-to-r from-yellow-500 via-red-600 to-blue-500 transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollPillars;