import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    props.onSearch(value);
  };

  const [term, setTerm] = useState("");

  function passTerm() {
    props.onSearch(term);
  }

  function handleTermChange(e) {
    setTerm(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        name="songName"
        placeholder="Search for a Song"
        value={name}
        onChange={handleTermChange}
      />
      <button onClick={passTerm}>Search</button>
    </>
  );
}

export default SearchBar;
