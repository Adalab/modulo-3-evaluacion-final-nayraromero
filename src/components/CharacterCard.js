import { Link } from 'react-router-dom';
import '../styles/components/characterCard.scss';

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <li className="character-list">
        <Link to={`character/${character.id}`}>
          <img
            src={character.photo}
            alt={`Foto de ${character.name}`}
            title={`Foto de ${character.name}`}
          />
          <h3 className="character-info">{character.name}</h3>
          <p className="character-info">{character.species}</p>
        </Link>
      </li>
    </div>
  );
};
export default CharacterCard;
