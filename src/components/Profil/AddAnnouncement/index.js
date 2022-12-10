import './style.scss';
import { useDispatch } from 'react-redux';
import CustomInput from '../../CustomInput';
import { actionChangeCustomInput } from '../../../actions/user';

function AddAnnouncement() {
  const dispatch = useDispatch();

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInput(newValue, inputName));
  };

  return (
    <section>
      <h2>Nouvelle Annonce</h2>
      <form className="addAnnouncement-form">
        <div>
          <label htmlFor="offer">Offre
            <input className="" name="choice" type="radio" placeholder="" />
          </label>
          <label htmlFor="Wish">Demande
            <input className="" name="choice" type="radio" placeholder="" />
          </label>
        </div>
        <div>
          <label htmlFor="title">Titre
            <CustomInput onChange={handleChangeInput} className="" value="" type="text" name="title" placeholder="Titre de l'annonce" />
          </label>
        </div>
        <div>
          <label htmlFor="content">Contenu
            <textarea onChange={handleChangeInput} className="textarea" rows="5" cols="50" name="content" placeholder="Contenu de l'annonce" />
          </label>
        </div>
      </form>
    </section>
  );
}

export default AddAnnouncement;
