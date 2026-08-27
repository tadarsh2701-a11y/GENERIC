import React from 'react';
import { Sliders, BookOpen, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TheJourneySectionProps {
  onBrowse: () => void;
  onExploreBeginner: () => void;
}

export function TheJourneySection({ onBrowse, onExploreBeginner }: TheJourneySectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#1c1b1b]/80 relative border-y border-[#a68a86]/10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#e5e2e1] mb-4">
            The Velvet &amp; Ember Journey
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#dfbfba]">
            A slow, intentional approach to rediscovering each other, built on a foundation of safety, vulnerability, and curiosity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#e9c176]/30 to-transparent" />

          {/* Step 1 */}
          <div className="flex-1 text-center relative z-10 group">
            <div className="w-16 h-16 rounded-full bg-[#201f1f] border border-[#e9c176]/30 mx-auto flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(218,179,106,0.15)] group-hover:shadow-[0_0_25px_rgba(218,179,106,0.3)] group-hover:scale-105 transition-all duration-500">
              <Sliders className="w-7 h-7 text-[#e9c176]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#e5e2e1] mb-3">
              1. Curate Your Mood
            </h3>
            <p className="font-sans text-sm text-[#dfbfba] px-4 leading-relaxed">
              Set the scene, create space without expectations, and select topics that align with your shared desires and comfort levels.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 text-center relative z-10 group">
            <div className="w-16 h-16 rounded-full bg-[#201f1f] border border-[#e9c176]/30 mx-auto flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(218,179,106,0.15)] group-hover:shadow-[0_0_25px_rgba(218,179,106,0.3)] group-hover:scale-105 transition-all duration-500">
              <BookOpen className="w-7 h-7 text-[#e9c176]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#e5e2e1] mb-3">
              2. Learn Together
            </h3>
            <p className="font-sans text-sm text-[#dfbfba] px-4 leading-relaxed">
              Explore our 101 tasteful, expertly structured guides designed to spark imagination, communication, and somatic technique.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 text-center relative z-10 group">
            <div className="w-16 h-16 rounded-full bg-[#201f1f] border border-[#e9c176]/30 mx-auto flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(218,179,106,0.15)] group-hover:shadow-[0_0_25px_rgba(218,179,106,0.3)] group-hover:scale-105 transition-all duration-500">
              <Heart className="w-7 h-7 text-[#e9c176]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#e5e2e1] mb-3">
              3. Connect Deeply
            </h3>
            <p className="font-sans text-sm text-[#dfbfba] px-4 leading-relaxed">
              Translate knowledge into tactile, emotionally resonant experiences that strengthen your connection and mutual pleasure.
            </p>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBrowse}
            className="w-full sm:w-auto bg-[#600000] text-white font-sans text-xs uppercase tracking-wider px-8 py-4 rounded-full bloom-burgundy transition-all duration-300 transform hover:scale-[1.02] cursor-pointer font-semibold"
          >
            {t('heroExploreBtn')} (101)
          </button>
          <button
            onClick={onExploreBeginner}
            className="w-full sm:w-auto border border-[#e9c176] text-[#e9c176] font-sans text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#e9c176]/10 shadow-[inset_0_0_10px_rgba(233,193,118,0)] hover:shadow-[inset_0_0_10px_rgba(233,193,118,0.2)] cursor-pointer font-semibold"
          >
            {t('beginner')} Guides
          </button>
        </div>
      </div>
    </section>
  );
}
