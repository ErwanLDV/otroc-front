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

function AddAnnouncement() {
  const dispatch = useDispatch();
  const modeEdit = useSelector((state) => state.annoucements.modeEdit);
  const addOrEditAnnoucement = useSelector((state) => state.annoucements.addOrEditAnnoucement);
  const annoucementType = useSelector((state) => state.annoucements.annoucementType);
  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  const editLoaded = useSelector((state) => state.annoucements.editLoaded);
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

  console.log(modeEdit);
  console.log(addOrEditAnnoucement.categories);
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
            <CustomInput onChange={handleChangeInput} className="addAnnouncement-form-input" value={addOrEditAnnoucement.title} type="text" name="title" placeholder="Titre de l'annonce" />
          </label>
        </div>
        <label htmlFor="mainCategory">Choisir une categorie*
          <select name="mainCategory" onChange={handleChangeSelect}>
            <option hidden>Liste des catégories</option>
            {categoriesArray.map((mainCategory) => (
              <optgroup label={mainCategory.name} key={mainCategory.id} value={mainCategory.id}>
                {editLoaded && addOrEditAnnoucement.categories[0]
                && mainCategory.categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    selected={category.id === addOrEditAnnoucement.categories[0].id}
                  >
                    {category.name}
                  </option>
                )) }
                {(!editLoaded || !addOrEditAnnoucement.categories[0])
                && mainCategory.categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                )) }
              </optgroup>
            ))}
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
          <label htmlFor="type">Permanent
            <CustomInput className="" value="permanent" name="type" type="radio" onChange={handleChangeInputRadio} />
          </label>
          <label htmlFor="type">Temporaire
            <CustomInput className="" value="temporaire" name="type" type="radio" onChange={handleChangeInputRadio} />
          </label>
        </div>
        <label htmlFor="title">Code Postal*
          <CustomInput onChange={handleChangeInput} className="addAnnouncement-form-input" maxLength="5" value={addOrEditAnnoucement.zipcode} type="zipcode" name="zipcode" placeholder="Code postal" />
        </label>
        <div>
          <label htmlFor="content">Contenu*
            <textarea onChange={handleChangeTextArea} value={addOrEditAnnoucement.description} className="addAnnouncement-form-textarea" rows="5" cols="50" name="description" placeholder="Contenu de l'annonce" />
          </label>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default AddAnnouncement;
