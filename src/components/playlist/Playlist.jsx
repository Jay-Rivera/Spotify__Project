import React, { useState } from "react";
import Tracklist from "../tracklist/Tracklist";

function Playlist({
  playListName,
  playlistTrack,
  updatePlaylistName,
  onRemove,
  onSave,
}) {
  const handleNameChange = (e) => {
    updatePlaylistName(e.target.value);
  };
  return (
    <div className="playlist">
      <div>Playlist</div>
      <input
        type="text"
        onChange={handleNameChange}
        placeholder="Create a Name for your Playlist"
        value={playListName}
      />
      <Tracklist tracks={playlistTrack} onRemove={onRemove} />
      <button onClick={onSave}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
