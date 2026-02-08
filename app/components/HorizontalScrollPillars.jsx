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

  const translateX = -(scrollProgress * 75);
  const gridTranslateX = -(scrollProgress * 25);
  
  // Background color shift based on scroll
  const bgOpacity = scrollProgress * 0.3; // Shifts from zinc-950 to darker

  const pillars = [
    {
      icon: TrendingUp,
      title: 'AI-Amplified Roadmap',
      subtitle: 'ASSISTIVE TO AGENTIC',
      description: 'Progressively embedding AI capabilities across the product ecosystem, moving from assistive tools that augment human decision-making to agentic systems that autonomously execute strategic initiatives.',
      specs: [
        { key: 'EFFICIENCY', value: '+41%', detail: 'AI-AUGMENTED OUTPUT' },
        { key: 'AUTOMATION', value: '73%', detail: 'PROCESS COVERAGE' },
        { key: 'TIME_SAVED', value: '420H', detail: 'MONTHLY AVERAGE' },
        { key: 'MODELS', value: '12', detail: 'PRODUCTION SYSTEMS' }
      ],
      accentColor: '#FBBF24', // Yellow
      borderClass: 'border-t-4 border-t-yellow-400'
    },
    {
      icon: Target,
      title: 'The Quality Plan',
      subtitle: '150+ UX DEBT ITEMS',
      description: 'Systematic remediation of accumulated design and experience debt through prioritized sprints, transforming technical liabilities into opportunities for product excellence and user satisfaction.',
      specs: [
        { key: 'WASTE_REDUCTION', value: '29%', detail: 'OPERATIONAL EFFICIENCY' },
        { key: 'DEBT_ITEMS', value: '150+', detail: 'TRACKED & PRIORITIZED' },
        { key: 'RESOLUTION', value: '85%', detail: 'QUARTERLY RATE' },
        { key: 'SATISFACTION', value: '4.7', detail: 'USER NPS GAIN' }
      ],
      accentColor: '#EF4444', // Red
      borderClass: 'border-t-4 border-t-red-500'
    },
    {
      icon: Lightbulb,
      title: 'Lean Org Design',
      subtitle: '$1.05M BUDGET OPTIMIZATION',
      description: 'Strategic restructuring that eliminates redundancy and maximizes impact per dollar, creating a nimble organization capable of rapid iteration while maintaining exceptional output quality.',
      specs: [
        { key: 'BUDGET_OPT', value: '$1.05M', detail: 'ANNUAL OPTIMIZATION' },
        { key: 'EFFICIENCY', value: '2.3X', detail: 'OUTPUT PER PERSON' },
        { key: 'COST_REDUCTION', value: '-42%', detail: 'FEATURE COST YOY' },
        { key: 'VELOCITY', value: '+156%', detail: 'SPRINT COMPLETION' }
      ],
      accentColor: '#3B82F6', // Blue
      borderClass: 'border-t-4 border-t-blue-500'
    },
    {
      icon: Zap,
      title: 'Research Maturity',
      subtitle: 'EVIDENCE-BASED DESIGN',
      description: 'Building a systematic research practice that transforms subjective opinions into data-driven decisions, establishing design as a strategic function grounded in user insights and business metrics.',
      specs: [
        { key: 'MATURITY', value: '750%', detail: 'GROWTH SINCE 2023' },
        { key: 'STUDIES', value: '24', detail: 'QUARTERLY AVERAGE' },
        { key: 'IMPACT', value: '67%', detail: 'FEATURE INFLUENCE' },
        { key: 'CONFIDENCE', value: '94%', detail: 'DECISION ACCURACY' }
      ],
      accentColor: '#10B981', // Emerald (4th card)
      borderClass: 'border-t-4 border-t-emerald-500'
    }
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      {/* Dynamic Background with color shift */}
      <div 
        className="fixed inset-0 bg-black transition-opacity duration-300"
        style={{ opacity: 1 - bgOpacity }}
      />
      <div 
        className="fixed inset-0 bg-zinc-950 transition-opacity duration-300"
        style={{ opacity: bgOpacity }}
      />

      {/* Parallax Grid Lines */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          transform: `translateX(${gridTranslateX}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute inset-0 w-[200%]" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(113 113 122) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(113 113 122) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Section Indicator */}
        <div className="absolute top-8 left-8 z-20 border-2 border-zinc-800 bg-black p-4">
          <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">
            STRATEGIC PILLARS
          </div>
          <div className="text-white font-mono text-xl font-bold">
            {Math.round(scrollProgress * 100)}%
          </div>
        </div>

        {/* Horizontal Track */}
        <div 
          className="flex gap-0 will-change-transform"
          style={{ 
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 min-w-[80vw] h-screen border-2 border-zinc-800 bg-black relative overflow-hidden ${pillar.borderClass}`}
            >
              {/* Bauhaus Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-5" 
                style={{
                  backgroundImage: `
                    linear-gradient(to right, ${pillar.accentColor} 1px, transparent 1px),
                    linear-gradient(to bottom, ${pillar.accentColor} 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }} 
              />

              {/* Bauhaus Corner Markers */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-zinc-800" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-zinc-800" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-zinc-800" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-zinc-800" />

              {/* Content */}
              <div className="relative z-10 p-16 xl:p-24 h-full flex flex-col">
                {/* Header */}
                <div className="mb-16">
                  {/* Card Number */}
                  <div className="inline-block border-2 border-zinc-800 px-4 py-2 mb-8">
                    <span className="text-zinc-600 font-mono text-xs tracking-widest">
                      PILLAR_{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-10" style={{ color: pillar.accentColor }}>
                    <pillar.icon className="w-24 h-24" strokeWidth={1} />
                  </div>

                  {/* Title */}
                  <h3 className="text-8xl xl:text-9xl font-serif font-black tracking-tighter mb-6 leading-[0.85] uppercase">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <div className="border-2 border-zinc-800 inline-block px-6 py-3 bg-zinc-950">
                    <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-lg leading-relaxed mb-16 max-w-3xl font-sans">
                  {pillar.description}
                </p>

                {/* Technical Specs Grid - Bauhaus Style */}
                <div className="mt-auto grid grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-zinc-800">
                  {pillar.specs.map((spec, sIdx) => (
                    <div 
                      key={sIdx}
                      className="border-r-2 border-b-2 border-zinc-800 last:border-r-0 p-6 bg-zinc-950 hover:bg-black transition-colors"
                    >
                      <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-3">
                        {spec.key}
                      </div>
                      <div className="text-5xl font-black font-mono mb-2" style={{ color: pillar.accentColor }}>
                        {spec.value}
                      </div>
                      <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">
                        {spec.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Large Number Watermark */}
              <div 
                className="absolute top-1/2 right-8 -translate-y-1/2 text-[18rem] font-black leading-none opacity-5 pointer-events-none font-mono"
              >
                {idx + 1}
              </div>
            </div>
          ))}

          {/* End Marker */}
          <div className="flex-shrink-0 min-w-[40vw] h-screen border-2 border-zinc-800 bg-black flex items-center justify-center">
            <div className="text-center border-2 border-zinc-800 p-12">
              <div className="text-zinc-600 text-7xl font-black mb-4 font-mono">
                END
              </div>
              <div className="text-zinc-700 font-mono text-xs uppercase tracking-widest">
                STRATEGIC FRAMEWORK
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bauhaus Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-20 pointer-events-none">
        <div className="border-t-2 border-zinc-800 bg-black">
          <div 
            className="h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 transition-all duration-100"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollPillars;