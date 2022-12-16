import { Routes, Route } from 'react-router-dom';
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
import MyRequests from '../Profil/MyRequests';
import MyHistory from '../Profil/MyHistory';
import Error from '../Error';
import AddAnnouncement from '../Profil/AddAnnouncement';
import SearchResults from '../SearchResults';
import MainCategoriesListPage from '../MainCategoriesListPage';
import AnnouncementPage from '../AnnoucementPage';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/categorie/:slug" element=<SearchResults /> />
        <Route path="/annonces/offers/:id" element=<AnnouncementPage /> />
        <Route path="/annonces/wishes/:id" element=<AnnouncementPage /> />
        <Route path="/:slug" element=<MainCategoriesListPage /> />
        <Route path="/mentions-legales" element=<LegalNotice /> />
        <Route path="/cgu" element=<GCU /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="/a-propos" element=<About /> />
        <Route path="/inscription" element=<Inscription /> />
        <Route path="/profil" element=<Profil /> />
        <Route path="/profil/mes-informations" element=<PersonalInformation /> />
        <Route path="/profil/mes-offres" element=<MyOffers /> />
        <Route path="/profil/mes-demandes" element=<MyRequests /> />
        <Route path="/profil/historique" element=<MyHistory /> />
        <Route path="/annonces/ajouter" element=<AddAnnouncement /> />
        <Route path="/annonces/editer" element=<AddAnnouncement /> />
        <Route path="*" element=<Error /> />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
