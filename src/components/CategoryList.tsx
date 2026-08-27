import React from 'react';
import {
  MessageSquareHeart,
  UserCheck,
  Flame,
  Sparkles,
  Compass,
  ShieldCheck,
  Infinity as InfinityIcon,
  ChevronRight
} from 'lucide-react';
import { categories } from '../data/categories';
import { allTopics } from '../data/all-topics';

interface CategoryListProps {
  onSelectCategory: (categoryId: string) => void;
  readTopicIds: number[];
}

export function CategoryList({ onSelectCategory, readTopicIds }: CategoryListProps) {
  const getCategoryIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'MessageSquareHeart':
        return <MessageSquareHeart {...props} className="w-6 h-6 text-rose-500" />;
      case 'UserCheck':
        return <UserCheck {...props} className="w-6 h-6 text-blue-500" />;
      case 'Flame':
        return <Flame {...props} className="w-6 h-6 text-amber-500" />;
      case 'Sparkles':
        return <Sparkles {...props} className="w-6 h-6 text-purple-500" />;
      case 'Compass':
        return <Compass {...props} className="w-6 h-6 text-emerald-500" />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} className="w-6 h-6 text-violet-500" />;
      case 'Infinity':
        return <InfinityIcon {...props} className="w-6 h-6 text-teal-500" />;
      default:
        return <Sparkles {...props} className="w-6 h-6 text-rose-500" />;
    }
  };

  return (
    <div id="category-grid-container" className="space-y-6 mb-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">Browse Knowledge Categories</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">8 comprehensive modules spanning communication, anatomy, foreplay, techniques, and aftercare</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => {
          const categoryTopics = allTopics.filter((t) => t.categoryId === category.id);
          const readCount = categoryTopics.filter((t) => readTopicIds.includes(t.id)).length;
          const percent = Math.round((readCount / category.topicCount) * 100);

          return (
            <div
              key={category.id}
              id={`cat-card-${category.id}`}
              onClick={() => onSelectCategory(category.id)}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 hover:border-rose-300 dark:hover:border-rose-800/80 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-100 dark:border-stone-700/60">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-400">
                    Topics {category.topicRange}
                  </span>
                </div>

                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors mb-1.5 leading-snug">
                  {category.title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed mb-4">
                  {category.description}
                </p>
              </div>

              <div>
                {/* Progress bar */}
                <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1.5">
                  <span>{category.topicCount} Guides</span>
                  <span className="font-semibold">{readCount}/{category.topicCount} Read</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden mb-3">
                  <div
                    className="h-full bg-rose-600 rounded-full transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <div className="flex items-center justify-end text-xs font-semibold text-rose-600 dark:text-rose-400 group-hover:translate-x-0.5 transition-transform">
                  Explore Topics <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
