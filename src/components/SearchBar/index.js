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
    console.log('change');
    dispatch(actionChangeInputSearchBar(newValue, inputName));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (searchType) {
      case 'offer':
        console.log('offers');
        dispatch(actionPostSearchOffers(inputSearchBar));
        break;
      case 'wish':
        console.log('wishes');
        dispatch(actionPostSearchWishes(inputSearchBar));
        break;
      default:
        break;
    }
    navigate('/rechercher/resultat');
  };
  return (
    <form className="SearchBar-form" onSubmit={handleSubmit}>
      <div className="SearchBar-form-radio">
        <label>Offre
          <CustomInput className="" value="offer" name="searchType" type="radio" onChange={handleChangeInput} checked={searchType === 'offer'} />
        </label>
        <label>Demande
          <CustomInput className="" value="wish" name="searchType" type="radio" onChange={handleChangeInput} checked={searchType === 'wish'} />
        </label>
      </div>
      <CustomInput className="SearchBar-form-input" value={inputSearchBar} onChange={handleChangeInput} type="text" name="inputSearchBar" placeholder="rechercher un objet..." required />
      <button className="SearchBar-form-button" type="submit"> rechercher </button>
    </form>
  );
}

export default SearchBar;
