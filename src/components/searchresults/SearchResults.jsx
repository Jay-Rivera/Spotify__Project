import React from "react";
import Tracklist from "../tracklist/Tracklist";

function SearchResults({ tracks }) {
  return (
    <div className="results">
      <div>Results:</div>
      <Tracklist tracks={tracks} />
    </div>
  );
}

export default SearchResults;
