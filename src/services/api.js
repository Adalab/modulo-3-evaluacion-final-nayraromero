const getDataFromAPI = () => {
  return fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          photo: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          status: character.status,
          episodes: character.episode.length,
        };
      });
      cleanData.sort((x, y) => x.name.localeCompare(y.name));
      return cleanData;
    });
};
export default getDataFromAPI;
