import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Compass, Shield } from 'lucide-react';
import { appImages } from '../data/images';
import { useLanguage } from '../context/LanguageContext';

interface HomeHeroProps {
  onBrowse: () => void;
  onExploreBeginner: () => void;
  onOpenPathways: () => void;
  readCount: number;
  practicedCount: number;
}

export function HomeHero({
  onBrowse,
  onExploreBeginner,
  onOpenPathways,
  readCount,
  practicedCount
}: HomeHeroProps) {
  const { t, languageInfo } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-5 md:px-16 overflow-hidden">
      {/* Cinematic Background with Atmospheric Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity scale-105 transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('${appImages.hero}')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/90 via-[#131313]/70 to-[#131313]" />

      {/* Subtle Warm Amber and Burgundy Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#600000]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#e9c176]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[920px] text-center mx-auto space-y-8">
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#201f1f]/80 border border-[#e9c176]/30 text-[#e9c176] font-sans text-xs uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#e9c176]" />
          <span>{t('heroTagline')}</span>
        </div>

        {/* Display Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#ffb4a8] leading-[1.15] tracking-tight">
          {t('heroHeadline')}
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#dfbfba] font-light max-w-2xl mx-auto leading-relaxed">
          {t('heroDescription')}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="hero-browse-topics-btn"
            onClick={onBrowse}
            className="w-full sm:w-auto bg-[#600000] text-[#e5e2e1] hover:text-white font-sans text-xs uppercase tracking-widest px-9 py-4 rounded-full bloom-burgundy transition-all duration-300 transform hover:scale-[1.03] border border-[#ffb4a8]/30 cursor-pointer font-semibold flex items-center justify-center gap-2 shadow-2xl"
          >
            {t('heroExploreBtn')} <ArrowRight className="w-4 h-4 text-[#ffb4a8]" />
          </button>

          <button
            id="hero-beginner-guides-btn"
            onClick={onExploreBeginner}
            className="w-full sm:w-auto border border-[#e9c176] text-[#e9c176] font-sans text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#e9c176]/10 shadow-[inset_0_0_10px_rgba(233,193,118,0)] hover:shadow-[inset_0_0_10px_rgba(233,193,118,0.2)] cursor-pointer font-semibold"
          >
            {t('heroBeginnerBtn')}
          </button>
        </div>

        {/* Stats Row */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/5">
          <div className="p-4 rounded-xl bg-[#201f1f]/60 border border-white/5 backdrop-blur-sm">
            <div className="font-serif text-2xl md:text-3xl text-[#ffb4a8]">101</div>
            <div className="font-sans text-[11px] uppercase tracking-wider text-[#dfbfba]/70 mt-0.5">
              {t('allGuidesCount')}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#201f1f]/60 border border-white/5 backdrop-blur-sm">
            <div className="font-serif text-2xl md:text-3xl text-[#e9c176]">8</div>
            <div className="font-sans text-[11px] uppercase tracking-wider text-[#dfbfba]/70 mt-0.5">
              {t('categoryFilter')}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#201f1f]/60 border border-white/5 backdrop-blur-sm">
            <div className="font-serif text-2xl md:text-3xl text-[#ffb3b2]">
              {readCount} <span className="text-xs font-sans text-[#dfbfba]/60">/ 101</span>
            </div>
            <div className="font-sans text-[11px] uppercase tracking-wider text-[#dfbfba]/70 mt-0.5">
              {t('saved')}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#201f1f]/60 border border-white/5 backdrop-blur-sm">
            <div className="font-serif text-2xl md:text-3xl text-[#ffb4a8]">
              {practicedCount}
            </div>
            <div className="font-sans text-[11px] uppercase tracking-wider text-[#dfbfba]/70 mt-0.5">
              {t('practiced')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

