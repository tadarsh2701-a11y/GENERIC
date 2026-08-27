import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  Bookmark,
  Shuffle,
  Shield,
  Search,
  Menu,
  X,
  Compass,
  Grid,
  Info,
  Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getRandomTopic } from '../data/all-topics';

interface NavbarProps {
  onToggleDiscretion: () => void;
  onOpenLanguage: () => void;
  bookmarkCount: number;
}

export function Navbar({
  onToggleDiscretion,
  onOpenLanguage,
  bookmarkCount,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, languageInfo } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePickRandom = () => {
    const random = getRandomTopic();
    navigate(`/topic/${random.slug}`);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPath = location.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all ease-in-out duration-300">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-10 lg:px-12 py-3 max-w-[1280px] mx-auto h-16 sm:h-20">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-xl sm:text-2xl md:text-3xl tracking-tight text-[#ffb4a8] hover:text-[#ffdcd7] transition-colors duration-300 cursor-pointer whitespace-nowrap select-none"
          >
            Velvet &amp; Ember
          </Link>
          <span className="hidden xl:inline-block font-sans text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#600000]/60 text-[#ffb4a8] border border-[#ffb4a8]/20 whitespace-nowrap">
            101 Guides
          </span>
        </div>

        {/* Desktop Center Navigation */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          <Link
            to="/"
            className={`font-sans text-sm tracking-wide transition-colors duration-200 cursor-pointer py-1 ${
              currentPath === '/'
                ? 'text-[#ffb4a8] border-b-2 border-[#ffb4a8] font-medium'
                : 'text-[#dfbfba] hover:text-[#ffb4a8]'
            }`}
          >
            {t('navHome')}
          </Link>

          <Link
            to="/topics"
            className={`font-sans text-sm tracking-wide transition-colors duration-200 cursor-pointer py-1 ${
              currentPath === '/topics' || currentPath.startsWith('/topic/')
                ? 'text-[#ffb4a8] border-b-2 border-[#ffb4a8] font-medium'
                : 'text-[#dfbfba] hover:text-[#ffb4a8]'
            }`}
          >
            {t('navTopics')}
          </Link>

          <Link
            to="/pathways"
            className={`font-sans text-sm tracking-wide transition-colors duration-200 cursor-pointer py-1 ${
              currentPath === '/pathways'
                ? 'text-[#ffb4a8] border-b-2 border-[#ffb4a8] font-medium'
                : 'text-[#dfbfba] hover:text-[#ffb4a8]'
            }`}
          >
            {t('navPathways')}
          </Link>

          <Link
            to="/about"
            className={`font-sans text-sm tracking-wide transition-colors duration-200 cursor-pointer py-1 ${
              currentPath === '/about'
                ? 'text-[#ffb4a8] border-b-2 border-[#ffb4a8] font-medium'
                : 'text-[#dfbfba] hover:text-[#ffb4a8]'
            }`}
          >
            {t('navAbout')}
          </Link>
        </nav>

        {/* Actions Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
          {/* Language Selector Pill */}
          <button
            id="nav-language-btn"
            onClick={onOpenLanguage}
            title="Change Language (20 Regional Indian Languages)"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#201f1f] border border-[#ffb4a8]/30 text-[#ffb4a8] hover:bg-[#600000]/60 hover:text-white transition-all duration-300 cursor-pointer text-xs font-sans font-medium shrink-0"
            aria-label="Change Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#e9c176] shrink-0" />
            <span className="hidden sm:inline font-serif text-xs max-w-[85px] truncate">{languageInfo.nativeName}</span>
            <span className="sm:hidden font-mono uppercase text-[10px]">{languageInfo.code}</span>
          </button>

          {/* Random Topic Shuffle Button (Desktop & Tablet) */}
          <button
            id="nav-random-btn"
            onClick={handlePickRandom}
            title={t('navRandom')}
            className="hidden sm:inline-flex p-2 text-[#dfbfba] hover:text-[#ffb4a8] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
            aria-label="Random Topic"
          >
            <Shuffle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#e9c176]" />
          </button>

          {/* Search Button (Desktop & Tablet) */}
          <Link
            to="/topics"
            title={t('navSearch')}
            className="hidden sm:inline-flex p-2 text-[#dfbfba] hover:text-[#ffb4a8] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
            aria-label="Search Topics"
          >
            <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </Link>

          {/* Saved Bookmarks Button (Always Visible) */}
          <Link
            to="/bookmarks"
            title={t('navSaved')}
            className={`relative p-2 transition-colors rounded-full hover:bg-white/5 cursor-pointer ${
              currentPath === '/bookmarks' ? 'text-[#ffb4a8]' : 'text-[#dfbfba] hover:text-[#ffb4a8]'
            }`}
            aria-label="Saved Bookmarks"
          >
            <Bookmark className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            {bookmarkCount > 0 && (
              <span className="absolute 0 top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#600000] border border-[#ffb4a8] text-[9px] font-bold text-[#ffb4a8] flex items-center justify-center">
                {bookmarkCount}
              </span>
            )}
          </Link>

          {/* Discretion Shield Quick Toggle (Always Visible) */}
          <button
            id="nav-discretion-btn"
            onClick={onToggleDiscretion}
            title={`${t('navDiscretion')} (Esc)`}
            className="p-2 text-[#dfbfba] hover:text-[#ffb4a8] transition-colors rounded-full hover:bg-white/5 cursor-pointer"
            aria-label="Discretion Shield"
          >
            <Shield className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#e9c176]/90" />
          </button>

          {/* Mobile Menu Toggle (Below lg breakpoint) */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#dfbfba] hover:text-[#ffb4a8] transition-colors cursor-pointer rounded-full hover:bg-white/5 ml-0.5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131313]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
          {/* Mobile Language Switcher Quick Bar */}
          <div className="pb-3 border-b border-white/10 flex items-center justify-between">
            <span className="text-xs font-sans uppercase tracking-wider text-[#dfbfba]">
              {t('navLanguage')}
            </span>
            <button
              onClick={() => {
                onOpenLanguage();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#201f1f] border border-[#ffb4a8]/40 text-[#ffb4a8] text-xs font-medium cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#e9c176]" />
              <span>{languageInfo.nativeName} ({languageInfo.name})</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => handleNav('/')}
              className={`text-left py-2 font-serif text-lg ${
                currentPath === '/' ? 'text-[#ffb4a8] font-bold' : 'text-[#dfbfba]'
              }`}
            >
              {t('navHome')}
            </button>
            <button
              onClick={() => handleNav('/topics')}
              className={`text-left py-2 font-serif text-lg ${
                currentPath === '/topics' || currentPath.startsWith('/topic/') ? 'text-[#ffb4a8] font-bold' : 'text-[#dfbfba]'
              }`}
            >
              {t('allTopics')} (101)
            </button>
            <button
              onClick={() => handleNav('/pathways')}
              className={`text-left py-2 font-serif text-lg ${
                currentPath === '/pathways' ? 'text-[#ffb4a8] font-bold' : 'text-[#dfbfba]'
              }`}
            >
              {t('navPathways')}
            </button>
            <button
              onClick={() => handleNav('/bookmarks')}
              className={`text-left py-2 font-serif text-lg flex items-center justify-between ${
                currentPath === '/bookmarks' ? 'text-[#ffb4a8] font-bold' : 'text-[#dfbfba]'
              }`}
            >
              <span>{t('navSaved')}</span>
              {bookmarkCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-[#600000] text-[#ffb4a8] text-xs font-mono">
                  {bookmarkCount}
                </span>
              )}
            </button>
            <button
              onClick={() => handleNav('/about')}
              className={`text-left py-2 font-serif text-lg ${
                currentPath === '/about' ? 'text-[#ffb4a8] font-bold' : 'text-[#dfbfba]'
              }`}
            >
              {t('navAbout')}
            </button>
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => handleNav('/topics')}
              className="w-full py-3 rounded-full bg-[#600000] text-white font-sans text-xs uppercase tracking-wider font-semibold bloom-burgundy text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Grid className="w-4 h-4 text-[#ffb4a8]" />
              {t('navBrowse')}
            </button>
            <button
              onClick={handlePickRandom}
              className="w-full py-2.5 rounded-full border border-[#e9c176]/50 text-[#e9c176] font-sans text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5" /> {t('navRandom')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

