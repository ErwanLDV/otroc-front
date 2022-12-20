import './style.scss';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProfilCard from '../../ProfilCard';
import { actionGetUserOffers } from '../../../actions/user';

function MyOffers() {
  const dispatch = useDispatch();

  const offersArray = useSelector((state) => state.user.currentUserOffers);

  useEffect(() => {
    dispatch(actionGetUserOffers());
  }, []);

  return (
    <section>
      <h2>Mes offres</h2>
      <Link to="/annonces/ajouter">
        <button className="add-newOffer" type="button">Ajouter une offre</button>
      </Link>
      {
        offersArray.map((item) => (
          <ProfilCard
            key={item.id}
            title={item.title}
            content={item.description}
            img={item.picture}
            id={item.id}
            type="offer"
          />
        ))
      }

    </section>

  );
}
export default MyOffers;
