import axios from 'axios';
import { useState } from 'react';

function Create() {
  const [characterName, setCharacterName] = useState('');
  const [movie, setMovie] = useState('');
  const [scareFactor, setScareFactor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:1207/createCharacter', {
      characterName,Movie,scareFactor,
    });

    console.log('CREATED:', res.data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="CharacterName">
        Character Name :
        <input type="text" id="character" value={characterName} onChange={(e) => setCharacterName(e.target.value)} required />
      </label>
      <br />
      <label htmlFor="Movie">
        Movie They Were In :
        <input type="text" id="movie" value={movie} onChange={(e) => setMovie(e.target.value)} required />
        </label>
      <br />
      <label htmlFor="Scare Factor">
        Scare Factor :
        <input type="number" id="scareFactor" min={0} max={10} step="1" value={scareFactor} onChange={(e) => setScareFactor(e.target.value)} required />
      </label>
      <br />
      <button type="submit">CREATE</button>
    </form>
  );
}

export default Create;