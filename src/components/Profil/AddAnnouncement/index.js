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
  actionDisableModeEdit,
  actionEnableModeEdit,
} from '../../../actions/annoucements';
import CustomSelect from '../../CustomSelect';

function AddAnnouncement() {
  const dispatch = useDispatch();
  const modeEdit = useSelector((state) => state.annoucements.modeEdit);
  const addOrEditAnnoucement = useSelector((state) => state.annoucements.addOrEditAnnoucement);
  const annoucementType = useSelector((state) => state.annoucements.annoucementType);
  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/annonces/ajouter':
        dispatch(actionDisableModeEdit());
        break;
      default:
        dispatch(actionEnableModeEdit());
        break;
    }
  }, [location]);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInputAnnoucement(newValue, inputName, 'addOrEditAnnoucement'));
  };

  const handleChangeTextArea = (event) => {
    dispatch(actionChangeTextAreaAnnoucement(event.target.value));
  };

  const handleChangeSelect = (newValue) => {
    dispatch(actionChangeSelectCategoriesAnnoucement(newValue));
  };

  const handleChangeInputRadioType = (newValue, inputName) => {
    dispatch(actionChangeCustomInputAnnoucement(newValue, inputName, 'addOrEditAnnoucement'));
  };

  const handleChangeInputRadioAnnoucementType = (newValue, inputName) => {
    dispatch(actionChangeCustomInputAnnoucement(newValue, inputName));
  };

  const handleSubmitFormAddAnnoucement = (event) => {
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
            <label>Offre
              <CustomInput className="" value="offer" name="annoucementType" type="radio" onChange={handleChangeInputRadioAnnoucementType} checked={annoucementType === 'offer'} />
            </label>
            <label>Demande
              <CustomInput className="" value="wish" name="annoucementType" type="radio" onChange={handleChangeInputRadioAnnoucementType} checked={annoucementType === 'wish'} />
            </label>
          </div>
        )}
        <div>
          <label>Titre*
            <CustomInput onChange={handleChangeInput} className="addAnnouncement-form-input" value={addOrEditAnnoucement.title} type="text" name="title" placeholder="Titre de l'annonce" />
          </label>
        </div>
        <label>Choisir une categorie*
          {addOrEditAnnoucement.categories
            ? (
              <CustomSelect
                name="mainCategory"
                onChange={handleChangeSelect}
                optionsArray={categoriesArray}
                value={addOrEditAnnoucement.categories[0]}
                optionTitle="Liste des catégories"
              />
            )
            : (
              <CustomSelect
                name="mainCategory"
                onChange={handleChangeSelect}
                optionsArray={categoriesArray}
                optionTitle="Liste des catégories"
              />
            )}
        </label>
        <label htmlFor="picture">Ajouter une photo:

          <input
            type="file"
            name="picture"
            accept="image/png, image/jpeg"
          />
        </label>
        <div>
          <label>Permanent
            <CustomInput className="" value="permanent" name="type" type="radio" onChange={handleChangeInputRadioType} checked={addOrEditAnnoucement.type === 'permanent'} defaultValue />
          </label>
          <label>Temporaire
            <CustomInput className="" value="temporaire" name="type" type="radio" onChange={handleChangeInputRadioType} checked={addOrEditAnnoucement.type === 'temporaire'} />
          </label>
        </div>
        <label>Code Postal*
          <CustomInput onChange={handleChangeInput} className="addAnnouncement-form-input" maxLength="5" value={addOrEditAnnoucement.zipcode} type="zipcode" name="zipcode" placeholder="Code postal" />
        </label>
        <div>
          <label htmlFor="content">Contenu*
            <textarea onChange={handleChangeTextArea} value={addOrEditAnnoucement.description || ''} className="addAnnouncement-form-textarea" rows="5" cols="50" name="description" placeholder="Contenu de l'annonce" />
          </label>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default AddAnnouncement;
