import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from '../Home';
import Footer from '../Footer';
import LegalNotice from '../Footer/LegalNotice';
import GCU from '../Footer/GCU';
import Contact from '../Footer/Contact';
import About from '../Footer/About';
import Header from '../Header';
import SearchBar from '../SearchBar';
import './style.scss';
import Inscription from '../Inscription';
import Profil from '../Profil';
import PersonalInformation from '../Profil/PersonalInformation';
import MyOffers from '../Profil/MyOffers';
import MyWishes from '../Profil/MyWishes';
import MyHistory from '../Profil/MyHistory';
import Error from '../Error';
import AddOrEditAnnouncement from '../Profil/AddOrEditAnnouncement';
import CategoryResults from '../CategoryResults';
import MainCategoriesListPage from '../MainCategoriesListPage';
import AnnouncementPage from '../AnnoucementPage';
import UserProfil from '../UserProfil';
import { actionAuthentSuccess } from '../../actions/user';
import ProtectedRoute from '../ProtectedRoute';
import DeleteProfil from '../Profil/DeleteProfil';
import SearchBarResults from '../SearchBar/SearchBarResults';
import LoginPage from '../LoginPage';
import ChangePassword from '../Profil/PersonalInformation/ChangePassword';

function App() {
  const dispatch = useDispatch();

  const activeSession = localStorage.getItem('activeSession');

  if (activeSession) {
    const userSession = JSON.parse(activeSession);
    dispatch(actionAuthentSuccess(userSession));
  }

  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/rechercher/resultat" element=<SearchBarResults /> />
        <Route path="/categorie/:slug" element=<CategoryResults /> />
        <Route path="/annonces/offres/:id" element=<AnnouncementPage /> />
        <Route path="/annonces/demandes/:id" element=<AnnouncementPage /> />
        <Route path="/:slug" element=<MainCategoriesListPage /> />
        <Route path="/mentions-legales" element=<LegalNotice /> />
        <Route path="/cgu" element=<GCU /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="/a-propos" element=<About /> />
        <Route path="/inscription" element=<Inscription /> />
        <Route path="/connexion" element=<LoginPage /> />
        {/* ------------ Protected Routes --------------- */}
        <Route
          path="/profil"
          element={(
            <ProtectedRoute redirectPath="/connexion">
              <Profil />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/mes-informations"
          element={(
            <ProtectedRoute redirectPath="/connexion">
              <PersonalInformation />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/mes-offres"
          element={(
            <ProtectedRoute redirectPath="/connexion">
              <MyOffers />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/mes-demandes"
          element={(
            <ProtectedRoute redirectPath="/connexion">
              <MyWishes />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/historique"
          element={(
            <ProtectedRoute redirectPath="/connexion">
              <MyHistory />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/annonces/ajouter"
          element={(
            <ProtectedRoute redirectPath="/connexion">
              <AddOrEditAnnouncement />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/annonces/editer"
          element={(
            <ProtectedRoute redirectPath="/connexion">
              <AddOrEditAnnouncement />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/utilisateur/:id"
          element={(
            <ProtectedRoute redirectPath="/connexion">
              <UserProfil />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/supprimer"
          element={(
            <ProtectedRoute redirectPath="/connexion">
              <DeleteProfil />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/mes-informations/mot-de-passe"
          element={(
            <ProtectedRoute redirectPath="/connexion">
              <ChangePassword />
            </ProtectedRoute>
          )}
        />
        <Route path="*" element=<Error /> />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
