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
import AddAnnouncement from '../Profil/AddAnnouncement';
import SearchResults from '../SearchResults';
import MainCategoriesListPage from '../MainCategoriesListPage';
import AnnouncementPage from '../AnnoucementPage';
import UserProfil from '../UserProfil';
import { actionAuthentSuccess } from '../../actions/user';
import ProtectedRoute from '../ProtectedRoute';
import DeleteProfil from '../Profil/DeleteProfil';
import SearchBarResults from '../SearchBar/SearchBarResults';

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
        <Route path="/categorie/:slug" element=<SearchResults /> />
        <Route path="/annonces/offres/:id" element=<AnnouncementPage /> />
        <Route path="/annonces/demandes/:id" element=<AnnouncementPage /> />
        <Route path="/:slug" element=<MainCategoriesListPage /> />
        <Route path="/mentions-legales" element=<LegalNotice /> />
        <Route path="/cgu" element=<GCU /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="/a-propos" element=<About /> />
        <Route path="/inscription" element=<Inscription /> />
        {/* ------------ Protected Routes --------------- */}
        <Route
          path="/profil"
          element={(
            <ProtectedRoute redirectPath="/">
              <Profil />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/mes-informations"
          element={(
            <ProtectedRoute redirectPath="/">
              <PersonalInformation />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/mes-offres"
          element={(
            <ProtectedRoute redirectPath="/">
              <MyOffers />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/mes-demandes"
          element={(
            <ProtectedRoute redirectPath="/">
              <MyWishes />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/historique"
          element={(
            <ProtectedRoute redirectPath="/">
              <MyHistory />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/annonces/ajouter"
          element={(
            <ProtectedRoute redirectPath="/">
              <AddAnnouncement />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/annonces/editer"
          element={(
            <ProtectedRoute redirectPath="/">
              <AddAnnouncement />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/utilisateur/:id"
          element={(
            <ProtectedRoute redirectPath="/">
              <UserProfil />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profil/supprimer"
          element={(
            <ProtectedRoute redirectPath="/">
              <DeleteProfil />
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
