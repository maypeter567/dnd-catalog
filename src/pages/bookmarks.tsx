import Card from "../components/Card";
import { useBookmarks } from "../context/BookmarkContext";

export default function Bookmarks() {
    const { bookmarks } = useBookmarks();

    const hasBookmarks = bookmarks.length > 0;

    return (
        <div className="page-section">
            <h2>Bookmarks</h2>
            {!hasBookmarks && (
                <p className="text-muted">
                    Save heroes, monsters, or stories you want to revisit. Use the
                    bookmark button on any card to pin it here.
                </p>
            )}
            {hasBookmarks && (
                <ul className="cards-list">
                    {bookmarks.map((item) => (
                        <Card key={item.title} content={item} />
                    ))}
                </ul>
            )}
        </div>
    )
}
