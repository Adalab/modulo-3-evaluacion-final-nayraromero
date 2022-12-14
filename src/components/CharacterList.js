import CharacterCard from './CharacterCard';
import '../styles/components/characterList.scss';
import PropTypes from 'prop-types';

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

CharacterList.propTypes = {
  id: PropTypes.number,
};

export default CharacterList;
