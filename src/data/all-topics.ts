import { TopicItem, CategoryInfo } from '../types/topics';
import { categories } from './categories';
import { topicsCat1 } from './topics-cat1';
import { topicsCat2 } from './topics-cat2';
import { topicsCat3 } from './topics-cat3';
import { topicsCat4 } from './topics-cat4';
import { topicsCat5 } from './topics-cat5';
import { topicsCat6 } from './topics-cat6';
import { topicsCat7 } from './topics-cat7';
import { topicsCat8 } from './topics-cat8';

export const allTopics: TopicItem[] = [
  ...topicsCat1,
  ...topicsCat2,
  ...topicsCat3,
  ...topicsCat4,
  ...topicsCat5,
  ...topicsCat6,
  ...topicsCat7,
  ...topicsCat8,
];

export { categories };

export function getTopicById(id: number): TopicItem | undefined {
  return allTopics.find((t) => t.id === id);
}

export function getTopicBySlug(slug: string): TopicItem | undefined {
  return allTopics.find((t) => t.slug === slug);
}

export function getTopicsByCategory(categoryId: string): TopicItem[] {
  return allTopics.filter((t) => t.categoryId === categoryId);
}

export function getRelatedTopics(topic: TopicItem): TopicItem[] {
  if (!topic.relatedTopicIds || topic.relatedTopicIds.length === 0) {
    return allTopics
      .filter((t) => t.categoryId === topic.categoryId && t.id !== topic.id)
      .slice(0, 4);
  }
  return topic.relatedTopicIds
    .map((id) => getTopicById(id))
    .filter((t): t is TopicItem => t !== undefined);
}

export function getAdjacentTopics(topicId: number): { prev?: TopicItem; next?: TopicItem } {
  const currentIndex = allTopics.findIndex((t) => t.id === topicId);
  if (currentIndex === -1) return {};
  const prev = currentIndex > 0 ? allTopics[currentIndex - 1] : undefined;
  const next = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : undefined;
  return { prev, next };
}

export function searchTopics(query: string, categoryId?: string, difficulty?: string): TopicItem[] {
  const q = query.toLowerCase().trim();
  return allTopics.filter((topic) => {
    if (categoryId && categoryId !== 'all' && topic.categoryId !== categoryId) {
      return false;
    }
    if (difficulty && difficulty !== 'all' && topic.overview.difficulty.toLowerCase() !== difficulty.toLowerCase()) {
      return false;
    }
    if (!q) return true;

    return (
      topic.title.toLowerCase().includes(q) ||
      topic.subtitle.toLowerCase().includes(q) ||
      topic.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      topic.whatItIs.toLowerCase().includes(q) ||
      topic.whyItWorks.toLowerCase().includes(q) ||
      topic.categoryName.toLowerCase().includes(q) ||
      topic.howToDoIt.some((step) => step.toLowerCase().includes(q))
    );
  });
}

export function getRandomTopic(): TopicItem {
  const randomIndex = Math.floor(Math.random() * allTopics.length);
  return allTopics[randomIndex];
}
