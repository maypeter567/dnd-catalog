import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Contents } from "../components/Card";

type BookmarkContextValue = {
  bookmarks: Contents[];
  isBookmarked: (title: string) => boolean;
  toggleBookmark: (item: Contents) => void;
};

const BookmarkContext = createContext<BookmarkContextValue | undefined>(
  undefined,
);

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Contents[]>([]);

  const toggleBookmark = (item: Contents) => {
    setBookmarks((current) => {
      const exists = current.some((bookmark) => bookmark.title === item.title);
      if (exists) {
        return current.filter((bookmark) => bookmark.title !== item.title);
      }
      return [...current, item];
    });
  };

  const value = useMemo(
    () => ({
      bookmarks,
      isBookmarked: (title: string) =>
        bookmarks.some((bookmark) => bookmark.title === title),
      toggleBookmark,
    }),
    [bookmarks],
  );

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
}
