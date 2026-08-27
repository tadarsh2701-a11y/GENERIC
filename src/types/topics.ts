export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type CategoryId =
  | 'communication'
  | 'self-partner-knowledge'
  | 'foreplay-arousal'
  | 'oral-manual'
  | 'penetration-positions'
  | 'toys-enhancement'
  | 'advanced-exploratory'
  | 'aftercare-longevity'
  | 'aftercare-health-longevity';

export interface CategoryInfo {
  id: string;
  title: string;
  name?: string;
  shortName?: string;
  description: string;
  topicRange: string;
  range?: string;
  topicCount: number;
  icon: string;
  iconName?: string;
  color?: string;
  accentBg?: string;
}

export interface CommonMistake {
  mistake: string;
  fix: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteBlock {
  text: string;
  author: string;
}

export interface TryThisTonight {
  title: string;
  description: string;
  durationMinutes?: number;
  steps?: string[];
}

export interface TopicItem {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  categoryId: CategoryId | string;
  categoryName: string;
  tags: string[];
  estimatedTime: string;
  practiceTime: string;
  
  // Section 2: Quick Overview Box
  overview: {
    whyItMatters: string;
    whoItsFor: string;
    difficulty: DifficultyLevel | string;
    consentReminder: string;
  };

  // Section 3: Main Content Sections
  introduction?: string;
  history?: string;
  whatItIs: string;
  whyItWorks: string;
  howToDoIt: string[];
  tips: string[];
  commonMistakes: CommonMistake[];
  variations: string[];
  safetyAndConsent: string[];

  // Section 4: Extra Helpful Blocks
  tryThisTonight: TryThisTonight;
  relatedTopicIds: number[];
  faqs: FAQItem[];
  quote: QuoteBlock;

  // Additional educational metadata
  keyTakeaway: string;
}


export type TopicStatus = 'unread' | 'read' | 'want_to_try' | 'discussed';

export interface UserTopicState {
  status: TopicStatus;
  bookmarked: boolean;
  notes?: string;
  liked?: boolean;
}
