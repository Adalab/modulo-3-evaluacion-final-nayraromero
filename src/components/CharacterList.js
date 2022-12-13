import CharacterCard from './CharacterCard';
import '../styles/components/characterList.scss';

const CharacterList = ({ characters }) => {
  const charactersElements = characters.map((character) => {
    return <CharacterCard character={character} key={character.id} />;
  });
  return (
    <>
      <ul className="ul-characterList">{charactersElements}</ul>
    </>
  );
};
export default CharacterList;
