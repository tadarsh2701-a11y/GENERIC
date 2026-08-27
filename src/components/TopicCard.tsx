import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { TopicItem } from '../types/topics';
import { getTopicImage } from '../data/images';
import { useLanguage } from '../context/LanguageContext';

interface TopicCardProps {
  topic: TopicItem;
  onSelect?: (topic: TopicItem) => void;
  isBookmarked: boolean;
  isPracticed: boolean;
  isRead: boolean;
  onToggleBookmark: (topicId: number) => void;
  onTogglePracticed: (topicId: number) => void;
}

export function TopicCard({
  topic,
  onSelect,
  isBookmarked,
  isPracticed,
  isRead,
  onToggleBookmark,
  onTogglePracticed
}: TopicCardProps) {
  const { t, translateCategory, translateDifficulty, translateTopic } = useLanguage();
  const localizedTopic = translateTopic(topic);
  const imageUrl = getTopicImage(topic.id, topic.categoryId);
  const difficulty = translateDifficulty(localizedTopic.overview?.difficulty || 'Beginner');
  const cat = translateCategory(localizedTopic.categoryId);
  const readingTime = localizedTopic.estimatedTime || `5 ${t('minRead')}`;

  return (
    <Link
      id={`topic-card-${topic.id}`}
      to={`/topic/${topic.slug}`}
      onClick={(e) => {
        if (onSelect) {
          onSelect(localizedTopic);
        }
      }}
      className="relative rounded-xl overflow-hidden bg-[#201f1f]/70 backdrop-blur-[20px] border border-white/5 glass-card-hover group cursor-pointer h-[420px] flex flex-col justify-between transition-all duration-500 shadow-lg hover:shadow-2xl hover:border-[#ffb4a8]/40 block text-left"
    >
      {/* Top Media Section */}
      <div className="relative h-48 w-full overflow-hidden bg-[#0e0e0e]">
        <img
          src={imageUrl}
          alt={`${localizedTopic.title} - ${cat.title || localizedTopic.categoryName} Guide`}
          width="400"
          height="192"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-85 mix-blend-luminosity group-hover:mix-blend-normal"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-[#201f1f]/40 to-transparent" />

        {/* Top Badges & Actions */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span className="font-sans text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#131313]/80 backdrop-blur-md text-[#e9c176] border border-[#e9c176]/30">
              #{topic.id}
            </span>
            <span className="font-sans text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#131313]/80 backdrop-blur-md text-[#dfbfba] border border-white/10">
              {difficulty}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(topic.id);
            }}
            title={isBookmarked ? 'Remove Bookmark' : t('saveBookmark')}
            className={`p-1.5 rounded-full backdrop-blur-md border transition-all ${
              isBookmarked
                ? 'bg-[#600000] border-[#ffb4a8] text-[#ffb4a8]'
                : 'bg-[#131313]/80 border-white/10 text-[#dfbfba] hover:text-[#ffb4a8] hover:border-[#ffb4a8]/40'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Read / Practiced Ribbon */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-sans text-[#dfbfba]/80">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#e9c176]" />
            {readingTime}
          </span>
          {isPracticed && (
            <span className="flex items-center gap-1 text-emerald-400 font-semibold bg-[#131313]/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
              <CheckCircle2 className="w-3 h-3" /> {t('practiced')}
            </span>
          )}
          {!isPracticed && isRead && (
            <span className="text-[#e9c176] font-medium bg-[#131313]/80 px-2 py-0.5 rounded-full">
              {t('saved')}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#e9c176] block mb-1">
            {cat.shortName || cat.title || localizedTopic.categoryName}
          </span>
          <h3 className="font-serif text-xl text-[#e5e2e1] group-hover:text-[#ffb4a8] transition-colors leading-snug line-clamp-2">
            {localizedTopic.title}
          </h3>
          <p className="font-sans text-xs text-[#dfbfba] mt-2 line-clamp-2 leading-relaxed">
            {localizedTopic.subtitle}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between">
          <span className="font-sans text-xs text-[#ffb4a8] group-hover:text-white transition-colors font-medium flex items-center gap-1.5">
            {t('heroExploreBtn')}
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </span>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onTogglePracticed(topic.id);
            }}
            title={isPracticed ? 'Mark as Not Practiced' : t('markPracticed')}
            className={`px-2.5 py-1 rounded-full text-[10px] font-sans font-medium transition-colors border ${
              isPracticed
                ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40'
                : 'text-[#dfbfba]/70 border-white/10 hover:border-[#e9c176]/40 hover:text-[#e9c176]'
            }`}
          >
            {isPracticed ? `✓ ${t('practiced')}` : `+ ${t('practiced')}`}
          </button>
        </div>
      </div>
    </Link>
  );
}

