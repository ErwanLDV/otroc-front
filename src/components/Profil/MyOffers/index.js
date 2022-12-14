import './style.scss';
import { Link } from 'react-router-dom';
import ProfilCard from '../../ProfilCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionGetUserOffers } from '../../../actions/user';

function MyOffers() {
  const dispatch = useDispatch();

  const offersArray = useSelector((state) => state.user.currentUserOffers);
  console.log(offersArray);

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
        offersArray.map((item, index) => (
          <ProfilCard
            key={index}
            title={item.title}
            content={item.description}
            img={item.picture}
          />
        ))
      }

    </section>

  );
}
export default MyOffers;
