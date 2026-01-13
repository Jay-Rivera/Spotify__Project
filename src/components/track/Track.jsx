import React, { Profiler } from "react";
import "./track.css";

function Track(props) {
  const renderTackButton = () => {
    if (props.isRemoval) {
      return (
        <button className="actionButton" onClick={passTrack}>
          +
        </button>
      );
    } else {
      return (
        <button className="actionButton" onClick={passRemoveTrack}>
          -
        </button>
      );
    }
  };

  function passTrack() {
    props.onAdd(props.track);
  }

  function passRemoveTrack() {
    props.onRemove(props.track);
  }
  return (
    <div className="track">
      <div className="track__info">
        <p className="title">Song Name: {props.track.name}</p>
        <div className="track__info--bottom">
          <p>Artist: {props.track.artist}</p>
          <p>Album: {props.track.album}</p>
        </div>
      </div>
      {renderTackButton()}
    </div>
  );
}

export default Track;
