import './style.scss';
import { useDispatch } from 'react-redux';
import CustomInput from '../CustomInput';
import { actionChangeCustomInputAnnoucement } from '../../actions/annoucements';

function SearchBar() {
  const dispatch = useDispatch();

  const handleChangeInput = (newValue, inputName) => {
    console.log('change');
  };
  return (
    <form className="SearchBar-form">
      <CustomInput className="SearchBar-form-input" onChange={handleChangeInput} type="text" name="" placeholder="rechercher un objet..." />
      <button className="SearchBar-form-button" type="button"> rechercher </button>
    </form>
  );
}

export default SearchBar;
