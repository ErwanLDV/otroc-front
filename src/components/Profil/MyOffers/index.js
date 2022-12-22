import './style.scss';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProfilCard from '../../ProfilCard';
import { actionGetUserOffers } from '../../../actions/user';
import { actionPageReload } from '../../../actions/annoucements';

function MyOffers() {
  const dispatch = useDispatch();

  const offersArray = useSelector((state) => state.user.currentUserOffers);
  const pageReload = useSelector((state) => state.annoucements.pageReload);

  useEffect(() => {
    dispatch(actionGetUserOffers());
    if (pageReload) {
      dispatch(actionPageReload());
    }
  }, [pageReload]);

  return (
    <section>
      <h2>Mes offres</h2>
      {
        offersArray.map((item) => (
          <ProfilCard
            key={item.id}
            title={item.title}
            content={item.description}
            img={item.picture}
            id={item.id}
            isActive={item.isActive}
            isLended={item.isLended}
            type={item.type}
            annoucementType="offer"
          />
        ))
      }

    </section>

  );
}
export default MyOffers;
