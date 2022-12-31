import axios from 'axios';
import {
  actionAuthentError,
  actionAuthentSuccess,
  actionLogout,
  actionSaveOtherUserProfil,
  actionSaveUserHistory,
  actionSaveUserOffers,
  actionSaveUserProfil,
  actionSaveUserWishes,
  CHANGE_PASSWORD,
  CHECK_LOGIN,
  DELETE_USER,
  GET_OTHER_USER_PROFIL,
  GET_USER_HISTORY,
  GET_USER_OFFERS,
  GET_USER_PROFIL,
  GET_USER_WISHES,
  POST_USER_PICTURE,
  PUT_USER_PROFIL,
  USER_INSCRIPTION,
} from '../actions/user';
import { actionChangeRedirection, actionMessagePopUp } from '../actions/utils';

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
          zipcode: user.zipcode,
          firstname: user.firstname,
          lastname: user.lastname,
          phoneNumber: user.phoneNumber,
        },
      ).then((result) => {
        if (result.status === 201) {
          store.dispatch(actionMessagePopUp("Bienvenue ! O'TROC est heureux de vous accueillir."));
          setTimeout(() => {
            store.dispatch(actionChangeRedirection(true, '/connexion'));
            store.dispatch(actionMessagePopUp(''));
          }, 3000);
        }
      }).catch((error) => {
        console.log('user inscription ', error);
        store.dispatch(actionMessagePopUp("L'inscription a échoué."));
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
          zipcode: user.currentUserProfil.zipcode,
          firstname: user.currentUserProfil.firstname,
          lastname: user.currentUserProfil.lastname,
          phoneNumber: user.currentUserProfil.phoneNumber,
        },
        config,
      ).then((result) => {
        if (result.status === 206) {
          store.dispatch(actionMessagePopUp('Profil édité avec succès'));
          setTimeout(() => {
            store.dispatch(actionChangeRedirection(true, '/profil'));
            store.dispatch(actionMessagePopUp(''));
          }, 3000);
        }
        store.dispatch(actionSaveUserProfil(result.data));
      }).catch((error) => {
        console.log('put user profil ', error);
      });
      break;
    }
    case POST_USER_PICTURE: {
      const { user } = store.getState();
      const formData = new FormData();

      formData.append('file', action.payload);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(`${baseURL}/api/users/current/pictures`, formData, config)
        .then((pictureResult) => {
          if (pictureResult.status === 200) {
            store.dispatch(actionMessagePopUp('Changement effectué !'));
            setTimeout(() => {
              store.dispatch(actionMessagePopUp(''));
            }, 3000);
          }
        })
        .catch((error) => {
          console.error(error);
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
        store.dispatch(actionSaveUserWishes(result.data));
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
        `${baseURL}/api/users/current/advertisements`,
        config,
      ).then((result) => {
        store.dispatch(actionSaveUserHistory(result.data));
      }).catch((error) => {
        console.log('GET_USER_HISTORY', error);
      });
      break;
    }
    case GET_OTHER_USER_PROFIL: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.get(
        `${baseURL}/api/users/${action.payload}`,
        config,
      ).then((result) => {
        store.dispatch(actionSaveOtherUserProfil(result.data));
      }).catch((error) => {
        console.log('get other user profil ', error);
      });
      break;
    }
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
        localStorage.removeItem('activeSession');
      }).catch((error) => {
        console.log('DELETE_USER', error);
      });
      break;
    }
    case CHANGE_PASSWORD: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.put(
        `${baseURL}/api/users/current/password`,
        {
          currentpassword: action.payload.currentPassword,
          newpassword: action.payload.newPassword,
          passwordconfirmation: action.payload.newPassword,
        },
        config,
      ).then((result) => {
        if (result.status === 206) {
          store.dispatch(actionMessagePopUp('Nouveau mot de passe validé !'));
          setTimeout(() => {
            store.dispatch(actionChangeRedirection(true, '/profil'));
            store.dispatch(actionMessagePopUp(''));
          }, 3000);
        }
      }).catch((error) => {
        console.log('CHANGE_PASSWORD', error);
      });
      break;
    }
    default:
      break;
  }
  next(action);
};

export default userMiddleware;
