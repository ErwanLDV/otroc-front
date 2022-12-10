import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

function Nav() {
  const categoriesArray = useSelector((state) => state.categories.categoriesArray);
  console.log(categoriesArray);
  useEffect(() => {
    categoriesArray.map((category) => {
      console.log(category, 'toto');
    });
  }, [categoriesArray]);
  
  return (
    <div>
      <nav role="navigation">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Maison</a>
            <ul className="dropdown">
              <li><a href="#">Amenagement</a></li>
              <li><a href="#">Electromenager</a></li>
              <li><a href="#">Décoration</a></li>
              <li><a href="#">Bricolage</a></li>
              <li><a href="#">Jardinage</a></li>
              <li><a href="#">Arts de la table</a></li>
            </ul>
          </li>
          <li><a href="#">Mode</a>
            <ul className="dropdown">
              <li><a href="#">Vêtements</a></li>
              <li><a href="#">Chaussures</a></li>
              <li><a href="#">Accessoires et bagagerie</a></li>
              <li><a href="#">Montres et bijoux</a></li>
              <li><a href="#">Equipements bébé</a></li>
              <li><a href="#">Vêtements bébé</a></li>
            </ul>
          </li>
          <li><a href="#">Multimédia</a>
            <ul className="dropdown">
              <li><a href="#">Informatique</a></li>
              <li><a href="#">Console et jeux videos</a></li>
              <li><a href="#">Images et sons</a></li>
              <li><a href="#">Téléphonie</a></li>
            </ul>
          </li>
          <li><a href="#">Loisirs</a>
            <ul className="dropdown">
              <li><a href="#">DVD-Films</a></li>
              <li><a href="#">CD-Musique</a></li>
              <li><a href="#">Livres</a></li>
              <li><a href="#">Vélos</a></li>
              <li><a href="#">Sports et Hobbies</a></li>
              <li><a href="#">Instruments de Musiques</a></li>
              <li><a href="#">Collections</a></li>
              <li><a href="#">Jeux et jouets</a></li>
              <li><a href="#">Vins et gastronomie</a></li>
            </ul>
          </li>
          <li><a href="#">Autre</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
