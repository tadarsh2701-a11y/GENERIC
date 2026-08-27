import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, CheckCircle2, FileText, ArrowLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TopicItem } from '../types/topics';
import { getTopicById } from '../data/all-topics';
import { TopicCard } from './TopicCard';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from './SEOHead';

interface BookmarksViewProps {
  onBack: () => void;
  onSelectTopic: (topic: TopicItem) => void;
  bookmarkedTopicIds: number[];
  practicedTopicIds: number[];
  readTopicIds: number[];
  notes: Record<number, string>;
  onToggleBookmark: (id: number) => void;
  onTogglePracticed: (id: number) => void;
}

export function BookmarksView({
  onBack,
  onSelectTopic,
  bookmarkedTopicIds,
  practicedTopicIds,
  readTopicIds,
  notes,
  onToggleBookmark,
  onTogglePracticed
}: BookmarksViewProps) {
  const { t, translateCategory, translateTopic } = useLanguage();
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'practiced' | 'notes'>('bookmarks');

  const bookmarkedTopics = bookmarkedTopicIds
    .map((id) => getTopicById(id))
    .filter((t): t is TopicItem => t !== undefined);

  const practicedTopics = practicedTopicIds
    .map((id) => getTopicById(id))
    .filter((t): t is TopicItem => t !== undefined);

  const topicsWithNotes = Object.keys(notes)
    .filter((idStr) => notes[Number(idStr)] && notes[Number(idStr)].trim() !== '')
    .map((idStr) => ({
      topic: getTopicById(Number(idStr)),
      note: notes[Number(idStr)]
    }))
    .filter((item): item is { topic: TopicItem; note: string } => item.topic !== undefined);

  return (
    <div id="bookmarks-view-container" className="max-w-[1200px] mx-auto px-5 md:px-16 pt-24 pb-20 animate-fade-in relative z-10 space-y-8">
      <SEOHead
        title="Saved Bookmarks & Private Reflection Logs"
        description="Your private, locally stored intimacy bookmarks, reading progress, and partner reflections."
        canonicalPath="/bookmarks"
        robots="noindex, follow"
      />

      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5">
        <Link
          id="bookmarks-back-btn"
          to="/topics"
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#dfbfba] hover:text-[#ffb4a8] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Knowledge Base
        </Link>

        <h1 className="font-serif text-2xl sm:text-3xl text-[#ffb4a8]">
          Saved Logs &amp; Partner Notes
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1 rounded-full bg-[#201f1f] border border-white/5 max-w-md">
        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
            activeTab === 'bookmarks'
              ? 'bg-[#600000] text-white bloom-burgundy'
              : 'text-[#dfbfba] hover:text-white'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" /> Bookmarks ({bookmarkedTopics.length})
        </button>

        <button
          onClick={() => setActiveTab('practiced')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
            activeTab === 'practiced'
              ? 'bg-[#600000] text-white bloom-burgundy'
              : 'text-[#dfbfba] hover:text-white'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" /> Practiced ({practicedTopics.length})
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
            activeTab === 'notes'
              ? 'bg-[#600000] text-white bloom-burgundy'
              : 'text-[#dfbfba] hover:text-white'
          }`}
        >
          <FileText className="w-3.5 h-3.5" /> Notes ({topicsWithNotes.length})
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'bookmarks' && (
        <div>
          {bookmarkedTopics.length === 0 ? (
            <div className="text-center py-20 px-4 bg-[#1c1b1b] rounded-2xl border border-dashed border-white/10 space-y-4">
              <Bookmark className="w-12 h-12 text-[#dfbfba]/30 mx-auto" />
              <h3 className="font-serif text-xl text-[#e5e2e1]">No Bookmarked Topics Yet</h3>
              <p className="font-sans text-xs text-[#dfbfba] max-w-sm mx-auto">
                Save guides you want to revisit with your partner by tapping the bookmark icon on any topic card.
              </p>
              <button
                onClick={onBack}
                className="px-6 py-2.5 rounded-full bg-[#600000] text-white text-xs font-sans font-semibold hover:bg-[#670502] transition-colors"
              >
                Browse All 101 Topics
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onSelect={onSelectTopic}
                  isBookmarked={true}
                  isPracticed={practicedTopicIds.includes(topic.id)}
                  isRead={readTopicIds.includes(topic.id)}
                  onToggleBookmark={onToggleBookmark}
                  onTogglePracticed={onTogglePracticed}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'practiced' && (
        <div>
          {practicedTopics.length === 0 ? (
            <div className="text-center py-20 px-4 bg-[#1c1b1b] rounded-2xl border border-dashed border-white/10 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#dfbfba]/30 mx-auto" />
              <h3 className="font-serif text-xl text-[#e5e2e1]">No Practiced Topics Logged</h3>
              <p className="font-sans text-xs text-[#dfbfba] max-w-sm mx-auto">
                When you and your partner explore an exercise or launch a practice timer, mark it as practiced to log your journey.
              </p>
              <button
                onClick={onBack}
                className="px-6 py-2.5 rounded-full bg-[#600000] text-white text-xs font-sans font-semibold hover:bg-[#670502] transition-colors"
              >
                Start Exploring Guides
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practicedTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onSelect={onSelectTopic}
                  isBookmarked={bookmarkedTopicIds.includes(topic.id)}
                  isPracticed={true}
                  isRead={readTopicIds.includes(topic.id)}
                  onToggleBookmark={onToggleBookmark}
                  onTogglePracticed={onTogglePracticed}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'notes' && (
        <div>
          {topicsWithNotes.length === 0 ? (
            <div className="text-center py-20 px-4 bg-[#1c1b1b] rounded-2xl border border-dashed border-white/10 space-y-4">
              <FileText className="w-12 h-12 text-[#dfbfba]/30 mx-auto" />
              <h3 className="font-serif text-xl text-[#e5e2e1]">No Partner Notes Saved Yet</h3>
              <p className="font-sans text-xs text-[#dfbfba] max-w-sm mx-auto">
                Add private reflection notes at the bottom of any topic guide to record calibrations, desires, or touches you both loved.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topicsWithNotes.map(({ topic, note }) => {
                const localizedTopic = translateTopic(topic);
                const cat = translateCategory(localizedTopic.categoryId);
                return (
                  <div
                    key={topic.id}
                    onClick={() => onSelectTopic(localizedTopic)}
                    className="p-6 rounded-2xl bg-[#201f1f] border border-white/5 hover:border-[#ffb4a8]/40 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-sans text-[#e9c176] uppercase tracking-wider">
                        Topic #{localizedTopic.id} • {cat.shortName || localizedTopic.categoryName}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#dfbfba] group-hover:text-[#ffb4a8] transition-colors" />
                    </div>
                    <h4 className="font-serif text-lg text-[#e5e2e1] mb-3 group-hover:text-[#ffb4a8] transition-colors">
                      {localizedTopic.title}
                    </h4>
                    <div className="p-4 bg-[#1c1b1b] rounded-xl border border-white/5 text-sm font-sans text-[#dfbfba] leading-relaxed italic">
                      "{note}"
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
