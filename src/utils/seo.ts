import { TopicItem, CategoryInfo } from '../types/topics';
import { Pathway } from '../data/pathways';

export const SITE_URL = 'https://www.kamasoul.fun';
export const SITE_NAME = 'Velvet & Ember';
export const DEFAULT_OG_IMAGE = 'https://www.kamasoul.fun/assets/images/sensual_embrace_warm_1787823085718.jpg';
export const DEFAULT_DESCRIPTION =
  'A sensual, judgment-free guide to deeper connection, pleasure, and charged communication with your partner. Explore 101 curated intimacy guides and structured learning pathways.';

export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.split('?')[0].split('#')[0];
  if (cleanPath === '' || cleanPath === '/') {
    return `${SITE_URL}/`;
  }
  const normalized = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  return `${SITE_URL}${normalized}`;
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/topics?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon.svg`,
    description: DEFAULT_DESCRIPTION,
    sameAs: []
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url.startsWith('/') ? item.url : `/${item.url}`}`
    }))
  };
}

export function generateTopicArticleSchema(topic: TopicItem) {
  const pageUrl = `${SITE_URL}/topic/${topic.slug}`;
  const readingMinutes = parseInt(topic.estimatedTime, 10) || 6;
  const isoDuration = `PT${readingMinutes}M`;

  const steps = (topic.howToDoIt || []).map((stepText, idx) => ({
    '@type': 'HowToStep',
    position: idx + 1,
    name: `Step ${idx + 1}`,
    text: stepText
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Article', 'HowTo'],
        '@id': `${pageUrl}#article`,
        isPartOf: {
          '@type': 'WebPage',
          '@id': pageUrl,
          url: pageUrl,
          name: `${topic.title} | ${SITE_NAME}`
        },
        headline: topic.title,
        alternativeHeadline: topic.subtitle,
        description: topic.whatItIs || topic.overview?.whyItMatters || topic.subtitle,
        inLanguage: 'en',
        url: pageUrl,
        name: topic.title,
        totalTime: isoDuration,
        step: steps.length > 0 ? steps : undefined,
        about: {
          '@type': 'Thing',
          name: topic.categoryName || 'Intimate Relationship Education'
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/favicon.svg`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl
        }
      }
    ]
  };
}

export function generateTopicFaqSchema(topic: TopicItem) {
  if (!topic.faqs || topic.faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: topic.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generatePathwaysSchema(pathways: Pathway[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Curated Intimacy Pathways & Masterclasses',
    description: 'Structured progressive intimacy pathways and learning sequences for couples.',
    itemListElement: pathways.map((pathway, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: pathway.title,
        description: pathway.description,
        timeRequired: pathway.duration,
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: `${SITE_URL}/`
        }
      }
    }))
  };
}
