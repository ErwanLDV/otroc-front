import axios from 'axios';
import {
  actionAuthentError,
  actionAuthentSuccess,
  actionLogout,
  actionSaveOtherUserProfil,
  actionSaveUserOffers,
  actionSaveUserProfil,
  actionSaveUserWishes,
  CHECK_LOGIN,
  DELETE_USER,
  GET_OTHER_USER_PROFIL,
  GET_USER_HISTORY,
  GET_USER_OFFERS,
  GET_USER_PROFIL,
  GET_USER_WISHES,
  PUT_USER_PROFIL,
  USER_INSCRIPTION,
} from '../actions/user';

const baseURL = process.env.BACK_API_BASE_URL;

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
        const authedUser = {
          id: result.data.data.id,
          pseudo: result.data.data.alias,
          token: result.data.token,
        };
        const authedUserJSON = JSON.stringify(authedUser);
        localStorage.setItem('activeSession', authedUserJSON);
        store.dispatch(actionAuthentSuccess(authedUser));
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
        store.dispatch(actionSaveUserOffers(result.data[0].offer));
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
        store.dispatch(actionSaveUserWishes(result.data[0].wish));
      }).catch((error) => {
        console.log('get user wishes ', error);
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
        console.log('get user history ', error);
      });
      break;
    }
    case GET_OTHER_USER_PROFIL:
      axios.get(
        `${baseURL}/api/users/${action.payload}`,
      ).then((result) => {
        console.log(result);
        store.dispatch(actionSaveOtherUserProfil(result.data));
      }).catch((error) => {
        console.log('get other user profil ', error);
      });
      break;
    case DELETE_USER: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.delete(
        `${baseURL}/api/users/current`,
        config,
      ).then((result) => {
        console.log(result);
        store.dispatch(actionLogout());
      }).catch((error) => {
        console.log('DELETE_USER', error);
      });
      break;
    }
    default:
      break;
  }
  next(action);
};

export default userMiddleware;
