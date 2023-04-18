import rickmortyimg from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';
import logoimg from './img/logoUV.jpg';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <center><img src={rickmortyimg} alt="Rick & Morty" className="img-home" /></center>
            <center><button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button></center>
            <h2 className='alumnName'>
              Angel Moises Cruz Cruz</h2>
            <h3 className='alumnName'>S19004906</h3>
            <center><img src={logoimg} alt="angel cruz" className="img-uv" /></center>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
