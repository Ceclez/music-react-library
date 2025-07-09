import songs from './Song.module.css';

const Song = ({ band, album, photo, song, duration, bg, onAdd}) => {
  return (
    <article className={`${bg} ${songs.article}`}>
      <div className={songs.bandAlbumBlock}>
        <h4>{band}</h4>
        <p className={songs.separator}>|</p>
        <h4>{album}</h4>
      </div>

      {photo}

      <div className={songs.songIconBlock}>
        <h3>{song}</h3>
        <button className={songs.buttonLibIcon} onClick={() => onAdd({ band, album, photo, song, duration, bg })}>
          <img
            src="img/library-icon.svg"
            className={songs.libraryIcon}
            alt="Ícono de un libro para enviar una canción a la sección 'your library'"
          />
        </button>
      </div>

      <div className={songs.durationNPlayBlock}>
        <div className={songs.durationBlock}>
          <img 
          src="img/duration-icon.svg"
          className={songs.durationIcon}
          alt="Ícono de temporizador para ilustrar el tiempo restante de una canción" />
          <p>{duration}</p>
        </div>
        <div className={songs.playBtn}>
          <img 
          src="img/play-icon.svg" 
          className={songs.playIcon}
          alt="" />
        </div>
      </div>
    </article>
  );
}
export default Song