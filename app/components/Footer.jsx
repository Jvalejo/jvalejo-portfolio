'use client';

import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Identity */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-zinc-100 mb-4 tracking-tight">
              JEISON VALEJO
            </h3>
            <div className="space-y-1">
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-wider">
                VP of Product Design
              </p>
              <p className="text-zinc-600 font-mono text-xs">
                For Nuno.
              </p>
            </div>
          </div>

          {/* Column 2: Connect */}
          <div>
            <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a 
                href="https://www.linkedin.com/in/jeisonvalejo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-colors group"
              >
                <div className="w-10 h-10 border border-zinc-800 bg-black group-hover:border-yellow-500 flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
              <a 
                href="mailto:jeison.valejo@uphold.com" 
                className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-colors group"
              >
                <div className="w-10 h-10 border border-zinc-800 bg-black group-hover:border-zinc-700 flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-sm">Email</span>
              </a>
            </div>
          </div>

          {/* Column 3: Status */}
          <div>
            <h4 className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">
              Status
            </h4>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-600 font-mono text-xs">Location:</span>
                <span className="text-zinc-400 font-mono text-sm">Portugal</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-600 font-mono text-xs">Currently:</span>
                <span className="text-zinc-400 font-mono text-sm">Strategy & AI Evolution</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-700 font-mono text-xs">
            © 2026 Jeison Valejo. Industrial Noir.
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-zinc-800" />
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