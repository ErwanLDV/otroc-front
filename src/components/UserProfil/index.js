import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

function UserProfil() {
  const dispatch = useDispatch();
  useEffect(() => {
    
  }, []);
  return (
    <section>
      <h2>Bienvenue sur la page de PSEUDO user</h2>
    </section>
  );
}

export default UserProfil;
