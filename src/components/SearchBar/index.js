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
    <form>
      <CustomInput onChange={handleChangeInput} type="text" name="" placeholder="rechercher un objet" />
      <button type="button"> rechercher </button>
    </form>
  );
}

export default SearchBar;
