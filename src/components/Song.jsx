import React, { Component } from 'react';
import songs from './Song.module.css';

class Song extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { band, album, photo, song, start, left, bg, custombar } = this.props;

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
          <img
            src="../img/favorite-icon.svg"
            className={songs.favoriteIcon}
            alt="Ícono de corazón para marcar como favorito"
          />
        </div>

        <div className={songs.durationBlock}>
          <p>{start}</p>
          <div className={songs.barBlock}>
            <div className={`${custombar} ${songs.barProgress}`}></div>
          </div>
          <p>{left}</p>
        </div>
      </article>
    );
  }
}
export default Song;
