import React from 'react';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SearchAndFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  selectedDifficulty: string;
  onSelectDifficulty: (difficulty: string) => void;
  totalResults: number;
}

export function SearchAndFilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedDifficulty,
  onSelectDifficulty,
  totalResults
}: SearchAndFilterBarProps) {
  const { t, translateCategory } = useLanguage();

  const categoryFilterKeys = [
    { id: 'all', label: t('allTopics') },
    { id: 'communication', label: translateCategory('communication').title },
    { id: 'self-partner-knowledge', label: translateCategory('self-partner-knowledge').title },
    { id: 'foreplay-arousal', label: translateCategory('foreplay-arousal').title },
    { id: 'oral-manual', label: translateCategory('oral-manual').title },
    { id: 'penetration-positions', label: translateCategory('penetration-positions').title },
    { id: 'toys-enhancement', label: translateCategory('toys-enhancement').title },
    { id: 'advanced-exploratory', label: translateCategory('advanced-exploratory').title },
    { id: 'aftercare-health-longevity', label: translateCategory('aftercare-health-longevity').title }
  ];

  const difficultyFilters = [
    { id: 'all', label: t('allLevels') },
    { id: 'Beginner', label: t('beginner') },
    { id: 'Intermediate', label: t('intermediate') },
    { id: 'Advanced', label: t('advanced') }
  ];

  return (
    <div
      id="search-filter-container"
      className="bg-[#1c1b1b]/70 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/5 space-y-6 shadow-xl"
    >
      {/* Search Input Box */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#e9c176]/70" />
        <input
          id="topic-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className="w-full bg-[#201f1f] border-b-2 border-[#e9c176]/30 focus:border-[#ffb4a8] focus:outline-none text-[#e5e2e1] placeholder-[#dfbfba]/40 pl-12 pr-10 py-3.5 rounded-t-xl font-sans text-sm md:text-base transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#dfbfba]/60 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-sans uppercase tracking-wider text-[#dfbfba]/70">
          <span className="flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#e9c176]" /> {t('categoryFilter')}
          </span>
          <span className="font-mono text-[#e9c176]">
            {totalResults} {t('guidesFound')}
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoryFilterKeys.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-sans text-xs whitespace-nowrap transition-all duration-300 cursor-pointer font-medium ${
                  isSelected
                    ? 'bg-[#600000] text-white border border-[#ffb4a8]/50 shadow-[0_0_15px_rgba(96,0,0,0.5)]'
                    : 'bg-[#201f1f] text-[#dfbfba] border border-white/5 hover:border-[#e9c176]/30 hover:text-[#ffb4a8]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Difficulty Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-sans uppercase tracking-wider text-[#dfbfba]/60 mr-2">
            {t('difficultyFilter')}:
          </span>
          {difficultyFilters.map((diff) => {
            const isSelected = selectedDifficulty === diff.id;
            return (
              <button
                key={diff.id}
                id={`filter-diff-${diff.id}`}
                onClick={() => onSelectDifficulty(diff.id)}
                className={`px-3 py-1 rounded-full font-sans text-xs transition-all cursor-pointer font-medium ${
                  isSelected
                    ? 'bg-[#e9c176]/20 text-[#e9c176] border border-[#e9c176]/50'
                    : 'text-[#dfbfba]/70 hover:text-white border border-transparent'
                }`}
              >
                {diff.label}
              </button>
            );
          })}
        </div>

        {(searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
          <button
            onClick={() => {
              onSearchChange('');
              onSelectCategory('all');
              onSelectDifficulty('all');
            }}
            className="text-xs font-sans text-[#ffb4a8] hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}

