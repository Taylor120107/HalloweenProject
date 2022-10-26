import axios from 'axios';
import { useState } from 'react';

function Create() {
  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');
  const [scareFactor, setScareFactor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:1207/halloween/createCharacter', {
      name, movie, scareFactor,
    });

    console.log('CREATED:', res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      
        <h1> Please add to my list of Halloween Characters!</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rczqTTvGhQWwKDBvgR3_Rx6ldEdvHRMOEEdibHNesCw4NUrZo8_HtZO72JPmtSsV5-A&usqp=CAU"></img>
        <br/>
        <br/>
        <label htmlFor="Name">Character Name:
          <input type="text" id="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br/>
        <label htmlFor="Movie">Movie They were in:
          <input type="text" id="Movie" value={movie} onChange={(e) => setMovie(e.target.value)} required />
        </label>
        <br/>
        <label htmlFor="Scare">Scare Factor:
          <input type="number" id="Scare" min={0} max={10} step="1" value={scareFactor} onChange={(e) => setScareFactor(e.target.value)} required />
        </label>
        <br/>
        <br/>
        <input type="submit" value="Submit"></input>
      
    </form>
  )
}

export default Create;