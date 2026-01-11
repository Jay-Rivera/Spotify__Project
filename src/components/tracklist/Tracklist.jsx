import React from "react";
import Track from "../track/Track";

function Tracklist({ tracks }) {
  return (
    <div className="tracklist">
      {tracks ? (
        tracks.map((track) => <Track track={track} key={track.id} />)
      ) : (
        <p>Please search for a song</p>
      )}
    </div>
  );
}

export default Tracklist;
