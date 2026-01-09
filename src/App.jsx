import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SearchBar from "./components/searchbar/SearchBar";
import SearchResults from "./components/searchresults/SearchResults";
import Playlist from "./components/playlist/Playlist";

// Mock Data
// name, artist, album, and id

const songs = [
  { name: "still", artist: "Zuko", album: "Cali Love", id: 1 },
  { name: "Late Nights", artist: "Zuko", album: "Cali Love", id: 2 },
  { name: "Ocean Drive", artist: "Zuko", album: "Sunset Waves", id: 3 },

  { name: "Neon Lights", artist: "Ari Vega", album: "City Pulse", id: 4 },
  { name: "Concrete Dreams", artist: "Ari Vega", album: "City Pulse", id: 5 },

  { name: "Cold Coffee", artist: "Milo Reed", album: "Morning Static", id: 6 },
  {
    name: "Rain on 3rd Street",
    artist: "Milo Reed",
    album: "Morning Static",
    id: 7,
  },

  {
    name: "Satellite Hearts",
    artist: "Luna Fox",
    album: "Moon Signals",
    id: 8,
  },
  { name: "Static Silence", artist: "Luna Fox", album: "Moon Signals", id: 9 },

  { name: "Slow Motion", artist: "Kai Rivers", album: "Tidal Flow", id: 10 },
  { name: "Drift Away", artist: "Kai Rivers", album: "Tidal Flow", id: 11 },
];

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = (name) => {
    const nameToSearch = name.toLowerCase();
    const filterSongs = songs.filter((song) =>
      song.name.toLocaleLowerCase().includes(nameToSearch)
    );

    setSearchResults(filterSongs);
  };

  return (
    <>
      <NavBar />
      <main>
        <h1>JAMMING</h1>
        <SearchBar onSearch={search} />
      </main>
      <section>
        <SearchResults tracks={searchResults} />
        <Playlist />
      </section>
    </>
  );
}

export default App;
