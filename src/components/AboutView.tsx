import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Sparkles, Compass, Eye, ArrowRight, BookOpen } from 'lucide-react';
import { appImages } from '../data/images';
import { SEOHead } from './SEOHead';
import { generateOrganizationSchema, generateBreadcrumbSchema } from '../utils/seo';

interface AboutViewProps {
  onBrowse: () => void;
  onExploreBeginner: () => void;
}

export function AboutView({ onBrowse, onExploreBeginner }: AboutViewProps) {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About the Sanctuary', url: '/about' }
  ]);

  return (
    <div className="pt-24 pb-20 max-w-[1200px] mx-auto px-5 md:px-16 relative z-10 space-y-20">
      <SEOHead
        title="About Our Intimate Philosophy & Sanctuary"
        description="Learn about the Velvet & Ember philosophy: bridging ancient somatic wisdom, neurochemistry, and compassionate communication for deeper couples intimacy."
        canonicalPath="/about"
        structuredData={[orgSchema, breadcrumbSchema]}
      />

      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-sans text-[#dfbfba]/70 mb-2">
        <Link to="/" className="hover:text-[#ffb4a8] transition-colors">Home</Link>
        <span className="opacity-40">/</span>
        <span className="text-[#e9c176]">About Velvet &amp; Ember</span>
      </nav>

      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-[#1c1b1b] border border-white/5 p-8 sm:p-14 lg:p-20 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform duration-1000"
          style={{
            backgroundImage: `url('${appImages.about}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#1c1b1b]/90 to-transparent" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <span className="font-sans text-xs uppercase tracking-widest text-[#e9c176] block">
            About Velvet &amp; Ember
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#ffb4a8] leading-[1.1]">
            The Art of Intimacy
          </h1>
          <p className="font-sans text-base sm:text-xl text-[#dfbfba] leading-relaxed font-light">
            Velvet &amp; Ember is a sanctuary for those seeking a deeper connection with themselves and their partners. We bridge the gap between ancient somatic wisdom, modern neurochemistry, and compassionate communication.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/topics"
              onClick={onBrowse}
              className="bg-[#600000] text-white font-sans text-xs uppercase tracking-wider px-8 py-4 rounded-full bloom-burgundy font-semibold hover:bg-[#670502] transition-colors flex items-center gap-2 cursor-pointer"
            >
              Explore the 101 Guides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/topics"
              onClick={onExploreBeginner}
              className="border border-[#e9c176] text-[#e9c176] font-sans text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-[#e9c176]/10 transition-colors font-semibold cursor-pointer"
            >
              Beginner Foundations
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars of Practice Bento Grid */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e5e2e1]">Pillars of Practice</h2>
          <p className="font-sans text-sm sm:text-base text-[#dfbfba]">
            Our core philosophy centers on emotional safety, enthusiastic consent, somatic curiosity, and lifelong relational growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Absolute Safety */}
          <div className="p-8 rounded-2xl bg-[#201f1f] border border-white/5 space-y-4 hover:border-[#ffb4a8]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#600000]/60 border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#e5e2e1]">Absolute Safety</h3>
            <p className="font-sans text-sm text-[#dfbfba] leading-relaxed">
              Every intimate act begins with physical and nervous system safety. We provide judgment-free frameworks that allow couples to express boundaries without fear of rejection.
            </p>
          </div>

          {/* Pillar 2: Consent as Canvas */}
          <div className="p-8 rounded-2xl bg-[#201f1f] border border-white/5 space-y-4 hover:border-[#ffb4a8]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#600000]/60 border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#e5e2e1]">Consent as Canvas</h3>
            <p className="font-sans text-sm text-[#dfbfba] leading-relaxed">
              Consent is not a bureaucratic hurdle; it is the charged, erotic canvas upon which trust is painted. Continuous check-ins elevate anticipation rather than extinguishing it.
            </p>
          </div>

          {/* Pillar 3: Somatic Intelligence */}
          <div className="p-8 rounded-2xl bg-[#201f1f] border border-white/5 space-y-4 hover:border-[#ffb4a8]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#600000]/60 border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#e5e2e1]">Somatic Intelligence</h3>
            <p className="font-sans text-sm text-[#dfbfba] leading-relaxed">
              Moving beyond goal-oriented orgasm performance. We emphasize full-body sensation, pelvic alignment, breath synching, and unhurried arousal curves.
            </p>
          </div>

          {/* Pillar 4: Elevated Education */}
          <div className="p-8 rounded-2xl bg-[#201f1f] border border-white/5 space-y-4 hover:border-[#ffb4a8]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#600000]/60 border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8]">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#e5e2e1]">Elevated Education</h3>
            <p className="font-sans text-sm text-[#dfbfba] leading-relaxed">
              Synthesized from contemporary relational therapy, somatic sexology, and physiological research, presented with dignified editorial craftsmanship.
            </p>
          </div>

          {/* Pillar 5: Lifelong Curiosity */}
          <div className="p-8 rounded-2xl bg-[#201f1f] border border-white/5 space-y-4 hover:border-[#ffb4a8]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#600000]/60 border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#e5e2e1]">Lifelong Curiosity</h3>
            <p className="font-sans text-sm text-[#dfbfba] leading-relaxed">
              Bodies, libidos, and relational dynamics evolve over decades. We celebrate exploration as an ongoing ritual of rediscovery.
            </p>
          </div>

          {/* Pillar 6: Discretion & Sanctuary */}
          <div className="p-8 rounded-2xl bg-[#201f1f] border border-white/5 space-y-4 hover:border-[#ffb4a8]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#600000]/60 border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#e5e2e1]">Total Privacy Sanctuary</h3>
            <p className="font-sans text-sm text-[#dfbfba] leading-relaxed">
              Zero-tracking, zero accounts required, and built-in instant Discretion Screen Shield for absolute privacy wherever you explore.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#600000]/20 border border-[#ffb4a8]/30 space-y-6 text-center max-w-3xl mx-auto">
        <span className="font-sans text-xs uppercase tracking-widest text-[#e9c176]">
          The Velvet &amp; Ember Manifesto
        </span>
        <h2 className="font-serif text-2xl sm:text-4xl text-[#ffb4a8]">
          "Pleasure is not a reward for performance; it is the natural consequence of presence, safety, and mutual curiosity."
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#dfbfba] leading-relaxed">
          Whether you are beginning your intimate journey together or rekindling passionate depths after decades of partnership, Velvet &amp; Ember is your guide to sacred exploration.
        </p>
      </section>
    </div>
  );
}
