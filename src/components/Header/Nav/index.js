import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionGetCategoryResults, actionGetMainCategoryResults, actionNavbarRerender } from '../../../actions/categories';

function Nav({ categoriesArray, navBarRerender }) {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(actionNavbarRerender(false));
    setTimeout(() => {
      dispatch(actionNavbarRerender(true));
    }, 100);
  }, [location]);

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
                  onClick={() => dispatch(actionGetMainCategoryResults(mainCategory.id))}
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
                          onClick={() => dispatch(actionGetCategoryResults(category.id))}
                          key={`${mainCategory.id}-${category.id}`}
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
