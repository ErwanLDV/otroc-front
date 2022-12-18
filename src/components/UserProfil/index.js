import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { actionGetOtherUserProfil } from '../../actions/user';
import AnnoucementCard from '../AnnoucementCard';
import './style.scss';

function UserProfil() {
  const param = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetOtherUserProfil(param.id));
  }, []);

  const otherUserProfil = useSelector((state) => state.user.otherUserProfil);
  console.log(otherUserProfil);
  return (
    <section>
      <h2>Bienvenue sur la page de PSEUDO user</h2>
      <div className="container-userProfil">
        <div className="container-userProfil-infos">
          infos du user
          <p>{otherUserProfil.email}</p>
        </div>
        <div className="container-userProfil-cards">
          {otherUserProfil.offer && otherUserProfil.offer.map((element) => (
            <Link to={`/annonces/offers/${element.id}`} key={element.id}>
              <AnnoucementCard key={element.id} title={element.title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserProfil;
