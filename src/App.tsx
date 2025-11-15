import { useState } from 'react'
import bookImage from './assets/background-book.png'
import './App.css'
import Tabs from './components/Tabs'

function App() {


  return (
    <>
      <header>
        <h1>D&amp;D Catalog</h1>
      </header>
      <Tabs />
      <div>
        <img src={bookImage} alt="Book" />
      </div>
    </>
  )
}

export default App
