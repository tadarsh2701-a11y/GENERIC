import React, { useState, useMemo } from 'react';
import { Globe, Search, Check, X, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageCode, LanguageInfo } from '../types/language';

interface LanguageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LanguageSelectorModal({ isOpen, onClose }: LanguageSelectorModalProps) {
  const { currentLanguage, setLanguage, availableLanguages, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) return availableLanguages;
    const q = searchQuery.toLowerCase().trim();
    return availableLanguages.filter(
      (lang) =>
        lang.name.toLowerCase().includes(q) ||
        lang.nativeName.toLowerCase().includes(q) ||
        lang.region.toLowerCase().includes(q)
    );
  }, [availableLanguages, searchQuery]);

  if (!isOpen) return null;

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    onClose();
  };

  return (
    <div
      id="language-modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="language-modal-content"
        className="relative w-full max-w-2xl max-h-[88vh] bg-[#1c1b1b] border border-[#ffb4a8]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#e5e2e1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#600000] border border-[#ffb4a8]/30 flex items-center justify-center text-[#ffb4a8] bloom-burgundy shadow-lg">
              <Globe className="w-5 h-5 text-[#e9c176]" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#ffb4a8]">
                Select Language • भाषा निवडा
              </h2>
              <p className="font-sans text-xs text-[#dfbfba]">
                All 20 Indian Regional Languages Supported + English
              </p>
            </div>
          </div>

          <button
            id="close-language-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full text-[#dfbfba] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 sm:px-6 bg-[#131313]/60 border-b border-white/5">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e9c176]/70" />
            <input
              id="language-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by language (e.g. Hindi, मराठी, বাংলা, தமிழ், Telugu)..."
              className="w-full bg-[#201f1f] border border-white/10 focus:border-[#ffb4a8] focus:outline-none text-[#e5e2e1] placeholder-[#dfbfba]/40 pl-10 pr-4 py-2.5 rounded-xl font-sans text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#dfbfba]/50 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Languages Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 custom-scrollbar">
          {filteredLanguages.map((lang: LanguageInfo) => {
            const isSelected = currentLanguage === lang.code;

            return (
              <button
                key={lang.code}
                id={`lang-select-${lang.code}`}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#600000]/60 border-[#ffb4a8] shadow-[0_0_15px_rgba(96,0,0,0.5)] ring-1 ring-[#ffb4a8]'
                    : 'bg-[#201f1f]/70 border-white/5 hover:border-[#ffb4a8]/30 hover:bg-[#201f1f]'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg text-white font-medium">
                      {lang.nativeName}
                    </span>
                    {lang.code !== 'en' && (
                      <span className="text-xs font-sans text-[#dfbfba]/80">
                        ({lang.name})
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#e9c176]/80">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate max-w-[170px]">{lang.region}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isSelected ? (
                    <div className="w-6 h-6 rounded-full bg-[#ffb4a8] text-[#131313] flex items-center justify-center font-bold">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  ) : (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-[#dfbfba]/60">
                      {lang.code}
                    </span>
                  )}
                </div>
              </button>
            );
          })}

          {filteredLanguages.length === 0 && (
            <div className="col-span-full py-12 text-center text-[#dfbfba]/60 font-sans text-sm">
              No language matching &quot;{searchQuery}&quot; found.
            </div>
          )}
        </div>

        {/* Modal Footer with quick hint */}
        <div className="p-4 bg-[#131313] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-sans text-[#dfbfba]/70">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#e9c176]" />
            <span>Instant app-wide localization across all 101 Guides</span>
          </div>
          <span className="font-mono text-[#e9c176]">
            {availableLanguages.length} Languages Available
          </span>
        </div>
      </div>
    </div>
  );
}
