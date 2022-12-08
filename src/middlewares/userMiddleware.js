import axios from 'axios';
import {
  actionAuthentError, actionAuthentSuccess, CHECK_LOGIN, USER_INSCRIPTION,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_LOGIN: {
      // const { user } = store.getState();
      // TODO Compléter avec l'adresse API et Tester
      // axios.post(
      //   'http://localhost:3001/login',
      //   {
      //     username: user.email,
      //     password: user.password,
      //   },
      // ).then((result) => {
      //   store.dispatch(actionAuthentSuccess(result.data.token));
      // }).catch(() => {
      //   store.dispatch(actionAuthentError());
      // });

      break;
    }
    case USER_INSCRIPTION: {
      // const { user } = store.getState();
      // TODO Requete AXIOS ICI
      // {
      // firstname: action.payload.firstname,
      // lastname: action.payload.lastname,
      // pseudo: action.payload.pseudo,
      // email: action.payload.email,
      // password: action.payload.password,
      // zipcode: action.payload.zipcode,
      // phoneNumber: action.payload.phoneNumber,
      // }
      //  )
      break;
    }
    default:
      break;
  }
  next(action);
};

export default userMiddleware;
