import React from 'react';
import { Link } from 'react-router-dom';
import { categoryImageMap, appImages } from '../data/images';
import { useLanguage } from '../context/LanguageContext';

interface CuratedIntentionsBentoProps {
  onSelectCategory: (categoryId: string) => void;
}

export function CuratedIntentionsBento({ onSelectCategory }: CuratedIntentionsBentoProps) {
  const { t, translateCategory } = useLanguage();

  const foreplay = translateCategory('foreplay-arousal');
  const comms = translateCategory('communication');
  const oralManual = translateCategory('oral-manual');
  const positions = translateCategory('penetration-positions');
  const toys = translateCategory('toys-enhancement');
  const selfPartner = translateCategory('self-partner-knowledge');
  const aftercare = translateCategory('aftercare-health-longevity');

  return (
    <section className="py-20 md:py-24 px-5 md:px-16 max-w-[1200px] mx-auto relative z-10" id="topics">
      <div className="mb-14 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-[#e5e2e1] mb-4">{t('pathwaysTitle')}</h2>
        <div className="h-px w-16 bg-[#e9c176] mx-auto opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
        {/* Card 1: Foreplay (Large 2x2) */}
        <Link
          id="bento-card-foreplay"
          to="/topics"
          onClick={() => onSelectCategory('foreplay-arousal')}
          className="group relative md:col-span-2 md:row-span-2 rounded-xl overflow-hidden bg-[#201f1f] border border-[#58413e]/40 hover:border-[#ffb3b2]/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 block cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transform duration-700"
            style={{
              backgroundImage: `url('${appImages.oil}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#201f1f]/60 to-transparent opacity-85" />
          <div className="absolute bottom-0 left-0 p-8 z-10">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e9c176] mb-1 inline-block">
              Category 03 • 13 Guides
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#e5e2e1] group-hover:text-[#ffb4a8] transition-colors">
              {foreplay.title}
            </h3>
            <p className="font-sans text-sm text-[#dfbfba] mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 max-w-md">
              {foreplay.description}
            </p>
          </div>
        </Link>

        {/* Card 2: Communication */}
        <Link
          id="bento-card-communication"
          to="/topics"
          onClick={() => onSelectCategory('communication')}
          className="group relative rounded-xl overflow-hidden bg-[#201f1f] border border-[#58413e]/40 hover:border-[#ffb3b2]/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 block cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transform duration-700"
            style={{
              backgroundImage: `url('${categoryImageMap['communication']}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#201f1f]/50 to-transparent opacity-85" />
          <div className="absolute bottom-0 left-0 p-6 z-10">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e9c176] mb-1 inline-block">
              Category 01 • 14 Guides
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-[#e5e2e1] group-hover:text-[#ffb4a8] transition-colors">
              {comms.shortName || comms.title}
            </h3>
          </div>
        </Link>

        {/* Card 3: Techniques */}
        <Link
          id="bento-card-techniques"
          to="/topics"
          onClick={() => onSelectCategory('oral-manual')}
          className="group relative rounded-xl overflow-hidden bg-[#201f1f] border border-[#58413e]/40 hover:border-[#ffb3b2]/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 block cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transform duration-700"
            style={{
              backgroundImage: `url('${categoryImageMap['oral-manual']}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#201f1f]/50 to-transparent opacity-85" />
          <div className="absolute bottom-0 left-0 p-6 z-10">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e9c176] mb-1 inline-block">
              Category 04 • 10 Guides
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-[#e5e2e1] group-hover:text-[#ffb4a8] transition-colors">
              {oralManual.shortName || oralManual.title}
            </h3>
          </div>
        </Link>

        {/* Card 4: Positions (Tall 1x2) */}
        <Link
          id="bento-card-positions"
          to="/topics"
          onClick={() => onSelectCategory('penetration-positions')}
          className="group relative md:row-span-2 rounded-xl overflow-hidden bg-[#201f1f] border border-[#58413e]/40 hover:border-[#ffb3b2]/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 block lg:col-start-4 lg:row-start-1 cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transform duration-700"
            style={{
              backgroundImage: `url('${appImages.position}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#201f1f]/50 to-transparent opacity-85" />
          <div className="absolute bottom-0 left-0 p-6 z-10">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e9c176] mb-1 inline-block">
              Category 05 • 14 Guides
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-[#e5e2e1] group-hover:text-[#ffb4a8] transition-colors">
              {positions.shortName || positions.title}
            </h3>
            <p className="font-sans text-xs text-[#dfbfba] mt-1 opacity-80">
              {positions.description}
            </p>
          </div>
        </Link>

        {/* Card 5: Toys & Tools */}
        <Link
          id="bento-card-toys"
          to="/topics"
          onClick={() => onSelectCategory('toys-enhancement')}
          className="group relative md:col-span-2 lg:col-span-1 rounded-xl overflow-hidden bg-[#201f1f] border border-[#58413e]/40 hover:border-[#ffb3b2]/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 block cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transform duration-700"
            style={{
              backgroundImage: `url('${categoryImageMap['toys-enhancement']}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#201f1f]/50 to-transparent opacity-85" />
          <div className="absolute bottom-0 left-0 p-6 z-10">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e9c176] mb-1 inline-block">
              Category 06 • 12 Guides
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-[#e5e2e1] group-hover:text-[#ffb4a8] transition-colors">
              {toys.shortName || toys.title}
            </h3>
          </div>
        </Link>

        {/* Card 6: Emotional Intimacy (2x1 wide) */}
        <Link
          id="bento-card-emotional"
          to="/topics"
          onClick={() => onSelectCategory('self-partner-knowledge')}
          className="group relative md:col-span-2 rounded-xl overflow-hidden bg-[#201f1f] border border-[#58413e]/40 hover:border-[#ffb3b2]/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 block cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transform duration-700"
            style={{
              backgroundImage: `url('${appImages.hands}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#201f1f]/50 to-transparent opacity-85" />
          <div className="absolute bottom-0 left-0 p-8 z-10">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e9c176] mb-1 inline-block">
              Category 02 • 11 Guides
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#e5e2e1] group-hover:text-[#ffb4a8] transition-colors">
              {selfPartner.title}
            </h3>
            <p className="font-sans text-sm text-[#dfbfba] mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              {selfPartner.description}
            </p>
          </div>
        </Link>

        {/* Card 7: Aftercare */}
        <Link
          id="bento-card-aftercare"
          to="/topics"
          onClick={() => onSelectCategory('aftercare-health-longevity')}
          className="group relative rounded-xl overflow-hidden bg-[#201f1f] border border-[#58413e]/40 hover:border-[#ffb3b2]/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 block cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transform duration-700"
            style={{
              backgroundImage: `url('${categoryImageMap['aftercare-health-longevity']}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#201f1f]/50 to-transparent opacity-85" />
          <div className="absolute bottom-0 left-0 p-6 z-10">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e9c176] mb-1 inline-block">
              Category 08 • 11 Guides
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-[#e5e2e1] group-hover:text-[#ffb4a8] transition-colors">
              {aftercare.shortName || aftercare.title}
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
}

