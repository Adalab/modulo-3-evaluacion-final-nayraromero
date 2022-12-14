import { Link } from 'react-router-dom';
import '../styles/components/characterCard.scss';
import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => {
  return (
    <li className="character-list">
      <Link to={`character/${character.id}`}>
        <img
          className="character-image"
          src={character.photo}
          alt={`Foto de ${character.name}`}
          title={`Foto de ${character.name}`}
        />
        <h3 className="character-info name">{character.name}</h3>
        <p className="character-info specie">{character.species}</p>
      </Link>
    </li>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  photo: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
