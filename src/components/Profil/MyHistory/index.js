import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionGetUserHistory } from '../../../actions/user';
import './style.scss';

function MyHistory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetUserHistory());
  }, []);

  return (
    <section>Mon historique</section>
  );
}
export default MyHistory;
