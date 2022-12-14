import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetUserWishes } from '../../../actions/user';
import ProfilCard from '../../ProfilCard';
import './style.scss';

function MyRequests() {
  const dispatch = useDispatch();

  const wishesArray = useSelector((state) => state.user.currentUserWishes);

  useEffect(() => {
    dispatch(actionGetUserWishes());
  }, []);
  return (
    <section>
      <h2>Mes demandes</h2>
      {
        wishesArray.map((item) => (
          <ProfilCard
            key={item.id}
            title={item.title}
            content={item.description}
            img={item.picture}
          />
        ))
      }

    </section>
  );
}
export default MyRequests;
