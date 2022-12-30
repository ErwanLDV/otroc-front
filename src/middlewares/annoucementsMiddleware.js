import axios from 'axios';
import {
  actionSaveEditOfferAnnoucement,
  actionSaveEditWishAnnoucement,
  actionSaveOffersAnnoucements,
  actionSaveOneOfferAnnoucement,
  actionSaveOneWishAnnoucement,
  actionSaveWishesAnnoucements,
  ADD_NEW_OFFER_ANNOUCEMENT,
  ADD_NEW_WISH_ANNOUCEMENT,
  GET_EDIT_OFFER_ANNOUCEMENT,
  GET_EDIT_WISH_ANNOUCEMENT,
  GET_OFFERS_ANNOUCEMENTS,
  GET_ONE_OFFER_ANNOUCEMENT,
  GET_ONE_WISH_ANNOUCEMENT,
  GET_WISHES_ANNOUCEMENTS,
  REPORTED_OFFER_ANNOUCEMENT,
  REPORTED_WISH_ANNOUCEMENT,
  UPDATE_OFFER_ANNOUCEMENT,
  UPDATE_WISH_ANNOUCEMENT,
  DELETE_OFFER_ANNOUCEMENT,
  DELETE_WISH_ANNOUCEMENT,
  TOGGLE_ACTIVE_OFFER_ANNOUCEMENT,
  TOGGLE_ACTIVE_WISH_ANNOUCEMENT,
  TOGGLE_LEND_OFFER_ANNOUCEMENT,
} from '../actions/annoucements';
import { actionChangeRedirection } from '../actions/user';
import { actionMessagePopUp } from '../actions/utils';

// For tests
const baseURL = process.env.BACK_API_BASE_URL;

const annoucementsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // OFFERS ------------------------------------------------------------
    case GET_OFFERS_ANNOUCEMENTS:
      axios.get(`${baseURL}/api/offers`)
        .then((result) => {
          store.dispatch(actionSaveOffersAnnoucements(result.data));
        })
        .catch((error) => {
          console.log('GET_OFFERS_ANNOUCEMENTS : ', error);
        });
      break;

    case GET_ONE_OFFER_ANNOUCEMENT:
      axios.get(`${baseURL}/api/offers/${action.payload}`)
        .then((result) => {
          store.dispatch(actionSaveOneOfferAnnoucement(result.data));
        })
        .catch((error) => {
          console.log('GET_ONE_OFFER_ANNOUCEMENT', error);
        });
      break;

    case ADD_NEW_OFFER_ANNOUCEMENT: {
      const { addOrEditAnnoucement } = store.getState().annoucements;
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      console.log(addOrEditAnnoucement);
      axios.post(
        `${baseURL}/api/offers`,
        {
          title: addOrEditAnnoucement.title,
          zipcode: addOrEditAnnoucement.zipcode,
          description: addOrEditAnnoucement.description,
          isActive: true,
          type: addOrEditAnnoucement.type,
          categories: addOrEditAnnoucement.categories,
        },
        config,
      ).then((result) => {
        console.log(result);
        const newOfferId = result.data.id;
        const formData = new FormData();
        if (addOrEditAnnoucement.picture) {
          formData.append('file', addOrEditAnnoucement.picture);

          const configImg = {
            headers: {
              Authorization: `Bearer ${user.token}`,
              'content-type': 'multipart/form-data',
            },
          };
          console.log(formData, configImg, addOrEditAnnoucement.picture);
          axios.post(`${baseURL}/api/offers/${newOfferId}/pictures`, formData, configImg)
            .then((pictureResult) => {
              console.log(pictureResult);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        if (result.status === 201) {
          store.dispatch(actionMessagePopUp('Offre créée avec succès'));
          setTimeout(() => {
            store.dispatch(actionChangeRedirection(true, `/annonces/offres/${newOfferId}`));
            store.dispatch(actionMessagePopUp(''));
          }, 3000);
        }
      }).catch((error) => {
        console.log('add new offer annoucement ', error);
      });
      break;
    }

    case GET_EDIT_OFFER_ANNOUCEMENT:
      axios.get(`${baseURL}/api/offers/${action.payload}`)
        .then((result) => {
          const categories = result.data.categories.map((categoryId) => categoryId.id);
          result.data.categories = categories;
          store.dispatch(actionSaveEditOfferAnnoucement(result.data));
        })
        .catch((error) => {
          console.log('GET_EDIT_OFFER_ANNOUCEMENT', error);
        });
      break;

    case UPDATE_OFFER_ANNOUCEMENT: {
      const { addOrEditAnnoucement } = store.getState().annoucements;
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.put(
        `${baseURL}/api/offers/${addOrEditAnnoucement.id}`,
        {
          title: addOrEditAnnoucement.title,
          zipcode: addOrEditAnnoucement.zipcode,
          description: addOrEditAnnoucement.description,
          isActive: true,
          type: addOrEditAnnoucement.type,
          categories: addOrEditAnnoucement.categories,
        },
        config,
      ).then((result) => {
        console.log(result);
        if (result.status === 206) {
          store.dispatch(actionMessagePopUp('Offre éditée avec succès'));
          setTimeout(() => {
            store.dispatch(actionChangeRedirection(true, '/profil/mes-offres'));
            store.dispatch(actionMessagePopUp(''));
          }, 3000);
        }
      }).catch((error) => {
        console.log('UPDATE_OFFER_ANNOUCEMENT ', error);
      });
      break;
    }

    case REPORTED_OFFER_ANNOUCEMENT: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.put(
        `${baseURL}/api/offers/${action.payload}/reported`,
        config,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('REPORTED_OFFER_ANNOUCEMENT', error);
      });
      break;
    }

    case DELETE_OFFER_ANNOUCEMENT: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.delete(
        `${baseURL}/api/offers/${action.payload}`,
        config,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('DELETE_OFFER_ANNOUCEMENT ', error);
      });
      break;
    }

    case TOGGLE_ACTIVE_OFFER_ANNOUCEMENT: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.put(
        `${baseURL}/api/offers/${action.payload}/active`,
        config,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('TOGGLE_ACTIVE_OFFER_ANNOUCEMENT ', error);
      });
      break;
    }

    case TOGGLE_LEND_OFFER_ANNOUCEMENT: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.put(
        `${baseURL}/api/offers/${action.payload}/lend`,
        config,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('TOGGLE_LEND_OFFER_ANNOUCEMENT ', error);
      });
      break;
    }

    // WISHES -------------------------------------------------------------
    case GET_WISHES_ANNOUCEMENTS:
      axios.get(`${baseURL}/api/wishes`)
        .then((result) => {
          store.dispatch(actionSaveWishesAnnoucements(result.data));
        })
        .catch((error) => {
          console.log('GET_OFFERS_ANNOUCEMENTS : ', error);
        });
      break;

    case GET_ONE_WISH_ANNOUCEMENT:
      axios.get(`${baseURL}/api/wishes/${action.payload}`)
        .then((result) => {
          store.dispatch(actionSaveOneWishAnnoucement(result.data));
        })
        .catch((error) => {
          console.log('GET_ONE_WISH_ANNOUCEMENT', error);
        });
      break;

    case ADD_NEW_WISH_ANNOUCEMENT: {
      const { addOrEditAnnoucement } = store.getState().annoucements;
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.post(
        `${baseURL}/api/wishes`,
        {
          title: addOrEditAnnoucement.title,
          zipcode: addOrEditAnnoucement.zipcode,
          description: addOrEditAnnoucement.description,
          isActive: true,
          type: addOrEditAnnoucement.type,
          categories: addOrEditAnnoucement.categories,
        },
        config,
      ).then((result) => {
        console.log(result);
        const newWishId = result.data.id;
        const formData = new FormData();
        if (addOrEditAnnoucement.picture) {
          formData.append('file', addOrEditAnnoucement.picture);

          const configImg = {
            headers: {
              Authorization: `Bearer ${user.token}`,
              'content-type': 'multipart/form-data',
            },
          };
          console.log(formData, configImg, addOrEditAnnoucement.picture);
          axios.post(`${baseURL}/api/wishes/${newWishId}/pictures`, formData, configImg)
            .then((pictureResult) => {
              console.log(pictureResult);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        if (result.status === 201) {
          store.dispatch(actionMessagePopUp('Demande créée avec succès'));
          setTimeout(() => {
            store.dispatch(actionChangeRedirection(true, `/annonces/demandes/${newWishId}`));
            store.dispatch(actionMessagePopUp(''));
          }, 3000);
        }
      }).catch((error) => {
        console.log('add new wish annoucement ', error);
      });
      break;
    }

    case GET_EDIT_WISH_ANNOUCEMENT:
      axios.get(`${baseURL}/api/wishes/${action.payload}`)
        .then((result) => {
          const categories = result.data.categories.map((categoryId) => categoryId.id);
          result.data.categories = categories;
          store.dispatch(actionSaveEditWishAnnoucement(result.data));
        })
        .catch((error) => {
          console.log('GET_EDIT_WISH_ANNOUCEMENT', error);
        });
      break;

    case UPDATE_WISH_ANNOUCEMENT: {
      const { addOrEditAnnoucement } = store.getState().annoucements;
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.put(
        `${baseURL}/api/wishes/${addOrEditAnnoucement.id}`,
        {
          title: addOrEditAnnoucement.title,
          zipcode: addOrEditAnnoucement.zipcode,
          description: addOrEditAnnoucement.description,
          isActive: true,
          type: addOrEditAnnoucement.type,
          categories: addOrEditAnnoucement.categories,
        },
        config,
      ).then((result) => {
        console.log(result);
        if (result.status === 206) {
          store.dispatch(actionMessagePopUp('Demande éditée avec succès'));
          setTimeout(() => {
            store.dispatch(actionChangeRedirection(true, '/profil/mes-demandes'));
            store.dispatch(actionMessagePopUp(''));
          }, 3000);
        }
      }).catch((error) => {
        console.log('UPDATE_WISH_ANNOUCEMENT ', error);
      });
      break;
    }

    case REPORTED_WISH_ANNOUCEMENT: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.put(
        `${baseURL}/api/wishes/${action.payload}/reported`,
        config,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('REPORTED_WISH_ANNOUCEMENT', error);
      });
      break;
    }

    case DELETE_WISH_ANNOUCEMENT: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.delete(
        `${baseURL}/api/wishes/${action.payload}`,
        config,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('DELETE_WISH_ANNOUCEMENT ', error);
      });
      break;
    }

    case TOGGLE_ACTIVE_WISH_ANNOUCEMENT: {
      const { user } = store.getState();
      const config = {
        headers: { Authorization: `Bearer ${user.token}` },
      };
      axios.put(
        `${baseURL}/api/wishes/${action.payload}/active`,
        config,
      ).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log('TOGGLE_ACTIVE_WISH_ANNOUCEMENT ', error);
      });
      break;
    }

    default:
      break;
  }

  next(action);
};

export default annoucementsMiddleware;
