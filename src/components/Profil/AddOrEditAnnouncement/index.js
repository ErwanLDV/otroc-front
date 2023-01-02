/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Download } from 'react-feather';
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
import PopUp from '../../PopUp';
import { actionChangeRedirection } from '../../../actions/utils';

function AddOrEditAnnouncement() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const modeEdit = useSelector((state) => state.annoucements.modeEdit);
  const addOrEditAnnoucement = useSelector((state) => state.annoucements.addOrEditAnnoucement);
  const annoucementType = useSelector((state) => state.annoucements.annoucementType);
  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  const [previewPicture, setPreviewPicture] = useState(null);
  const [newPicture, setNewPicture] = useState(null);
  const messagePopUp = useSelector((state) => state.utils.messagePopUp);
  const redirection = useSelector((state) => state.utils.redirection);

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

  useEffect(() => {
    if (redirection.bool) {
      navigate(redirection.path);
      dispatch(actionChangeRedirection(false));
    }
  }, [redirection.bool]);

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
      <form className={annoucementType === 'offer' ? 'offerAnnouncement-form' : 'wishAnnouncement-form'} onSubmit={handleSubmitFormAddAnnoucement}>
        <PopUp className={messagePopUp ? 'popup' : 'popup-off'} />
        {!modeEdit ? <h2>Nouvelle annonce</h2> : <h2>Modifier votre annonce</h2>}
        {!modeEdit
          && (
            <div className="switch-annoucement">
              <CustomInput id="annoucementOffer" type="radio" value="offer" name="annoucementType" onChange={handleChangeInputRadioAnnoucementType} checked={annoucementType === 'offer'} />
              <CustomInput id="annoucementWish" type="radio" value="wish" name="annoucementType" onChange={handleChangeInputRadioAnnoucementType} checked={annoucementType === 'wish'} />
              <label htmlFor="annoucementOffer">Offres</label>
              <label htmlFor="annoucementWish">Demandes</label>
              <span className="highlighter" />
            </div>
          )}
        <div>
          <label>Titre*
            <CustomInput onChange={handleChangeInput} className={annoucementType === 'offer' ? 'offerAnnouncement-form-input' : 'wishAnnouncement-form-input'} value={addOrEditAnnoucement.title} type="text" name="title" placeholder="Titre de l'annonce" required />
          </label>
        </div>
        {addOrEditAnnoucement.categories
          ? (
            <CustomSelect
              name="mainCategory"
              onChange={handleChangeSelect}
              optionsArray={categoriesArray}
              value={addOrEditAnnoucement.categories[0]}
              optionTitle="Choisir une catégorie*"
            />
          )
          : (
            <CustomSelect
              name="mainCategory"
              onChange={handleChangeSelect}
              optionsArray={categoriesArray}
              optionTitle="Choisir une catégorie*"
            />
          )}
        {!modeEdit && (
          <>
            <input
              className="input-file"
              id="annoucement-picture"
              name="picture"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleChangePicture}
            />
            <label htmlFor="annoucement-picture"><Download size={15} /> Choisir une image</label>
          </>
        )}
        {previewPicture && <img src={previewPicture} width="300" alt="Prévisualisation" />}
        {modeEdit && addOrEditAnnoucement.picture && <img src={addOrEditAnnoucement.picture} width="300" alt="Prévisualisation" />}
        <div className="switch-type">
          <CustomInput id="permanent" type="radio" value="permanent" name="type" onChange={handleChangeInputRadioType} checked={addOrEditAnnoucement.type === 'permanent'} />
          <CustomInput id="tempory" type="radio" value="temporaire" name="type" onChange={handleChangeInputRadioType} checked={addOrEditAnnoucement.type === 'temporaire'} />
          <label htmlFor="permanent">Permanent</label>
          <label htmlFor="tempory">Temporaire</label>
          <span className="highlighter" />
        </div>
        <label>Code Postal*
          <CustomInput onChange={handleChangeInput} className={annoucementType === 'offer' ? 'offerAnnouncement-form-input' : 'wishAnnouncement-form-input'} maxLength="5" value={addOrEditAnnoucement.zipcode} type="zipcode" name="zipcode" placeholder="Code postal" required />
        </label>
        <div className="textArea-container">
          <label>Description de l'annonce* :
            <textarea onChange={handleChangeTextArea} value={addOrEditAnnoucement.description || ''} className={annoucementType === 'offer' ? 'offerAnnouncement-form-textarea' : 'wishAnnouncement-form-textarea'} name="description" placeholder="Contenu de l'annonce" required />
          </label>
        </div>
        <button type="submit">Valider</button>
      </form>
    </section>
  );
}

export default AddOrEditAnnouncement;
