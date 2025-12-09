import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import type { Contents } from "../components/Card";

type BookmarkContextValue = {
  bookmarks: Contents[];
  isBookmarked: (title: string) => boolean;
  toggleBookmark: (item: Contents) => void;
};

const BookmarkContext = createContext<BookmarkContextValue | null>(null);

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Contents[]>([]);

  const isBookmarked = (title: string) =>
    bookmarks.some((bookmark) => bookmark.title === title);

  const toggleBookmark = (item: Contents) => {
    setBookmarks((prev) => {
      if (prev.some((bookmark) => bookmark.title === item.title)) {
        return prev.filter((bookmark) => bookmark.title !== item.title);
      }
      return [...prev, item];
    });
  };

  const value = useMemo(
    () => ({
      bookmarks,
      isBookmarked,
      toggleBookmark,
    }),
    [bookmarks],
  );

  return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>;
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
}
