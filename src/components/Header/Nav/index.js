import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

function Nav({ categoriesArray }) {
  return (
    <div>
      {/* <nav role="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          {
            categoriesArray.map((mainCategory) => (
              <li className="test" key={`${mainCategory.id}`}>
                <NavLink
                  to={mainCategory.slug}
                  key={`${mainCategory.id}`}
                >
                  {mainCategory.name}
                </NavLink>
                <ul className="dropdown">
                  {
                    mainCategory.categories.map((category) => (
                      <li key={`${mainCategory.id}-${category.id}`}>
                        <NavLink
                          to={category.slug}
                          key={`${mainCategory.id}-${category.id}`}
                        >
                          {category.name}
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
      </nav> */}
      <nav className="menu">
        <ol>
          <li className="menu-item"><NavLink to="/">Home</NavLink></li>
          <li className="menu-item"><a href="#0">About</a></li>
          <li className="menu-item">
            <a href="#0">test</a>
            <ol className="sub-menu">
              <li className="menu-item"><NavLink to="/test">test</NavLink></li>
              <li className="menu-item"><a href="#0">Bigger Widgets</a></li>
              <li className="menu-item"><a href="#0">Huge Widgets</a></li>
            </ol>
          </li>
          <li className="menu-item">
            <a href="#0">Kabobs</a>
            <ol className="sub-menu">
              <li className="menu-item"><a href="#0">Shishkabobs</a></li>
              <li className="menu-item"><a href="#0">BBQ kabobs</a></li>
              <li className="menu-item"><a href="#0">Summer kabobs</a></li>
            </ol>
          </li>
          <li className="menu-item"><a href="#0">Contact</a></li>
        </ol>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  categoriesArray: PropTypes.array.isRequired,
};

export default Nav;
