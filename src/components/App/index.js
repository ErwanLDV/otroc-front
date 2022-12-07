import Footer from '../Footer';
import Header from '../Header';
import Inscription from '../Inscription';
import SearchBar from '../SearchBar';
import './style.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Inscription />
      <Footer />
    </div>
  );
}

export default App;
