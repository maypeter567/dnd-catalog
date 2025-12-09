import { useBookmarks } from "../context/BookmarkContext";

export type Contents = {
  title: string;
  headerBlock?: string;
  description: string;
  icon?:
    | "armor"
    | "weapon"
    | "gear"
    | "potion"
    | "pack"
    | "arcana"
    | "beast"
    | "lore"
    | "race"
    | "class"
    | "story"
    | "spell"
    | "monster"
    | "toc"
    | "bookmark";
  iconLabel?: string;
};

interface Props {
  content: Contents;
  fallbackIcon?: Contents["icon"];
}

const Card = ({ content, fallbackIcon }: Props) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { title, description, headerBlock } = content;
  const bookmarked = isBookmarked(title);
  const glyphMap: Record<string, string> = {
    armor: "🛡",
    weapon: "⚔",
    gear: "⚙",
    potion: "⚗",
    pack: "🎒",
    arcana: "✦",
    beast: "🐾",
    lore: "✧",
    race: "🧬",
    class: "⚔",
    story: "📜",
    spell: "✨",
    monster: "👁",
    toc: "📑",
    bookmark: "🔖",
  };

  const resolvedIcon = content.icon ?? fallbackIcon ?? "bookmark";
  const glyph = glyphMap[resolvedIcon] ?? "🔖";
  const glyphTone = resolvedIcon ?? "neutral";

  const handleBookmark = () => {
    toggleBookmark(content);
  };

  return (
    <li className="card">
      <details className="details">
        <summary className="card-summary">
          <span className="card-glyph" data-tone={glyphTone} aria-hidden="true">
            {glyph}
          </span>
          <div className="card-title-wrap">
            <h3 className="card-title">{title}</h3>
          </div>
          <button
            type="button"
            className={`bookmark-btn ${bookmarked ? "is-active" : ""}`}
            onClick={handleBookmark}
            aria-pressed={bookmarked}
          >
            {bookmarked ? "🔖 Bookmarked" : "🔖 Bookmark"}
          </button>
        </summary>
        <span className="card-divider"></span>
        {headerBlock && <p className="card-header">{headerBlock}</p>}
        <span className="card-divider"></span>
        <p className="card-description">{description}</p>
      </details>
    </li>
  );
};

export default Card;
