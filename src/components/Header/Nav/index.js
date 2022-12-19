import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
import { useDispatch } from 'react-redux';
import { actionNavbarRerender } from '../../../actions/categories';

function Nav({ categoriesArray, navBarRerender }) {
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="menu">
        <ol>
          <li className="menu-item">
            <NavLink to="/">Home</NavLink>
          </li>
          {
            categoriesArray.map((mainCategory) => (
              <li className="menu-item" key={`${mainCategory.id}`}>
                <NavLink
                  to={mainCategory.slug}
                  key={`${mainCategory.id}`}
                >
                  {mainCategory.name}
                </NavLink>
                <ol className="sub-menu">
                  { navBarRerender
                    && mainCategory.categories.map((category) => (
                      <li className="menu-item" key={`${mainCategory.id}-${category.id}`}>
                        <NavLink
                          to={`categorie/${category.slug}`}
                          key={`${mainCategory.id}-${category.id}`}
                          onClick={() => {
                            dispatch(actionNavbarRerender(false));
                            setTimeout(() => {
                              dispatch(actionNavbarRerender(true));
                            }, 100);
                          }}
                        >
                          {category.name}
                        </NavLink>
                      </li>
                    ))}
                </ol>
              </li>
            ))
          }
        </ol>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  categoriesArray: PropTypes.array.isRequired,
  navBarRerender: PropTypes.bool.isRequired,
};

export default Nav;
