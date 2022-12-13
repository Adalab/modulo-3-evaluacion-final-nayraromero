import '../styles/components/characterDetail.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = ({ characterFound }) => {
  console.log(characterFound);
  return (
    <>
      <section className="section-detail">
        <article className="detail-data">
          <img
            src={characterFound.photo}
            alt={`Foto de ${characterFound.name}`}
            title={`Foto de ${characterFound.name}`}
            className="detail-image"
          />
          <section className="detail-info">
            <h3 className="detail-name">{characterFound.name}</h3>
            <p className="detail-text">Status: {characterFound.status}</p>
            <p className="detail-text">Species: {characterFound.species}</p>
            <p className="detail-text">Origin: {characterFound.origin}</p>
            <p className="detail-text">Episodes: {characterFound.episodes}</p>
          </section>
        </article>
        <Link to="/" className="back-button">
          Go Back
        </Link>
      </section>
    </>
  );
};
export default CharacterDetail;
