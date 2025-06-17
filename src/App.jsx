import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Song from './components/Song.jsx'
import songs from './components/Song.module.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className={songs.songsContainer}>
      <Song band="Iron Maiden" 
      album="Fear Of The Dark" 
      photo={<img src="/img/fear-of-the-dark.jpg" className={songs.imgAlbum} alt="imagen del álbum de la canción" />} 
      song="Fear of the Dark" 
      start="0:00" left="7:17" 
      bg={songs.bgAzul} />

      <Song band="Iron Maiden" 
      album="The Final Frontier" 
      photo={<img src="/img/the-final-frontier.jpg" className={songs.imgAlbum} alt="imagen del álbum de la canción" />} 
      song="El Dorado" 
      start="0:00" 
      left="6:48" 
      bg={songs.bgAzul} />

      <Song band="Iron Maiden" 
      album="Peace of Mind" 
      photo={<img src="/img/peace-of-mind.jpg" className={songs.imgAlbum} alt="imagen del álbum de la canción" />} 
      song="Where Eagles Dare" 
      start="4:56" 
      left="1:16" 
      custombar={songs.custombar} />

      <Song band="Iron Maiden" 
      album="The Number Of..." 
      photo={<img src="/img/the-number-of-the-beast.jpg" className={songs.imgAlbum} alt="imagen del álbum de la canción" />} 
      song="22 Acacia Avenue" 
      start="0:00" 
      left="6:34" 
      bg={songs.bgGris} />

      <Song band="Iron Maiden" 
      album="Powerslave" 
      photo={<img src="/img/powerslave.jpg" className={songs.imgAlbum} alt="imagen del álbum de la canción" />} 
      song="Flash Of The Blade" 
      start="0:00" 
      left="4:78" />
    </div>
    componentDidMount() {
      setTimeout(() => {
        console.log('Cargado')
      }, 3000)
    }
  </StrictMode>,
)