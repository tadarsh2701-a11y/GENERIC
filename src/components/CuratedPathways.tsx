import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartHandshake,
  Sparkles,
  Flame,
  Compass,
  ShieldCheck,
  Infinity as InfinityIcon,
  Clock,
  ArrowRight
} from 'lucide-react';
import { curatedPathways } from '../data/pathways';
import { TopicItem } from '../types/topics';
import { getTopicById } from '../data/all-topics';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from './SEOHead';
import { generatePathwaysSchema, generateBreadcrumbSchema } from '../utils/seo';

interface CuratedPathwaysProps {
  onSelectTopic?: (topic: TopicItem) => void;
  readTopicIds: number[];
}

export function CuratedPathways({ onSelectTopic, readTopicIds }: CuratedPathwaysProps) {
  const { t, translateTopic } = useLanguage();
  
  const pathwaysSchema = generatePathwaysSchema(curatedPathways);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Curated Pathways', url: '/pathways' }
  ]);

  const getPathwayIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#ffb4a8]' };
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Infinity':
        return <InfinityIcon {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div id="curated-pathways-container" className="space-y-10 relative z-10">
      <SEOHead
        title="Curated Intimacy Pathways & Masterclasses"
        description="Structured progressive intimacy pathways and learning masterclasses for couples. Explore sensory awakening, communication, positions, and erotic longevity."
        canonicalPath="/pathways"
        structuredData={[pathwaysSchema, breadcrumbSchema]}
      />

      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-sans text-[#dfbfba]/70 mb-2">
        <Link to="/" className="hover:text-[#ffb4a8] transition-colors">Home</Link>
        <span className="opacity-40">/</span>
        <span className="text-[#e9c176]">Curated Pathways</span>
      </nav>

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="font-sans text-xs uppercase tracking-widest text-[#e9c176]">
          Structured Masterclasses
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#ffb4a8]">
          Curated Learning Pathways
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#dfbfba]">
          Step-by-step masterclasses designed to guide you and your partner through progressive somatic exploration and intimate communication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {curatedPathways.map((pathway) => {
          const completedCount = pathway.topicIds.filter((id) => readTopicIds.includes(id)).length;
          const percent = Math.round((completedCount / pathway.topicIds.length) * 100);

          return (
            <div
              key={pathway.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#201f1f] border border-white/5 hover:border-[#ffb4a8]/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#600000]/60 border border-[#ffb4a8]/30">
                    {getPathwayIcon(pathway.icon)}
                  </div>
                  <span className="flex items-center gap-1 font-sans text-xs text-[#e9c176]">
                    <Clock className="w-3.5 h-3.5" /> {pathway.duration}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#e5e2e1] leading-snug mb-1">
                  {pathway.title}
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-[#ffb4a8] mb-2 font-medium">
                  {pathway.subtitle}
                </p>
                <p className="font-sans text-xs text-[#dfbfba] leading-relaxed mb-6">
                  {pathway.description}
                </p>

                {/* Topics in pathway list */}
                <div className="space-y-2 mb-6">
                  <div className="font-sans text-[10px] uppercase tracking-widest text-[#dfbfba]/60 flex items-center justify-between">
                    <span>Course Curriculum</span>
                    <span className="text-[#e9c176] font-mono">{completedCount}/{pathway.topicIds.length} Done</span>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {pathway.topicIds.map((topicId) => {
                      const rawTopic = getTopicById(topicId);
                      if (!rawTopic) return null;
                      const t = translateTopic(rawTopic);
                      const isRead = readTopicIds.includes(topicId);

                      return (
                        <Link
                          key={topicId}
                          to={`/topic/${rawTopic.slug}`}
                          onClick={() => {
                            if (onSelectTopic) onSelectTopic(t);
                          }}
                          className="w-full text-left p-2.5 rounded-xl bg-[#1c1b1b] hover:bg-[#2a2a2a] border border-white/5 text-xs text-[#e5e2e1] flex items-center justify-between gap-2 transition-colors group cursor-pointer block"
                        >
                          <span className="truncate flex items-center gap-2">
                            <span className="font-mono text-[#e9c176] text-[11px]">#{t.id}</span>
                            <span className="truncate group-hover:text-[#ffb4a8] transition-colors">
                              {t.title}
                            </span>
                          </span>
                          {isRead ? (
                            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 text-[#dfbfba]/60 group-hover:text-[#ffb4a8] group-hover:translate-x-0.5 transition-all shrink-0" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-[#131313] overflow-hidden">
                  <div
                    className="h-full bg-[#ffb4a8] rounded-full transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
