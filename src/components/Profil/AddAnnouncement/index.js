import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomInput from '../../CustomInput';
import {
  actionAddNewOfferAnnoucement,
  actionAddNewWishAnnoucement,
  actionChangeCustomInputAnnoucement,
  actionChangeSelectCategoriesAnnoucement,
  actionChangeTextAreaAnnoucement,
  actionUpdateWishAnnoucement,
  actionUpdateOfferAnnoucement,
  actionChangeModeEdit,
} from '../../../actions/annoucements';

function AddAnnouncement() {
  const dispatch = useDispatch();
  const modeEdit = useSelector((state) => state.annoucements.modeEdit);
  const title = useSelector((state) => state.annoucements.addOrEditAnnoucement.title);
  const description = useSelector((state) => state.annoucements.addOrEditAnnoucement.description);
  const zipcode = useSelector((state) => state.annoucements.addOrEditAnnoucement.zipcode);
  const annoucementType = useSelector((state) => state.annoucements.annoucementType);

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/annonces/ajouter':
        dispatch(actionChangeModeEdit(false));
        break;
      default:
        dispatch(actionChangeModeEdit(true));
        break;
    }
  }, [location]);
  console.log(modeEdit);
  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInputAnnoucement(newValue, inputName, 'addOrEditAnnoucement'));
  };

  const handleChangeTextArea = (event) => {
    dispatch(actionChangeTextAreaAnnoucement(event.target.value));
  };

  const handleChangeSelect = (event) => {
    dispatch(actionChangeSelectCategoriesAnnoucement(event.target.value));
  };

  const handleChangeInputRadio = (newValue, inputName) => {
    dispatch(actionChangeCustomInputAnnoucement(newValue, inputName));
  };

  const handleSubmitFormAddAnnoucement = (event) => {
    console.log('test submit form');
    event.preventDefault();
    if (modeEdit) {
      switch (annoucementType) {
        case 'offer':
          dispatch(actionUpdateOfferAnnoucement());
          break;
        case 'wish':
          dispatch(actionUpdateWishAnnoucement());
          break;
        default:
          break;
      }
    }
    else {
      switch (annoucementType) {
        case 'offer':
          dispatch(actionAddNewOfferAnnoucement());
          break;
        case 'wish':
          dispatch(actionAddNewWishAnnoucement());
          break;
        default:
          break;
      }
    }
  };

  return (
    <section>
      <h2>Nouvelle Annonce</h2>
      <form className="addAnnouncement-form" onSubmit={handleSubmitFormAddAnnoucement}>
        { !modeEdit
        && (
            <div>
              <label htmlFor="annoucementType">Offre
                <CustomInput className="" value="offer" name="annoucementType" type="radio" onChange={handleChangeInputRadio} />
              </label>
              <label htmlFor="annoucementType">Demande
                <CustomInput className="" value="wish" name="annoucementType" type="radio" onChange={handleChangeInputRadio} />
              </label>
            </div>
        )}
        <div>
          <label htmlFor="title">Titre*
            <CustomInput onChange={handleChangeInput} className="addAnnouncement-form-input" value={title} type="text" name="title" placeholder="Titre de l'annonce" />
          </label>
        </div>
        <label htmlFor="mainCategory">Choisir une categorie*
          <select name="mainCategory" onChange={handleChangeSelect}>
            <option value="">liste des catégories</option>
            <option value="1">Maison</option>
            <option value="2">Mode</option>
            <option value="3">Multimedia</option>
            <option value="4">Loisirs</option>
            <option value="5">Divers</option>
          </select>
        </label>
        <label htmlFor="picture">Ajouter une photo:

          <input
            type="file"
            name="picture"
            accept="image/png, image/jpeg"
          />
        </label>
        <div>
              <label htmlFor="test">Permanent
                <CustomInput className="" value="permanent" name="test" type="radio" onChange={handleChangeInputRadio} />
              </label>
              <label htmlFor="test">Temporaire
                <CustomInput className="" value="temporaire" name="test" type="radio" onChange={handleChangeInputRadio} />
              </label>
            </div>
        <label htmlFor="title">Code Postal*
          <CustomInput onChange={handleChangeInput} className="addAnnouncement-form-input" maxLength="5" value={zipcode} type="zipcode" name="zipcode" placeholder="Code postal" />
        </label>
        <div>
          <label htmlFor="content">Contenu*
            <textarea onChange={handleChangeTextArea} value={description} className="addAnnouncement-form-textarea" rows="5" cols="50" name="description" placeholder="Contenu de l'annonce" />
          </label>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default AddAnnouncement;
