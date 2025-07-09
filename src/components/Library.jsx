import Song from './Song.jsx'
import yourLibrary from './Library.module.css'

const Library = ({ arraySongs }) => {
    return (
        <>
            <section className={yourLibrary.yourLibrary}>
            <h3 className={yourLibrary.title}>Your Library</h3>
                { arraySongs.map((song, index) => (
                    <Song
                        key={`${song.id}-${index}`} // Cambia los índices para los elementos enviados a 'Library'
                        {...song} // Agrega todos los elementos del componente
                    />
                ))}
            </section>
        </>
    )
}
export default Library