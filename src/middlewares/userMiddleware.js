import axios from 'axios';
import {
  actionAuthentError, actionAuthentSuccess, CHECK_LOGIN, USER_INSCRIPTION,
} from '../actions/user';

// For tests
const baseURL = 'http://yann-lebouc.vpnuser.lan:8081';

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
    default:
      break;
  }
  next(action);
};

export default userMiddleware;
