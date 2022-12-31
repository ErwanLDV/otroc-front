import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { actionGetTopCategories } from '../../actions/categories';
import CategoryCard from '../MainCategoriesListPage/CategoryCard';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetTopCategories());
  }, []);

  const topCategoriesArray = useSelector((state) => state.categories.topCategories);

  return (
    <section>
      <div className="home">
        <h2> En manque d'idées ? Laisser le hasard choisir pour vous : </h2>
        <div className="home-container-cards">
          {topCategoriesArray.map((item) => (
            <Link to={`/categorie/${item.slug}`} key={item.id}>
              <CategoryCard key={item.id} image={item.picture} title={item.name} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
