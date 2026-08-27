import { useState, useEffect } from 'react';

export interface UserProgress {
  bookmarkedTopicIds: number[];
  practicedTopicIds: number[];
  readTopicIds: number[];
  notes: Record<number, string>;
}

const STORAGE_KEY = 'intimacy_kb_user_progress_v1';

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return {
      bookmarkedTopicIds: [],
      practicedTopicIds: [],
      readTopicIds: [],
      notes: {}
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage write issues
    }
  }, [progress]);

  const toggleBookmark = (topicId: number) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedTopicIds.includes(topicId);
      return {
        ...prev,
        bookmarkedTopicIds: exists
          ? prev.bookmarkedTopicIds.filter((id) => id !== topicId)
          : [...prev.bookmarkedTopicIds, topicId]
      };
    });
  };

  const togglePracticed = (topicId: number) => {
    setProgress((prev) => {
      const exists = prev.practicedTopicIds.includes(topicId);
      return {
        ...prev,
        practicedTopicIds: exists
          ? prev.practicedTopicIds.filter((id) => id !== topicId)
          : [...prev.practicedTopicIds, topicId]
      };
    });
  };

  const markAsRead = (topicId: number) => {
    setProgress((prev) => {
      if (prev.readTopicIds.includes(topicId)) return prev;
      return {
        ...prev,
        readTopicIds: [...prev.readTopicIds, topicId]
      };
    });
  };

  const saveNote = (topicId: number, note: string) => {
    setProgress((prev) => ({
      ...prev,
      notes: {
        ...prev.notes,
        [topicId]: note
      }
    }));
  };

  return {
    progress,
    toggleBookmark,
    togglePracticed,
    markAsRead,
    saveNote,
    isBookmarked: (id: number) => progress.bookmarkedTopicIds.includes(id),
    isPracticed: (id: number) => progress.practicedTopicIds.includes(id),
    isRead: (id: number) => progress.readTopicIds.includes(id),
    getNote: (id: number) => progress.notes[id] || ''
  };
}
