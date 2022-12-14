//styles
import '../styles/components/main.scss';
import '../styles/core/reset.scss';
//useEffect + Routes + ls
import { useEffect, useState } from 'react';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import ls from '../services/localStorage';
//components
import getDataFromAPI from '../services/api';
import logo from '../images/logo.png';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';

function App() {
  //VARIABLES ESTADO
  const [dataCharacter, setDataCharacter] = useState([]);
  // const [filterByName, setFilterByName] = useState('');
  // const [filterBySpecie, setFilterBySpecie] = useState('all');
  const [filterByName, setFilterByName] = useState(ls.get('filterByName', ''));
  const [filterBySpecie, setFilterBySpecie] = useState(
    ls.get('filterBySpecie', 'all')
  );

  //FUNCIONES HANDLE
  const handleFilterName = (value) => {
    ls.set('filterByName', value);
    setFilterByName(value);
  };
  const handleFilterSpecie = (value) => {
    ls.set('filterBySpecie', value);
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
