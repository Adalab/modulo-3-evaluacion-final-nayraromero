import '../styles/components/main.scss';
import '../styles/core/reset.scss';
import { useEffect, useState } from 'react';
import getDataFromAPI from '../services/api';
import CharacterList from './CharacterList';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import Filter from './Filter';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import logo from '../images/logo.png';

function App() {
  //VARIABLES ESTADO
  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  //FUNCIONES
  const handleFilterName = (value) => {
    setFilterByName(value);
  };
  const charactersFiltered = dataCharacter.filter((character) =>
    character.name.toLowerCase().includes(filterByName.toLowerCase())
  );

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

  const { pathname } = useLocation();

  const dataUrl = matchPath('/character/:characterId', pathname);

  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;

  const characterFound = dataCharacter.find(
    (character) => character.id === parseInt(characterId)
  );
  return (
    <>
      <Header logo={logo} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                handleFilterName={handleFilterName}
                filterByName={filterByName}
                errorMessage={errorMessage}
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
