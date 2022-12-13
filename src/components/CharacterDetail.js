const CharacterDetail = ({ characterFound }) => {
  console.log(characterFound);
  return (
    <article>
      <img
        src={characterFound.photo}
        alt={`Foto de ${characterFound.name}`}
        title={`Foto de ${characterFound.name}`}
      />
      <h3>{characterFound.name}</h3>
      <p>Status: {characterFound.status}</p>
      <p>Species: {characterFound.species}</p>
      <p>Origin: {characterFound.origin}</p>
      <p>Episodes: {characterFound.episodes}</p>
    </article>
  );
};
export default CharacterDetail;
