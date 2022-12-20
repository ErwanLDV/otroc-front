import { useDispatch } from 'react-redux';
import { actionDeleteUser } from '../../../actions/user';
import './style.scss';

function DeleteProfil() {
  const dispatch = useDispatch();
  return (
    <section>
      <form className="form-delete">
        <h2 className="form-delete-title">Êtes-vous sûr de vouloir supprimer le compte ?</h2>
        <button className="form-delete-button" onClick={() => dispatch(actionDeleteUser())} type="button">Supprimer le compte</button>
      </form>
    </section>
  );
}

export default DeleteProfil;
