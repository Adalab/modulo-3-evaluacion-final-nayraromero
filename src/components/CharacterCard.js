import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  return (
    <li>
      <Link to={`character/${character.id}`}>
        <img
          src={character.photo}
          alt={`Foto de ${character.name}`}
          title={`Foto de ${character.name}`}
        />
        <h3>{character.name}</h3>
        <p>{character.species}</p>
      </Link>
    </li>
  );
};
export default CharacterCard;
