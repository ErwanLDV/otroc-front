import axios from 'axios';
import {
  actionAuthentError,
  actionAuthentSuccess,
  actionSaveUserOffers,
  actionSaveUserProfil,
  actionSaveUserWishes,
  CHECK_LOGIN,
  GET_USER_HISTORY,
  GET_USER_OFFERS,
  GET_USER_PROFIL,
  GET_USER_WISHES,
  PUT_USER_PROFIL,
  USER_INSCRIPTION,
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
    case GET_USER_PROFIL: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.get(
        `${baseURL}/api/users/current/profile`,
        config,
      ).then((result) => {
        console.log(result);
        store.dispatch(actionSaveUserProfil(result.data));
      }).catch((error) => {
        console.log('get user profil ', error);
      });
      break;
    }
    case PUT_USER_PROFIL: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.put(
        `${baseURL}/api/users/current`,
        {
          email: user.currentUserProfil.email,
          password: user.currentUserProfil.password,
          alias: user.currentUserProfil.alias,
          zipcode: Number(user.currentUserProfil.zipcode),
          firstname: user.currentUserProfil.firstname,
          lastname: user.currentUserProfil.lastname,
          phoneNumber: user.currentUserProfil.phoneNumber,
        },
        config,
      ).then((result) => {
        console.log(result);
        store.dispatch(actionSaveUserProfil(result.data));
      }).catch((error) => {
        console.log('put user profil ', error);
      });
      break;
    }
    case GET_USER_OFFERS: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.get(
        `${baseURL}/api/users/current/offers`,
        config,
      ).then((result) => {
        console.log(result);
        store.dispatch(actionSaveUserOffers(result.data));
      }).catch((error) => {
        console.log('get user offers ', error);
      });
      break;
    }
    case GET_USER_WISHES: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.get(
        `${baseURL}/api/users/current/wishes`,
        config,
      ).then((result) => {
        console.log(result);
        store.dispatch(actionSaveUserWishes(result.data));
      }).catch((error) => {
        console.log('get user offers ', error);
      });
      break;
    }
    case GET_USER_HISTORY: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.get(
        `${baseURL}/`,
        config,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('get user offers ', error);
      });
      break;
    }
    default:
      break;
  }
  next(action);
};

export default userMiddleware;
