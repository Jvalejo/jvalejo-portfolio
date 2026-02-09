'use client';

import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left Column: Identity */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-zinc-100 mb-4 tracking-tight">
              JEISON VALEJO
            </h3>
            <div className="space-y-1">
              <p className="text-zinc-400 text-sm">
                VP of Product Design
              </p>
              <p className="text-zinc-600 font-mono text-xs">
                For Nuno.
              </p>
            </div>
          </div>

          {/* Center Column: Connect */}
          <div>
            <h4 className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a 
                href="https://www.linkedin.com/in/jeison-valejo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-colors group"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="mailto:jvalejo@gmail.com" 
                className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-colors group"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-sm">jvalejo@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Location & Focus */}
          <div>
            <div className="space-y-3">
              <div>
                <p className="text-zinc-400 text-sm">
                  Based in Portugal
                </p>
              </div>
              <div>
                <p className="text-zinc-600 font-mono text-xs uppercase tracking-wider mb-1">
                  Focus
                </p>
                <p className="text-zinc-400 text-sm">
                  Strategy / AI / Empathic Design
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-700 font-mono text-xs">
            © 2026 Jeison Valejo. Industrial Noir.
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-zinc-900" />
            <span className="text-zinc-700 font-mono text-[10px] uppercase tracking-widest">
              Portfolio v1.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;