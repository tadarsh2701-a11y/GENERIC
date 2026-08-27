import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, Home, Sparkles } from 'lucide-react';
import { SEOHead } from './SEOHead';

export function NotFoundView() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-5 py-20 relative z-10">
      <SEOHead
        title="Page Not Found (404)"
        description="The page you are looking for does not exist in our sanctuary. Explore our 101 guides or curated learning pathways."
        robots="noindex, follow"
      />

      <div className="max-w-xl w-full text-center space-y-8 p-8 sm:p-12 rounded-3xl bg-[#1c1b1b]/90 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#600000]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#e9c176]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#e9c176] px-3 py-1 rounded-full bg-[#2a1a18] border border-[#ffb4a8]/20 inline-block">
            404 • Path Uncharted
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#ffb4a8]">
            Lost in the Sanctuary
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#dfbfba] leading-relaxed">
            The intimate guide or section you are seeking cannot be found. Return to the hearth to continue your journey.
          </p>
        </div>

        <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#600000] text-white font-sans text-xs uppercase tracking-wider font-semibold bloom-burgundy hover:bg-[#670502] transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 text-[#ffb4a8]" /> Return Home
          </Link>
          <Link
            to="/topics"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#201f1f] text-[#dfbfba] hover:text-[#ffb4a8] border border-white/10 hover:border-[#ffb4a8]/30 font-sans text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-[#e9c176]" /> Browse 101 Guides
          </Link>
          <Link
            to="/pathways"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#201f1f] text-[#dfbfba] hover:text-[#ffb4a8] border border-white/10 hover:border-[#ffb4a8]/30 font-sans text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#ffb4a8]" /> Pathways
          </Link>
        </div>
      </div>
    </div>
  );
}
