import axios from 'axios';
import { useEffect, useState } from 'react';

function Read() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      const res = await axios.get('http://localhost:1207/halloween/getAll');
      setCharacters(res.data);
    };
    getCharacter();
  });
  return (
    <>
      {characters.map(({ name, movie, scareFactor }) => (
        <>
          <p>{name}</p>
          <p>{movie}</p>
          <p>{`${scareFactor}/10`}</p>
        </>
      ))}
    </>
  );
}

export default Read;