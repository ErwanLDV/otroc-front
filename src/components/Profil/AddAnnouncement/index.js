import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../../CustomInput';
import { actionAddNewOfferAnnoucement, actionAddNewWishAnnoucement, actionChangeCustomInputAnnoucement, actionChangeSelectCategoriesAnnoucement, actionChangeTextAreaAnnoucement } from '../../../actions/annoucements';

function AddAnnouncement() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.annoucements.addOrEditAnnoucement.title);
  const description = useSelector((state) => state.annoucements.addOrEditAnnoucement.description);
  const zipcode = useSelector((state) => state.annoucements.addOrEditAnnoucement.zipcode);
  const type = useSelector((state) => state.annoucements.addOrEditAnnoucement.type);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeCustomInputAnnoucement(newValue, inputName, 'addOrEditAnnoucement'));
  };

  const handleChangeTextArea = (event) => {
    dispatch(actionChangeTextAreaAnnoucement(event.target.value));
  };

  const handleChangeSelect = (event) => {
    dispatch(actionChangeSelectCategoriesAnnoucement(event.target.value));
  };

  const handleSubmitFormAddAnnoucement = (event) => {
    console.log('test submit form');
    event.preventDefault();
    switch (type) {
      case 'offer':
        dispatch(actionAddNewOfferAnnoucement());
        break;
      case 'wish':
        dispatch(actionAddNewWishAnnoucement());
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <h2>Nouvelle Annonce</h2>
      <form className="addAnnouncement-form" onSubmit={handleSubmitFormAddAnnoucement}>
        <div>
          <label htmlFor="type">Offre
            <CustomInput className="" value="offer" name="type" type="radio" onChange={handleChangeInput} />
          </label>
          <label htmlFor="type">Demande
            <CustomInput className="" value="wish" name="type" type="radio" onChange={handleChangeInput} />
          </label>
        </div>
        <div>
          <label htmlFor="title">Titre
            <CustomInput onChange={handleChangeInput} className="" value={title} type="text" name="title" placeholder="Titre de l'annonce" />
          </label>
        </div>
        <label htmlFor="mainCategory">Choisir une categorie:
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
        <CustomInput onChange={handleChangeInput} className="" maxLength="5" value={zipcode} type="zipcode" name="zipcode" placeholder="code postal" />
        <div>
          <label htmlFor="content">Contenu
            <textarea onChange={handleChangeTextArea} value={description} className="textarea" rows="5" cols="50" name="description" placeholder="Contenu de l'annonce" />
          </label>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default AddAnnouncement;
