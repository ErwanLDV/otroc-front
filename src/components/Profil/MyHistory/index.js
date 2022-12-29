import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionPageReload } from '../../../actions/annoucements';
import { actionGetUserHistory } from '../../../actions/user';
import ProfilCard from '../../ProfilCard';
import './style.scss';

function MyHistory() {
  const dispatch = useDispatch();

  const offersHistory = useSelector((state) => state.user.currentUserHistory.offers);
  const wishesHistory = useSelector((state) => state.user.currentUserHistory.wishes);
  const pageReload = useSelector((state) => state.annoucements.pageReload);

  useEffect(() => {
    dispatch(actionGetUserHistory());
    if (pageReload) {
      dispatch(actionPageReload());
    }
  }, [pageReload]);

  return (
    <section>
      <h2>Mon historique</h2>
      <div>
        {offersHistory && offersHistory.map((item) => (
          <ProfilCard
            key={item.id}
            title={item.title}
            content={item.description}
            img={item.picture}
            id={item.id}
            annoucementType="offer"
            isActive={item.isActive}
            type={item.type}
          />
        ))}
        {wishesHistory && wishesHistory.map((item) => (
          <ProfilCard
            key={item.id}
            title={item.title}
            content={item.description}
            img={item.picture}
            id={item.id}
            annoucementType="wish"
            isActive={item.isActive}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
}
export default MyHistory;
