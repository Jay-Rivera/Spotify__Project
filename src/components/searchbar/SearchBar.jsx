import { useState } from "react";

function SearchBar({ onSearch }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    onSearch(value);
  };

  return (
    <>
      <input
        type="text"
        name="songName"
        placeholder="Search for a Song"
        value={name}
        onChange={handleChange}
      />
      <button onClick={() => onSearch(name)}>Search</button>
    </>
  );
}

export default SearchBar;
