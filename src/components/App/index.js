import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Footer from '../Footer';
import LegalNotice from '../Footer/LegalNotice';
import GCU from '../Footer/GCU';
import Contact from '../Footer/Contact';
import About from '../Footer/About';
import FormLogin from '../FormLogin';
import Header from '../Header';
import SearchBar from '../SearchBar';
import './style.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/mentions-legales" element=<LegalNotice /> />
        <Route path="/cgu" element=<GCU /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="/a-propos" element=<About /> />
      </Routes>
      <FormLogin />
      <Footer />
    </div>
  );
}

export default App;
