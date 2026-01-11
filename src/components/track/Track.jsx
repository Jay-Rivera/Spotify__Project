import React from "react";
import "./track.css";

function Track({ track }) {
  return (
    <div className="track">
      <div className="track__info">
        <p className="title">Song Name: {track.name}</p>
        <div className="track__info--bottom">
          <p>Artist: {track.artist}</p>
          <p>Album: {track.album}</p>
        </div>
      </div>
      <button>+</button>
    </div>
  );
}

export default Track;
