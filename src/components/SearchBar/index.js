/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../CustomInput';
import { actionChangeInputSearchBar, actionPostSearchOffers, actionPostSearchWishes } from '../../actions/search';

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputSearchBar = useSelector((state) => state.search.inputSearchBar);
  const searchType = useSelector((state) => state.search.searchType);

  const handleChangeInput = (newValue, inputName) => {
    dispatch(actionChangeInputSearchBar(newValue, inputName));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (searchType) {
      case 'offer':
        dispatch(actionPostSearchOffers(inputSearchBar));
        break;
      case 'wish':
        dispatch(actionPostSearchWishes(inputSearchBar));
        break;
      default:
        break;
    }
    navigate('/rechercher/resultat');
  };
  return (
    <section className="searchBar">
      <div className="switch-wrapper">
        <CustomInput id="offer" type="radio" value="offer" name="searchType" onChange={handleChangeInput} checked={searchType === 'offer'} />
        <CustomInput id="wish" type="radio" value="wish" name="searchType" onChange={handleChangeInput} checked={searchType === 'wish'} />
        <label htmlFor="offer">Offres</label>
        <label htmlFor="wish">Demandes</label>
        <span className="highlighter" />
      </div>
      <form className="searchBar-form" onSubmit={handleSubmit}>
        <CustomInput className="searchBar-form-input" value={inputSearchBar} onChange={handleChangeInput} type="text" name="inputSearchBar" placeholder="rechercher un objet..." required />
        <button className="searchBar-form-button" type="submit"> </button>
      </form>
    </section>
  );
}

export default SearchBar;
