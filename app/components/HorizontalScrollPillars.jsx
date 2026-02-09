'use client';

import React, { useRef } from 'react';
import { TrendingUp, Heart, BookOpen } from 'lucide-react';

const HorizontalScrollPillars = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    if (isMobile) return;
    
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
  }, [isMobile]);

  const translateX = -(scrollProgress * 75);

  const pillars = [
    {
      icon: TrendingUp,
      title: 'AI-Amplified',
      subtitle: 'THE MULTIPLIER, NOT THE MASTER',
      description: 'AI serves as the efficiency multiplier—accelerating research, automating repetitive tasks, and scaling creative output. But it remains a tool, not a replacement. Human judgment guides every decision, every priority, every strategic pivot. The machine amplifies; the human directs.',
      kpi: '+41%',
      kpiLabel: 'EFFICIENCY GAIN',
      metrics: [
        { label: 'Automation', value: '73%' },
        { label: 'Time Saved', value: '420H' },
        { label: 'Human Hours', value: '∞' }
      ],
      borderClass: 'border-t-2 border-t-yellow-500',
      accentColor: 'yellow-500'
    },
    {
      icon: Heart,
      title: 'Empathic Design',
      subtitle: 'HUMAN AGENCY IN HARD ENVIRONMENTS',
      description: 'In industries built on complexity and risk, empathy becomes the compass. Understanding user anxiety, regulatory pressure, and trust erosion is not soft—it is strategic. Every interface decision either empowers human agency or diminishes it. We choose empowerment.',
      kpi: '29%',
      kpiLabel: 'WASTE REDUCTION',
      metrics: [
        { label: 'User Trust', value: '+67%' },
        { label: 'Clarity Score', value: '4.8' },
        { label: 'Agency Index', value: '92%' }
      ],
      borderClass: 'border-t-2 border-t-red-600',
      accentColor: 'red-600'
    },
    {
      icon: BookOpen,
      title: 'Evolutionary Learning',
      subtitle: 'RESEARCH MATURITY & SYSTEMATIC GROWTH',
      description: 'Design maturity is not achieved through heroic efforts—it is built through systematic practice. Evidence-based frameworks, structured feedback loops, and continuous iteration transform intuition into methodology. Knowledge compounds when properly captured and shared.',
      kpi: '750%',
      kpiLabel: 'MATURITY GROWTH',
      metrics: [
        { label: 'Studies', value: '24/Q' },
        { label: 'Impact', value: '67%' },
        { label: 'Accuracy', value: '94%' }
      ],
      borderClass: 'border-t-2 border-t-blue-500',
      accentColor: 'blue-500'
    }
  ];

  // Mobile: Vertical Stacking Layout
  if (isMobile) {
    return (
      <section className="relative bg-black">
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="px-6 py-12 border-b border-zinc-800">
          <div className="border border-zinc-800 inline-block px-4 py-2 bg-zinc-950">
            <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              Strategic Pillars
            </h2>
          </div>
        </div>

        <div className="relative">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`sticky top-0 min-h-screen border-b border-zinc-800 ${pillar.borderClass} bg-black p-8`}
            >
              <div className="h-full flex flex-col justify-center">
                <div className="border border-zinc-800 inline-block px-3 py-1 mb-6 w-fit">
                  <span className="text-zinc-700 font-mono text-xs">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={`mb-6 text-${pillar.accentColor}`}>
                  <pillar.icon className="w-12 h-12" strokeWidth={0.75} />
                </div>

                <h3 className="text-5xl font-serif font-extralight tracking-tighter mb-4 leading-[0.9] uppercase">
                  {pillar.title}
                </h3>

                <div className="border border-zinc-800 inline-block px-4 py-2 mb-6 bg-zinc-950 w-fit">
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                </div>

                <p className="text-zinc-400 text-base leading-relaxed mb-8">
                  {pillar.description}
                </p>

                <div className="border-2 border-zinc-800 bg-black p-6 mb-6 w-fit">
                  <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-2">
                    {pillar.kpiLabel}
                  </div>
                  <div className={`text-5xl font-black font-mono text-${pillar.accentColor}`}>
                    {pillar.kpi}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {pillar.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="border border-zinc-800 px-3 py-3 bg-zinc-950">
                      <div className="text-zinc-600 font-mono text-[8px] uppercase mb-1">
                        {metric.label}
                      </div>
                      <div className={`text-xl font-black font-mono text-${pillar.accentColor}`}>
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop: Horizontal Scroll Layout
  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
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

      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-6">
        <div className="w-px h-32 bg-zinc-800" />
        <div className="writing-mode-vertical text-zinc-600 font-mono text-[10px] uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          STRATEGIC PILLARS / 2026
        </div>
        <div className="w-px h-32 bg-zinc-800" />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
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
              <div className="relative h-full p-16 xl:p-20 flex flex-col">
                <div className="absolute top-8 left-8 border border-zinc-800 px-4 py-2">
                  <span className="text-zinc-700 font-mono text-xs tracking-widest">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={`absolute top-8 right-8 text-${pillar.accentColor}`}>
                  <pillar.icon className="w-16 h-16" strokeWidth={0.75} />
                </div>

                <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto">
                  <h3 className="text-8xl xl:text-9xl font-serif font-extralight tracking-tighter mb-8 leading-[0.9] uppercase">
                    {pillar.title}
                  </h3>

                  <div className="mb-12">
                    <div className="inline-block border border-zinc-800 px-6 py-3 bg-zinc-950">
                      <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-xl xl:text-2xl leading-relaxed font-light max-w-4xl mb-16">
                    {pillar.description}
                  </p>

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

                <div className="absolute bottom-8 left-8 border-2 border-zinc-800 bg-black p-8">
                  <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-3">
                    {pillar.kpiLabel}
                  </div>
                  <div className={`text-7xl font-black font-mono text-${pillar.accentColor}`}>
                    {pillar.kpi}
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 text-[20rem] font-black leading-none opacity-[0.02] pointer-events-none font-mono">
                  {idx + 1}
                </div>
              </div>
            </div>
          ))}

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