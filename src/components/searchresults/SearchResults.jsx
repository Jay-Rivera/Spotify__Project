import React from "react";
import Tracklist from "../tracklist/Tracklist";

function SearchResults({ tracks, onAdd, onRemove }) {
  return (
    <div className="results">
      <div>Results:</div>
      <Tracklist tracks={tracks} onAdd={onAdd} isRemoval={true} />
    </div>
  );
}

export default SearchResults;
