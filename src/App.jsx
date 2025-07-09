import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import songs from './components/Song.module.css'
import Library from './components/Library.jsx'
import SearchResults from './components/SearchResults.jsx' 
import './index.css'

const array1 = [
  { id: 1, band: 'Iron Maiden', album: 'Powerslave', img:'./img/powerslave.jpg', song: 'Flash Of the Blade', duration: '4:04', bg: '' },
  { id: 2, band: 'Iron Maiden', album: 'Powerslave', img:'./img/powerslave.jpg', song: 'The Duellists', duration: '6:07', bg: '' },
  { id: 3, band: 'Iron Maiden', album: 'Peace Of Mind', img:'./img/peace-of-mind.jpg', song: 'The Trooper', duration: '4:11', bg: '' },
  { id: 4, band: 'Iron Maiden', album: 'Fear Of The Dark', img:'./img/fear-of-the-dark.jpg', song: 'The Fugitive', duration: '4:53', bg: songs.bgAzul },
  { id: 5, band: 'Iron Maiden', album: 'Fear Of The Dark', img:'./img/fear-of-the-dark.jpg', song: 'Weekend Warrior', duration: '5:38', bg: songs.bgAzul },
  { id: 6, band: 'Megadeth', album: 'Rust In Peace', img:'./img/rust-in-peace.jpg', song: 'Tornado Of Souls', duration: '5:15', bg: songs.bgAzul }
]

function App() {
  const [searchResults, setSearchResults] = useState(array1)
  const [librarySongs, setLibrarySongs] = useState([]) // Vacío en principio

  const addToLibrary = (song) => { // Para agregar una copia del objeto 'song'
    const alreadyInLibrary = librarySongs.some(s => s.id === song.id && s.song === song.song) // Comprueba si está el elemento ('.som()' para saber si al menos uno cumple con la condición)

    if (!alreadyInLibrary) { // Sí no está, lo agrega
      setLibrarySongs(prev => [...prev, song])
    } else {
      console.log(`It's already in library`)
    }
  }

  useEffect(() => {
    if (librarySongs.length > 0) {
      console.log('Added new song:', librarySongs.at(-1)) // 'at(-1)' devuelve el último elemento, es como hacer: 'librarySongs[librarySongs.length - 1]'
    }
  }, [librarySongs]) // Cada vez que cambie esto; actualiza ↑↑

  return (
    <>
      <Header />
      <div className={songs.songsContainer}>
        <SearchResults arraySongs={searchResults} onAdd={addToLibrary} />
        <Library arraySongs={librarySongs} />
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)