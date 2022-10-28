import axios from 'axios';
import { useEffect, useState } from 'react';

function Read() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const res = await axios.get('http://localhost:1207/halloween/getAll');
    setCharacters(res.data);
  };

  useEffect(() => { getCharacters() }, []);

  const deleteCharacter = async (id) => {
    await axios.delete("http://localhost:1207/halloween/delete/" + id);
    getCharacters();
  }
  // const updateCharacter = async (id) => {
  //   await axios.patch("http://localhost:1207/halloween/replace" + id);
  //   getCharacters();
  // }



  return (
    <>
      {characters.map(({ _id, name, movie, scareFactor }) => (
        <div key={_id}>
          <p>{name}</p>
          <p>{movie}</p>
          <p>{`${scareFactor}/10`}</p>
          <button type="button" >UPDATE</button>
          <button type="button" onClick={() => deleteCharacter(_id)}>DELETE</button>
        </div>
      ))}
    </>
  );
}



export default Read;