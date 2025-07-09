import srchResults from './SearchResults.module.css'
import songs from './Song.module.css' // Para agregar borde redondeado a cada img
import Song from './Song.jsx'

const SearchResults = ({ arraySongs, onAdd}) => {
    return (
        <>
            <section className={srchResults.results}>
                <h3 className={srchResults.title}>Search Results</h3>
                <section className={srchResults.srchSongs}>
                    { arraySongs.map(song => (
                        <Song
                        key={song.id}
                        onAdd={onAdd} // Referencia a la función 'onAdd()'
                        photo={<img src={song.img} className={songs.imgAlbum} alt={song.album} />}
                        {...song}
                        />
                    ))}
                </section>
            </section>
        </>
    )
}
export default SearchResults