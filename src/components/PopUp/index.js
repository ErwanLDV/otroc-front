import { useSelector } from 'react-redux';
import './style.scss';
import PropTypes from 'prop-types';

function PopUp({ className }) {
  const messagePopUp = useSelector((state) => state.utils.messagePopUp);

  return (
    <div className={className}>
      <p>{messagePopUp}</p>
    </div>
  );
}

PopUp.propTypes = {
  className: PropTypes.string.isRequired,
};

export default PopUp;
