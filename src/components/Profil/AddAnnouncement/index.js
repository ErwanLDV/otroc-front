import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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
  actionSaveOfferPicture,
  actionSaveWishPicture,
} from '../../../actions/annoucements';
import CustomSelect from '../../CustomSelect';

function AddAnnouncement() {
  const dispatch = useDispatch();
  const location = useLocation();
  const modeEdit = useSelector((state) => state.annoucements.modeEdit);
  const addOrEditAnnoucement = useSelector((state) => state.annoucements.addOrEditAnnoucement);
  const annoucementType = useSelector((state) => state.annoucements.annoucementType);
  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  const [previewPicture, setPreviewPicture] = useState(null);
  const [newPicture, setNewPicture] = useState(null);

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

  const handleChangePicture = (event) => {
    setNewPicture(event.target.files[0]);
  };

  const reader = new FileReader();
  if (newPicture) {
    reader.readAsDataURL(newPicture);
    reader.onload = (readerEvent) => {
      if (newPicture.type.includes('image')) {
        setPreviewPicture(readerEvent.target.result);
      }
    };
  }

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
          dispatch(actionSaveOfferPicture(newPicture));
          dispatch(actionAddNewOfferAnnoucement());
          setNewPicture(null);
          setPreviewPicture(null);
          break;
        case 'wish':
          dispatch(actionSaveWishPicture(newPicture));
          dispatch(actionAddNewWishAnnoucement());
          setNewPicture(null);
          setPreviewPicture(null);
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
            <CustomInput onChange={handleChangeInput} className="addAnnouncement-form-input" value={addOrEditAnnoucement.title} type="text" name="title" placeholder="Titre de l'annonce" required />
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
        {!modeEdit && (
          <label htmlFor="picture"> Ajouter une image :
            <input
              name="picture"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleChangePicture}
            />
        </label>
        )}
        {previewPicture && <img src={previewPicture} width="300" alt="Prévisualisation" />}
        {addOrEditAnnoucement.picture && <img src={addOrEditAnnoucement.picture} width="300" alt="Prévisualisation" />}
        <div>
          <label>Permanent
            <CustomInput className="" value="permanent" name="type" type="radio" onChange={handleChangeInputRadioType} checked={addOrEditAnnoucement.type === 'permanent'} defaultValue />
          </label>
          <label>Temporaire
            <CustomInput className="" value="temporaire" name="type" type="radio" onChange={handleChangeInputRadioType} checked={addOrEditAnnoucement.type === 'temporaire'} />
          </label>
        </div>
        <label>Code Postal*
          <CustomInput onChange={handleChangeInput} className="addAnnouncement-form-input" maxLength="5" value={addOrEditAnnoucement.zipcode} type="zipcode" name="zipcode" placeholder="Code postal" required />
        </label>
        <div>
          <label htmlFor="content">Contenu*
            <textarea onChange={handleChangeTextArea} value={addOrEditAnnoucement.description || ''} className="addAnnouncement-form-textarea" rows="5" cols="50" name="description" placeholder="Contenu de l'annonce" required />
          </label>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default AddAnnouncement;
