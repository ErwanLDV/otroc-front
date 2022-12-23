import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionPageReload } from '../../../actions/annoucements';
import { actionGetUserWishes } from '../../../actions/user';
import ProfilCard from '../../ProfilCard';
import './style.scss';

function MyWishes() {
  const dispatch = useDispatch();

  const wishesArray = useSelector((state) => state.user.currentUserWishes);
  const pageReload = useSelector((state) => state.annoucements.pageReload);

  useEffect(() => {
    dispatch(actionGetUserWishes());
    if (pageReload) {
      dispatch(actionPageReload());
    }
  }, [pageReload]);
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
            id={item.id}
            isActive={item.isActive}
            annoucementType="wish"
            type={item.type}
          />
        ))
      }

    </section>
  );
}
export default MyWishes;
