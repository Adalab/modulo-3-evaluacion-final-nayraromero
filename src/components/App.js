import '../styles/components/main.scss';
import '../styles/core/reset.scss';
import { useEffect, useState } from 'react';
import getDataFromAPI from '../services/api';
import CharacterList from './CharacterList';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import logo from '../images/logo.png';

function App() {
  //VARIABLES ESTADO
  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterBySpecie, setFilterBySpecie] = useState('');

  //FUNCIONES HANDLE
  const handleFilterName = (value) => {
    setFilterByName(value);
  };
  const handleFilterSpecie = (value) => {
    setFilterBySpecie(value);
  };
  //FILTERS
  const charactersFiltered = dataCharacter
    .filter((character) =>
      character.name.toLowerCase().includes(filterByName.toLowerCase())
    )
    .filter((character) => {
      return filterBySpecie === 'all'
        ? true
        : character.species === filterBySpecie;
    });
  //ERROR FILTER BY NAME
  const errorMessage =
    charactersFiltered.length === 0
      ? `No hay ningún personaje que coincida con la palabra:
      ${filterByName.toLowerCase()}`
      : null;

  //USE EFFECT
  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setDataCharacter(cleanData);
    });
  }, []);

  //USE LOCATION PARA URL DINÁMICA
  const { pathname } = useLocation();

  const dataUrl = matchPath('/character/:characterId', pathname);

  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;

  const characterFound = dataCharacter.find(
    (character) => character.id === parseInt(characterId)
  );

  //RETURN HTML
  return (
    <>
      <Header logo={logo} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleFilterName={handleFilterName}
                filterByName={filterByName}
                errorMessage={errorMessage}
                handleFilterSpecie={handleFilterSpecie}
                filterBySpecie={filterBySpecie}
              />
              <CharacterList characters={charactersFiltered} />
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={
            <CharacterDetail
              characterFound={characterFound}
              filterByName={filterByName}
              errorMessage={errorMessage}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
