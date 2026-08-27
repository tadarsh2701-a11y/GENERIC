import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate, useParams, Navigate, Link } from 'react-router-dom';
import { allTopics, getRandomTopic, getTopicBySlug, searchTopics } from './data/all-topics';
import { categories } from './data/categories';
import { TopicItem } from './types/topics';
import { useUserProgress } from './hooks/useUserProgress';
import { useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { CuratedIntentionsBento } from './components/CuratedIntentionsBento';
import { TheJourneySection } from './components/TheJourneySection';
import { TopicCard } from './components/TopicCard';
import { TopicDetail } from './components/TopicDetail';
import { SearchAndFilterBar } from './components/SearchAndFilterBar';
import { CuratedPathways } from './components/CuratedPathways';
import { BookmarksView } from './components/BookmarksView';
import { AboutView } from './components/AboutView';
import { NotFoundView } from './components/NotFoundView';
import { DiscretionShield } from './components/DiscretionShield';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { generateWebSiteSchema, generateOrganizationSchema, generateBreadcrumbSchema } from './utils/seo';
import { Sparkles, ArrowRight, Filter, Compass } from 'lucide-react';

function TopicDetailWrapper({ 
  isBookmarked, isPracticed, isRead, toggleBookmark, togglePracticed, markAsRead, getNote, saveNote, setDiscretionActive 
}: any) {
  const { topicSlug } = useParams();
  const navigate = useNavigate();
  const topic = getTopicBySlug(topicSlug || '');

  if (!topic) return <Navigate to="/topics" replace />;

  return (
    <TopicDetail
      topic={topic}
      onBack={() => {
        navigate('/topics');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onSelectTopic={(t) => {
        navigate(`/topic/${t.slug}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      isBookmarked={isBookmarked(topic.id)}
      isPracticed={isPracticed(topic.id)}
      isRead={isRead(topic.id)}
      onToggleBookmark={toggleBookmark}
      onTogglePracticed={togglePracticed}
      onMarkRead={markAsRead}
      userNote={getNote(topic.id)}
      onSaveNote={saveNote}
      onTriggerDiscretion={() => setDiscretionActive(true)}
    />
  );
}

export default function App() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [discretionActive, setDiscretionActive] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  const { t } = useLanguage();

  const {
    progress,
    toggleBookmark,
    togglePracticed,
    markAsRead,
    saveNote,
    isBookmarked,
    isPracticed,
    isRead,
    getNote
  } = useUserProgress();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDiscretionActive((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredTopics = useMemo(() => {
    return searchTopics(searchQuery, selectedCategory, selectedDifficulty);
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const featuredTopic = useMemo(() => {
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
    );
    const index = dayOfYear % allTopics.length;
    return allTopics[index] || allTopics[0];
  }, []);

  const handleSelectTopic = (topic: TopicItem) => {
    navigate(`/topic/${topic.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryFromBento = (catId: string) => {
    setSelectedCategory(catId);
    setSearchQuery('');
    setSelectedDifficulty('all');
    navigate('/topics');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreBeginner = () => {
    setSelectedDifficulty('Beginner');
    setSelectedCategory('all');
    setSearchQuery('');
    navigate('/topics');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const readCount = progress.readTopicIds.length;
  const practicedCount = progress.practicedTopicIds.length;
  const bookmarkCount = progress.bookmarkedTopicIds.length;

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-sans selection:bg-[#4e1b1d] selection:text-[#ffb3b2] antialiased overflow-x-hidden relative flex flex-col justify-between">
      <div className="film-grain" />

      <Navbar
        onToggleDiscretion={() => setDiscretionActive(true)}
        onOpenLanguage={() => setIsLanguageModalOpen(true)}
        bookmarkCount={bookmarkCount}
      />

      <LanguageSelectorModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      <DiscretionShield
        isActive={discretionActive}
        onToggle={() => setDiscretionActive(false)}
      />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <div className="space-y-16 animate-fade-in pt-16 sm:pt-20">
              <SEOHead
                title="Conscious Intimacy & Relationship Guides"
                description="A sensual, judgment-free guide to deeper connection, pleasure, and charged communication with your partner. Explore 101 curated masterclasses."
                canonicalPath="/"
                structuredData={[generateWebSiteSchema(), generateOrganizationSchema()]}
              />
              <HomeHero
                onBrowse={() => {
                  navigate('/topics');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onExploreBeginner={handleExploreBeginner}
                onOpenPathways={() => {
                  navigate('/pathways');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                readCount={readCount}
                practicedCount={practicedCount}
              />
              <CuratedIntentionsBento
                onSelectCategory={handleCategoryFromBento}
              />
              <TheJourneySection
                onBrowse={() => {
                  navigate('/topics');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onExploreBeginner={handleExploreBeginner}
              />
              {featuredTopic && (
                <section className="max-w-[1200px] mx-auto px-5 md:px-16 py-8">
                  <div className="p-8 sm:p-12 rounded-3xl bg-[#201f1f] border border-[#ffb4a8]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#600000]/30 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 space-y-3 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-widest uppercase bg-[#600000] text-[#ffb4a8] border border-[#ffb4a8]/30 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3" /> Featured Daily Exploration
                        </span>
                        <span className="font-mono text-xs text-[#e9c176]">
                          Topic #{featuredTopic.id}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#e5e2e1]">
                        {featuredTopic.title}
                      </h2>
                      <p className="font-sans text-sm text-[#dfbfba] line-clamp-2 leading-relaxed">
                        {featuredTopic.subtitle}
                      </p>
                    </div>
                    <Link
                      to={`/topic/${featuredTopic.slug}`}
                      className="relative z-10 px-8 py-4 rounded-full bg-[#600000] hover:bg-[#670502] text-white font-sans text-xs uppercase tracking-wider font-semibold bloom-burgundy transition-all duration-300 transform hover:scale-[1.03] shrink-0 flex items-center gap-2 cursor-pointer shadow-xl"
                    >
                      Read Today's Guide <ArrowRight className="w-4 h-4 text-[#ffb4a8]" />
                    </Link>
                  </div>
                </section>
              )}
              <section className="max-w-[1200px] mx-auto px-5 md:px-16 pb-16">
                <div className="p-8 sm:p-12 rounded-3xl bg-[#1c1b1b] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div className="space-y-2 max-w-xl">
                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#e9c176] flex items-center justify-center md:justify-start gap-1.5">
                      <Compass className="w-4 h-4" /> Progressive Masterclasses
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#e5e2e1]">
                      Want a guided, step-by-step pathway?
                    </h3>
                    <p className="font-sans text-sm text-[#dfbfba] leading-relaxed">
                      Explore 6 structured learning pathways with curated sequences for couples at every stage of their intimate relationship.
                    </p>
                  </div>
                  <Link
                    to="/pathways"
                    className="px-8 py-4 rounded-full bg-[#600000] hover:bg-[#670502] text-white font-sans text-xs uppercase tracking-wider font-semibold bloom-burgundy transition-all duration-300 transform hover:scale-[1.03] shrink-0 flex items-center gap-2 cursor-pointer shadow-xl"
                  >
                    View Curated Pathways <ArrowRight className="w-4 h-4 text-[#ffb4a8]" />
                  </Link>
                </div>
              </section>
            </div>
          } />

          <Route path="/topic/:topicSlug" element={
            <div className="pt-16 sm:pt-20">
              <TopicDetailWrapper 
                isBookmarked={isBookmarked}
                isPracticed={isPracticed}
                isRead={isRead}
                toggleBookmark={toggleBookmark}
                togglePracticed={togglePracticed}
                markAsRead={markAsRead}
                getNote={getNote}
                saveNote={saveNote}
                setDiscretionActive={setDiscretionActive}
              />
            </div>
          } />

          <Route path="/topics" element={
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 space-y-10 animate-fade-in">
              <SEOHead
                title="Explore All 101 Intimacy Guides & Somatic Practices"
                description="Curated experiences and structured masterclasses designed to deepen couples intimacy, sensual communication, pleasure anatomy, and emotional safety."
                canonicalPath="/topics"
                structuredData={generateBreadcrumbSchema([
                  { name: 'Home', url: '/' },
                  { name: '101 Guides', url: '/topics' }
                ])}
              />

              <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="font-sans text-xs uppercase tracking-widest text-[#e9c176]">
                  Explore All 101 Guides
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#ffb4a8] leading-tight">
                  Discover New Paths to Pleasure
                </h1>
                <p className="font-sans text-base sm:text-lg text-[#dfbfba]">
                  Curated experiences designed to deepen intimacy, expand your sensory horizons, and elevate communication.
                </p>
              </div>

              {/* 3-Column Layout: Left Category Index, Center Topics Grid, Right Ad Slot */}
              <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
                
                {/* Left Web Sidebar: Categories Navigation Index */}
                <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 space-y-4">
                  <div className="p-5 rounded-2xl bg-[#1c1b1b]/95 border border-[#ffb4a8]/20 backdrop-blur-md shadow-xl">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                      <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#e9c176]">
                        Categories Index
                      </h3>
                      <span className="text-[10px] text-[#a08c87] bg-[#2d1c1a] px-2 py-0.5 rounded-full">
                        8 Modules
                      </span>
                    </div>
                    <div className="space-y-1">
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-sans transition-all flex items-center justify-between ${
                          selectedCategory === 'all'
                            ? 'bg-[#600000]/70 text-[#ffb4a8] font-medium border border-[#ffb4a8]/30 shadow-md'
                            : 'text-[#dfbfba] hover:bg-[#2d1c1a] hover:text-[#fff]'
                        }`}
                      >
                        <span>All 101 Guides</span>
                        <span className="text-[10px] opacity-70">(101)</span>
                      </button>
                      {categories.map((cat) => {
                        const isSelected = selectedCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-sans transition-all flex items-center justify-between group ${
                              isSelected
                                ? 'bg-[#600000]/70 text-[#ffb4a8] font-medium border border-[#ffb4a8]/30 shadow-md'
                                : 'text-[#dfbfba] hover:bg-[#2d1c1a] hover:text-[#fff]'
                            }`}
                          >
                            <span className="truncate pr-2">{cat.title}</span>
                            <span className="text-[10px] opacity-70">({cat.topicCount})</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </aside>

                {/* Center Main Content: Filter Bar & Cards Grid */}
                <div className="flex-1 min-w-0 w-full space-y-8">
                  <SearchAndFilterBar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                    selectedDifficulty={selectedDifficulty}
                    onSelectDifficulty={setSelectedDifficulty}
                    totalResults={filteredTopics.length}
                  />
                  <div id="topics-grid-section">
                    {filteredTopics.length === 0 ? (
                      <div className="text-center py-20 px-4 bg-[#1c1b1b] rounded-3xl border border-dashed border-white/10 space-y-4">
                        <Filter className="w-12 h-12 text-[#dfbfba]/30 mx-auto" />
                        <h3 className="font-serif text-xl text-[#e5e2e1]">No Guides Found</h3>
                        <p className="font-sans text-xs text-[#dfbfba] max-w-sm mx-auto">
                          Try adjusting your search terms or clearing category/difficulty filters.
                        </p>
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setSelectedCategory('all');
                            setSelectedDifficulty('all');
                          }}
                          className="px-6 py-2.5 rounded-full bg-[#600000] text-white text-xs font-sans font-semibold hover:bg-[#670502] transition-colors"
                        >
                          Reset All Filters
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredTopics.map((topic) => (
                          <TopicCard
                            key={topic.id}
                            topic={topic}
                            onSelect={handleSelectTopic}
                            isBookmarked={isBookmarked(topic.id)}
                            isPracticed={isPracticed(topic.id)}
                            isRead={isRead(topic.id)}
                            onToggleBookmark={toggleBookmark}
                            onTogglePracticed={togglePracticed}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Web Sidebar: Ad / Sponsor Blank Placeholder Space */}
                <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 space-y-5">
                  <div className="p-6 rounded-2xl bg-[#1c1b1b]/95 border border-[#ffb4a8]/20 backdrop-blur-md flex flex-col items-center justify-center text-center min-h-[350px] relative overflow-hidden group shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#600000]/15 via-transparent to-[#e9c176]/10 opacity-70 pointer-events-none" />
                    
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#a08c87] mb-4 bg-[#2a1a18] px-3 py-1 rounded-full border border-[#482927]/60 relative z-10">
                      Advertisement Space
                    </span>
                    
                    <div className="w-14 h-14 rounded-2xl bg-[#2a1715] border border-[#ffb4a8]/30 flex items-center justify-center mb-4 text-[#ffb4a8] relative z-10 shadow-inner group-hover:scale-105 transition-transform">
                      <span className="font-serif text-2xl">✨</span>
                    </div>
                    
                    <h4 className="font-serif text-base text-[#e5e2e1] mb-2 relative z-10">
                      Partner Banner Space
                    </h4>
                    
                    <p className="text-xs text-[#a08c87] font-sans leading-relaxed mb-6 relative z-10 px-2">
                      Blank ad placement slot for intimacy educators, wellness brands &amp; workshops.
                    </p>

                    <div className="w-full border-t border-[#3d2422] pt-4 relative z-10">
                      <span className="text-[11px] text-[#e9c176] hover:underline cursor-pointer font-sans block">
                        Inquire for Ads Placement
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#181616]/95 border border-[#2d1c1a] text-center min-h-[140px] flex flex-col items-center justify-center space-y-2 shadow-lg">
                    <span className="text-[9px] uppercase tracking-wider text-[#7e6b66]">Reserved Ad Unit</span>
                    <div className="w-full h-20 rounded-xl bg-[#231514] border border-dashed border-[#482927] flex items-center justify-center text-xs text-[#a08c87]">
                      300 × 150 Ad Banner
                    </div>
                  </div>
                </aside>

              </div>
            </div>
          } />

          <Route path="/pathways" element={
            <div className="max-w-[1200px] mx-auto px-5 md:px-16 pt-24 pb-20 animate-fade-in">
              <CuratedPathways
                onSelectTopic={handleSelectTopic}
                readTopicIds={progress.readTopicIds}
              />
            </div>
          } />

          <Route path="/bookmarks" element={
            <div className="pt-16 sm:pt-20">
              <BookmarksView
                onBack={() => {
                  navigate('/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectTopic={handleSelectTopic}
                bookmarkedTopicIds={progress.bookmarkedTopicIds}
                practicedTopicIds={progress.practicedTopicIds}
                readTopicIds={progress.readTopicIds}
                notes={progress.notes}
                onToggleBookmark={toggleBookmark}
                onTogglePracticed={togglePracticed}
              />
            </div>
          } />

          <Route path="/about" element={
            <div className="pt-16 sm:pt-20">
              <AboutView
                onBrowse={() => {
                  navigate('/topics');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onExploreBeginner={handleExploreBeginner}
              />
            </div>
          } />

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
