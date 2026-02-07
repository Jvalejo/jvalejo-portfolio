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
      subtitle: 'Assistive to Agentic',
      description: 'Progressively embedding AI capabilities across the product ecosystem, moving from assistive tools that augment human decision-making to agentic systems that autonomously execute strategic initiatives.',
      metrics: [
        { label: 'Efficiency Gain', value: '+41%', unit: 'AI-Augmented' },
        { label: 'Automation Level', value: '73%', unit: 'Process Coverage' },
        { label: 'Time Saved', value: '420', unit: 'Hours/Month' }
      ],
      color: 'emerald'
    },
    {
      icon: Target,
      title: 'The Quality Plan',
      subtitle: '150+ UX Debt Items',
      description: 'Systematic remediation of accumulated design and experience debt through prioritized sprints, transforming technical liabilities into opportunities for product excellence and user satisfaction.',
      metrics: [
        { label: 'Waste Reduction', value: '29%', unit: 'Operational' },
        { label: 'Debt Items', value: '150+', unit: 'Tracked' },
        { label: 'Resolution Rate', value: '85%', unit: 'Quarterly' }
      ],
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Lean Org Design',
      subtitle: '$1.05M Budget Optimization',
      description: 'Strategic restructuring that eliminates redundancy and maximizes impact per dollar, creating a nimble organization capable of rapid iteration while maintaining exceptional output quality.',
      metrics: [
        { label: 'Budget Optimized', value: '$1.05M', unit: 'Annual' },
        { label: 'Headcount Efficiency', value: '2.3x', unit: 'Output/Person' },
        { label: 'Cost per Feature', value: '-42%', unit: 'Year over Year' }
      ],
      color: 'violet'
    },
    {
      icon: Zap,
      title: 'Research Maturity',
      subtitle: 'Evidence-Based Design',
      description: 'Building a systematic research practice that transforms subjective opinions into data-driven decisions, establishing design as a strategic function grounded in user insights and business metrics.',
      metrics: [
        { label: 'Maturity Growth', value: '750%', unit: 'Since 2023' },
        { label: 'Studies/Quarter', value: '24', unit: 'Avg Conducted' },
        { label: 'Insight Impact', value: '67%', unit: 'Feature Influence' }
      ],
      color: 'amber'
    }
  ];

  const colorMap = {
    emerald: 'border-emerald-500/30 text-emerald-400',
    blue: 'border-blue-500/30 text-blue-400',
    violet: 'border-violet-500/30 text-violet-400',
    amber: 'border-amber-500/30 text-amber-400'
  };

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-zinc-950">
      {/* Static Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(39 39 42 / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(39 39 42 / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Horizontal Track */}
        <div 
          className="flex gap-8 px-12 transition-transform duration-100 ease-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[80vw] h-[85vh] bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm rounded-none relative overflow-hidden"
            >
              {/* Blueprint Grid Overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />

              {/* Content */}
              <div className="relative z-10 p-16 h-full flex flex-col">
                {/* Icon */}
                <div className={`mb-8 ${colorMap[pillar.color]}`}>
                  <pillar.icon className="w-16 h-16" strokeWidth={0.5} />
                </div>

                {/* Title */}
                <h3 className="text-8xl font-serif font-thin tracking-tight mb-4 leading-none">
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider mb-12">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-zinc-300 text-lg leading-relaxed mb-16 max-w-4xl">
                  {pillar.description}
                </p>

                {/* Metrics Grid */}
                <div className="mt-auto grid grid-cols-3 gap-8">
                  {pillar.metrics.map((metric, mIdx) => (
                    <div 
                      key={mIdx}
                      className={`border ${colorMap[pillar.color]} bg-zinc-950/50 p-6 backdrop-blur-sm`}
                    >
                      <div className="text-4xl font-bold font-mono mb-2">
                        {metric.value}
                      </div>
                      <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">
                        {metric.label}
                      </div>
                      <div className="text-zinc-600 text-xs font-mono">
                        {metric.unit}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Number */}
                <div className="absolute top-8 right-8 text-zinc-800 text-9xl font-serif font-thin leading-none">
                  0{idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollPillars;