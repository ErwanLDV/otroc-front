import Footer from '../Footer';
import FormLogin from '../FormLogin';
import Header from '../Header';
import SearchBar from '../SearchBar';
import './style.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <FormLogin />
      <Footer />
    </div>
  );
}

export default App;
