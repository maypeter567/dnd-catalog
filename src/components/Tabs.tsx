import { useState } from 'react'

import Cover from '../pages/cover'
import TableOfContents from '../pages/toc'
import Bookmarks from '../pages/bookmarks'
import Races from '../pages/races'
import Classes from '../pages/classes'
import Backstory from '../pages/backstory'
import Spells from '../pages/spells'
import Monsters from '../pages/monsters'
import Items from '../pages/items'

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('home')

    function renderTab() {
        switch (activeTab) {
            case "toc":
                return <TableOfContents />;
            case "bookmarks":
                return <Bookmarks />;
            case "races":
                return <Races />;
            case "classes":
                return <Classes />;
            case "backstory":
                return <Backstory />;
            case "spells":
                return <Spells />;
            case "monsters":
                return <Monsters />;
            case "items":
                return <Items />;
            default:
                return <Cover />;
        }
    }

    return (
        <div>
            <div className="tabs">
                <button onClick={() => setActiveTab("cover")}>Cover</button>
                <button onClick={() => setActiveTab("toc")}>Table of Contents</button>
                <button onClick={() => setActiveTab("bookmarks")}>Bookmarks</button>
                <button onClick={() => setActiveTab("races")}>Races</button>
                <button onClick={() => setActiveTab("classes")}>Classes</button>
                <button onClick={() => setActiveTab("backstory")}>Backstory</button>
                <button onClick={() => setActiveTab("spells")}>Spells</button>
                <button onClick={() => setActiveTab("monsters")}>Monsters</button>
                <button onClick={() => setActiveTab("items")}>Items</button>
            </div>
            <div className="tab-content">
                {renderTab()}
            </div>
        </div>
    )
}
