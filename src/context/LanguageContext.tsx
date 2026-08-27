import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, LanguageInfo, INDIAN_REGIONAL_LANGUAGES } from '../types/language';
import { uiTranslations, UiTranslations } from '../data/translations/ui';
import { categoryTranslations, CategoryTranslation } from '../data/translations/categories';
import { getLocalizedTopic } from '../data/translations/topics';
import { TopicItem } from '../types/topics';

interface LanguageContextType {
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  languageInfo: LanguageInfo;
  availableLanguages: LanguageInfo[];
  t: (key: keyof UiTranslations) => string;
  translateCategory: (categoryId: string) => CategoryTranslation;
  translateTopic: (topic: TopicItem) => TopicItem;
  translateDifficulty: (difficulty: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'velvet_ember_language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && INDIAN_REGIONAL_LANGUAGES.some((l) => l.code === saved)) {
        return saved as LanguageCode;
      }
    } catch {
      // ignore localStorage errors
    }
    return 'en';
  });

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore localStorage errors
    }
  };

  const languageInfo =
    INDIAN_REGIONAL_LANGUAGES.find((l) => l.code === currentLanguage) ||
    INDIAN_REGIONAL_LANGUAGES[0];

  const isRtl = languageInfo.direction === 'rtl';

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [currentLanguage, isRtl]);

  const t = (key: keyof UiTranslations): string => {
    const langObj = uiTranslations[currentLanguage] || uiTranslations.en;
    return langObj[key] || uiTranslations.en[key] || String(key);
  };

  const translateCategory = (categoryId: string): CategoryTranslation => {
    const langCategories = categoryTranslations[currentLanguage] || categoryTranslations.en;
    return (
      langCategories[categoryId] ||
      categoryTranslations.en[categoryId] || {
        title: categoryId,
        shortName: categoryId,
        description: ''
      }
    );
  };

  const translateDifficulty = (difficulty: string): string => {
    const d = difficulty?.toLowerCase() || '';
    if (d.includes('begin') || d.includes('shuru')) return t('beginner');
    if (d.includes('inter') || d.includes('madhy')) return t('intermediate');
    if (d.includes('adv') || d.includes('unnat') || d.includes('pragat')) return t('advanced');
    return difficulty;
  };

  const translateTopic = (topic: TopicItem): TopicItem => {
    return getLocalizedTopic(topic, currentLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        languageInfo,
        availableLanguages: INDIAN_REGIONAL_LANGUAGES,
        t,
        translateCategory,
        translateTopic,
        translateDifficulty,
        isRtl
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
