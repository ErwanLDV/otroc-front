import './style.scss';
import { Link } from 'react-router-dom';
import ProfilCard from '../../ProfilCard';

function MyOffers() {
  return (
    <section>
      <h2>Mes offres</h2>
      <Link to="/annonces/ajouter">
        <button className="add-newOffer" type="button">Ajouter une offre</button>
      </Link>
      <ProfilCard />
    </section>

  );
}
export default MyOffers;
