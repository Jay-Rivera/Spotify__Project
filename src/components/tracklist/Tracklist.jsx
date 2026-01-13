import React from "react";
import Track from "../track/Track";

function Tracklist({ tracks, onAdd, isRemoval, onRemove }) {
  return (
    <div className="tracklist">
      {tracks ? (
        tracks.map((track) => (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        ))
      ) : (
        <p>Please search for a song</p>
      )}
    </div>
  );
}

export default Tracklist;
