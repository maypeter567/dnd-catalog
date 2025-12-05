import { useBookmarks } from "../context/BookmarkContext";

export type Contents = {
  title: string;
  headerBlock?: string;
  description: string;
};

interface Props {
  content: Contents;
}

const Card = ({ content }: Props) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { title, description, headerBlock } = content;
  const bookmarked = isBookmarked(title);

  const handleBookmark = () => {
    toggleBookmark(content);
  };

  return (
    <li className="card">
      <details className="details">
        <summary className="card-summary">
          <div>
            <h3 className="card-title">{title}</h3>
          </div>
          <button
            type="button"
            className={`bookmark-btn ${bookmarked ? "is-active" : ""}`}
            onClick={handleBookmark}
            aria-pressed={bookmarked}
          >
            {bookmarked ? "★ Bookmarked" : "☆ Bookmark"}
          </button>
        </summary>
        {headerBlock && <p className="card-header">{headerBlock}</p>}
        <p className="card-description">{description}</p>
      </details>
    </li>
  );
};

export default Card;
