import axios from 'axios';
import {
  actionAuthentError, actionAuthentSuccess, CHECK_LOGIN, GET_USER_PROFIL, USER_INSCRIPTION,
} from '../actions/user';

// For tests
const baseURL = 'http://yannlebouc-server.eddi.cloud/projet-11-o-troc-back/public';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_LOGIN: {
      const { user } = store.getState();
      axios.post(
        `${baseURL}/api/login_check`,
        {
          username: user.email,
          password: user.password,
        },
      ).then((result) => {
        store.dispatch(actionAuthentSuccess(result.data.token));
      }).catch((error) => {
        store.dispatch(actionAuthentError());
        console.log('Check Login ', error);
      });

      break;
    }
    case USER_INSCRIPTION: {
      const { user } = store.getState();
      axios.post(
        `${baseURL}/api/users`,
        {
          email: user.email,
          password: user.password,
          alias: user.pseudo,
          zipcode: Number(user.zipcode),
          firstname: user.firstname,
          lastname: user.lastname,
          phoneNumber: user.phoneNumber,
        },
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('user inscription ', error);
      });
      break;
    }
    case GET_USER_PROFIL:
      axios.get(
        `${baseURL}/api.user/pseudo`,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('get user profil ', error);
      });
      break;

    default:
      break;
  }
  next(action);
};

export default userMiddleware;
