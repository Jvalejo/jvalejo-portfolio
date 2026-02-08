'use client';

import React, { useRef } from 'react';
import { TrendingUp, Target, Lightbulb, Zap } from 'lucide-react';

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

  // Transform scroll progress to horizontal movement
  const translateX = -(scrollProgress * 75);
  
  // Parallax effect for background grid (moves slower)
  const gridTranslateX = -(scrollProgress * 25);

  const pillars = [
    {
      icon: TrendingUp,
      title: 'AI-Amplified Roadmap',
      subtitle: 'Assistive to Agentic',
      description: 'Progressively embedding AI capabilities across the product ecosystem, moving from assistive tools that augment human decision-making to agentic systems that autonomously execute strategic initiatives.',
      specs: [
        { key: 'EFFICIENCY', value: '+41%', detail: 'AI-Augmented Output' },
        { key: 'AUTOMATION', value: '73%', detail: 'Process Coverage' },
        { key: 'TIME_SAVED', value: '420h', detail: 'Monthly Average' },
        { key: 'MODELS', value: '12', detail: 'Production Systems' }
      ],
      color: 'emerald',
      colorCode: '#10b981'
    },
    {
      icon: Target,
      title: 'The Quality Plan',
      subtitle: '150+ UX Debt Items as Strategic Risk',
      description: 'Systematic remediation of accumulated design and experience debt through prioritized sprints, transforming technical liabilities into opportunities for product excellence and user satisfaction.',
      specs: [
        { key: 'WASTE_REDUCTION', value: '29%', detail: 'Operational Efficiency' },
        { key: 'DEBT_ITEMS', value: '150+', detail: 'Tracked & Prioritized' },
        { key: 'RESOLUTION', value: '85%', detail: 'Quarterly Rate' },
        { key: 'SATISFACTION', value: '4.7', detail: 'User NPS Gain' }
      ],
      color: 'blue',
      colorCode: '#3b82f6'
    },
    {
      icon: Lightbulb,
      title: 'Lean Org Design',
      subtitle: '$1.05M Budget Optimization',
      description: 'Strategic restructuring that eliminates redundancy and maximizes impact per dollar, creating a nimble organization capable of rapid iteration while maintaining exceptional output quality.',
      specs: [
        { key: 'BUDGET_OPT', value: '$1.05M', detail: 'Annual Optimization' },
        { key: 'EFFICIENCY', value: '2.3x', detail: 'Output per Person' },
        { key: 'COST_REDUCTION', value: '-42%', detail: 'Feature Cost YoY' },
        { key: 'VELOCITY', value: '+156%', detail: 'Sprint Completion' }
      ],
      color: 'violet',
      colorCode: '#8b5cf6'
    },
    {
      icon: Zap,
      title: 'Research Maturity',
      subtitle: 'Evidence-Based Design Framework',
      description: 'Building a systematic research practice that transforms subjective opinions into data-driven decisions, establishing design as a strategic function grounded in user insights and business metrics.',
      specs: [
        { key: 'MATURITY', value: '750%', detail: 'Growth Since 2023' },
        { key: 'STUDIES', value: '24', detail: 'Quarterly Average' },
        { key: 'IMPACT', value: '67%', detail: 'Feature Influence' },
        { key: 'CONFIDENCE', value: '94%', detail: 'Decision Accuracy' }
      ],
      color: 'amber',
      colorCode: '#f59e0b'
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-zinc-950">
      {/* Parallax Background Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          transform: `translateX(${gridTranslateX}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute inset-0 w-[200%]" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(63 63 70 / 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(63 63 70 / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }} />
      </div>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Section Title Indicator */}
        <div className="absolute top-12 left-12 z-20">
          <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest mb-2">
            Strategic Pillars
          </div>
          <div className="text-zinc-700 font-mono text-xs">
            {Math.round(scrollProgress * 100)}% COMPLETE
          </div>
        </div>

        {/* Horizontal Track */}
        <div 
          className="flex gap-12 px-12 will-change-transform"
          style={{ 
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 min-w-[80vw] h-[85vh] bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm relative overflow-hidden group"
              style={{
                boxShadow: `0 0 0 1px ${pillar.colorCode}15`
              }}
            >
              {/* Blueprint Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500" 
                style={{
                  backgroundImage: `
                    linear-gradient(to right, ${pillar.colorCode}40 1px, transparent 1px),
                    linear-gradient(to bottom, ${pillar.colorCode}40 1px, transparent 1px)
                  `,
                  backgroundSize: '60px 60px'
                }} 
              />

              {/* Corner Accent Lines */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 opacity-30" style={{ borderColor: pillar.colorCode }} />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 opacity-30" style={{ borderColor: pillar.colorCode }} />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 opacity-30" style={{ borderColor: pillar.colorCode }} />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 opacity-30" style={{ borderColor: pillar.colorCode }} />

              {/* Content */}
              <div className="relative z-10 p-20 h-full flex flex-col">
                {/* Header Area */}
                <div className="mb-12">
                  {/* Card Number */}
                  <div className="text-zinc-800 font-mono text-sm mb-6 tracking-wider">
                    PILLAR_{String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <div className="mb-8" style={{ color: pillar.colorCode }}>
                    <pillar.icon className="w-20 h-20" strokeWidth={0.75} />
                  </div>

                  {/* Title */}
                  <h3 className="text-8xl xl:text-9xl font-serif font-extralight tracking-tighter mb-6 leading-[0.9]">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <div className="flex items-center gap-3 text-zinc-500 text-xs font-mono uppercase tracking-widest">
                    <div className="h-px w-12 bg-zinc-700" />
                    {pillar.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-xl leading-relaxed mb-16 max-w-3xl font-light">
                  {pillar.description}
                </p>

                {/* Technical Specifications Grid */}
                <div className="mt-auto">
                  <div className="text-zinc-600 font-mono text-xs uppercase tracking-wider mb-4">
                    Technical Specifications
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {pillar.specs.map((spec, sIdx) => (
                      <div 
                        key={sIdx}
                        className="bg-zinc-950/60 border border-zinc-800/40 p-5 backdrop-blur-sm group-hover:border-zinc-700/60 transition-colors"
                      >
                        <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-2">
                          {spec.key}
                        </div>
                        <div className="text-4xl font-bold font-mono mb-1" style={{ color: pillar.colorCode }}>
                          {spec.value}
                        </div>
                        <div className="text-zinc-500 font-mono text-xs">
                          {spec.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Large Card Number Watermark */}
              <div 
                className="absolute top-1/2 right-12 -translate-y-1/2 text-[20rem] font-serif font-thin leading-none opacity-5 pointer-events-none"
              >
                {String(idx + 1).padStart(2, '0')}
              </div>
            </div>
          ))}

          {/* End Card - Completion */}
          <div className="flex-shrink-0 min-w-[40vw] h-[85vh] flex items-center justify-center">
            <div className="text-center">
              <div className="text-zinc-700 text-7xl font-serif font-thin mb-6">
                Strategic<br/>Framework
              </div>
              <div className="text-zinc-600 font-mono text-sm uppercase tracking-widest">
                End of Pillars
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm px-6 py-3 rounded-full">
          <div className="flex items-center gap-3">
            <div className="text-zinc-500 font-mono text-xs">SCROLL</div>
            <div className="w-32 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 transition-all duration-100"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <div className="text-zinc-500 font-mono text-xs">{Math.round(scrollProgress * 100)}%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollPillars;