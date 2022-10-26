import axios from 'axios';
import { useEffect, useState } from 'react';

function Read() {
  const [halloweenCharacter, setHalloweenCharacter] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      const res = await axios.get('http://localhost:1207/halloween');
      setHalloweenCharacter(res.data);
    };
    getCharacter();
  });
  return (
    <>
      {halloweenCharacter.map(({ characterName, Movie, scareFactor }) => (
        <>
          <p>{characterName}</p>
          <p>{Movie}</p>
          <p>{`${scareFactor}`}</p>
        </>
      ))}
    </>
  );
}

export default Read;