import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
  const charactersElements = characters.map((character) => {
    return <CharacterCard character={character} key={character.id} />;
  });
  return (
    <>
      <ul>{charactersElements}</ul>
    </>
  );
};
export default CharacterList;
