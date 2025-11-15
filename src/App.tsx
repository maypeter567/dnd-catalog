import { useState } from 'react'
import bookImage from './assets/background-book.png'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const tabs = [
    { id: 'toc', label: 'Table of Contents', href: '/TOC' },
    { id: 'bookmarks', label: 'Bookmarks', href: '/bookmarks' },
    { id: 'races', label: 'Races', href: '/races' },
    { id: 'classes', label: 'Classes', href: '/classes' },
    { id: 'backstory', label: 'Backstory', href: '/backstory' },
    { id: 'spells', label: 'Spells', href: '/spells' },
    { id: 'monsters', label: 'Monsters', href: '/monsters' },
    { id: 'items', label: 'Items', href: '/items' },
  ]

  return (
    <>
      <nav className="tabs">
        {tabs.map(tab => (
          <a
            key={tab.id}
            href={tab.href}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </a>
        ))}
      </nav>
      <div>
        <img src={bookImage} alt="Book" />
      </div>
    </>
  )
}

export default App
